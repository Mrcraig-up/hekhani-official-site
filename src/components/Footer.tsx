import { Facebook, Instagram, MessageSquare, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Hekhani Seeds</h3>
            <p className="text-muted-foreground">
              Nurturing growth, one seed at a time. Let's grow Zimbabwe's future together.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 hover-scale" asChild>
                <a href="https://www.facebook.com/hekhani.seedszw/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 hover-scale" asChild>
                <a href="https://www.linkedin.com/company/hekhani-seeds/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 hover-scale" asChild>
                <a href="https://wa.me/263772189887" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 hover-scale">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Maize Seeds</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sorghum & Millet</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Vegetable Seeds</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Seed Catalog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Distribution</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partnerships</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Farming Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Training</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Find Dealers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © 2025 Hekhani Seeds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;