import { motion } from 'framer-motion';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function BrandVision() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
          Innovations in terrestrial and aerial transit.
        </h2>
      </motion.div>

      {/* Vision Cards — staggered layout */}
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Card 1 — Centered */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-medium text-white mb-3">
              A Vision Beyond Limits
            </h3>
            <p className="text-sm md:text-base text-white/40 leading-relaxed">
              ELEV8 represents the convergence of speed, intelligence, and design.
              We are not just building vehicles; we are crafting the next chapter
              of human mobility.
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Offset to the right */}
        <motion.div
          className="max-w-lg md:ml-auto md:mr-12"
          initial={{ opacity: 0, y: 40, x: 20 }}
          animate={isVisible ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-medium text-white mb-3">
              Engineering Tomorrow
            </h3>
            <p className="text-sm md:text-base text-white/40 leading-relaxed mb-4">
              Every innovation we pursue is rooted in a singular belief: that the
              journey should be as extraordinary as the destination. From autonomous
              aerial systems to hyper-performance terrestrial machines.
            </p>
            <motion.button
              className="px-6 py-2 rounded-full border border-white/20 text-sm text-white/70 
                         hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
