import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/db47aeec-9643-4220-8905-0ce11575d590.png" 
            alt="Hekhani Seeds Logo" 
            className="h-16 w-auto hover-scale glow-effect"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">Products</a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="#research" className="text-foreground/80 hover:text-foreground transition-colors">Research</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          <Button variant="outline" className="text-foreground border-border hover:bg-accent/10">
            View Products
          </Button>
          <a href="https://wa.me/263772189887" className="flex items-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hover-scale glow-effect">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;