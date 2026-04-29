import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import zenxityLogo from "@/assets/zenxity_logo.jpeg";

const Navbar = () => {
  const [open, setOpen ] = useState(false);

  const links = [
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-xl shadow-sm border-b border-border/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <img src={zenxityLogo} alt="Zenxity" className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold text-primary">Zenxity</span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors data-[active]:text-primary data-[active]:font-semibold"
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity data-[active]:bg-primary/90"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-medium text-foreground/80 hover:text-primary data-[active]:text-primary data-[active]:font-semibold"
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground data-[active]:bg-primary/90"
          >
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

