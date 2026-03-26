'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CaseStudyGrid from '../components/CaseStudyGrid';
import ContactSection from '../components/ContactSection';
import Cursor from '../components/Cursor';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative bg-zinc-950 min-h-screen selection:bg-accent/40 selection:text-white">
      <Cursor />
      
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <Navbar />
            
            {/* STAGGERED ENTRANCE */}
            <div className="space-y-4">
              <HeroSection />
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <AboutSection />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <CaseStudyGrid />
              </motion.div>

              <ContactSection />
            </div>

            {/* Premium Footer */}
            <footer className="section-padding py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="font-display font-black text-white text-lg">
                RA<span className="text-accent">.</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                &copy; 2026 Ritik Awachat. All rights reserved.
              </div>
              <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                <a href="https://www.linkedin.com/in/ritikawachat/" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/Ritik-flaee" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
