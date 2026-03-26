'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Head from 'next/head';

const BgCanvas = dynamic(() => import('../components/BgCanvas'), { ssr: false });
const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import AISection from '../components/AISection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  // Global scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.skill-bar-fill').forEach(b => {
            b.style.width = b.dataset.width + '%';
          });
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Ritik Awachat — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer based in Nagpur, India. Building scalable web products with React.js, Node.js and Shopify. 2+ years · 5 apps shipped." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Ritik Awachat — Full Stack Developer" />
        <meta property="og:description" content="React · Node.js · Shopify Expert. 5 apps shipped. Available for new opportunities." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style>{`
        main { position: relative; z-index: 2; }
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity .8s ease, transform .8s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <BgCanvas />
      <Cursor />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AISection />
        <ContactSection />
      </main>

      <footer>
        <div className="footer-line">
          <div className="footer-logo">Ritik Awachat<span>.</span></div>
          <div className="footer-copy">© 2025 · Full Stack Developer · Nagpur, India</div>
        </div>
      </footer>
    </>
  );
}
