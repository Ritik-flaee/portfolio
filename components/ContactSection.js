'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding py-40 bg-white text-black rounded-[40px] m-6 text-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-8 block">Project Inquiry</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12">
          Let's build something <br/> <span className="underline decoration-accent underline-offset-8">impactful</span> 🚀
        </h2>

        <div className="flex flex-col items-center gap-10">
          <a 
            href="mailto:ritikawachat@gmail.com" 
            className="text-3xl md:text-5xl font-medium tracking-tight hover:text-accent transition-colors duration-500"
          >
            ritikawachat@gmail.com
          </a>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ritikawachat/' },
              { label: 'GitHub', href: 'https://github.com/Ritik-flaee' },
              { label: 'WhatsApp', href: 'https://wa.me/919130164374' }
            ].map(link => (
              <a 
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-black transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
