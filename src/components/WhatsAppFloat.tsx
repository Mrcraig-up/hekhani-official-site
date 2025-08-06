import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/0772189887" 
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 flex items-center gap-2"
      title="Talk to Us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="text-sm font-medium pr-1">Talk to Us</span>
    </a>
  );
};

export default WhatsAppFloat;