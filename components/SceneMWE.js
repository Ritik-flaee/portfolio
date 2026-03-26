'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

function RotatingCube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00e5ff" wireframe />
    </mesh>
  );
}

export default function SceneMWE() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas shadows>
        <color attach="background" args={['#050505']} />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableDamping minDistance={3} maxDistance={10} />
        
        {/* Lights - CRITICAL: Audit showed black screen might be due to missing lights */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} castShadow />
        <pointLight position={[-10, -10, -10]} color="#00e5ff" intensity={1} />

        <RotatingCube />
      </Canvas>
    </div>
  );
}
