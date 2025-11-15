import Navbar from "@/components/Navbar";
import Prestations from "@/components/Prestations";
import Footer from "@/components/Footer";

const PrestationsPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-16">
        <Prestations />
      </div>
      <Footer />
    </div>
  );
};

export default PrestationsPage;
