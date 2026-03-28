import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import { Leaf, Users, Eye, ShieldCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToHome />
      <main className="pt-24 pb-20">
        <section className="container max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Zenxity
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Zenxity helps landowners turn unused or underutilized agricultural land into productive farmland. Our team manages the entire farming process while providing real-time updates, photos, and reports, ensuring complete transparency and allowing landowners to earn from their land without handling daily farming operations.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Leaf, title: "Expert Farming", desc: "Professional team managing every stage of cultivation on your land." },
              { icon: Users, title: "Trusted Network", desc: "Verified local farmers matched to your land's specific needs." },
              { icon: Eye, title: "Full Transparency", desc: "Real-time photos, videos, and financial reports sent to you regularly." },
              { icon: ShieldCheck, title: "Safe & Reliable", desc: "Your land stays yours. We manage the farming, you receive the returns." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
