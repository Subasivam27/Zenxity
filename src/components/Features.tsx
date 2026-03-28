import { BarChart3, Map, Activity, Bell, MessageCircle } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Profit Tracking",
    desc: "See your monthly earnings, pending payouts, and complete transaction history in one dashboard.",
    wide: true,
  },
  {
    icon: Map,
    title: "Land Management",
    desc: "Register multiple lands, upload documents, and track each one individually.",
  },
  {
    icon: Activity,
    title: "Live Farm Status",
    desc: "Real-time crop progress, growth photos, and harvest timelines updated weekly.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "Get notified about harvests, payments, weather warnings, and important updates.",
  },
  {
    icon: MessageCircle,
    title: "Tamil Support Chat",
    desc: "Talk to our team in Tamil or English. We're always here to help.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need, nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 p-4 lg:p-0 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-background to-green-light p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/50 ${f.wide ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center shadow-lg relative z-10">
                <f.icon size={28} className="text-primary drop-shadow-sm" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors relative z-10"> {f.title}</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors relative z-10">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
