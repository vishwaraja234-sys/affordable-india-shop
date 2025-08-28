import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BestSellers = () => {
  const bestSellingProducts = [
    {
      id: "1",
      name: "Wireless Bluetooth Earphones with Premium Sound Quality",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
      originalPrice: 2999,
      salePrice: 1499,
      rating: 4.4,
      reviews: 1250,
      discount: 50,
      badge: "Bestseller"
    },
    {
      id: "2", 
      name: "Cotton Casual T-Shirt for Men - Premium Quality",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      originalPrice: 1499,
      salePrice: 749,
      rating: 4.2,
      reviews: 865,
      discount: 50,
      stockUrgency: "Only 3 left!"
    },
    {
      id: "3",
      name: "Smart Watch with Health Monitoring Features", 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      originalPrice: 4999,
      salePrice: 2999,
      rating: 4.6,
      reviews: 2340,
      discount: 40,
      badge: "Trending"
    },
    {
      id: "4",
      name: "Stainless Steel Water Bottle - BPA Free",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop", 
      originalPrice: 899,
      salePrice: 549,
      rating: 4.5,
      reviews: 445,
      discount: 39
    },
    {
      id: "5",
      name: "Women's Ethnic Kurti - Traditional Design",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      originalPrice: 1999,
      salePrice: 1199,
      rating: 4.3,
      reviews: 678,
      discount: 40,
      stockUrgency: "Only 2 left!"
    },
    {
      id: "6",
      name: "LED Desk Lamp with USB Charging Port",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      originalPrice: 1799,
      salePrice: 1079,
      rating: 4.1,
      reviews: 290,
      discount: 40
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Best Sellers in India
            </h2>
            <p className="text-muted-foreground">
              Most loved products by our customers
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" className="w-full max-w-xs">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;