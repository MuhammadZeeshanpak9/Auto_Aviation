import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ReturnButton() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold tracking-widest text-white">ELEV8</span>
      </div>

      {/* Center brand text - hidden on mobile */}
      <div className="hidden md:block">
        <span className="text-xs font-medium tracking-widest text-white/40 uppercase">
          ELEV8 Auto & Aviation
        </span>
      </div>

      {/* Back to home button */}
      <motion.a
        href="https://elev8.com"
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 
                   hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Back to Home</span>
      </motion.a>
    </motion.nav>
  );
}
