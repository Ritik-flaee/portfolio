'use client';
import { useEffect } from 'react';

const PROJECTS = [
  {
    num: '01 — Shopify App',
    name: 'OSCP Hide Shipping & Payment',
    desc: 'Dynamically hides shipping methods and payment options based on merchant-defined rules, improving checkout conversion and reducing order errors.',
    tags: ['React.js', 'Node.js', 'Shopify API', 'GraphQL'],
    link: null,
  },
  {
    num: '02 — Shopify App',
    name: 'OSCP B2B Wholesale Pricing',
    desc: 'Wholesale pricing platform enabling merchants to set customer-specific or tag-based tiered pricing for B2B operations at scale.',
    tags: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    link: null,
  },
  {
    num: '03 — Shopify App',
    name: 'OSCP Pricing & Discount Suite',
    desc: 'Comprehensive discount engine supporting volume discounts, BOGO, cart rules, and custom pricing strategies beyond native Shopify limitations.',
    tags: ['React.js', 'Express.js', 'GraphQL'],
    link: null,
  },
  {
    num: '04 — Shopify App',
    name: 'OSCP Shipping Rates',
    desc: 'Custom shipping rate calculator enabling complex rules based on weight, location, cart value, and product tags for precision logistics control.',
    tags: ['Node.js', 'Shopify API', 'React.js'],
    link: null,
  },
  {
    num: '05 — Shopify App',
    name: 'OSCP Add-Ons Tier Pricing',
    desc: 'Product add-on manager with tiered pricing logic — lets merchants upsell configurable options with automatic price adjustments.',
    tags: ['React.js', 'Node.js', 'MySQL'],
    link: null,
  },
  {
    num: '06 — Open Source',
    name: 'CodeWhisperer',
    desc: 'Full-stack web application showcasing modern JavaScript architecture, component-based design patterns, and API integration best practices.',
    tags: ['React.js', 'Node.js', 'JavaScript'],
    link: 'https://github.com/Ritik-flaee/codewhisperer',
  },
];

export default function ProjectsSection() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const cx = r.width / 2;
        const cy = r.height / 2;
        const rotX = (y - cy) / cy * -6;
        const rotY = (x - cx) / cx * 6;
        card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        card.style.setProperty('--mx', ((x / r.width) * 100) + '%');
        card.style.setProperty('--my', ((y / r.height) * 100) + '%');
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.project-card.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #projects { padding-top: 80px; }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2px;
        }
        .project-card {
          background: var(--card);
          border: 1px solid var(--border);
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          transition: border-color .3s, transform .2s, box-shadow .3s;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .project-card::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(0,200,255,0.08) 0%, transparent 65%);
          transition: opacity .3s;
          pointer-events: none;
        }
        .project-card:hover {
          border-color: rgba(0,200,255,0.35);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .project-card:hover::after { opacity: 1; }
        .project-card:hover .tag {
          border-color: rgba(0,200,255,0.25);
          color: var(--cyan);
        }
        .project-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          margin-bottom: 20px;
          letter-spacing: 0.1em;
        }
        .project-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 21px;
          color: var(--white);
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .project-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 24px;
        }
        .project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--cyan);
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: gap .2s;
        }
        .project-link:hover { gap: 14px; }
        .project-corner {
          position: absolute;
          top: 20px; right: 20px;
          width: 24px; height: 24px;
          opacity: 0.15;
        }
        .project-corner::before, .project-corner::after {
          content: '';
          position: absolute;
          background: var(--cyan);
        }
        .project-corner::before { top: 0; right: 0; width: 100%; height: 1px; }
        .project-corner::after { top: 0; right: 0; width: 1px; height: 100%; }
      `}</style>
      <section id="projects" className="section">
        <div className="section-tag">04 / Projects</div>
        <div className="section-title">
          What I've <em className="glitch" data-text="Shipped">Shipped</em>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="project-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-corner"></div>
              <div className="project-num">{p.num}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
