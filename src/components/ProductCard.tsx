
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ name, description, price, image, category, isNew }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-green-500">
            Nouveau
          </Badge>
        )}
        <Badge className="absolute top-2 left-2 bg-blue-500">
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors">
          En savoir plus
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
