import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I had 3 acres sitting empty for 5 years. Zenxity found a farmer, and now I earn ₹15,000 every month. I didn't have to do anything.",
    name: "Murugan K.",
    location: "Salem, Tamil Nadu",
    initials: "MK",
  },
  {
    quote: "The weekly photos give me peace of mind. I can see my land being taken care of from my phone. Best decision I made.",
    name: "Lakshmi P.",
    location: "Pollachi, Tamil Nadu",
    initials: "LP",
  },
  {
    quote: "I was worried about trusting strangers with my land. But the Zenxity team speaks Tamil and explained everything clearly. Very reliable.",
    name: "Rajan S.",
    location: "Tirunelveli, Tamil Nadu",
    initials: "RS",
  },
];

const Testimonial = () => {
  return (
    <section id="stories" className="py-20 md:py-28 bg-stats-bg">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            Real Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Hear from our landowners.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="p-7 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/10">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-warm text-orange-warm" />
                ))}
              </div>
              <p className="text-primary-foreground/90 italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-primary-foreground/60 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
