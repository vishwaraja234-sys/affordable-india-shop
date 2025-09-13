import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      review: "Amazing quality products at unbeatable prices! I've been shopping here for 6 months and never disappointed. Fast delivery and excellent customer service.",
      product: "Wireless Earphones"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      review: "The smartphone I ordered arrived in perfect condition. Great packaging and the price was 40% less than market. Highly recommend Affordable India!",
      product: "Smartphone"
    },
    {
      id: 3,
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      review: "Love their ethnic wear collection! The kurti I bought fits perfectly and the fabric quality is excellent. Will definitely order more.",
      product: "Traditional Kurti"
    },
    {
      id: 4,
      name: "Amit Singh",
      location: "Bangalore, Karnataka",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      review: "Great experience overall. The home essentials I ordered were exactly as described. Cash on delivery option made it very convenient.",
      product: "Home Essentials"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      review: "Fantastic customer support! Had an issue with my order and they resolved it within hours. The replacement product was delivered the next day.",
      product: "Beauty Products"
    },
    {
      id: 6,
      name: "Vikram Joshi",
      location: "Pune, Maharashtra",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      review: "Been shopping here for a year now. Consistent quality, competitive prices, and reliable delivery. My go-to platform for online shopping.",
      product: "Electronics"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Affordable India for their shopping needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-warm transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <Quote className="h-5 w-5 text-primary/40 group-hover:text-primary transition-colors" />
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonial.rating 
                              ? 'fill-warning text-warning' 
                              : 'text-muted-foreground/30'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-foreground mb-3 leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
                
                <p className="text-sm text-primary font-medium">
                  Purchased: {testimonial.product}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;