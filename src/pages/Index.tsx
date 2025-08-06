import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import WhyChoose from "@/components/WhyChoose";
import Research from "@/components/Research";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Download";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Gallery />
      <WhyChoose />
      <Research />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;