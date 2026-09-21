import CoralConceptVisual from '@/components/coral/coral-concept-visual';
import ProductCard from '@/components/work/product-card';

export default function WorkCoralFeature() {
  return (
    <ProductCard
      title="Coral"
      description="A local-first financial statement analyzer that turns private PDFs into dashboards and grounded financial answers."
      href="/work/coral"
      headingLevel="h2"
      visual={<CoralConceptVisual compact />}
      meta="FastAPI, SQLite, Next.js, local Ollama models."
    />
  );
}
