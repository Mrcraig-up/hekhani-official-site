import { Card } from "@/components/ui/card";
import { Beaker, Handshake, Thermometer, Users } from "lucide-react";

const Research = () => {
  const initiatives = [
    {
      icon: <Beaker className="w-6 h-6 text-white" />,
      title: "Continuous R&D",
      description: "Ongoing research and development for seed improvement"
    },
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      title: "Research Partnerships", 
      description: "Collaborating with local agricultural research institutions"
    },
    {
      icon: <Thermometer className="w-6 h-6 text-white" />,
      title: "Climate-Resilient Seeds",
      description: "Developing varieties that withstand changing climate conditions"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community Trials",
      description: "Trial plots across rural provinces for real-world testing"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="research">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Research & Innovation
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Driven by Science. Proven by Fields.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect text-center group transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                {initiative.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{initiative.title}</h3>
              <p className="text-white/60 text-sm">{initiative.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;