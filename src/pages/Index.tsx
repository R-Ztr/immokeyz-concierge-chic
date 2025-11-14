import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Prestations from "@/components/Prestations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Hero />
      <Services />
      <Pricing />
      <Prestations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
