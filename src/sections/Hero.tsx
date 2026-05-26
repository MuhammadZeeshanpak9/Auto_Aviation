import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* 3D Hero Sphere */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="/hero-sphere.png"
          alt=""
          className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] object-contain opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            filter: 'drop-shadow(0 0 80px rgba(255,255,255,0.08))',
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto" style={{ marginTop: '-5vh' }}>
        {/* Logo Badge */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card-strong rounded-full px-6 py-2.5 flex items-center gap-3">
            <img
              src="/AVIATION.png"
              alt="ELEV8 Logo"
              className="w-8 h-8 object-contain rounded-full"
            />
            <span className="text-xs font-medium tracking-widest text-white/60 uppercase">
              Everything Moving
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          ELEV8
          <br />
          <span className="text-gradient">AUTO & AVIATION</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Unprecedented speed, movement, transport, and aerodynamics.
        </motion.p>

        {/* Coming Label */}
        <motion.p
          className="mt-12 text-2xl md:text-4xl text-white font-bold tracking-[0.4em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ textShadow: '0 0 20px rgba(255,255,255,0.4)' }}
        >
          — Coming Q4 2026
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-[10px] tracking-widest text-white/20 uppercase">Scroll to explore</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Disclaimer */}
      <motion.p
        className="absolute bottom-6 left-0 right-0 text-center text-[10px] text-white/15 max-w-xl mx-auto px-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Disclaimer: This is a concept showcase for the ELEV8 brand ecosystem.
        Products and timelines are subject to change.
      </motion.p>
    </section>
  );
}
