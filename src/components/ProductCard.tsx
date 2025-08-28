import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  reviews: number;
  discount: number;
  badge?: string;
  stockUrgency?: string;
}

const ProductCard = ({ 
  name, 
  image, 
  originalPrice, 
  salePrice, 
  rating, 
  reviews, 
  discount,
  badge,
  stockUrgency 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-warm transition-all duration-300 border-border/50 overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-muted overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {badge && (
            <Badge variant="destructive" className="text-xs px-2 py-1">
              {badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-success text-success-foreground text-xs px-2 py-1">
              {discount}% OFF
            </Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white shadow-soft"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Stock Urgency */}
        {stockUrgency && (
          <div className="absolute bottom-2 left-2">
            <Badge variant="warning" className="text-xs px-2 py-1">
              {stockUrgency}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-foreground">₹{salePrice.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">₹{originalPrice.toLocaleString()}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button size="sm" variant="outline" className="px-4">
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;