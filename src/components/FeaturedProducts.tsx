import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/ui/section-header";
import ProductSlider from "@/components/products/ProductSlider";
import { featuredProducts } from "@/data/products";

const FeaturedProducts = () => {
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

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-champagne-50/50 pt-10 md:pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-rosegold-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-champagne-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <SectionHeader 
          tagline="COMMUNITY FAVORITES"
          title="Top-Rated Products"
          description="Discover the most loved skincare products, reviewed by our community of skincare enthusiasts and experts."
        />

        <div className="w-full fade-in-hidden">
          <ProductSlider products={featuredProducts} />
        </div>

        <div className="mt-16 text-center fade-in-hidden">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-rosegold-300 text-rosegold-700 hover:bg-rosegold-50"
            asChild
          >
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
