'use client';
import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.stat-num[data-target]').forEach(el => {
          const target = parseInt(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          let n = 0;
          const dur = 1400;
          const interval = setInterval(() => {
            n = Math.min(n + 1, target);
            el.textContent = n + suffix;
            if (n >= target) clearInterval(interval);
          }, dur / target);
        });
        obs.unobserve(e.target);
      });
    }, { threshold: 0.4 });

    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #about { padding-top: 80px; }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-text p {
          font-size: 16px;
          line-height: 1.85;
          color: var(--muted);
          margin-bottom: 20px;
          font-weight: 300;
        }
        .about-text p strong { color: var(--white); font-weight: 500; }
        .about-text .highlight-box {
          margin-top: 32px;
          padding: 20px 24px;
          background: rgba(0,200,255,0.04);
          border: 1px solid var(--border);
          border-left: 3px solid var(--cyan);
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          line-height: 1.8;
        }
        .about-text .highlight-box span { color: var(--cyan2); }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .stat-card {
          padding: 32px 28px;
          background: var(--card);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          transition: border-color .3s, transform .3s;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--cyan), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s;
        }
        .stat-card:hover { border-color: rgba(0,200,255,0.3); transform: translateY(-4px); }
        .stat-card:hover::before { transform: scaleX(1); }
        .stat-num {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 800;
          color: var(--cyan);
          line-height: 1;
          letter-spacing: -2px;
        }
        .stat-label {
          font-size: 13px;
          color: var(--muted);
          margin-top: 8px;
          font-weight: 300;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
      <section id="about" className="section">
        <div className="section-tag">01 / About</div>
        <div className="section-title">
          Who I <em className="glitch" data-text="Am">Am</em>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>I'm a <strong>Full Stack Developer</strong> based in Nagpur, Maharashtra with a passion for building products that work beautifully at scale. My core stack revolves around <strong>React.js, Node.js, and the Shopify ecosystem</strong>.</p>
            <p>At OSCprofessionals, I've architected and shipped <strong>five live Shopify apps</strong> — from dynamic pricing engines to B2B wholesale platforms — serving real merchants worldwide.</p>
            <p>In the AI era, I actively integrate <strong>LLMs and AI tooling</strong> into my development workflow: code generation, intelligent debugging, and automated documentation. I believe the strongest developers are those who <strong>build with AI, not just use it</strong>.</p>
            <div className="highlight-box">
              <span>// Current Focus</span><br/>
              → Building AI-augmented developer workflows<br/>
              → Scaling Shopify commerce solutions<br/>
              → Exploring LLM integrations in production apps
            </div>
          </div>
          <div className="about-stats reveal" style={{ transitionDelay: '0.2s' }} ref={statsRef}>
            <div className="stat-card">
              <div className="stat-num" data-target="5">0</div>
              <div className="stat-label">Shopify apps shipped to production</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" data-target="2" data-suffix="+">0+</div>
              <div className="stat-label">Years of professional experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" data-target="3">0</div>
              <div className="stat-label">Languages spoken fluently</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{ fontSize: '36px' }}>∞</div>
              <div className="stat-label">Curiosity for what comes next</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
