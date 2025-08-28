import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <>
      {/* Trust Signals Bar */}
      <div className="bg-gradient-warm py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-6 text-center">
          <span className="flex items-center gap-1">
            <span className="text-success">✓</span> Free Shipping on Orders Above ₹999
          </span>
          <span className="flex items-center gap-1">
            <span className="text-success">✓</span> Secure Payment
          </span>
          <span className="flex items-center gap-1">
            <span className="text-success">✓</span> Easy Returns
          </span>
          <span className="flex items-center gap-1">
            <span className="text-success">✓</span> Cash on Delivery
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Affordable India
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search for products, brands and more..." 
                  className="pl-10 pr-4 py-2 rounded-full border-primary/20 focus:border-primary"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                  3
                </Badge>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 mt-4 pt-4 border-t">
            <Button variant="ghost" className="hover:text-primary">Electronics</Button>
            <Button variant="ghost" className="hover:text-primary">Fashion</Button>
            <Button variant="ghost" className="hover:text-primary">Home Essentials</Button>
            <Button variant="ghost" className="hover:text-primary">Beauty & Health</Button>
            <Button variant="ghost" className="text-primary font-semibold">Deals of the Day</Button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;