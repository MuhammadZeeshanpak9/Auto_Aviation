import ThemeBackground from '@/components/ThemeBackground';
import ReturnButton from '@/components/ReturnButton';
import Hero from '@/sections/Hero';
import Statement from '@/sections/Statement';
import Countdown from '@/sections/Countdown';
import Teaser from '@/sections/Teaser';
import BrandVision from '@/sections/BrandVision';
import EmailCapture from '@/sections/EmailCapture';
import SocialLinks from '@/sections/SocialLinks';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed layered background — z-index 0 */}
      <ThemeBackground />

      {/* Fixed navigation — z-index 50 */}
      <ReturnButton />

      {/* Main content layer — z-index 10 */}
      <main className="relative" style={{ zIndex: 10 }}>
        <Hero />
        <Statement />
        <Countdown />
        <Teaser />
        <BrandVision />
        <EmailCapture />
        <SocialLinks />
        <Footer />
      </main>
    </div>
  );
}
