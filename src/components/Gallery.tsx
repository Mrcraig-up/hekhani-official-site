import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/lovable-uploads/7fa6098e-ae3e-4f7d-8383-bf5acc105586.png",
      title: "Hekhani Maize Seeds",
      description: "Premium quality ZS265 maize seeds ready for distribution",
    },
    {
      id: 2,
      image: "/lovable-uploads/e7277933-7b93-4a83-a542-fc0b6c17672a.png",
      title: "Happy Farmers",
      description: "Satisfied customers with their Hekhani maize harvest",
    },
    {
      id: 3,
      image: "/lovable-uploads/7a37761b-9e6f-4f77-ab10-bbded9cae76e.png",
      title: "Quality Maize Harvest",
      description: "Premium maize cobs from Hekhani seeds",
    },
    {
      id: 4,
      image: "/lovable-uploads/f870e43e-806b-4e3e-983a-f6d704a0c5e1.png",
      title: "Field Research",
      description: "Our agronomist conducting field research on soybean varieties",
    },
    {
      id: 5,
      image: "/lovable-uploads/f3c24cae-b8cc-4676-ad27-263e35b8533a.png",
      title: "Soybean Fields",
      description: "Lush green soybean fields using Hekhani certified seeds",
    },
    {
      id: 6,
      image: "/lovable-uploads/5115f646-5d48-4ba9-95b8-bb6f43fe51c2.png",
      title: "Sorghum Cultivation",
      description: "Healthy sorghum crops ready for harvest",
    },
    {
      id: 7,
      image: "/lovable-uploads/518524a9-b4e6-45aa-9219-145bd98f0769.png",
      title: "Modern Irrigation",
      description: "Advanced irrigation systems supporting sustainable agriculture",
    },
    {
      id: 8,
      image: "/lovable-uploads/218e16aa-c96a-4e85-8cb9-cf46e3f0c4f9.png",
      title: "Seed Varieties",
      description: "Diverse collection of premium seed varieties",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 colorful-text">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Our Journey Through Pictures - From Seed To Harvest
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
          {galleryImages.map((item, index) => (
            <Card key={item.id} className="group overflow-hidden interactive-card glow-effect slide-in vibrant-bg pulse-border" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden interactive-card glow-effect mx-2 vibrant-bg pulse-border">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover-scale" />
            <CarouselNext className="hover-scale" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;