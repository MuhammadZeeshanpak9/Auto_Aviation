import { useEffect, useState } from 'react';

export default function ThemeBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Layer 0: Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/draftly-video.mp4"
      />

      {/* Layer 1: Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Layer 2: PLACEHOLDER — Human Shape & Chakras (future implementation) */}
      <div
        id="chakra-layer-placeholder"
        className="absolute inset-0"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      />

      {/* Layer 3: Subtle vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 4,
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />
    </div>
  );
}
