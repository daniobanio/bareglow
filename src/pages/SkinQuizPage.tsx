// Add these imports at the top of the file
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import usePageTitle from "@/hooks/usePageTitle";

// Quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "How would you describe your skin type?",
    type: "single",
    options: [
      { id: "dry", label: "Dry - Often feels tight, flaky or rough" },
      { id: "oily", label: "Oily - Shiny, especially in T-zone, prone to breakouts" },
      { id: "combination", label: "Combination - Oily T-zone but dry cheeks" },
      { id: "normal", label: "Normal - Neither too oily nor too dry" },
      { id: "sensitive", label: "Sensitive - Easily irritated, prone to redness" },
    ],
  },
  {
    id: 2,
    question: "What are your main skin concerns?",
    type: "multiple",
    options: [
      { id: "acne", label: "Acne or breakouts" },
      { id: "aging", label: "Signs of aging (fine lines, wrinkles)" },
      { id: "uneven", label: "Uneven skin tone or hyperpigmentation" },
      { id: "dryness", label: "Dryness or dehydration" },
      { id: "texture", label: "Rough texture or large pores" },
      { id: "redness", label: "Redness or irritation" },
      { id: "dullness", label: "Dullness or lack of radiance" },
    ],
  },
  {
    id: 3,
    question: "How much time do you spend outdoors on a typical day?",
    type: "single",
    options: [
      { id: "minimal", label: "Minimal (less than 30 minutes)" },
      { id: "moderate", label: "Moderate (30 minutes to 2 hours)" },
      { id: "significant", label: "Significant (more than 2 hours)" },
    ],
  },
  {
    id: 4,
    question: "Do you currently use sunscreen daily?",
    type: "single",
    options: [
      { id: "always", label: "Yes, always" },
      { id: "sometimes", label: "Sometimes" },
      { id: "rarely", label: "Rarely or never" },
    ],
  },
  {
    id: 5,
    question: "What products do you currently use in your skincare routine?",
    type: "multiple",
    options: [
      { id: "cleanser", label: "Cleanser" },
      { id: "toner", label: "Toner" },
      { id: "serum", label: "Serum" },
      { id: "moisturizer", label: "Moisturizer" },
      { id: "spf", label: "Sunscreen" },
      { id: "exfoliant", label: "Exfoliant" },
      { id: "mask", label: "Face masks" },
      { id: "eye", label: "Eye cream" },
      { id: "none", label: "None of the above" },
    ],
  },
  {
    id: 6,
    question: "How would you describe your preferred skincare routine?",
    type: "single",
    options: [
      { id: "minimal", label: "Minimal - Quick and easy, 2-3 steps" },
      { id: "moderate", label: "Moderate - Balanced approach, 3-5 steps" },
      { id: "extensive", label: "Extensive - Comprehensive routine, 5+ steps" },
    ],
  },
];

const SkinQuizPage = () => {
  usePageTitle("Skin Quiz");
  
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Calculate progress percentage based on current step
    const progressPercentage = ((currentStep - 1) / quizQuestions.length) * 100;
    setProgress(progressPercentage);
  }, [currentStep]);

  const handleSingleAnswer = (questionId, answerId) => {
    setAnswers({
      ...answers,
      [questionId]: answerId,
    });
  };

  const handleMultipleAnswer = (questionId, answerId, checked) => {
    const currentAnswers = answers[questionId] || [];
    let newAnswers;

    if (checked) {
      // If answerId is "none", clear all other selections
      if (answerId === "none") {
        newAnswers = ["none"];
      } else {
        // If selecting a regular option, remove "none" if it exists
        newAnswers = [...currentAnswers.filter(id => id !== "none"), answerId];
      }
    } else {
      newAnswers = currentAnswers.filter(id => id !== answerId);
    }

    setAnswers({
      ...answers,
      [questionId]: newAnswers,
    });
  };

  const handleNext = () => {
    if (currentStep < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process results
      processResults();
      setQuizComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const processResults = () => {
    // In a real app, this would analyze the answers and generate personalized results
    // For now, we'll simulate results based on the first question (skin type)
    const skinType = answers[1];
    let skinProfile = {};

    switch (skinType) {
      case "dry":
        skinProfile = {
          type: "Dry",
          concerns: ["Dryness", "Flakiness"],
          routine: [
            { step: "Cleanse", product: "Hydrating Cream Cleanser" },
            { step: "Tone", product: "Alcohol-Free Hydrating Toner" },
            { step: "Treat", product: "Hyaluronic Acid Serum" },
            { step: "Moisturize", product: "Rich Cream Moisturizer" },
            { step: "Protect", product: "Hydrating SPF 30" },
          ],
          recommendations: [
            { id: 1, name: "Hydrating Cream Cleanser", price: "$24.99" },
            { id: 2, name: "Hyaluronic Acid Serum", price: "$35.99" },
            { id: 3, name: "Ultra Rich Moisturizer", price: "$29.99" },
          ],
        };
        break;
      case "oily":
        skinProfile = {
          type: "Oily",
          concerns: ["Excess Oil", "Breakouts"],
          routine: [
            { step: "Cleanse", product: "Gel Cleanser with Salicylic Acid" },
            { step: "Tone", product: "Oil-Control Toner" },
            { step: "Treat", product: "Niacinamide Serum" },
            { step: "Moisturize", product: "Oil-Free Gel Moisturizer" },
            { step: "Protect", product: "Mattifying SPF 50" },
          ],
          recommendations: [
            { id: 4, name: "Oil Control Gel Cleanser", price: "$22.99" },
            { id: 5, name: "Niacinamide + Zinc Serum", price: "$28.99" },
            { id: 6, name: "Oil-Free Moisturizer", price: "$26.99" },
          ],
        };
        break;
      case "combination":
        skinProfile = {
          type: "Combination",
          concerns: ["T-Zone Oiliness", "Dry Cheeks"],
          routine: [
            { step: "Cleanse", product: "Balanced Foam Cleanser" },
            { step: "Tone", product: "Balancing Toner" },
            { step: "Treat", product: "Vitamin C Serum" },
            { step: "Moisturize", product: "Lightweight Lotion" },
            { step: "Protect", product: "Balanced SPF 40" },
          ],
          recommendations: [
            { id: 7, name: "Balancing Foam Cleanser", price: "$23.99" },
            { id: 8, name: "Multi-Active Toner", price: "$19.99" },
            { id: 9, name: "Balancing Moisturizer", price: "$27.99" },
          ],
        };
        break;
      case "sensitive":
        skinProfile = {
          type: "Sensitive",
          concerns: ["Redness", "Irritation"],
          routine: [
            { step: "Cleanse", product: "Gentle Milk Cleanser" },
            { step: "Tone", product: "Calming Essence Toner" },
            { step: "Treat", product: "Centella Asiatica Serum" },
            { step: "Moisturize", product: "Soothing Barrier Cream" },
            { step: "Protect", product: "Mineral SPF 30" },
          ],
          recommendations: [
            { id: 10, name: "Ultra-Gentle Cleanser", price: "$25.99" },
            { id: 11, name: "Cica Repair Serum", price: "$32.99" },
            { id: 12, name: "Sensitive Skin Moisturizer", price: "$28.99" },
          ],
        };
        break;
      default:
        skinProfile = {
          type: "Normal",
          concerns: ["Maintenance", "Prevention"],
          routine: [
            { step: "Cleanse", product: "Gentle Cleanser" },
            { step: "Tone", product: "Hydrating Toner" },
            { step: "Treat", product: "Antioxidant Serum" },
            { step: "Moisturize", product: "Balanced Moisturizer" },
            { step: "Protect", product: "Daily SPF 30" },
          ],
          recommendations: [
            { id: 13, name: "Everyday Gentle Cleanser", price: "$21.99" },
            { id: 14, name: "Antioxidant Day Serum", price: "$29.99" },
            { id: 15, name: "Balance Perfect Moisturizer", price: "$26.99" },
          ],
        };
    }
    
    setResults(skinProfile);
  };

  const currentQuestion = quizQuestions.find(q => q.id === currentStep);
  
  const isAnswered = () => {
    if (!currentQuestion) return false;
    
    if (currentQuestion.type === "single") {
      return !!answers[currentQuestion.id];
    } else {
      return (answers[currentQuestion.id]?.length > 0) || false;
    }
  };

  const renderQuizContent = () => (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <div className="flex justify-between items-center text-sm mb-2">
          <span>Question {currentStep} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress 
          value={progress} 
          className="h-2 [&>div]:bg-rosegold-500"
        />
      </div>
      
      <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
        <h2 className="text-2xl font-medium mb-6">{currentQuestion.question}</h2>
        
        {currentQuestion?.type === "single" && (
          <RadioGroup
            value={answers[currentQuestion.id] || ""}
            className="space-y-3"
            onValueChange={(value) => handleSingleAnswer(currentQuestion.id, value)}
          >
            {currentQuestion.options.map((option) => (
              <Label
                key={option.id}
                htmlFor={`option-${option.id}`}
                className={cn(
                  "flex items-center border rounded-lg p-4 cursor-pointer transition-all",
                  answers[currentQuestion.id] === option.id 
                    ? "border-rosegold-500 bg-rosegold-50" 
                    : "border-border hover:border-rosegold-300"
                )}
              >
                <RadioGroupItem 
                  value={option.id} 
                  id={`option-${option.id}`}
                  className="mr-3 border-rosegold-300 data-[state=checked]:border-rosegold-500 data-[state=checked]:text-rosegold-500"
                />
                <span className="flex-1">{option.label}</span>
              </Label>
            ))}
          </RadioGroup>
        )}

        {currentQuestion?.type === "multiple" && (
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isChecked = (answers[currentQuestion.id] || []).includes(option.id);
              return (
                <Label
                  key={option.id}
                  htmlFor={`option-${option.id}`}
                  className={cn(
                    "flex items-center border rounded-lg p-4 cursor-pointer transition-all",
                    isChecked 
                      ? "border-rosegold-500 bg-rosegold-50" 
                      : "border-border hover:border-rosegold-300"
                  )}
                >
                  <Checkbox 
                    id={`option-${option.id}`}
                    checked={isChecked}
                    onCheckedChange={(checked) => 
                      handleMultipleAnswer(currentQuestion.id, option.id, !!checked)
                    }
                    className="mr-3 border-rosegold-300 data-[state=checked]:border-rosegold-500 data-[state=checked]:bg-rosegold-500"
                  />
                  <span className="flex-1">{option.label}</span>
                </Label>
              );
            })}
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          className="rounded-full"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          className="rounded-full bg-rosegold-500 hover:bg-rosegold-600"
          onClick={handleNext}
          disabled={!isAnswered()}
        >
          {currentStep < quizQuestions.length ? "Next" : "See Results"} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const renderResults = () => (
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
                    src={`/src/img/product${String(index + 8).padStart(2, '0')}.png`}
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
      
      <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 mt-8 mb-12">
        <h3 className="text-xl font-medium mb-4">Recommended Blog Posts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link to={`/blogs/${item}`} key={item} className="flex items-start gap-4 hover:bg-secondary/20 p-2 rounded-lg transition-colors">
              <div className="w-20 h-20 bg-champagne-50 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item === 1 ? "/src/img/BareGlowBlog1.png" :
                       item === 2 ? "/src/img/BareGlowBlog2.png" :
                       item === 3 ? "/src/img/BareGlowBlog3.png" :
                       "/src/img/BlogSplashImg.png"}
                  alt={`Blog post ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium line-clamp-2">
                  {item === 1 ? "The Ultimate Guide to Dry Skin Care" : 
                   item === 2 ? "How to Treat Sensitivity and Redness" : 
                   item === 3 ? "Best Ingredients for Sensitive Skin Types" :
                   "Winter Skincare Tips for Dry Skin"}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">5 min read</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center pt-4">
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/blogs">View All Articles</Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-champagne-50/50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-light mb-4">Save Your Results</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Create an account or sign in to save your skin profile and get personalized recommendations over time. Your skin changes, and your routine should too!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" className="rounded-full" onClick={() => navigate("/profile")}>
            Sign In
          </Button>
          <Button className="rounded-full bg-rosegold-500 hover:bg-rosegold-600">
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          {!quizComplete ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-light mb-4">What's My Skin?</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Answer a few questions about your skin to receive personalized routine and product recommendations tailored to your unique needs.
                </p>
              </div>
              {renderQuizContent()}
            </>
          ) : (
            renderResults()
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkinQuizPage;
