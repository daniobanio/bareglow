import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 md:pt-32"
    >
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/img/HomeHeroImg.png" 
          alt="Elegant skincare products in a serene rose gold setting" 
          className="w-full h-full object-cover brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-rosegold-200/20 to-rosegold-100/10 blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-[5%] w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-champagne-100/30 to-cream-100/20 blur-2xl animate-float"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-6 items-center">
          <div className="flex-1 md:max-w-[65%]">
            <div className="space-y-6">
              <div className="fade-in-hidden">
                <Button
                  variant="outline"
                  className="rounded-full text-xs px-4 py-1 h-auto border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
                >
                  Your skin's new best friend
                </Button>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-white fade-in-hidden leading-[1.1]">
                Discover your
                <br />
                <span className="text-rosegold-200 relative inline-block animate-glow whitespace-nowrap">
                  perfect skincare
                </span>
                <br />
                routine today
              </h1>
              
              <p className="text-white/90 text-xl max-w-xl fade-in-hidden mt-8">
                Expert reviews, community insights, and personalized recommendations
                to help you achieve your skin goals.
              </p>
              
              <div className="pt-2 pb-4 fade-in-hidden">
                <p className="text-2xl font-medium text-white/95">
                  Join <span className="text-rosegold-200">5,000+</span> skincare enthusiasts
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 fade-in-hidden">
                <Button 
                  size="lg" 
                  className="rounded-full px-10 py-7 text-lg bg-rosegold-500 hover:bg-rosegold-400 text-white transition-colors duration-300"
                  asChild
                >
                  <Link to="/products">Find Products</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-10 py-7 text-lg bg-white/5 backdrop-blur-sm text-white hover:text-white border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  asChild
                >
                  <Link to="/quiz">Take Skin Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-hidden">
            {/* We'll remove this image since we're using a full-width background now */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 fade-in-hidden animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
