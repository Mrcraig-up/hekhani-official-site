import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import Research from "@/components/Research";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhyChoose />
      <Research />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;