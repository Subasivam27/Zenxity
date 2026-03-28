import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/70 to-emerald-50/80">
      <Navbar />
      <BackToHome />
      <main className="pt-24 pb-20">
        
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;

