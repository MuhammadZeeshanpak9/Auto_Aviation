import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-8 md:py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <motion.p
          className="text-[11px] text-white/20 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &copy; 2026 ELEV8 Auto & Aviation. All rights reserved.
        </motion.p>

        {/* Brand mark */}
        <motion.span
          className="text-xs font-bold tracking-widest text-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          ELEV8
        </motion.span>

        {/* Links */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {['Instagram', 'LinkedIn', 'YouTube'].map((name) => (
            <a
              key={name}
              href={`https://${name.toLowerCase()}.com/elev8`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/25 hover:text-white/60 transition-colors duration-300"
            >
              {name}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
