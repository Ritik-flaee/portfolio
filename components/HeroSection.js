'use client';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function HeroSection() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '160px' }}>
      <style>{`
        .hero-value {
          max-width: 800px;
        }
        .hero-role {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 0.15em;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-transform: uppercase;
        }
        .hero-role::after {
          content: '';
          height: 1px;
          width: 40px;
          background: var(--accent);
        }
        .hero-desc {
          max-width: 540px;
          font-size: 18px;
          line-height: 1.7;
          color: var(--zinc-500);
          margin-top: 32px;
          font-weight: 300;
        }
        .hero-desc strong { color: var(--foreground); font-weight: 500; }
        .hero-ctas {
          margin-top: 48px;
          display: flex;
          gap: 24px;
          align-items: center;
        }
      `}</style>
      
      <motion.div
        className="hero-value"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="hero-role">Shopify App Developer</div>
        <h1 className="title-large">
          I build high-performance <br/> 
          <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Shopify Apps</em> that 
          increase revenue.
        </h1>
        <p className="hero-desc">
          Helping brands scale through <strong>Checkout Extensibility, Shopify Functions,</strong> and robust back-end integrations. Focused on <strong>merchant ROI</strong> and developer-first architecture.
        </p>
        
        <div className="hero-ctas">
          <Magnetic>
            <a href="#projects" className="btn-primary">
              See Case Studies
              <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
