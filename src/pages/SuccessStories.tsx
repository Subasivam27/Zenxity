import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import { Star, MapPin } from "lucide-react";

const stories = [
  {
    name: "Ramesh Kumar",
    location: "Salem, Tamil Nadu",
    quote: "I had 3 acres sitting idle for 5 years. Zenxity started farming on it, and now I earn ₹18,000 every month. I can see photos of my farm every week on WhatsApp.",
    acres: "3 acres",
    earning: "₹18,000/month",
  },
  {
    name: "Lakshmi Devi",
    location: "Pollachi, Tamil Nadu",
    quote: "I was worried about trusting someone with my family land. But Zenxity's team calls me regularly, sends photos, and the money comes on time. Very happy.",
    acres: "5 acres",
    earning: "₹32,000/month",
  },
  {
    name: "Murugan S.",
    location: "Tirunelveli, Tamil Nadu",
    quote: "I live in Chennai but my land is in the village. Zenxity manages everything. I just check the updates on my phone. It's like having a trusted family member look after the farm.",
    acres: "2.5 acres",
    earning: "₹14,500/month",
  },
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToHome />
      <main className="pt-24 pb-20">
        <section className="container max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Success Stories
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real People. Real Results.
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Hear from landowners across Tamil Nadu who are earning from their idle land.
          </p>

          <div className="space-y-8">
            {stories.map((s) => (
              <div key={s.name} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-lg leading-relaxed italic mb-6">"{s.quote}"</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-foreground">{s.name}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={14} /> {s.location}
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-green-light text-primary font-medium">{s.acres}</span>
                    <span className="px-3 py-1 rounded-full bg-green-light text-primary font-medium">{s.earning}</span>
                  </div>
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

export default SuccessStories;
