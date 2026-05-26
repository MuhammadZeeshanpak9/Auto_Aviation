import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '@/hooks/useScrollReveal';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const targetDate = new Date('2026-12-31T23:59:59').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card rounded-2xl px-4 py-3 md:px-6 md:py-4 min-w-[72px] md:min-w-[96px]">
        <motion.span
          className="text-3xl md:text-5xl font-bold text-white tabular-nums"
          key={value}
          initial={{ opacity: 0.5, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="mt-2 text-[10px] md:text-xs tracking-widest text-white/30 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs tracking-widest text-white/30 uppercase mb-4">
          Launch Countdown
        </p>

        <h2 className="text-3xl md:text-5xl font-medium text-white mb-12 tracking-tight">
          The Future Arrives In
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="text-3xl md:text-5xl font-light text-white/20 self-start mt-4">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="text-3xl md:text-5xl font-light text-white/20 self-start mt-4">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <span className="text-3xl md:text-5xl font-light text-white/20 self-start mt-4">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <p className="mt-12 text-sm text-white/30 max-w-lg mx-auto leading-relaxed">
          The countdown has begun. The future of driving, flying, and moving is closer than you think.
        </p>
      </motion.div>
    </section>
  );
}
