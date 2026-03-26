'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Float, 
  ContactShadows, 
  Environment, 
  PresentationControls
} from '@react-three/drei';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

function Laptop() {
  const router = useRouter();
  return (
    <group 
      position={[0, 0, 0]} 
      onClick={() => router.push('/#projects')}
    >
      <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.8]} />
        <meshStandardMaterial color="#18181b" metalness={0.8} roughness={0.2} />
      </mesh>
      <group position={[0, 0.05, -0.9]} rotation={[-Math.PI / 12, 0, 0]}>
        <mesh castShadow receiveShadow position={[0, 0.8, -0.02]}>
          <boxGeometry args={[2.5, 1.7, 0.05]} />
          <meshStandardMaterial color="#27272a" />
        </mesh>
        <mesh position={[0, 0.8, 0.02]}>
          <planeGeometry args={[2.3, 1.5]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.1} />
        </mesh>
      </group>
    </group>
  );
}

function Smartphone({ position }) {
  const router = useRouter();
  return (
    <group 
      position={position} 
      rotation={[0, -Math.PI / 6, 0]}
      onClick={() => router.push('/#contact')}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.04, 0.8]} />
        <meshStandardMaterial color="#09090b" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.025, 0]}>
        <planeGeometry args={[0.36, 0.76]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function Desk() {
  return (
    <group position={[0, -1.2, 0]}>
      <mesh receiveShadow>
        <boxGeometry args={[8, 0.2, 4]} />
        <meshStandardMaterial color="#09090b" roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function WorkspaceSceneSafe() {
  return (
    <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={35} />
      <color attach="background" args={['#050505']} />
      <Environment preset="city" />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.2, 0]}
        polar={[-Math.PI / 12, Math.PI / 12]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      >
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={[0, 0, 0]}>
            <Laptop />
            <Smartphone position={[2.5, 0.1, 0.5]} />
            <Desk />
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={150} castShadow />
    </Canvas>
  );
}
