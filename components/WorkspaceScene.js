'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Float, 
  Text, 
  ContactShadows, 
  Environment, 
  PresentationControls,
  Html
} from '@react-three/drei';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

function Laptop({ onPointerOver, onPointerOut }) {
  const router = useRouter();
  
  return (
    <group 
      position={[0, 0, 0]} 
      onPointerOver={onPointerOver} 
      onPointerOut={onPointerOut}
      onClick={() => router.push('/#projects')}
      cursor="pointer"
    >
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
          <meshStandardMaterial color="#000" emissive="#00e5ff" emissiveIntensity={0.2} />
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.12}
            color="#00e5ff"
            maxWidth={2}
            textAlign="center"
          >
            SHOPIFY{"\n"}ROI ENGINE
          </Text>
        </mesh>
      </group>
      
      <Html position={[0, 2, 0]} center scale={0.5}>
        <div className="bg-black/80 backdrop-blur-md px-4 py-2 border border-accent/20 rounded-full text-accent font-mono text-[8px] tracking-widest uppercase whitespace-nowrap opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">
          Click &rarr; Projects
        </div>
      </Html>
    </group>
  );
}

function Smartphone({ position, onPointerOver, onPointerOut }) {
  const router = useRouter();
  
  return (
    <group 
      position={position} 
      rotation={[0, -Math.PI / 6, 0]}
      onPointerOver={onPointerOver} 
      onPointerOut={onPointerOut}
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
      <Html position={[0, 0.6, 0]} center scale={0.5}>
        <div className="bg-black/80 backdrop-blur-md px-3 py-1 border border-accent/20 rounded-full text-accent font-mono text-[8px] tracking-widest uppercase whitespace-nowrap opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">
          Contact
        </div>
      </Html>
    </group>
  );
}

function Desk() {
  return (
    <group position={[0, -1.2, 0]}>
      {/* Tabletop */}
      <mesh receiveShadow>
        <boxGeometry args={[8, 0.2, 4]} />
        <meshStandardMaterial color="#09090b" roughness={0.5} />
      </mesh>
      {/* Legs */}
      <mesh position={[-3.8, -1.5, -1.8]}>
        <boxGeometry args={[0.1, 3, 0.1]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
      <mesh position={[3.8, -1.5, -1.8]}>
        <boxGeometry args={[0.1, 3, 0.1]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
    </group>
  );
}

export default function WorkspaceScene() {
  const [hovered, setHovered] = useState(null);

  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={35} />
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 20]} />
      
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
            <Laptop 
              onPointerOver={() => setHovered('laptop')} 
              onPointerOut={() => setHovered(null)} 
            />
            <Smartphone 
              position={[2.5, 0.1, 0.5]} 
              onPointerOver={() => setHovered('phone')} 
              onPointerOut={() => setHovered(null)} 
            />
            
            {/* Abstract Floating Objects (Shopify Feel) */}
            <Float position={[-3, 1.5, -1]} speed={3}>
              <mesh rotation={[Math.PI / 4, 0, 0]}>
                <octahedronGeometry args={[0.3]} />
                <meshStandardMaterial color="#95bf47" emissive="#95bf47" emissiveIntensity={0.5} />
              </mesh>
            </Float>
            
            <Desk />
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      
      {/* Lighting Fixes for "Black Screen" issue */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={200} castShadow shadow-map-size={2048} />
      <pointLight position={[-5, 5, -5]} intensity={50} color="#00e5ff" />
    </Canvas>
  );
}
