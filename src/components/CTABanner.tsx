import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to start? It's free.
          </h2>
          <p className="text-lg text-muted-foreground">
            Register your land today and let it start earning for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Register My Land <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 border-border text-foreground hover:bg-secondary transition-colors">
              Talk to Us
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-4">
            <span>No hidden fees</span>
            <span>·</span>
            <span>Cancel anytime</span>
            <span>·</span>
            <span>Tamil & English support</span>
            <span>·</span>
            <span>Transparent payouts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
