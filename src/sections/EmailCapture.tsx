import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function EmailCapture() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full glass-card mb-6"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(255,255,255,0)',
              '0 0 20px 5px rgba(255,255,255,0.05)',
              '0 0 0 0 rgba(255,255,255,0)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Mail className="w-5 h-5 text-white/60" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
          Join the Waitlist
        </h2>
        <p className="text-sm md:text-base text-white/40 mb-8 leading-relaxed max-w-md mx-auto">
          Be the first to experience the future of movement. Subscribe for
          exclusive updates, early access, and behind-the-scenes content.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
          <div className="glass-card-strong rounded-full flex items-center p-1.5 pl-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={submitted}
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/20 
                         outline-none disabled:opacity-50"
              required
            />
            <motion.button
              type="submit"
              disabled={submitted}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black 
                         text-sm font-medium hover:bg-white/90 transition-colors duration-300
                         disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </motion.button>
          </div>
        </form>

        <p className="mt-4 text-[10px] text-white/15">
          No spam. Unsubscribe at any time.
        </p>
      </motion.div>
    </section>
  );
}
