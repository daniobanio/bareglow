import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const SkinQuiz = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".fade-in-hidden");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("fade-in-visible");
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    "Determine your exact skin type",
    "Get personalized product recommendations",
    "Access tailored skincare routines",
    "Learn about ingredients that work for your skin"
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rosegold-50 to-champagne-50"></div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 fade-in-hidden">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-soft relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-rosegold-200/40 to-transparent mix-blend-overlay"></div>
              <img 
                src="/src/img/SkinQuizImage.png" 
                alt="Skincare quiz - discover your perfect routine" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 -left-6 md:-left-10 glass-card p-4 animate-float">
              <h4 className="text-sm font-medium mb-1">Discover Your Type</h4>
              <div className="flex space-x-2">
                {["Dry", "Oily", "Combination", "Sensitive"].map((type) => (
                  <span key={type} className="text-xs px-2 py-1 bg-white/50 rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-12 -right-6 md:-right-10 glass-card p-4 max-w-[200px] animate-float" style={{ animationDelay: "1s" }}>
              <h4 className="text-sm font-medium mb-1">Personal Routine</h4>
              <p className="text-xs text-muted-foreground">Get a step-by-step guide tailored to your skin needs</p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 max-w-xl">
            <div className="fade-in-hidden">
              <div className="inline-block px-3 py-1 bg-rosegold-50 text-rosegold-600 rounded-full text-xs font-medium mb-4">
                WHAT'S MY SKIN?
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 fade-in-hidden">
              Take our skin quiz for <span className="text-rosegold-500">personalized</span> recommendations
            </h2>
            
            <p className="text-muted-foreground mb-8 fade-in-hidden">
              Answer a few simple questions about your skin concerns, goals, and preferences to receive customized product recommendations and skincare advice.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 fade-in-hidden"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rosegold-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-rosegold-600" />
                  </div>
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="fade-in-hidden">
              <Button className="rounded-full px-8 bg-rosegold-500 hover:bg-rosegold-600" asChild>
                <Link to="/quiz">Start Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinQuiz;
