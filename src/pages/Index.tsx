import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { StylesSection } from "@/components/StylesSection";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
        <StylesSection />
        <PortfolioSection />
        <ProcessSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
