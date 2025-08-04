import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch for seed inquiries, dealer partnerships, or agricultural support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="p-6 glass-effect">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-white/60">sales@hekhaniseeds.co.zw</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-effect">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-white/60">+263780046554</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-effect">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="text-white/60">4 Bannockburn close Mt pleasant, Harare</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 glass-effect">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell us about your farming needs..."
                />
              </div>
              <Button className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;