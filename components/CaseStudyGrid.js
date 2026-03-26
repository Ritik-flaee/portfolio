'use client';
import { motion } from 'framer-motion';

const CASE_STUDIES = [
  {
    id: 1,
    title: 'B2B Wholesale Hub',
    metric: '+22% Rev Growth',
    problem: 'Manual wholesale pricing management was capping growth and causing order errors.',
    solution: 'Engineered a tag-based discount engine using Shopify Functions for real-time calculation.',
    impact: 'Increased B2B revenue by 22% for mid-market brands by automating wholesale flows.',
    tags: ['Shopify Functions', 'Node.js', 'React'],
  },
  {
    id: 2,
    title: 'Checkout Logic Engine',
    metric: '-15% Churn',
    problem: 'Irrelevant payment/shipping options were increasing checkout abandonment.',
    solution: 'Built server-side rules using Shopify Functions to prune options dynamically.',
    impact: 'Reduced checkout abandonment by 15% across 500+ active Shopify stores.',
    tags: ['Rust', 'GraphQL', 'Pixel API'],
  },
  {
    id: 3,
    title: 'Dynamic ROI Suite',
    metric: '40%+ Net Margin',
    problem: 'Merchants were losing money on deep discounts without margin-aware logic.',
    solution: 'Developed a profitability-first middleware that validates net margin before discounting.',
    impact: 'Enabled high-volume sales while maintaining healthy 40%+ average net margins.',
    tags: ['Redis', 'Next.js', 'PostgreSQL'],
  }
];

export default function CaseStudyGrid() {
  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="section-tag">02 / Case Studies</div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          High-Impact <br/> <span className="text-accent">Shopify Solutions</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {CASE_STUDIES.map((cs, i) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-zinc-950/50 border border-white/5 p-8 md:p-12 transition-all duration-500 hover:bg-zinc-900/50"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-accent font-mono text-xs tracking-widest">{cs.metric}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-accent transition-colors">
              {cs.title}
            </h3>

            <div className="space-y-8 mb-12">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-mono">Challenge</span>
                <p className="text-zinc-400 text-sm leading-relaxed">{cs.problem}</p>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-mono">Solution</span>
                <p className="text-zinc-300 text-sm leading-relaxed">{cs.solution}</p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <span className="block text-[10px] uppercase tracking-widest text-accent/60 mb-2 font-mono">Impact / ROI</span>
                <p className="text-white text-sm font-medium leading-relaxed">{cs.impact}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {cs.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-zinc-500">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
