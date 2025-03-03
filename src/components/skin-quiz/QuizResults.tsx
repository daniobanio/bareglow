import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
type SkinProfile = {
  type: string;
  concerns: string[];
  routine: Array<{ step: string; product: string }>;
  recommendations: Array<{ id: number; name: string; price: string }>;
};
type QuizResultsProps = {
  results: SkinProfile;
  navigateToProfile: () => void;
};
const QuizResults = ({ results, navigateToProfile }: QuizResultsProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rosegold-100 mb-4">
          <CheckCircle className="h-10 w-10 text-rosegold-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-light mb-4">Your Personalized Skin Profile</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your responses, we've created a customized skincare routine and product recommendations tailored to your unique skin needs.
        </p>
      </div>
      
      <div className="bg-rosegold-50/50 rounded-xl p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-medium mb-2">Your Skin Type</h3>
            <p className="text-2xl font-light text-rosegold-700">{results.type}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Primary Concerns</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {results.concerns.map((concern, index) => (
                <Badge key={index} className="bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200">
                  {concern}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Routine Complexity</h3>
            <p className="text-2xl font-light text-rosegold-700">
              {results.routine.length} Steps
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-soft p-8 border border-gray-100">
          <h3 className="text-2xl font-light mb-6">Your Custom Routine</h3>
          <div className="space-y-6">
            {results.routine.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rosegold-100 flex items-center justify-center">
                  <span className="text-rosegold-700 font-medium">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg">{step.step}</h4>
                  <p className="text-muted-foreground">{step.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-soft p-8 border border-gray-100">
          <h3 className="text-2xl font-light mb-6">Product Recommendations</h3>
          <div className="space-y-4">
            {results.recommendations.map((product, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                <div className="w-16 h-16 bg-champagne-50 rounded-md overflow-hidden">
                  <img
                    src={index % 2 === 0 ? "/public/lovable-uploads/26ef6c70-072f-4fbc-ba71-087b03473950.png" : "/public/lovable-uploads/6823db39-a705-46c2-9de6-c32a15467ddc.png"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">Ideal for {results.type} skin</p>
                </div>
                <div className="font-medium text-rosegold-700">{product.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button className="rounded-full bg-rosegold-500 hover:bg-rosegold-600" asChild>
              <Link to="/products">Shop Recommended Products</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-champagne-50/50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-light mb-4">Save Your Results</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Create an account or sign in to save your skin profile and get personalized recommendations over time. Your skin changes, and your routine should too!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" className="rounded-full" onClick={navigateToProfile}>
            Sign In
          </Button>
          <Button className="rounded-full bg-rosegold-500 hover:bg-rosegold-600">
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};
export default QuizResults;