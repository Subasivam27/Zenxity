import { ArrowRight, Check, Shield, Clock, MessageSquare } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-24 md:py-32 bg-[#edf2fb]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to start? It's free.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Register your land today and let it start earning for you. No setup fees, no hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Register My Land <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 border-border text-foreground hover:bg-secondary transition-colors">
                Talk to Us
              </a>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-xl">
                <Check size={20} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">No hidden fees</h3>
              <p className="text-sm text-muted-foreground">Complete transparency in pricing</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-xl">
                <Clock size={20} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">Cancel anytime</h3>
              <p className="text-sm text-muted-foreground">No long-term contracts</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-xl">
                <MessageSquare size={20} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">Tamil & English support</h3>
              <p className="text-sm text-muted-foreground">Help in your language</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-xl">
                <Shield size={20} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">Transparent payouts</h3>
              <p className="text-sm text-muted-foreground">Track every rupee earned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

