import { Facebook, Instagram, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hekhani Seeds</h3>
            <p className="text-white/60">
              Nurturing growth, one seed at a time. Let's grow Zimbabwe's future together.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <MessageSquare className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Maize Seeds</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Sorghum & Millet</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Vegetable Seeds</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Seed Catalog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Distribution</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Farming Tips</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Find Dealers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © 2024 Hekhani Seeds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;