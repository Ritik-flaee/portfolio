'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Text, ContactShadows, PresentationControls, MeshWobbleMaterial } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

function DeskModel() {
  return (
    <group position={[0, -1, 0]}>
      {/* Desk Surface */}
      <mesh receiveShadow position={[0, 1.5, 0]}>
        <boxGeometry args={[6, 0.1, 3]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
      
      {/* Laptop (Screen) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, 2.1, 0]} rotation={[0, -0.2, 0]}>
          <mesh castShadow>
            <boxGeometry args={[2, 0.05, 1.4]} />
            <meshStandardMaterial color="#27272a" />
          </mesh>
          <mesh position={[0, 0.7, -0.65]} rotation={[-Math.PI/6, 0, 0]}>
            <boxGeometry args={[2, 1.3, 0.05]} />
            <meshStandardMaterial color="#09090b" />
            <Text
              position={[0, 0, 0.03]}
              fontSize={0.1}
              color="#00e5ff"
            >
              Building Shopify{"\n"}Apps at Scale
            </Text>
          </mesh>
        </group>
      </Float>

      {/* Abstract Shopify Logo Shape */}
      <Float position={[2, 2.5, 0]} speed={3}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <octahedronGeometry args={[0.4]} />
          <MeshWobbleMaterial color="#00e5ff" factor={1} speed={2} />
        </mesh>
      </Float>

      {/* Light for the scene */}
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={120} castShadow />
      <pointLight position={[-10, 5, -5]} intensity={50} color="#00e5ff" />
      <ambientLight intensity={1.5} />
    </group>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, 10), 0.05);
    camera.lookAt(0, 1.5, 0);
  });
}

export default function ThreeScene() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="three-scene-container" style={{ position: 'fixed', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
      <style>{`
        .three-scene-container {
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .three-scene-container.active {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 35 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 20]} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <DeskModel />
        </PresentationControls>
        <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        <Rig />
      </Canvas>
    </div>
  );
}
