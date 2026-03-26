'use client';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="/" className="font-display font-black text-xl tracking-tighter text-white">
          RA<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="btn-premium bg-white/5 border border-white/10 text-white text-xs hover:bg-white/10"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
