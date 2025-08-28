import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Quality Products at{" "}
              <span className="text-yellow-200">Affordable Prices</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover amazing deals on electronics, fashion, home essentials and more. 
              Shop with confidence and enjoy fast delivery across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-warm hover:shadow-glow transition-all">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all">
                View Deals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 text-center lg:text-left">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">1000+</div>
                <div className="text-white/80 text-sm">Products</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">4.8★</div>
                <div className="text-white/80 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroBanner} 
                alt="Quality products showcase" 
                className="rounded-2xl shadow-warm w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10 transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;