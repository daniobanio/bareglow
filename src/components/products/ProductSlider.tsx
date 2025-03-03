import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider = ({ products }: ProductSliderProps) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="swiper-container relative" ref={swiperRef}>
      {/* Custom navigation buttons */}
      <button 
        ref={prevRef} 
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-md transition-all duration-300 border border-rosegold-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-primary" />
      </button>
      
      <button 
        ref={nextRef} 
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-md transition-all duration-300 border border-rosegold-100"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        onInit={(swiper) => { 
          // @ts-expect-error - Swiper navigation params typing issue
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error - Swiper navigation params typing issue
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="products-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product-slide">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
