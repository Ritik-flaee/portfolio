'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding py-32 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">01 / About</div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 italic">
            Commerce Architect. <br/> <span className="text-accent underline underline-offset-8">Code Driven.</span>
          </h2>
          <div className="space-y-6 text-zinc-400 font-light text-lg transition-all">
            <p>
              I bridge the gap between complex <span className="text-white font-medium">backend architecture</span> and high-impact <span className="text-white font-medium">Shopify merchant success</span>.
            </p>
            <p>
              With 2+ years specialized in the Shopify ecosystem, I've shipped dozens of features across 5 major apps, serving 1000+ merchants and millions of checkout events.
            </p>
            <p className="border-l-2 border-accent/20 pl-6 italic font-mono text-sm text-accent/60">
              "Building commerce infrastructure that works at scale is not just about the code — it's about the merchant's bottom line."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-6"
        >
          {[
            { tag: '01', title: 'App Architecture', desc: 'Custom Shopify apps with Node.js, Remix, and the Polaris design system.' },
            { tag: '02', title: 'Checkout & Extensibility', desc: 'Extending Shopify checkouts via Shopify Functions and UI Extensions (Rust/React).' },
            { tag: '03', title: 'Scalable Backends', desc: 'Robust API design, webhook management, and database optimization for high-traffic stores.' }
          ].map((item, i) => (
            <div key={item.tag} className="bg-zinc-950 border border-white/5 p-8 hover:border-accent/20 transition-all group">
              <span className="font-mono text-accent text-[10px] block mb-4 group-hover:translate-x-1 transition-transform">{item.tag}</span>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
