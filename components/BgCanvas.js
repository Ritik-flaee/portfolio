'use client';
import { useEffect, useRef } from 'react';

export default function BgCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animFrame;
    let renderer, scene, camera, composer;
    let stars, stars2, gridGroup, coreGroup;
    let bgT = 0, bgMX = 0, bgMY = 0;

    async function init() {
      const THREE = await import('three');
      const { EffectComposer } = await import('three/examples/jsm/postprocessing/EffectComposer');
      const { RenderPass } = await import('three/examples/jsm/postprocessing/RenderPass');
      const { UnrealBloomPass } = await import('three/examples/jsm/postprocessing/UnrealBloomPass');

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ReinhardToneMapping;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 60;

      // Post-Processing (Bloom)
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5, // strength
        0.4, // radius
        0.85 // threshold
      );
      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      // Stars
      const starCount = 2000;
      const starGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        starPos[i * 3] = (Math.random() - 0.5) * 300;
        starPos[i * 3 + 1] = (Math.random() - 0.5) * 300;
        starPos[i * 3 + 2] = (Math.random() - 0.5) * 150;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
        color: 0x00c8ff, size: 0.28, transparent: true, opacity: 0.6, sizeAttenuation: true
      }));
      scene.add(stars);

      // Secondary Stars (Green)
      const starGeo2 = new THREE.BufferGeometry();
      const starPos2 = new Float32Array(800 * 3);
      for (let i = 0; i < 800; i++) {
        starPos2[i * 3] = (Math.random() - 0.5) * 300;
        starPos2[i * 3 + 1] = (Math.random() - 0.5) * 300;
        starPos2[i * 3 + 2] = (Math.random() - 0.5) * 150;
      }
      starGeo2.setAttribute('position', new THREE.BufferAttribute(starPos2, 3));
      stars2 = new THREE.Points(starGeo2, new THREE.PointsMaterial({
        color: 0x00ffcc, size: 0.18, transparent: true, opacity: 0.4, sizeAttenuation: true
      }));
      scene.add(stars2);

      // Grid Group (for Parallax)
      gridGroup = new THREE.Group();
      const gMat = new THREE.LineBasicMaterial({ color: 0x00c8ff, transparent: true, opacity: 0.08 });
      for (let i = -15; i <= 15; i++) {
        gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-150, i * 10, -40), new THREE.Vector3(150, i * 10, -40)
        ]), gMat));
        gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(i * 10, -150, -40), new THREE.Vector3(i * 10, 150, -40)
        ]), gMat));
      }
      scene.add(gridGroup);

      // Developer Core (The "WOW" Model)
      coreGroup = new THREE.Group();
      const coreGeo = new THREE.IcosahedronGeometry(8, 1);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0x00c8ff, wireframe: true, transparent: true, opacity: 0.15 });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreGroup.add(coreMesh);

      const innerGeo = new THREE.OctahedronGeometry(4, 0);
      const innerMat = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true, transparent: true, opacity: 0.3 });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      coreGroup.add(innerMesh);

      // Small orbiters
      for(let i=0; i<3; i++) {
        const oGeo = new THREE.TorusGeometry(12 + i*2, 0.05, 16, 100);
        const oMat = new THREE.MeshBasicMaterial({ color: 0x00c8ff, transparent: true, opacity: 0.1 });
        const oMesh = new THREE.Mesh(oGeo, oMat);
        oMesh.rotation.x = Math.random() * Math.PI;
        oMesh.rotation.y = Math.random() * Math.PI;
        coreGroup.add(oMesh);
      }

      coreGroup.position.set(35, 15, -20);
      scene.add(coreGroup);

      // Event Listeners
      const onMM = (e) => {
        bgMX = (e.clientX / window.innerWidth - 0.5) * 2;
        bgMY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      document.addEventListener('mousemove', onMM);

      const onResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        composer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      // Scroll Parallax Logic
      let scrollY = 0;
      const onScroll = () => {
        scrollY = window.scrollY;
      };
      window.addEventListener('scroll', onScroll);

      function animate() {
        animFrame = requestAnimationFrame(animate);
        bgT += 0.002;

        // Mouse Interactivity
        stars.rotation.y = bgT * 0.04 + bgMX * 0.05;
        stars.rotation.x = bgMY * 0.03;
        stars2.rotation.y = -bgT * 0.03 + bgMX * 0.03;
        
        camera.position.x += (bgMX * 5 - camera.position.x) * 0.02;
        camera.position.y += (-bgMY * 5 - camera.position.y) * 0.02;

        // Core Animation
        coreGroup.rotation.y += 0.005;
        coreGroup.rotation.z += 0.002;
        const pulse = 1 + Math.sin(bgT * 2) * 0.05;
        coreGroup.scale.set(pulse, pulse, pulse);

        // Scroll Parallax (Depth Effect)
        const scrollFactor = scrollY * 0.015;
        gridGroup.position.z = -40 + scrollFactor * 0.5;
        stars.position.z = scrollFactor * 0.2;
        coreGroup.position.y = 15 - scrollFactor * 0.3;
        coreGroup.position.x = 35 + Math.sin(bgT + scrollFactor * 0.1) * 5;

        composer.render();
      }
      animate();

      return () => {
        document.removeEventListener('mousemove', onMM);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(animFrame);
        renderer.dispose();
      };
    }

    let cleanup;
    init().then(fn => { cleanup = fn; });
    return () => { if (cleanup) cleanup(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: '#020408' }}
    />
  );
}
