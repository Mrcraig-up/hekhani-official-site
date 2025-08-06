import { MessageSquare } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/263772189887" 
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse"
      title="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat;