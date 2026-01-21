import { Navbar, HeroSlider, PerformanceStats, ProductRange, IndustriesSection, ResultsCarousel, TrustedBySection, ReliableSupportSection, CTASection, NewsletterSection, Footer } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <PerformanceStats />
      <ProductRange />
      <IndustriesSection />
      <ResultsCarousel />
      <TrustedBySection />
      <ReliableSupportSection />
      <CTASection/>
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
  