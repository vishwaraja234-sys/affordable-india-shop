import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Heart, 
  Gamepad2, 
  Book,
  Car,
  Baby
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      items: "50K+ items",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Fashion",
      icon: Shirt,
      items: "75K+ items", 
      gradient: "from-pink-500 to-rose-600"
    },
    {
      name: "Home Essentials",
      icon: Home,
      items: "30K+ items",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Beauty & Health",
      icon: Heart,
      items: "25K+ items",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Sports & Games",
      icon: Gamepad2,
      items: "15K+ items",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Books & Media",
      icon: Book,
      items: "40K+ items",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      name: "Automotive",
      icon: Car,
      items: "20K+ items",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      name: "Baby & Kids",
      icon: Baby,
      items: "18K+ items",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="group hover:shadow-warm transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground">
                    {category.items}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;