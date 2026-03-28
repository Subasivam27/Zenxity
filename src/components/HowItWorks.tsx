import { MapPin, Sprout, Banknote } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Register Your Land",
    desc: "Just your name, land location, and a photo. Our team will call you within 24 hours to verify.",
  },
  {
    num: "02",
    icon: Sprout,
    title: "We Manage Everything",
    desc: "Our expert team takes full charge — from land prep and planting to monitoring and harvest. You get photo updates every week.",
  },
  {
    num: "03",
    icon: Banknote,
    title: "Receive Your Returns",
    desc: "After every harvest, money goes directly to your bank account. Track every rupee on your phone.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three steps. That's it.
          </h2>
          <p className="text-muted-foreground text-lg">
            No complicated process. No technical knowledge needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div key={s.num} className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group">
              <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6 group-hover:text-primary/20 transition-colors">
                {s.num}
              </span>
              <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center mb-6">
                <s.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
