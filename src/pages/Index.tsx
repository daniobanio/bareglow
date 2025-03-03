import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import SkinQuiz from "@/components/SkinQuiz";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Home");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <SkinQuiz />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
