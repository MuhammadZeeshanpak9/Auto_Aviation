import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/elev8' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/elev8' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@elev8' },
  { name: 'X', icon: Twitter, href: 'https://x.com/elev8' },
];

export default function SocialLinks() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-6">
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-center text-xs tracking-widest text-white/20 uppercase mb-6">
          Follow Our Journey
        </p>

        <div className="flex justify-center items-center gap-3 md:gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full 
                           glass-card-strong text-white/40 hover:text-white hover:bg-white/10 
                           transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
