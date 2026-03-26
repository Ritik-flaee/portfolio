'use client';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
      padding: '32px 48px', mixBleandMode: 'exclusion' 
    }}>
      <style>{`
        .logo { font-family: var(--font-display); font-weight: 800; font-size: 20px; color: var(--foreground); letter-spacing: -1px; }
        .logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 40px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--zinc-500); transition: color 0.3s; }
        .nav-links a:hover { color: var(--foreground); }
      `}</style>
      <div className="logo">RA<span>.</span></div>
      <div className="nav-links">
        <Magnetic><a href="#about">About</a></Magnetic>
        <Magnetic><a href="#projects">Work</a></Magnetic>
        <Magnetic><a href="#contact">Contact</a></Magnetic>
      </div>
      <Magnetic>
        <a href="#contact" className="btn-secondary" style={{ padding: '8px 20px', fontSize: '12px' }}>Hire Me</a>
      </Magnetic>
    </nav>
  );
}
