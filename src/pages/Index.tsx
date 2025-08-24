import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
