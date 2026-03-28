import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <StatsBar />
      <HowItWorks />
      <Features />
      <VideoSection />
      <Testimonial />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
