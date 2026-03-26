'use client';

const AI_CARDS = [
  {
    icon: '🧠',
    title: 'AI-Assisted Coding',
    text: 'Using LLMs for code generation, refactoring, and edge-case detection — shipping faster without compromising quality.',
  },
  {
    icon: '🔍',
    title: 'Intelligent Debugging',
    text: 'Leveraging AI to analyse logs, trace root causes, and suggest fixes — cutting debugging cycles significantly.',
  },
  {
    icon: '📝',
    title: 'AI Documentation',
    text: 'Generating and maintaining technical docs, API references, and onboarding guides with AI assistance at scale.',
  },
];

export default function AISection() {
  return (
    <>
      <style>{`
        #ai-section { padding-top: 80px; }
        .ai-banner {
          background: linear-gradient(135deg, rgba(0,200,255,0.06), rgba(0,255,204,0.03));
          border: 1px solid rgba(0,200,255,0.2);
          border-radius: 4px;
          padding: 64px;
          position: relative;
          overflow: hidden;
        }
        .ai-banner::before {
          content: 'AI';
          position: absolute;
          right: -20px; top: -40px;
          font-family: var(--font-display);
          font-size: 280px;
          font-weight: 800;
          color: rgba(0,200,255,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .ai-banner-text {
          font-size: 16px;
          color: var(--muted);
          max-width: 560px;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 0;
        }
        .ai-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 48px;
        }
        .ai-card {
          background: var(--card);
          border: 1px solid var(--border);
          padding: 28px 24px;
          transition: border-color .3s, transform .3s;
          position: relative;
          overflow: hidden;
        }
        .ai-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--cyan2), var(--cyan));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s;
        }
        .ai-card:hover { border-color: rgba(0,200,255,0.35); transform: translateY(-4px); }
        .ai-card:hover::after { transform: scaleX(1); }
        .ai-card-icon { font-size: 28px; margin-bottom: 16px; }
        .ai-card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 16px;
          color: var(--white);
          margin-bottom: 8px;
        }
        .ai-card-text { font-size: 13px; color: var(--muted); line-height: 1.7; font-weight: 300; }
        @media (max-width: 768px) {
          .ai-banner { padding: 32px 24px; }
          .ai-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section id="ai-section" className="section">
        <div className="section-tag">05 / AI Era</div>
        <div className="ai-banner reveal">
          <div className="section-title" style={{ marginBottom: '16px' }}>
            Built for the <em className="glitch" data-text="AI Age">AI Age</em>
          </div>
          <p className="ai-banner-text">
            AI isn't replacing developers — it's supercharging those who know how to work with it.
            I integrate AI tools into every phase of the development cycle.
          </p>
          <div className="ai-grid">
            {AI_CARDS.map((c, i) => (
              <div className="ai-card" key={i}>
                <div className="ai-card-icon">{c.icon}</div>
                <div className="ai-card-title">{c.title}</div>
                <div className="ai-card-text">{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
