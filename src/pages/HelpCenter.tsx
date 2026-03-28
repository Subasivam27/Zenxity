import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const faqs = [
  { q: "What types of land can I register?", a: "Any agricultural land in Tamil Nadu — wet land, dry land, or garden land. Even if it's been idle for years, we can assess and start farming on it." },
  { q: "How do you verify the farmers?", a: "We personally verify every farmer through local references, land records, and face-to-face interviews. Only experienced, trusted farmers are matched to your land." },
  { q: "When will I start earning?", a: "Typically within 3–6 months after the first crop cycle. Earnings depend on crop type, land size, and season." },
  { q: "Is there any cost to register?", a: "Registration is completely free. We offer free, standard (₹99/mo), and premium (₹299/mo) plans depending on the level of updates and support you want." },
  { q: "Can I cancel anytime?", a: "Yes. There's no lock-in period. You can cancel your subscription or stop farming at any time." },
  { q: "Do you support Tamil?", a: "Yes! Our team speaks Tamil and English. All communication — calls, WhatsApp, and updates — can be in Tamil." },
];

const HelpCenter = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToHome />
      <main className="pt-24 pb-20">
        <section className="container max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Help Center
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How can we help?
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Find answers to common questions or reach out to our team directly.
          </p>

          {/* Contact options */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Phone, label: "Call Us", value: "+91 90423 59210" },
              { icon: Mail, label: "Email Us", value: "hello@zenxity.in" },
              { icon: Clock, label: "Hours", value: "Mon–Sat, 9–6 PM" },
            ].map((c) => (
              <div key={c.label} className="p-5 rounded-2xl bg-card border border-border text-center">
                <c.icon size={22} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{c.label}</p>
                <p className="font-semibold text-foreground text-sm">{c.value}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919042359210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-whatsapp text-primary-foreground font-semibold hover:opacity-90 transition-opacity mb-12"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>

          {/* FAQs */}
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 rounded-2xl bg-card border border-border">
                <summary className="cursor-pointer font-semibold text-foreground list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Still need help? Send us a message</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your issue..."
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-vertical"
                ></textarea>
              </div>
              <button className="w-full md:w-auto inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-whatsapp text-primary-foreground hover:opacity-90 transition-opacity">
                Send Message via WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
