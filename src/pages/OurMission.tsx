import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import { Target, Sprout, BarChart3 } from "lucide-react";

const OurMission = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToHome />
      <main className="pt-24 pb-20">
        <section className="container max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Our Vision
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Vision
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Our vision is to help landowners make productive use of their agricultural land by providing reliable farm management and transparent updates. Zenxity aims to simplify agriculture through technology, professional expertise, and modern practices so that landowners can generate sustainable income from their land with complete visibility and trust.
          </p>

          <div className="space-y-8">
            {[
              { icon: Target, title: "Simplify Agriculture", desc: "We remove the complexity of farming so landowners don't need to worry about day-to-day operations." },
              { icon: Sprout, title: "Sustainable Practices", desc: "Modern farming techniques that protect the soil and maximize yield season after season." },
              { icon: BarChart3, title: "Complete Visibility", desc: "Every rupee earned, every crop planted — tracked and reported transparently on your phone." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 items-start p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurMission;
