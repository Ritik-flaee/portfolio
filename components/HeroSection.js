'use client';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const TICKER_ITEMS = [
  'JavaScript ES6+', 'React.js', 'Node.js', 'Shopify Apps',
  'GraphQL', 'RESTful APIs', 'MySQL', 'Git · Linux', 'AI-Powered Dev',
  'JavaScript ES6+', 'React.js', 'Node.js', 'Shopify Apps',
  'GraphQL', 'RESTful APIs', 'MySQL', 'Git · Linux', 'AI-Powered Dev',
];

export default function HeroSection() {
  const sectionRef = useRef(null);

  return (
    <>
      <style>{`
        #hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          padding-top: 140px;
          padding-bottom: 80px;
          padding-left: 48px;
          padding-right: 48px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(0,200,255,0.06);
          border: 1px solid rgba(0,200,255,0.2);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--cyan);
          margin-bottom: 20px;
          width: fit-content;
          opacity: 0;
          animation: fadeUp .8s .1s ease forwards;
        }
        .status-dot {
          width: 6px; height: 6px;
          background: var(--cyan2);
          border-radius: 50%;
          animation: blink 2s ease-in-out infinite;
        }
        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--cyan);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: fadeUp .8s .2s ease forwards;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 40px; height: 1px;
          background: var(--cyan);
        }
        .hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(56px, 9vw, 120px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -4px;
          opacity: 0;
          animation: fadeUp .9s .4s ease forwards;
          color: var(--white);
        }
        .hero-h1 .line2 {
          display: block;
          background: linear-gradient(90deg, var(--cyan), var(--cyan2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          margin-top: 32px;
          max-width: 540px;
          font-size: 17px;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
          opacity: 0;
          animation: fadeUp .9s .6s ease forwards;
        }
        .hero-sub strong { color: var(--white); font-weight: 500; }
        .hero-cta {
          margin-top: 48px;
          display: flex;
          gap: 24px;
          align-items: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp .9s .8s ease forwards;
        }
        .hero-badges {
          margin-top: 56px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp .9s .9s ease forwards;
        }
        .hero-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(0,200,255,0.04);
          border: 1px solid var(--border);
          border-radius: 2px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
        }
        .hero-badge .b-dot { color: var(--cyan); }
        .ai-ticker {
          margin-top: 56px;
          border-top: 1px solid var(--border);
          padding-top: 20px;
          overflow: hidden;
          opacity: 0;
          animation: fadeUp .9s 1s ease forwards;
        }
        .ticker-label {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
          opacity: 0.6;
        }
        .ticker-inner {
          display: flex;
          gap: 48px;
          animation: ticker 22s linear infinite;
          white-space: nowrap;
        }
        .ticker-item {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .ticker-item span { color: var(--cyan); }
        .hero-scroll {
          position: absolute;
          bottom: 40px; left: 48px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.15em;
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: fadeUp .9s 1.2s ease forwards;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--cyan), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          #hero { padding-left: 24px; padding-right: 24px; }
          .hero-h1 { letter-spacing: -2px; }
          .hero-scroll { display: none; }
        }
      `}</style>
      <section id="hero" ref={sectionRef}>
        <div className="status-badge">
          <div className="status-dot"></div>
          Available for new opportunities
        </div>
        <div className="hero-eyebrow">Full Stack Developer · Shopify Expert</div>
        <h1 className="hero-h1">
          <span className="line1">Ritik</span>
          <span className="line2">Awachat</span>
        </h1>
        <p className="hero-sub">
          Building scalable web products with <strong>React.js, Node.js</strong> and <strong>Shopify</strong>.
          2+ years crafting apps used by real merchants. Now embracing the <strong>AI-first era</strong>.
        </p>
        <div className="hero-cta">
          <Magnetic>
            <a href="#projects" className="btn-primary">
              <span>View Work</span>
              <span>→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </Magnetic>
        </div>
        <div className="hero-badges">
          <div className="hero-badge"><span className="b-dot">◆</span> 5 Apps Shipped</div>
          <div className="hero-badge"><span className="b-dot">◆</span> 2+ Years Exp</div>
          <div className="hero-badge"><span className="b-dot">◆</span> Nagpur, India</div>
          <div className="hero-badge"><span className="b-dot">◆</span> AI-Ready Developer</div>
        </div>
        <div className="ai-ticker">
          <div className="ticker-label">Current Stack</div>
          <div className="ticker-inner">
            {TICKER_ITEMS.map((item, i) => (
              <div className="ticker-item" key={i}>
                <span>⬡</span>{item}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          Scroll to explore
        </div>
      </section>
    </>
  );
}
