import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <VideoSection />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
