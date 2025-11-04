import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TechnologyPreview } from "@/components/sections/TechnologyPreview";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TechnologyPreview />
      <ComparisonTable />
      <ProcessSection />
      <CTASection />
    </>
  );
}