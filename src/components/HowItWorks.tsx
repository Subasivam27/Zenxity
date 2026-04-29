import { MapPin, Sprout, Banknote } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Register Your Land",
    desc: "Just your name, land location, and a photo. Our team will call you within 24 hours to verify.",
  },
  {
    num: "02",
    icon: Sprout,
    title: "We Manage Everything",
    desc: "Our expert team takes full charge — from land prep and planting to monitoring and harvest. You get photo updates every week.",
  },
  {
    num: "03",
    icon: Banknote,
    title: "Receive Your Returns",
    desc: "After every harvest, money goes directly to your bank account. Track every rupee on your phone.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-[#edf2fb] to-[#edf2fb]">
      <div className="container relative">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-semibold mb-6 shadow-lg">
            🚀 How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Three steps. That's it.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            No complicated process. No technical knowledge needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div 
              key={s.num} 
              className="group relative rounded-3xl p-10 bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Number badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-2xl border-4 border-white text-white font-black text-2xl drop-shadow-lg z-20">
                {s.num}
              </div>

              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-xl relative z-10">
                <s.icon size={36} className="text-white drop-shadow-lg" />
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-6 text-center leading-tight relative z-10">
                {s.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-center opacity-95 relative z-10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

