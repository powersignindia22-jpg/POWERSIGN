import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProductSpotlight from "@/components/ProductSpotlight";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnershipSection from "@/components/PartnershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SolarDust from "@/components/SolarDust";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory relative selection:bg-sun/30 overflow-x-hidden">
      <SEO 
        title="POWERSIGN INDIA - Premium Solar Energy Solutions in Kerala"
        description="Kerala's trusted solar energy partner. Premium solar installations, lithium inverters, and ON-GRID rooftop solutions for homes and businesses."
      />
      {/* --- BACKGROUND LAYER SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 1. High-Visibility Grid */}
        <div className="absolute inset-0 opacity-[0.06]" 
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        
        {/* 2. Large Ambient Orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-sun/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-energy/10 rounded-full blur-[100px]" />
      </div>

      {/* 3. The "Sun-Dust" Particle Canvas */}
      <SolarDust />

      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ValueProposition />
        <ProductSpotlight />
        <PartnershipSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;