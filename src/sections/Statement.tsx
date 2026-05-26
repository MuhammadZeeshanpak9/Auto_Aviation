import { motion } from 'framer-motion';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Statement() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-32 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Main Quote */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Opening Quote Mark */}
          <motion.span
            className="block text-8xl md:text-[12rem] font-serif text-white/5 leading-none select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            &ldquo;
          </motion.span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl mx-auto -mt-16 md:-mt-24">
            The future belongs to those who move first.
          </h2>

          {/* Closing Quote Mark */}
          <motion.span
            className="block text-8xl md:text-[12rem] font-serif text-white/5 leading-none select-none mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            &rdquo;
          </motion.span>
        </motion.div>

        {/* Glass Card — Humanity in Motion */}
        <motion.div
          className="mt-16 md:mt-24 md:ml-auto md:mr-0 max-w-md"
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Decorative sphere inside card */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-40 pointer-events-none">
              <img
                src="/statement-sphere.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-lg md:text-xl font-medium text-white mb-3">
              Humanity in Motion
            </h3>
            <p className="text-sm md:text-base text-white/50 leading-relaxed relative z-10">
              We believe movement defines progress. Whether on the road, through
              the air, or across the water, every vehicle we envision is built to
              elevate the human experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
