import heroImg from "@/assets/hero-farm.jpg";
import heroImg2 from "@/assets/hero-farm-2.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-0 min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Lush green farmland" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
            🌾 Managed Farmland Platform
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground">
            Your land can earn money{" "}
            <span className="text-primary-foreground/95 font-bold drop-shadow-md">— even while you rest.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
            We find the farmers. We manage the work. You get paid every season. Simple.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Register Your Land Free <ArrowRight size={18} />
            </a>
            <a href="#video" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              <Play size={18} /> Watch How It Works
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            <span>✓ Free to join</span>
            <span>✓ No paperwork hassle</span>
            <span>✓ Tamil support</span>
          </div>
        </div>
      </div>

      {/* Floating card - desktop only */}
      <div className="hidden lg:block absolute right-12 xl:right-24 bottom-24 w-80">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/20">
          <img src={heroImg2} alt="Aerial view of farmland" width={1280} height={854} className="w-full h-40 object-cover" />
          <div className="p-5 bg-card/95 backdrop-blur space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-card-foreground">Monthly Earnings</span>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary font-medium">+24% ROI</span>
            </div>
            <div className="text-3xl font-bold text-primary">₹18,400</div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-green-light text-primary font-medium">🌾 Paddy</span>
              <span className="px-2 py-1 rounded-full bg-green-light text-primary font-medium">Harvest in 28 days</span>
            </div>
            <div className="w-full h-2 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-primary w-[72%]" />
            </div>
            <p className="text-xs text-muted-foreground">Crop growth: 72% complete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
