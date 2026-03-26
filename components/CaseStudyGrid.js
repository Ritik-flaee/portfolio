'use client';
import { motion } from 'framer-motion';

const CASE_STUDIES = [
  {
    id: 1,
    title: 'B2B Wholesale Pricing Suite',
    merchant: '400+ Active Installs',
    problem: 'Wholesale merchants on Shopify struggle to manage tiered pricing for B2B customers without manual effort.',
    solution: 'Engineered an automated rule-engine that applies customer-tag based discounts instantly at checkout.',
    impact: 'Increased B2B revenue by 22% for mid-market brands by streamlining the wholesale purchase flow.',
    tags: ['Next.js', 'Node.js', 'Shopify Functions', 'MySQL'],
  },
  {
    id: 2,
    title: 'Hide Shipping & Payment Logic',
    merchant: '500+ Active Installs',
    problem: 'High checkout abandonment due to irrelevant or restrictive shipping/payment options visible to the wrong customers.',
    solution: 'Used Shopify Functions to create server-side logic that hides payment/shipping methods based on cart attributes.',
    impact: 'Reduced checkout abandonment by 15% and support tickets by 30% for high-volume stores.',
    tags: ['Rust', 'Shopify Functions', 'GraphQL', 'React'],
  },
  {
    id: 3,
    title: 'Dynamic Pricing & ROI Suite',
    merchant: 'High Volume Stores',
    problem: 'Native Shopify discounts lack the depth for complex SKU-based margin protection and dynamic pricing.',
    solution: 'Developed a robust discounting middleware that calculates real-time profitability before applying cart-level discounts.',
    impact: 'Helped merchants maintain average margins of 40%+ while driving high-volume sales through automated campaigns.',
    tags: ['Node.js', 'Redis', 'Checkout Extensibility', 'Shopify App Bridge'],
  }
];

export default function CaseStudyGrid() {
  return (
    <section id="projects" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">02 / Case Studies</div>
        <h2 className="title-large">Proven Results for <br/> <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Shopify Merchants</em></h2>
      </motion.div>

      <div className="case-grid" style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2px', marginTop: '64px' 
      }}>
        {CASE_STUDIES.map((cs, i) => (
          <motion.div 
            key={cs.id}
            className="card"
            style={{ padding: '48px 32px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          >
            <style>{`
              .cs-merchant { font-family: var(--font-mono); font-size: 10px; color: var(--accent); margin-bottom: 20px; text-transform: uppercase; }
              .cs-title { font-size: 24px; font-weight: 700; color: var(--foreground); margin-bottom: 24px; letter-spacing: -0.02em; }
              .cs-meta { margin-bottom: 32px; }
              .cs-label { font-family: var(--font-mono); font-size: 9px; color: var(--zinc-500); text-transform: uppercase; margin-bottom: 8px; display: block; }
              .cs-text { font-size: 14px; color: var(--zinc-400); margin-bottom: 20px; line-height: 1.7; font-weight: 300; }
              .cs-impact { padding: 16px; background: rgba(0, 229, 255, 0.03); border-left: 2px solid var(--accent); border-radius: 2px; }
              .cs-impact span { color: var(--foreground); font-weight: 600; font-size: 13px; font-family: var(--font-mono); }
              .cs-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 32px; }
              .cs-tag { font-family: var(--font-mono); font-size: 9px; padding: 4px 10px; background: var(--zinc-900); border: 1px solid var(--border); border-radius: 4px; color: var(--zinc-500); }
            `}</style>
            <div className="cs-merchant">{cs.merchant}</div>
            <h3 className="cs-title">{cs.title}</h3>
            
            <div className="cs-meta">
              <span className="cs-label">Challenge</span>
              <p className="cs-text">{cs.problem}</p>
              
              <span className="cs-label">Solution</span>
              <p className="cs-text">{cs.solution}</p>
              
              <div className="cs-impact">
                <span className="cs-label" style={{ color: 'var(--accent)' }}>Impact / ROI</span>
                <span>{cs.impact}</span>
              </div>
            </div>

            <div className="cs-tags">
              {cs.tags.map(tag => <span key={tag} className="cs-tag">{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
