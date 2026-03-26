'use client';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Float, 
  ContactShadows, 
  Environment, 
  PresentationControls,
  Text,
  MeshMirrorMaterial
} from '@react-three/drei';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Laptop() {
  const router = useRouter();
  return (
    <group position={[0, 0, 0]} onClick={() => router.push('/#projects')}>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.8]} />
        <meshStandardMaterial color="#18181b" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen */}
      <group position={[0, 0.05, -0.9]} rotation={[-Math.PI / 12, 0, 0]}>
        <mesh castShadow receiveShadow position={[0, 0.8, -0.02]}>
          <boxGeometry args={[2.5, 1.7, 0.05]} />
          <meshStandardMaterial color="#27272a" />
        </mesh>
        <mesh position={[0, 0.8, 0.02]}>
          <planeGeometry args={[2.3, 1.5]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.2} />
        </mesh>
      </group>
      <Text position={[0, 2, 0]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.ttf">
        PROJECTS
      </Text>
    </group>
  );
}

function Smartphone({ position }) {
  const router = useRouter();
  return (
    <group position={position} rotation={[0, -Math.PI / 6, 0]} onClick={() => router.push('/#contact')}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.04, 0.8]} />
        <meshStandardMaterial color="#09090b" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.025, 0]}>
        <planeGeometry args={[0.36, 0.76]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.5} />
      </mesh>
      <Text position={[0, 0.6, 0]} fontSize={0.1} color="white">
        CONTACT
      </Text>
    </group>
  );
}

function Desk() {
  return (
    <group position={[0, -1.2, 0]}>
      <mesh receiveShadow>
        <boxGeometry args={[10, 0.2, 5]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Abstract Legs */}
      <mesh position={[-4, -1, -2]}>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
      <mesh position={[4, -1, -2]}>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
    </group>
  );
}

export default function WorkspaceSceneSafe() {
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={35} />
      <color attach="background" args={['#050505']} />
      <Environment preset="night" />
      
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
            <Smartphone position={[3, 0.1, 1]} />
            
            {/* Shopify Float */}
            <Float position={[-3.5, 1.5, -1]} speed={2}>
              <mesh>
                <octahedronGeometry args={[0.4]} />
                <meshStandardMaterial color="#95bf47" emissive="#95bf47" emissiveIntensity={0.5} />
              </mesh>
            </Float>

            <Desk />
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={20} blur={2.5} far={4.5} />
      
      {/* Stronger Lighting to ensure visibility */}
      <ambientLight intensity={1.5} />
      <pointLight position={[5, 5, 5]} intensity={200} color="#00e5ff" />
      <spotLight position={[-10, 10, 10]} intensity={100} angle={0.3} penumbra={1} castShadow />
    </Canvas>
  );
}
