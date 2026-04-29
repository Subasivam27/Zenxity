
import Zen1 from "../assets/zen1.jpg";
import Zen2 from "../assets/zen2.jpg";
import Zen3 from "../assets/zen3.jpg";
import Zen4 from "../assets/zen4.jpg";

const WhyChoose = () => {
  return (
    <section className="py-20 md:py-28 bg-[#edf2fb]">
      <div className="container">

        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground drop-shadow-lg">
            Why Choose Zenxity?
          </h2>
          <div className="space-y-4">

            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
              If you own agricultural land but cannot actively manage it, Zenxity can help you generate income from it while ensuring modern, sustainable farming practices. Submit your details and our team will contact you to discuss the next steps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 p-4 lg:p-0 min-h-[500px]">
          <div 
            className="group relative overflow-hidden rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/50"
            style={{
              backgroundImage: `url(${Zen1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              maxHeight: '300px'
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Easy to Get Started</h3>
              <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors drop-shadow-md">Share your land details and our team takes care of the rest.</p>
            </div>
          </div>

          <div 
            className="group relative overflow-hidden rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-accent/50"
            style={{
              backgroundImage: `url(${Zen2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              maxHeight: '300px'
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Complete Transparency</h3>
              <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors drop-shadow-md">Track farming activities through real-time updates, photos, and reports.</p>
            </div>
          </div>

          <div 
            className="group relative overflow-hidden rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-green-500/50"
            style={{
              backgroundImage: `url(${Zen3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              maxHeight: '300px'
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Professional Management</h3>
              <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors drop-shadow-md">Experienced teams handle all farming operations efficiently.</p>
            </div>
          </div>

          <div 
            className="group relative overflow-hidden rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-emerald-500/50"
            style={{
              backgroundImage: `url(${Zen4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              maxHeight: '300px'
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Better Use of Your Land</h3>
              <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors drop-shadow-md">Convert unused land into productive farmland.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;

