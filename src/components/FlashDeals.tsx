import { useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "./ProductCard";

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDealProducts = [
    {
      id: "fd1",
      name: "Premium Smartphone with 128GB Storage",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      originalPrice: 24999,
      salePrice: 14999,
      rating: 4.5,
      reviews: 3420,
      discount: 40,
      badge: "Flash Deal",
      stockUrgency: "Only 5 left!"
    },
    {
      id: "fd2",
      name: "Wireless Headphones with Noise Cancellation",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      originalPrice: 8999,
      salePrice: 4499,
      rating: 4.6,
      reviews: 1890,
      discount: 50,
      badge: "Flash Deal"
    },
    {
      id: "fd3",
      name: "Gaming Mechanical Keyboard RGB Backlit",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      originalPrice: 5999,
      salePrice: 2999,
      rating: 4.4,
      reviews: 756,
      discount: 50,
      badge: "Flash Deal",
      stockUrgency: "Only 3 left!"
    },
    {
      id: "fd4",
      name: "Fitness Tracker with Heart Rate Monitor",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
      originalPrice: 3999,
      salePrice: 1999,
      rating: 4.3,
      reviews: 1245,
      discount: 50,
      badge: "Flash Deal"
    }
  ];

  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header with Countdown */}
        <Card className="mb-8 bg-primary text-primary-foreground shadow-warm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
                  <Clock className="h-8 w-8" />
                  Flash Deals
                </h2>
                <p className="text-primary-foreground/90">
                  Limited time offers - grab them before they're gone!
                </p>
              </div>
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Ends in:</span>
                <div className="flex gap-2">
                  <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-16">
                    <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className="text-2xl font-bold self-center">:</div>
                  <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-16">
                    <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Mins</div>
                  </div>
                  <div className="text-2xl font-bold self-center">:</div>
                  <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-16">
                    <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Secs</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flash Deal Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {flashDealProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="shadow-soft">
            View All Flash Deals
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;