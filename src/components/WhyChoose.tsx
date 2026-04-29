import { CheckCircle, Shield, Truck, LandPlot } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="py-20 md:py-28 bg-[#edf2fb]">
      <div className="container">

        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground drop-shadow-lg">
            Why Choose Zenxity?
          </h2>
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-foreground/90">Partner With Us Today</p>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
              If you own agricultural land but cannot actively manage it, Zenxity can help you generate income from it while ensuring modern, sustainable farming practices. Submit your details and our team will contact you to discuss the next steps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 p-4 lg:p-0">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-green-light p-8 border border-border/50">
          <div className="absolute inset-0 bg-[url('../../assets/hero-farm.jpg')] bg-no-repeat bg-cover bg-center opacity-10 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/20 transition-all duration-300 flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-primary drop-shadow-sm" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 transition-colors">Easy to Get Started</h3>
            <p className="text-muted-foreground leading-relaxed transition-colors">Share your land details and our team takes care of the rest.</p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/5 to-primary/5 p-8 border border-border/50">
            <div className="absolute inset-0 bg-[url('../../assets/hero-farm-2.jpg')] bg-no-repeat bg-cover bg-center opacity-10 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/20 transition-all duration-300 flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-accent drop-shadow-sm" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 transition-colors">Complete Transparency</h3>
            <p className="text-muted-foreground leading-relaxed transition-colors">Track farming activities through real-time updates, photos, and reports.</p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-8 border border-border/50">
            <div className="absolute inset-0 bg-[url('../../assets/hero-farm.jpg')] bg-no-repeat bg-cover bg-center opacity-10 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/5" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-500/20 transition-all duration-300 flex items-center justify-center shadow-lg">
              <Truck className="w-10 h-10 text-green-500 drop-shadow-sm" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 transition-colors">Professional Management</h3>
            <p className="text-muted-foreground leading-relaxed transition-colors">Experienced teams handle all farming operations efficiently.</p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/5 to-green-light p-8 border border-border/50">
            <div className="absolute inset-0 bg-[url('../../assets/hero-farm-2.jpg')] bg-no-repeat bg-cover bg-center opacity-10 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5" />
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-emerald-500/20 transition-all duration-300 flex items-center justify-center shadow-lg">
              <LandPlot className="w-10 h-10 text-emerald-500 drop-shadow-sm" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 transition-colors">Better Use of Your Land</h3>
            <p className="text-muted-foreground leading-relaxed transition-colors">Convert unused land into productive farmland.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;

