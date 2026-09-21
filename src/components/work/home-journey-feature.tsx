import HomeJourneyProductPreview from '@/components/home-journey/product-preview';
import ProductCard from '@/components/work/product-card';

export default function WorkHomeJourneyFeature() {
  return (
    <ProductCard
      title="Home Journey"
      description="A notes-first platform for organizing the journey from buying a home to owning and maintaining it."
      href="/work/home-journey"
      headingLevel="h2"
      visual={<HomeJourneyProductPreview />}
    />
  );
}
