'use client';
import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        nav.navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 48px;
          transition: background 0.4s, backdrop-filter 0.4s, border-color 0.4s, padding 0.3s;
        }
        nav.navbar.scrolled {
          background: rgba(2, 4, 8, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 16px 48px;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 20px;
          color: var(--white);
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-logo .dot { color: var(--cyan); }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color .2s;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--cyan);
          transition: width .3s;
        }
        .nav-links a:hover { color: var(--cyan); }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
          padding: 8px 20px;
          border: 1px solid var(--border);
          color: var(--cyan);
          font-family: var(--font-mono);
          font-size: 11px;
          text-decoration: none;
          border-radius: 2px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: background 0.2s, border-color 0.2s;
          display: inline-block;
        }
        .nav-cta:hover { background: rgba(0,200,255,0.08); border-color: var(--cyan); }
        @media (max-width: 768px) {
          nav.navbar { padding: 20px 24px; }
          .nav-links { display: none; }
        }
      `}</style>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo">RA<span className="dot">.</span></div>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Magnetic>
                <a href={l.href}>{l.label}</a>
              </Magnetic>
            </li>
          ))}
        </ul>
        <Magnetic>
          <a href="#contact" className="nav-cta">Hire Me</a>
        </Magnetic>
      </nav>
    </>
  );
}
