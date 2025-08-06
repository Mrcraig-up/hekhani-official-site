import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight colorful-text">
            Nurturing Growth, One Seed At A Time
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl">
            Premium, Drought-Tolerant, And High-Yield Seeds Tailored For African Farmers. Tested For Zimbabwean Soil And Climate.
          </p>
          <div className="flex gap-4">
            <a href="#products">
              <Button className="px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90 hover-scale glow-effect">
                View Products
              </Button>
            </a>
            <Button variant="outline" className="px-8 py-6 text-lg text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 hover-scale glow-effect">
              Contact Us
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-primary-foreground">95%+</div>
              <div className="text-primary-foreground/60">Germination Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">1000+</div>
              <div className="text-primary-foreground/60">Happy Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">10+</div>
              <div className="text-primary-foreground/60">Seed Varieties</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/f3c24cae-b8cc-4676-ad27-263e35b8533a.png"
              alt="Lush green soybean field"
              className="w-full h-auto hover-scale glow-effect"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;