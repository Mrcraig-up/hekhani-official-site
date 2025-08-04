import { Card } from "@/components/ui/card";
import { CheckCircle, Users, MapPin, GraduationCap } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "95%+ Germination Rate",
      description: "Rigorous testing ensures consistently high germination rates"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Affordable & Accessible",
      description: "Available nationwide through our extensive dealer network"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Tested for Zimbabwe",
      description: "Specially tested and adapted for Zimbabwean soil and climate"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Extension Support",
      description: "Agricultural training and support for better farming practices"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Hekhani?
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-white/80 mb-8">
              Hekhani Seeds is a profit for social enterprise that seeks to improve crop productivity and profitability for smallholder farmers through the provision of high performing seed varieties and our commitment to continuous product development.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">Core Values</h3>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <span className="px-4 py-2 bg-accent/20 rounded-full">Responsibility</span>
              <span className="px-4 py-2 bg-accent/20 rounded-full">Community</span>
              <span className="px-4 py-2 bg-accent/20 rounded-full">Creativity</span>
              <span className="px-4 py-2 bg-accent/20 rounded-full">Honesty</span>
              <span className="px-4 py-2 bg-accent/20 rounded-full">Growth</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect text-center group transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{reason.title}</h3>
              <p className="text-white/60 text-sm">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;