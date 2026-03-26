'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="about-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <style>{`
          .about-text h2 { margin-bottom: 32px; }
          .about-text p { font-size: 18px; line-height: 1.8; color: var(--zinc-400); margin-bottom: 24px; font-weight: 300; }
          .about-text p strong { color: var(--foreground); font-weight: 500; }
          .about-quote { border-left: 1px solid var(--accent); padding-left: 24px; margin-top: 48px; }
          .about-quote p { font-family: var(--font-mono); font-size: 14px; color: var(--accent); font-style: italic; }
        `}</style>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag">01 / About</div>
          <h2 className="title-large">I bridge the gap between <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Code</em> and <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Commerce</em>.</h2>
          <p>
            As a <strong>Shopify App Developer</strong>, my focus is not just on writing clean code, but on building tools that solve real merchant problems and <strong>drive bottom-line growth</strong>.
          </p>
          <p>
            With 2+ years of experience in the Shopify ecosystem, I've architected and shipped high-volume apps that handle complex discounting, B2B wholesale logic, and checkout customizations.
          </p>
          <div className="about-quote">
            <p>"Ritik doesn't just build features; he builds revenue-generating infrastructure for high-growth Shopify stores."</p>
          </div>
        </motion.div>

        <motion.div 
          className="about-capabilities"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <style>{`
            .cap-card { background: var(--zinc-950); border: 1px solid var(--border); padding: 32px; border-radius: 4px; margin-bottom: 24px; }
            .cap-title { font-size: 16px; font-weight: 700; color: var(--foreground); margin-bottom: 12px; display: flex; align-items: center; gap: 12px; }
            .cap-title span { color: var(--accent); font-family: var(--font-mono); font-size: 12px; }
            .cap-list { font-size: 14px; color: var(--zinc-500); line-height: 1.6; font-weight: 300; }
          `}</style>
          <div className="cap-card">
            <div className="cap-title"><span>01</span> App Architecture</div>
            <div className="cap-list">Node.js, Express, React (Polaris), GraphQL, Webhooks, OAuth.</div>
          </div>
          <div className="cap-card">
            <div className="cap-title"><span>02</span> Modern Shopify Tech</div>
            <div className="cap-list">Shopify Functions, Checkout Extensibility, App Bridge v3, Remix.</div>
          </div>
          <div className="cap-card" style={{ border: '1px solid var(--accent-muted)', background: 'rgba(0, 229, 255, 0.01)' }}>
            <div className="cap-title" style={{ color: 'var(--accent)' }}><span>03</span> ROI Optimization</div>
            <div className="cap-list">Dynamic Discounting, Subscription Logic, Tiered Pricing, Revenue Tracking.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
