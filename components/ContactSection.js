'use client';
import Magnetic from './Magnetic';

export default function ContactSection() {
  return (
    <>
      <style>{`
        #contact { padding-top: 80px; padding-bottom: 120px; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -3px;
          margin-bottom: 24px;
        }
        .contact-title em { font-style: normal; color: var(--cyan); }
        .contact-subtitle {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.8;
          font-weight: 300;
          max-width: 400px;
          margin-bottom: 40px;
        }
        .contact-info { display: flex; flex-direction: column; gap: 12px; }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 2px;
          text-decoration: none;
          transition: border-color .2s, transform .2s, background .2s;
          color: inherit;
        }
        .contact-row:hover {
          border-color: var(--cyan);
          transform: translateX(6px);
          background: rgba(0,200,255,0.04);
        }
        .contact-row-icon {
          width: 38px; height: 38px;
          background: rgba(0,200,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
          transition: background .2s;
        }
        .contact-row:hover .contact-row-icon { background: rgba(0,200,255,0.18); }
        .contact-row-text { font-size: 14px; color: var(--muted); font-weight: 300; }
        .contact-row-text strong {
          display: block;
          color: var(--white);
          font-size: 13px;
          margin-bottom: 2px;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-title { letter-spacing: -1.5px; }
        }
      `}</style>
      <section id="contact" className="section">
        <div className="section-tag">06 / Contact</div>
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-title">
              Let's <em className="glitch" data-text="Build">Build</em><br />Something
            </div>
            <p className="contact-subtitle">
              Open to full-time roles, freelance projects, and collaborations. If you have an idea
              or an opportunity — I'd love to hear it.
            </p>
            <div className="contact-info">
              <Magnetic>
                <a href="mailto:ritikawachat@gmail.com" className="contact-row">
                  <div className="contact-row-icon">✉</div>
                  <div className="contact-row-text">
                    <strong>Email</strong>ritikawachat@gmail.com
                  </div>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="tel:+919130164374" className="contact-row">
                  <div className="contact-row-icon">📞</div>
                  <div className="contact-row-text">
                    <strong>Phone</strong>+91-9130164374
                  </div>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://github.com/Ritik-flaee" target="_blank" rel="noreferrer" className="contact-row">
                  <div className="contact-row-icon">⌥</div>
                  <div className="contact-row-text">
                    <strong>GitHub</strong>github.com/Ritik-flaee
                  </div>
                </a>
              </Magnetic>
              <div className="contact-row">
                <div className="contact-row-icon">📍</div>
                <div className="contact-row-text">
                  <strong>Location</strong>Nagpur, Maharashtra — 440037
                </div>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="t-dot t-red"></div>
                <div className="t-dot t-yellow"></div>
                <div className="t-dot t-green"></div>
                <span className="t-title">ritik@portfolio ~ zsh</span>
              </div>
              <div className="terminal-body">
                <span className="t-line"><span className="t-prompt">❯ </span><span className="t-cmd">cat developer.json</span></span>
                <span className="t-line">&nbsp;</span>
                <span className="t-line"><span className="t-out">{'{'}</span></span>
                <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-key">"name"</span>: <span className="t-val">"Ritik Awachat"</span>,</span></span>
                <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-key">"role"</span>: <span className="t-val">"Full Stack Developer"</span>,</span></span>
                <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-key">"stack"</span>: [<span className="t-val">"React"</span>, <span className="t-val">"Node"</span>, <span className="t-val">"Shopify"</span>],</span></span>
                <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-key">"apps_shipped"</span>: <span className="t-val" style={{ color: '#00ffcc' }}>5</span>,</span></span>
                <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-key">"ai_ready"</span>: <span className="t-val" style={{ color: '#00ffcc' }}>true</span>,</span></span>
                <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-key">"available"</span>: <span className="t-val" style={{ color: '#00ffcc' }}>true</span>,</span></span>
                <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-key">"location"</span>: <span className="t-val">"Nagpur, India"</span></span></span>
                <span className="t-line"><span className="t-out">{'}'}</span></span>
                <span className="t-line">&nbsp;</span>
                <span className="t-line"><span className="t-prompt">❯ </span><span className="t-cmd">echo "ready to collaborate"</span></span>
                <span className="t-line"><span className="t-out">ready to collaborate 🚀</span></span>
                <span className="t-line"><span className="t-prompt">❯ </span><span className="t-cursor"></span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
