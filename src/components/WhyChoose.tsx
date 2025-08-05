import { Card } from "@/components/ui/card";
import { CheckCircle, Users, MapPin, GraduationCap } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      title: "95%+ Germination Rate",
      description: "Rigorous testing ensures consistently high germination rates"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Affordable & Accessible",
      description: "Available nationwide through our extensive dealer network"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Tested for Zimbabwe",
      description: "Specially tested and adapted for Zimbabwean soil and climate"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      title: "Extension Support",
      description: "Agricultural training and support for better farming practices"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 colorful-text">
            Why Choose Hekhani?
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To Establish A Prevalent Presence Of Successful Agriculture On Every Acre In Zimbabwe And Beyond.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To Be The Most Trusted Seeds Driven By Science, Technology And Preserving The Environment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Core Values</h3>
                <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
                  <span className="px-4 py-2 bg-accent/20 rounded-full hover-scale">Responsibility</span>
                  <span className="px-4 py-2 bg-accent/20 rounded-full hover-scale">Community</span>
                  <span className="px-4 py-2 bg-accent/20 rounded-full hover-scale">Creativity</span>
                  <span className="px-4 py-2 bg-accent/20 rounded-full hover-scale">Honesty</span>
                  <span className="px-4 py-2 bg-accent/20 rounded-full hover-scale">Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-6 interactive-card glow-effect text-center group slide-in vibrant-bg pulse-border"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;