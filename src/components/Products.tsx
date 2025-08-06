import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      image: "/lovable-uploads/89b7a356-61b6-4d66-81ea-4fa1c6dfc1c5.png",
      title: "Guinea Fowl (CG7)",
      description: "Suitable for Fresh Pod, Confectionery, and peanut butter markets. Red in colour, large seed, drought tolerant.",
    },
    {
      id: 2,
      image: "/lovable-uploads/26630fc4-f154-4c36-aae7-672c46f88150.png",
      title: "ZS 265 Maize Hybrid",
      description: "Drought tolerant maize hybrid. Semi-flint, medium maturing hybrid (120-130 days). Yield potential of 7-12t/ha.",
    },
    {
      id: 3,
      image: "/lovable-uploads/3f57396c-1fed-419a-888d-5b3e7ee7b817.png",
      title: "Mhembwe Soybean",
      description: "Certified determinate variety suitable for production in all Soybean production regions. Yield potential of 4t/ha.",
    },
    {
      id: 4,
      image: "/lovable-uploads/daf4c851-fa8d-423a-b8e5-c42e82516609.png",
      title: "Bimha Soybean",
      description: "Determinate variety suitable for production in all Soybean production regions. Medium maturing variety (132 days).",
    },
    {
      id: 5,
      image: "/lovable-uploads/1b2458d4-5f49-47c8-9ff5-917e5d09ca08.png",
      title: "Hysun 33 Sunflower",
      description: "Hybrid seed with 105-115 days to physiological maturity. Yield potential of 2.5 tonnes under good management.",
    },
    {
      id: 6,
      image: "/lovable-uploads/3af9f79b-6b3c-41a4-8262-ef295f989304.png",
      title: "ZS 265 Drought Tolerant",
      description: "Drought tolerant maize hybrid ZS265. Semi-flint, medium maturing hybrid with excellent standability.",
    },
    {
      id: 7,
      image: "/lovable-uploads/d1c729f4-003f-4084-a323-923aa3e7eb99.png",
      title: "Mhembwe Certified",
      description: "Early maturing variety (117 days). Resistant to soybean rust, bacterial blight, downy mildew, red leaf blotchy.",
    },
    {
      id: 8,
      image: "/lovable-uploads/a1de4be5-dfb8-489d-b310-f6141cb3268b.png",
      title: "Bimha Certified",
      description: "Has acceptable resistance to bacterial blight, downy mildew, red leaf blotchy and frog eye leaf spot.",
    },
    {
      id: 9,
      image: "/lovable-uploads/5012f990-4084-4878-ae7c-409fef55d539.png",
      title: "Guinea Fowl Groundnuts",
      description: "More suitable for Fresh Pod, Confectionery, and peanut butter markets. Medium maturing variety (120-130 days).",
    },
  ];

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 colorful-text">
            Our Premium Seed Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover Our Range Of Certified, High-Quality Seeds Designed For Zimbabwe's Agricultural Conditions.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <Card key={product.id} className="group overflow-hidden interactive-card glow-effect slide-in vibrant-bg pulse-border" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-3xl mx-auto">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden interactive-card glow-effect mx-2 vibrant-bg pulse-border">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
            <CarouselPrevious className="hover-scale" />
            <CarouselNext className="hover-scale" />
          </Carousel>
        </div>

        {/* Seed Catalogue Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6 colorful-text">
            Complete Seed Catalogue
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Download Our Complete Catalogue For Detailed Information On All Our Premium Seed Varieties, 
            Planting Guidelines, And Agricultural Best Practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/263772189887?text=I would like to request the Hekhani Seeds catalogue">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover-scale glow-effect">
                Request Catalogue via WhatsApp
              </Button>
            </a>
            <Button variant="outline" className="hover-scale">
              Download PDF Catalogue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;