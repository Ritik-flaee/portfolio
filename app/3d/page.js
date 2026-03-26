'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

// Disable SSR for 3D components
const Scene = dynamic(() => import('../../components/WorkspaceSceneSafe'), { 
  ssr: false,
  loading: () => <div className="h-screen w-full flex items-center justify-center bg-black text-zinc-700 font-mono text-xs tracking-widest uppercase animate-pulse">Initializing 3D Workspace...</div>
});

export default function ThreePage() {
  return (
    <main className="h-screen w-full bg-black relative overflow-hidden">
      {/* 3D Canvas */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full p-12 flex justify-between items-start pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <a href="/" className="font-display font-black text-2xl tracking-tighter text-white">
            RA<span className="text-accent">.</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-right pointer-events-auto"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2 italic">Phase 3: Shopify Workspace</div>
          <h1 className="text-white font-bold text-4xl tracking-tighter mix-blend-difference">Interactive <br/> Experience</h1>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 max-w-xs pointer-events-none">
        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">
          Navigate the 3D space. Click objects to <span className="text-white">explore</span> sections.
        </p>
      </div>

      <a 
        href="/" 
        className="absolute bottom-12 right-12 btn-premium border border-white/10 text-white text-[10px] tracking-widest uppercase hover:bg-white/5 z-50 py-3 px-8 backdrop-blur-md"
      >
        Exit 3D Area
      </a>
    </main>
  );
}
