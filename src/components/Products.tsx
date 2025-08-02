import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "/lovable-uploads/569850c3-93e7-490b-8ddd-16db7249d299.png",
      title: "Hysun 33 Sunflower",
      description: "Resistant & Resilient sunflower variety designed for optimal yield in Zimbabwe's climate.",
    },
    {
      id: 2,
      image: "/lovable-uploads/c6aa77b5-dbe0-4d8e-81df-cdae00cb8057.png",
      title: "Bimha Soybean Seed",
      description: "Certified determinate variety suitable for production in all soybean production regions.",
    },
    {
      id: 3,
      image: "/lovable-uploads/831f0227-954d-4034-ade7-14ceaf40401c.png",
      title: "Premium Maize",
      description: "High-quality white maize varieties for consistent yields and excellent storage.",
    },
    {
      id: 4,
      image: "/lovable-uploads/5c8c75e6-1a9c-443c-a759-43a12a54becb.png",
      title: "Sunflower Fields",
      description: "Our sunflower varieties thriving in Zimbabwe's agricultural landscape.",
    },
    {
      id: 5,
      image: "/lovable-uploads/4244c6a0-41e2-4f38-8e77-86b336938acb.png",
      title: "Farming Success",
      description: "Farmers achieving excellent results with our quality seed varieties.",
    },
    {
      id: 6,
      image: "/lovable-uploads/364cd459-b7d2-4a76-8e86-8be57ddb29d3.png",
      title: "Soybean Fields",
      description: "Healthy soybean crops growing strong with our certified seeds.",
    },
    {
      id: 7,
      image: "/lovable-uploads/dc188b9b-0d19-4ea3-9af4-d984188ac304.png",
      title: "Field Operations",
      description: "Supporting farmers with quality seeds for sustainable agriculture.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Premium Seed Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of certified, high-quality seeds designed for Zimbabwe's agricultural conditions.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">{product.title}</h3>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Products;