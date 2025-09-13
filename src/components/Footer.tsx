import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-primary/10 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Get Exclusive Deals & Offers
          </h3>
          <p className="text-background/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about flash sales, 
            new arrivals, and special discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="bg-background text-foreground"
            />
            <Button variant="secondary" className="shrink-0">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Affordable India
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Your trusted online shopping destination for quality products 
              at affordable prices. Shop with confidence across India.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Home Essentials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Beauty & Health</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sports & Games</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Books & Media</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4 text-background/80">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Customer Support</p>
                  <p>+91 9876543210</p>
                  <p className="text-sm">Mon-Sun: 9AM-9PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p>support@affordableindia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">WhatsApp Support</p>
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2024 Affordable India. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Serving across India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;