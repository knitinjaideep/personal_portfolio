import HeroSection from '@/components/home/hero-section';
import ProfileOverviewSection from '@/components/home/profile-overview-section';
import FeaturedWorkSection from '@/components/home/featured-work-section';
import AskAboutWorkSection from '@/components/home/ask-about-work-section';
import ClosingSection from '@/components/home/closing-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProfileOverviewSection />
      <FeaturedWorkSection />
      <AskAboutWorkSection />
      <ClosingSection />
    </>
  );
}
