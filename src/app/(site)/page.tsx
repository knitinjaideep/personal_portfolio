import HeroSection from '@/components/home/hero-section';
import FeaturedWorkSection from '@/components/home/featured-work-section';
import AskAboutWorkSection from '@/components/home/ask-about-work-section';
import ClosingSection from '@/components/home/closing-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <AskAboutWorkSection />
      <ClosingSection />
    </>
  );
}
