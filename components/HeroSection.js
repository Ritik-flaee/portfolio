'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-8 text-accent font-mono text-sm tracking-widest uppercase"
        >
          <span className="w-8 h-px bg-accent" />
          Senior Shopify Expert
        </motion.div>

        <h1 className="title-large text-white mb-8">
          I build <span className="text-accent underline decoration-accent/20 underline-offset-8">Shopify Apps</span> <br/>
          that increase revenue 🚀
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-12">
          Backend-focused developer building <span className="text-white font-medium">scalable, high-performance apps</span> that solve complex commerce challenges and drive merchant ROI.
        </p>

        <div className="flex flex-wrap gap-6 items-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium bg-white text-black hover:bg-zinc-200"
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="/3d"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium border border-white/10 text-white hover:bg-white/5 flex items-center gap-2"
          >
            Enter 3D Experience ⚡
          </motion.a>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
