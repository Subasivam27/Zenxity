import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const faqs = [
  { q: "What types of land can I register?", a: "Any agricultural land in Tamil Nadu — wet land, dry land, or garden land. Even if it's been idle for years, we can assess and start farming on it." }, 
  { q: "When will I start earning?", a: "Typically within 3–6 months after the first crop cycle. Earnings depend on crop type, land size, and season." },
  { q: "Do you support Tamil?", a: "Yes! Our team speaks Tamil and English. All communication — calls, WhatsApp, and updates — can be in Tamil." },
];

const HelpCenter = () => {
  const { toast } = useToast();
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
              { icon: Mail, label: "Email Us", value: "zenxity.in@gmail.com" },
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
            <form className="mt-12 p-8 rounded-2xl bg-card border border-border space-y-4" onSubmit={(e) => {
              e.preventDefault()
              toast({
                title: "Message Submitted!",
                description: "We'll get back to you soon.",
              })
            }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Still need help? Send us a message</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your issue..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-vertical"
                ></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Submit Message
              </button>
            </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;

