import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import { Tractor, Sprout, Eye, Wheat, Camera, MessageCircle } from "lucide-react";

const services = [
  { icon: Tractor, title: "Contract Farming Management", desc: "End-to-end contract farming where we handle everything from planning to execution on your land." },
  { icon: Sprout, title: "Land Preparation & Soil Treatment", desc: "Professional soil testing, treatment, and land preparation to ensure the best conditions for cultivation." },
  { icon: Wheat, title: "Seeding & Planting", desc: "Expert selection of crops suited to your land's soil type, climate, and water availability." },
  { icon: Eye, title: "Crop Monitoring & Maintenance", desc: "Regular monitoring of crop health, pest control, irrigation management, and growth tracking." },
  { icon: Tractor, title: "Harvesting & Post-Harvest", desc: "Timely harvesting, processing, and market coordination to maximize your returns." },
  { icon: Camera, title: "Real-time Updates", desc: "Weekly photo and video updates so you can see your farm's progress from anywhere on your phone." },
  { icon: MessageCircle, title: "Direct Communication", desc: "Talk directly with your assigned farming team through WhatsApp or the Zenxity app anytime." },
];

const OurServices = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToHome />
      <main className="pt-24 pb-20">
        <section className="container max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do For You
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
            From preparing the land to harvesting the crop — our team handles every step of the farming process while keeping you informed.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurServices;
