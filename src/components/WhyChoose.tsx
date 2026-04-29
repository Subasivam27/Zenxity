import zen1Bg from '../../assets/zen1.jpg?url';

const WhyChoose = () => {
  return (
    <section className="py-20 md:py-28 bg-[#edf2fb]">
      <div className="container">

        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground drop-shadow-lg">
            Why Choose Zenxity?
          </h2>
          <div className="space-y-4">
            <
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
              If you own agricultural land but cannot actively manage it, Zenxity can help you generate income from it while ensuring modern, sustainable farming practices. Submit your details and our team will contact you to discuss the next steps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 p-4 lg:p-0">
          <div className="group relative overflow-hidden rounded-3xl p-8 border border-border/50 min-h-[300px]">
            <div className="absolute inset-0 bg-[url('../../assets/zen1.jpg')] bg-no-repeat bg-cover bg-center z-[-1]" style={{backgroundImage: `url(${zen1Bg})`, opacity: 1}} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-light/30 z-0" />
            <h3 className="text-3xl font-black text-foreground mb-6 drop-shadow-2xl relative z-10">Easy to Get Started</h3>
            <p className="text-lg text-muted-foreground leading-relaxed drop-shadow-xl relative z-10">Share your land details and our team takes care of the rest.</p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl p-8 border border-border/50 min-h-[300px]">
            <div className="absolute inset-0 bg-[url('../../assets/hero-farm-2.jpg')] bg-no-repeat bg-cover bg-center z-[-1]" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/30 z-0" />
            <h3 className="text-3xl font-black text-foreground mb-6 drop-shadow-2xl relative z-10">Complete Transparency</h3>
            <p className="text-lg text-muted-foreground leading-relaxed drop-shadow-xl relative z-10">Track farming activities through real-time updates, photos, and reports.</p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl p-8 border border-border/50 min-h-[300px]">
            <div className="absolute inset-0 bg-[url('../../assets/hero-farm.jpg')] bg-no-repeat bg-cover bg-center z-[-1]" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/30 z-0" />
            <h3 className="text-3xl font-black text-foreground mb-6 drop-shadow-2xl relative z-10">Professional Management</h3>
            <p className="text-lg text-muted-foreground leading-relaxed drop-shadow-xl relative z-10">Experienced teams handle all farming operations efficiently.</p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl p-8 border border-border/50 min-h-[300px]">
            <div className="absolute inset-0 bg-[url('../../assets/hero-farm-2.jpg')] bg-no-repeat bg-cover bg-center z-[-1]" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-light/30 z-0" />
            <h3 className="text-3xl font-black text-foreground mb-6 drop-shadow-2xl relative z-10">Better Use of Your Land</h3>
            <p className="text-lg text-muted-foreground leading-relaxed drop-shadow-xl relative z-10">Convert unused land into productive farmland.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
