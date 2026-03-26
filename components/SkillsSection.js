'use client';
import { useEffect, useRef } from 'react';

const SKILL_WORDS = [
  'JavaScript', 'React.js', 'Node.js', 'Express',
  'MySQL', 'GraphQL', 'REST API', 'Shopify',
  'Git', 'Linux', 'HTML5', 'CSS3', 'AI Tools', 'Agile', 'TypeScript'
];

const SKILL_CARDS = [
  { icon: '⚛', name: 'Frontend', items: 'React.js · HTML5 · CSS3\nResponsive Design · UI/UX', width: 90 },
  { icon: '⚙', name: 'Backend', items: 'Node.js · Express.js\nRESTful APIs · GraphQL', width: 85 },
  { icon: '🛍', name: 'Shopify', items: 'App Development\nPolaris · Storefront API', width: 92 },
  { icon: '🗄', name: 'Database', items: 'MySQL · Data Modelling\nQuery Optimisation', width: 78 },
  { icon: '🤖', name: 'AI Tooling', items: 'LLM Integration · Prompt Eng.\nAI-Assisted Dev Workflows', width: 70 },
  { icon: '🔧', name: 'DevOps & Tools', items: 'Git · GitHub · Linux\nAgile · Code Reviews', width: 80 },
];

export default function SkillsSection() {
  const canvasRef = useRef(null);
  const universeRef = useRef(null);

  useEffect(() => {
    let animFrame;
    let THREE;
    let cleanup;

    async function init() {
      THREE = await import('three');
      const canvas = canvasRef.current;
      const universe = universeRef.current;
      if (!canvas || !universe) return;

      const getW = () => universe.offsetWidth;
      const H = 440;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(getW(), H);

      const sScene = new THREE.Scene();
      const sCamera = new THREE.PerspectiveCamera(50, getW() / H, 0.1, 500);
      sCamera.position.z = 32;

      const N = SKILL_WORDS.length;
      const sPoints = [];
      for (let i = 0; i < N; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / N);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const r = 12;
        sPoints.push(new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ));
      }

      const sGroup = new THREE.Group();
      sPoints.forEach((p, i) => {
        const g = new THREE.SphereGeometry(0.25, 8, 8);
        const m = new THREE.MeshBasicMaterial({
          color: i < 3 ? 0x00ffcc : 0x00c8ff,
          transparent: true, opacity: 0.9
        });
        const mesh = new THREE.Mesh(g, m);
        mesh.position.copy(p);
        sGroup.add(mesh);
      });

      const lineMat = new THREE.LineBasicMaterial({ color: 0x00c8ff, transparent: true, opacity: 0.12 });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          if (sPoints[i].distanceTo(sPoints[j]) > 10) continue;
          const line = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([sPoints[i], sPoints[j]]),
            lineMat
          );
          sGroup.add(line);
        }
      }

      const ringGeo = new THREE.TorusGeometry(14, 0.03, 4, 80);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00c8ff, transparent: true, opacity: 0.1 });
      sGroup.add(new THREE.Mesh(ringGeo, ringMat));

      sScene.add(sGroup);

      const labels = SKILL_WORDS.map(word => {
        const el = document.createElement('div');
        el.className = 'skill-label';
        el.textContent = word;
        universe.appendChild(el);
        return el;
      });

      let sT = 0, sMX = 0, sMY = 0;
      const onMM = (e) => {
        const r = universe.getBoundingClientRect();
        sMX = ((e.clientX - r.left) / r.width - 0.5) * 2;
        sMY = ((e.clientY - r.top) / r.height - 0.5) * 2;
      };
      universe.addEventListener('mousemove', onMM);

      const onResize = () => {
        const w = getW();
        renderer.setSize(w, H);
        sCamera.aspect = w / H;
        sCamera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      function animateSkills() {
        animFrame = requestAnimationFrame(animateSkills);
        sT += 0.004;
        sGroup.rotation.y = sT + sMX * 0.5;
        sGroup.rotation.x = sMY * 0.3;

        const w = getW();
        labels.forEach((lbl, i) => {
          const wp = sPoints[i].clone().applyEuler(sGroup.rotation);
          const v = wp.clone().project(sCamera);
          const x = (v.x * 0.5 + 0.5) * w;
          const y = (-v.y * 0.5 + 0.5) * H;
          const depth = (wp.z + 32) / 64;
          lbl.style.left = x + 'px';
          lbl.style.top = y + 'px';
          lbl.style.transform = 'translate(-50%, -50%)';
          lbl.style.opacity = Math.max(0.15, depth).toString();
          lbl.style.fontSize = (8 + depth * 5) + 'px';
        });

        renderer.render(sScene, sCamera);
      }
      animateSkills();

      return () => {
        universe.removeEventListener('mousemove', onMM);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animFrame);
        labels.forEach(l => l.remove());
        renderer.dispose();
      };
    }

    init().then(fn => { cleanup = fn; });
    return () => { if (cleanup) cleanup(); };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-bar-fill').forEach(b => {
            b.style.width = b.dataset.width + '%';
          });
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal, .skill-card').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #skills { padding-top: 80px; }
        .skills-universe {
          position: relative;
          height: 440px;
          margin-bottom: 64px;
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          background: radial-gradient(ellipse at center, rgba(0,200,255,0.03) 0%, transparent 70%);
        }
        #skills-canvas { width: 100%; height: 100%; display: block; }
        .skill-label {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 10px;
          color: rgba(0,200,255,0.85);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-shadow: 0 0 8px rgba(0,200,255,0.5);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .skill-card {
          padding: 28px 24px;
          background: var(--card);
          border: 1px solid var(--border);
          transition: border-color .3s, background .3s, transform .3s;
          position: relative;
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          transform: scaleX(0);
          transition: transform .4s;
        }
        .skill-card:hover {
          border-color: rgba(0,200,255,0.35);
          background: rgba(0,200,255,0.04);
          transform: translateY(-3px);
        }
        .skill-card:hover::before { transform: scaleX(1); }
        .skill-card-icon { font-size: 24px; margin-bottom: 12px; }
        .skill-card-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 15px;
          color: var(--white);
          margin-bottom: 8px;
        }
        .skill-card-items {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          line-height: 1.8;
          white-space: pre-line;
        }
        .skill-bar-wrap { margin-top: 12px; }
        .skill-bar-bg { height: 2px; background: rgba(255,255,255,0.06); border-radius: 2px; }
        .skill-bar-fill {
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--cyan), var(--cyan2));
          width: 0;
          transition: width 1.2s ease;
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
      <section id="skills" className="section">
        <div className="section-tag">02 / Skills</div>
        <div className="section-title">
          What I <em className="glitch" data-text="Build With">Build With</em>
        </div>
        <div className="skills-universe reveal" id="skills-universe" ref={universeRef}>
          <canvas id="skills-canvas" ref={canvasRef}></canvas>
        </div>
        <div className="skills-grid">
          {SKILL_CARDS.map((s, i) => (
            <div className="skill-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="skill-card-icon">{s.icon}</div>
              <div className="skill-card-name">{s.name}</div>
              <div className="skill-card-items">{s.items}</div>
              <div className="skill-bar-wrap">
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" data-width={s.width}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
