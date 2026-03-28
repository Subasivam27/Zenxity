import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToHome = () => {
  return (
    <Link
      to="/"
      className="fixed left-4 top-6 md:top-8 z-40 bg-background/95 backdrop-blur-sm border border-border shadow-lg rounded-xl p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center gap-2 text-sm font-medium text-foreground hover:shadow-xl"
      title="Back to Home"
    >
      <Home size={18} />
      Home
    </Link>
  );
};

export default BackToHome;

