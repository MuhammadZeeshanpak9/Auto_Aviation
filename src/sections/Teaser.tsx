import { motion } from 'framer-motion';
import useScrollReveal from '@/hooks/useScrollReveal';

const sections = [
  {
    id: 'car',
    title: 'Unprecedented Speed',
    subtitle: 'The Future of Movement',
    desc: 'From the sound of the engine to the feel of the wheel, every detail is engineered for those who refuse to stand still.',
    image: '/showcase-hologram.jpg',
    cardSubtitle: 'This is ELEV8 — The future of movement.',
    cardDesc: 'A new era of transit is coming. Cars that think. Drones that deliver. Design that defies gravity.',
  },
  {
    id: 'bike',
    title: 'Agility and Power',
    subtitle: 'Defying Limits',
    desc: 'Engineered for precision and sheer adrenaline. The ultimate two-wheeled machine for the open road.',
    image: '/showcase-motorcycle.png',
    cardSubtitle: 'This is ELEV8 — Unmatched agility.',
    cardDesc: 'Experience the perfect balance of raw power and intelligent design.',
  },
  {
    id: 'helicopter',
    title: 'Aerial Dominance',
    subtitle: 'Vertical Freedom',
    desc: 'Redefining the sky. Our advanced rotorcraft offer unparalleled luxury and speed for vertical transit.',
    image: '/showcase-helicopter.png',
    cardSubtitle: 'This is ELEV8 — The sky is no longer the limit.',
    cardDesc: 'Personal aviation meets supreme comfort. A new perspective on luxury transit.',
  },
  {
    id: 'yacht',
    title: 'Marine Luxury',
    subtitle: 'Uncharted Waters',
    desc: 'Cutting-edge hydrodynamic design meets opulent comfort. The apex predator of the high seas.',
    image: '/showcase-hologram.jpg', // Using fallback image temporarily
    cardSubtitle: 'This is ELEV8 — Master the ocean.',
    cardDesc: 'Sleek, powerful, and utterly serene. The future of marine luxury is here.',
  }
];

export default function Teaser() {
  return (
    <div className="py-12 md:py-16">
      {sections.map((section, index) => (
        <ShowcaseSection key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}

function ShowcaseSection({ section, index }: { section: typeof sections[0], index: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.25 });
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} className="relative py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          className={!isEven ? 'md:order-2' : ''}
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-widest text-white/30 uppercase mb-4">
            {section.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            {section.title}
          </h2>
          <p className="text-base md:text-lg text-white/40 leading-relaxed max-w-md">
            {section.desc}
          </p>
        </motion.div>

        {/* Hologram Showcase Card */}
        <motion.div
          className={!isEven ? 'md:order-1' : ''}
          initial={{ opacity: 0, x: isEven ? 30 : -30, rotateY: isEven ? -10 : 10 }}
          animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1000 }}
        >
          <div className="glass-card-strong rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 pb-0">
              <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
                ELEV8 Auto & Aviation
              </p>
              <h3 className="text-xl md:text-2xl font-medium text-white mt-2 mb-3">
                {section.cardSubtitle}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {section.cardDesc}
              </p>
            </div>

            <div className="mt-6 relative">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-56 md:h-72 object-cover"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                }}
              />
            </div>

            <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-12 relative z-10">
              <motion.button
                className="px-6 py-2.5 rounded-full border border-white/20 text-sm text-white/80 
                           hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Waitlist
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
