import { BarChart3, Map, Activity, Bell, MessageCircle } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Profit Tracking",
    desc: "See your monthly earnings, pending payouts, and complete transaction history in one dashboard.",
    wide: true,
  },
  {
    icon: Map,
    title: "Land Management",
    desc: "Register multiple lands, upload documents, and track each one individually.",
  },
  {
    icon: Activity,
    title: "Live Farm Status",
    desc: "Real-time crop progress, growth photos, and harvest timelines updated weekly.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "Get notified about harvests, payments, weather warnings, and important updates.",
  },
  {
    icon: MessageCircle,
    title: "Tamil Support Chat",
    desc: "Talk to our team in Tamil or English. We're always here to help.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-[#edf2fb] to-white">
      <div className="container relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-semibold mb-6 shadow-lg">
            ✨ Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Everything you need, nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative rounded-3xl p-10 bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:border-primary/50 hover:bg-white overflow-hidden ${f.wide ? "md:col-span-2" : ""}`}
            >
              {/* 3D shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 -rotate-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 skew-x-12" />
              
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-green-500 flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-110 transition-all duration-500 group-hover:shadow-primary/25">
                <f.icon size={36} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center group-hover:text-primary transition-colors relative z-10 leading-tight">
                {f.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-center opacity-90 group-hover:text-gray-800 transition-colors relative z-10">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

