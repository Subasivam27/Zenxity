import { Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#edf2fb]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Have a question? Talk to us.
              </h2>
             
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+91 90423 59210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
 <a href="mailto:zenxity.in@gmail.com" className="font-semibold text-foreground hover:text-primary transition-colors">zenxity.in@gmail.com</a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919042359210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-whatsapp text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right - Form */}
          <div className="p-8 rounded-2xl bg-[#edf2fb] border border-border">
            <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault()
              toast({
                title: "Message Sent!",
                description: "We'll get back to you soon.",
              })
            }}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-input bg-[#edf2fb] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                <input type="tel" placeholder="+91" className="w-full px-4 py-3 rounded-xl border border-input bg-[#edf2fb] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Your District</label>
                <input type="text" placeholder="e.g. Coimbatore" className="w-full px-4 py-3 rounded-xl border border-input bg-[#edf2fb] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your land..." className="w-full px-4 py-3 rounded-xl border border-input bg-[#edf2fb] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
