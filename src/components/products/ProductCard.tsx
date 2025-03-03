import { ThumbsUp, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="glass-card p-6 rounded-xl h-full">
      <div className="aspect-square mb-6 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-rosegold-300/20 to-transparent mix-blend-overlay"></div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>

      <div className="flex justify-between items-start mb-2">
        <div>
          <Link to={`/products/${product.id}`} className="hover:text-rosegold-600 transition-colors">
            <h3 className="font-medium text-xl mb-1">{product.name}</h3>
          </Link>
          <p className="text-muted-foreground text-sm">{product.brand}</p>
        </div>
        <div className="flex items-center bg-secondary rounded-full px-2 py-1">
          <Star className="h-3 w-3 text-rosegold-500 fill-rosegold-500" />
          <span className="text-xs font-medium ml-1">{product.rating}</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {product.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <div className="flex items-center text-xs text-muted-foreground">
            <ThumbsUp className="h-3 w-3 mr-1" />
            <span>{Math.floor(product.reviews * 0.7)}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <MessageCircle className="h-3 w-3 mr-1" />
            <span>{product.reviews}</span>
          </div>
        </div>
        <Link to={`/products/${product.id}`}>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-rosegold-600 hover:text-rosegold-700 hover:bg-rosegold-50"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
