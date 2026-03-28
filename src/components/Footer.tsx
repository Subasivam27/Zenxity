import { Link } from "react-router-dom";
import leafLogo from "@/assets/zenxity-leaf.png";
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={leafLogo} alt="Zenxity" className="w-7 h-7 brightness-200" />
              <span className="text-lg font-bold">Zenxity</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Turning idle farmland into productive, income-generating assets — managed entirely by our expert team with full transparency.
            </p>
            <a
              href="https://wa.me/919042359210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-whatsapp text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href={`#social-${i}`} aria-label={`Follow us on ${['Facebook', 'Instagram', 'Twitter', 'YouTube'][i]}`} className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon size={16} className="text-background/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/50">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Mission", to: "/mission" },
                { label: "Our Services", to: "/services" },
                { label: "Success Stories", to: "/stories" },
                { label: "Help Center", to: "/help" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-background/60 hover:text-background transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/50">Services</h4>
            <ul className="space-y-2.5">
              {["Contract Farming", "Land Preparation", "Crop Monitoring", "Harvesting", "Real-time Updates", "Farmer Communication"].map((l) => (
                <li key={l}>
                  <Link to="/services" className="text-sm text-background/60 hover:text-background transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/50">Contact Us</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>📞 +91 90423 59210</li>
              <li>✉️ hello@zenxity.in</li>
              <li>🌐 zenxity.in</li>
              <li className="pt-2">📍 Coimbatore, Tamil Nadu</li>
              <li>Mon–Sat, 9 AM – 6 PM</li>
              <li>Tamil & English support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2025 Zenxity Agri Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="text-center text-sm text-background/40 mt-4">
          Made with 🌿 in Coimbatore
        </div>
      </div>
    </footer>
  );
};

export default Footer;
