import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Nurturing Growth, One Seed at a Time
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl">
            Premium, drought-tolerant, and high-yield seeds tailored for African farmers. Tested for Zimbabwean soil and climate.
          </p>
          <div className="flex gap-4">
            <Button className="px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90">
              View Products
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
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
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1288&auto=format&fit=crop"
              alt="Farmer planting seeds in lush field"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;