import { CheckCircle, Shield, Truck, LandPlot } from "lucide-react";
import Zen1 from "../assets/zen1.jpg";

const WhyZenxityNeed = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black/20 to-black/60">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
            Why Zenxity Need
          </h2>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
            Zenxity solves key challenges for landowners who want to monetize their agricultural land without the hassle of farming.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full"
          style={{
            height: '700px',
            backgroundImage: `url(${Zen1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl p-8 hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border border-white/50 hover:border-primary/50 hover:bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-primary/20 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center shadow-xl drop-shadow-2xl">
              <LandPlot className="w-12 h-12 text-primary drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-primary transition-colors">
              Maximize Land Value
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground/95 transition-colors">
              Turn idle land into revenue-generating assets through smart farming partnerships.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl p-8 hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border border-white/50 hover:border-accent/50 hover:bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-accent/20 group-hover:bg-accent/40 transition-all duration-500 flex items-center justify-center shadow-xl drop-shadow-2xl">
              <Truck className="w-12 h-12 text-accent drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-accent transition-colors">
              Expert Farm Management
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground/95 transition-colors">
              Professional teams handle planting, maintenance, and harvest for optimal yields.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl p-8 hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border border-white/50 hover:border-green-500/50 hover:bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-green-500/20 group-hover:bg-green-500/40 transition-all duration-500 flex items-center justify-center shadow-xl drop-shadow-2xl">
              <Shield className="w-12 h-12 text-green-500 drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-green-500 transition-colors">
              Risk-Free Partnership
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground/95 transition-colors">
              No upfront costs - we manage everything with guaranteed transparency and results.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl p-8 hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border border-white/50 hover:border-emerald-500/50 hover:bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-all duration-500 flex items-center justify-center shadow-xl drop-shadow-2xl">
              <CheckCircle className="w-12 h-12 text-emerald-500 drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-emerald-500 transition-colors">
              Passive Income Stream
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground/95 transition-colors">
              Receive regular payouts from crop sales without any farming expertise required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZenxityNeed;

