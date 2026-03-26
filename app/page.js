'use client';
import { usePortfolio } from '../components/PortfolioContext';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CaseStudyGrid from '../components/CaseStudyGrid';
import ContactSection from '../components/ContactSection';
import Toggle3D from '../components/Toggle3D';
import Cursor from '../components/Cursor';
import { AnimatePresence, motion } from 'framer-motion';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false });

export default function Home() {
  const { is3DMode } = usePortfolio();

  return (
    <main style={{ position: 'relative' }}>
      <Cursor />
      
      <AnimatePresence>
        {!is3DMode && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <Navbar />
            <HeroSection />
            <AboutSection />
            <CaseStudyGrid />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`scene-overlay ${is3DMode ? 'active' : ''}`} style={{ 
        position: 'fixed', inset: 0, zIndex: 10, pointerEvents: is3DMode ? 'auto' : 'none',
        opacity: is3DMode ? 1 : 0, transition: 'opacity 0.8s ease'
      }}>
        <ThreeScene />
      </div>

      <Toggle3D />

      <style jsx global>{`
        body {
          background: ${is3DMode ? '#050505' : 'var(--background)'};
          transition: background 0.8s ease;
        }
      `}</style>
    </main>
  );
}
