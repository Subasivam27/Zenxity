import { useState } from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    desc: "Get started with one land registration.",
    features: [
      { text: "1 land registration", included: true },
      { text: "Basic farm updates", included: true },
      { text: "Monthly earnings report", included: true },
      { text: "Priority farmer matching", included: false },
      { text: "Chat support", included: false },
    ],
    popular: false,
  },
  {
    name: "Standard",
    monthly: 99,
    annual: 79,
    desc: "Most people choose this. Best for active landowners.",
    features: [
      { text: "Up to 5 land registrations", included: true },
      { text: "Weekly photo updates", included: true },
      { text: "Detailed profit tracking", included: true },
      { text: "Priority farmer matching", included: true },
      { text: "Chat support", included: false },
    ],
    popular: true,
  },
  {
    name: "Premium",
    monthly: 299,
    annual: 239,
    desc: "For serious landowners with multiple properties.",
    features: [
      { text: "Unlimited land registrations", included: true },
      { text: "Daily photo updates", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority farmer matching", included: true },
      { text: "Dedicated chat support", included: true },
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, honest pricing.
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              title={annual ? "Switch to Monthly" : "Switch to Annual"}
              aria-label={annual ? "Switch to Monthly" : "Switch to Annual"}
              className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-primary" : "bg-border"}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-primary-foreground shadow transition-transform ${annual ? "translate-x-7" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual <span className="text-primary text-xs">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-7 rounded-2xl border-2 transition-colors ${
                p.popular
                  ? "border-primary bg-card shadow-lg"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most people choose this
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{p.name}</h3>
              <div className="mb-3">
                <span className="text-4xl font-bold text-foreground">
                  ₹{annual ? p.annual : p.monthly}
                </span>
                {p.monthly > 0 && <span className="text-muted-foreground text-sm">/month</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2 text-sm">
                    {f.included ? (
                      <Check size={18} className="text-primary mt-0.5 shrink-0" />
                    ) : (
                      <X size={18} className="text-muted-foreground/40 mt-0.5 shrink-0" />
                    )}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground/50"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-opacity ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:opacity-80"
                }`}
              >
                {p.monthly === 0 ? "Start Free" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
