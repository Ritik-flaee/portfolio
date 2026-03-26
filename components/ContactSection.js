'use client';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function ContactSection() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '160px' }}>
      <style>{`
        .contact-wrap { text-align: center; max-width: 600px; margin: 0 auto; }
        .contact-cta { font-family: var(--font-display); font-size: clamp(32px, 5vw, 64px); font-weight: 800; color: var(--foreground); letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 40px; }
        .contact-cta span { color: var(--accent); }
        .contact-details { display: flex; flex-direction: column; gap: 24px; align-items: center; }
        .contact-link { font-family: var(--font-mono); font-size: 14px; color: var(--zinc-500); transition: color 0.3s; }
        .contact-link:hover { color: var(--accent); }
      `}</style>
      
      <motion.div 
        className="contact-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-tag">04 / Ready to Scale?</div>
        <h2 className="contact-cta">Let's build your next <br/> <span>Shopify app</span>.</h2>
        
        <div className="contact-details">
          <Magnetic>
            <a href="mailto:ritikawachat@gmail.com" className="btn-primary" style={{ padding: '16px 40px', fontSize: '16px' }}>
              Start a Conversation
            </a>
          </Magnetic>
          
          <div style={{ marginTop: '40px', display: 'flex', gap: '32px' }}>
            <Magnetic><a href="mailto:ritikawachat@gmail.com" className="contact-link">ritikawachat@gmail.com</a></Magnetic>
            <Magnetic><a href="tel:+919130164374" className="contact-link">+91 9130 164 374</a></Magnetic>
            <Magnetic><a href="https://github.com/Ritik-flaee" target="_blank" rel="noreferrer" className="contact-link">GitHub</a></Magnetic>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
