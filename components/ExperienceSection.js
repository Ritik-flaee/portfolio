'use client';
import { useEffect } from 'react';

const EXPERIENCE = [
  {
    date: 'May 2023 — Present',
    role: 'Full Stack Developer',
    company: 'OSCprofessionals — NAGPUR SOFTWARE EMBEDDED TECHNOLOGY PVT. LTD. · Nagpur, MH',
    bullets: [
      'Architected and shipped 5 production Shopify apps — OSCP Hide Shipping & Payment, OSCP B2B Wholesale Pricing, OSCP Pricing & Discount Suite, OSCP Shipping Rates, and OSCP Add-Ons Tier Pricing — serving live merchants globally.',
      'Engineered dynamic, responsive UIs with React.js improving user engagement and page load performance.',
      'Integrated RESTful and GraphQL APIs to extend feature sets and elevate user experience.',
      'Optimised server-side performance, ensuring stability under peak merchant traffic.',
      'Led code reviews and authored technical documentation to maintain quality and knowledge sharing.',
    ],
    tags: ['React.js', 'Node.js', 'Shopify', 'GraphQL', 'MySQL'],
  },
  {
    date: 'Feb 2022 — Nov 2022',
    role: 'Intern — Oracle Fusion HCM',
    company: 'Cognizant · Pune, MH',
    bullets: [
      'Supported HR operations via Oracle Fusion HCM, managing employee data pipelines and analytical reporting.',
      'Worked with Payroll and Talent Management modules to streamline end-to-end HR workflows.',
      'Improved data handling processes, contributing to measurable team efficiency gains.',
    ],
    tags: ['Oracle HCM', 'HR Analytics', 'Data Pipelines'],
  },
];

export default function ExperienceSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.timeline-item').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #experience { padding-top: 80px; }
        .timeline { position: relative; padding-left: 40px; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 8px; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--cyan), rgba(0,200,255,0.1));
        }
        .timeline-item {
          position: relative;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .timeline-item.visible { opacity: 1; transform: translateX(0); }
        .timeline-dot {
          position: absolute;
          left: -45px; top: 6px;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--cyan);
          box-shadow: 0 0 16px var(--cyan);
        }
        .timeline-dot::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: var(--cyan);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .timeline-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--cyan);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .timeline-role {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 24px;
          color: var(--white);
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }
        .timeline-company {
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 18px;
          font-weight: 300;
        }
        .timeline-bullets { list-style: none; margin-bottom: 20px; }
        .timeline-bullets li {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.7;
          padding-left: 20px;
          position: relative;
          margin-bottom: 8px;
          font-weight: 300;
        }
        .timeline-bullets li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--cyan);
          font-size: 12px;
        }
        .timeline-tags { display: flex; gap: 8px; flex-wrap: wrap; }
      `}</style>
      <section id="experience" className="section">
        <div className="section-tag">03 / Experience</div>
        <div className="section-title">
          Where I've <em className="glitch" data-text="Worked">Worked</em>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div className="timeline-item" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <ul className="timeline-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="timeline-tags">
                {exp.tags.map((t, k) => <span className="tag" key={k}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
