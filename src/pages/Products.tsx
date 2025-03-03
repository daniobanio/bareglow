import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Filter, Grid, List, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import usePageTitle from "@/hooks/usePageTitle";

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Gentle Hydrating Cleanser",
    brand: "BareGlow",
    price: 24.99,
    rating: 4.7,
    reviews: 128,
    image: "/src/img/product01.png",
    categories: ["Cleanser", "Dry Skin", "Sensitive"],
  },
  {
    id: 2,
    name: "Vitamin C Brightening Serum",
    brand: "Luminate",
    price: 39.99,
    rating: 4.5,
    reviews: 96,
    image: "/src/img/product02.png",
    categories: ["Serum", "All Skin Types", "Anti-aging"],
  },
  {
    id: 3,
    name: "Hydrating Rose Water Toner",
    brand: "BareGlow",
    price: 18.99,
    rating: 4.8,
    reviews: 82,
    image: "/src/img/product03.png",
    categories: ["Toner", "Dry Skin", "Sensitive"],
  },
  {
    id: 4,
    name: "Clay Purifying Mask",
    brand: "Earthen",
    price: 29.99,
    rating: 4.3,
    reviews: 74,
    image: "/src/img/product04.png",
    categories: ["Mask", "Oily Skin", "Acne-Prone"],
  },
  {
    id: 5,
    name: "Hyaluronic Acid Moisturizer",
    brand: "BareGlow",
    price: 32.99,
    rating: 4.9,
    reviews: 156,
    image: "/src/img/product05.png",
    categories: ["Moisturizer", "All Skin Types"],
  },
  {
    id: 6,
    name: "Niacinamide 10% + Zinc 1%",
    brand: "ClearSkin",
    price: 21.99,
    rating: 4.6,
    reviews: 103,
    image: "/src/img/product06.png",
    categories: ["Serum", "Oily Skin", "Acne-Prone"],
  },
  {
    id: 7,
    name: "Peptide Eye Cream",
    brand: "Luminate",
    price: 45.99,
    rating: 4.4,
    reviews: 67,
    image: "/src/img/product07.png",
    categories: ["Eye Care", "Anti-aging"],
  },
  {
    id: 8,
    name: "SPF 50 Daily Sunscreen",
    brand: "SunGuard",
    price: 27.99,
    rating: 4.8,
    reviews: 142,
    image: "/src/img/product08.png",
    categories: ["Sunscreen", "All Skin Types"],
  },
  {
    id: 9,
    name: "Retinol Night Cream",
    brand: "BareGlow",
    price: 49.99,
    rating: 4.7,
    reviews: 89,
    image: "/src/img/product09.png",
    categories: ["Cream", "Anti-aging", "Night Care"],
  },
  {
    id: 10,
    name: "AHA/BHA Exfoliating Toner",
    brand: "ClearSkin",
    price: 34.99,
    rating: 4.6,
    reviews: 115,
    image: "/src/img/product10.png",
    categories: ["Toner", "Exfoliant", "All Skin Types"],
  },
  {
    id: 11,
    name: "Ceramide Repair Cream",
    brand: "BareGlow",
    price: 38.99,
    rating: 4.8,
    reviews: 94,
    image: "/src/img/product11.png",
    categories: ["Cream", "Dry Skin", "Sensitive"],
  },
  {
    id: 12,
    name: "Green Tea Essence",
    brand: "Luminate",
    price: 29.99,
    rating: 4.5,
    reviews: 78,
    image: "/src/img/product12.png",
    categories: ["Essence", "Oily Skin", "Combination"],
  },
  {
    id: 13,
    name: "Peptide Collagen Booster",
    brand: "BareGlow",
    price: 54.99,
    rating: 4.7,
    reviews: 86,
    image: "/src/img/product13.png",
    categories: ["Serum", "Anti-aging", "All Skin Types"],
  },
];

// Product categories
const categories = [
  "All products",
  "Cleansers",
  "Moisturizers",
  "Toners",
  "Sunscreen",
  "Serums",
  "Oils",
  "Creams",
  "Lip Balms & Treatment",
  "Eye Care",
  "Masks",
];

// Filter options
const filterOptions = {
  skinType: ["All Skin Types", "Dry", "Oily", "Combination", "Sensitive", "Acne-Prone"],
  priceRange: ["Under $15", "$15-$30", "$30-$60", "$60-$100", "Over $100"],
  brand: ["BareGlow", "Luminate", "ClearSkin", "Earthen", "SunGuard"],
};

const Products = () => {
  usePageTitle("Products");
  
  const [activeCategory, setActiveCategory] = useState("All products");
  const [viewMode, setViewMode] = useState("grid");
  const [activeFilters, setActiveFilters] = useState({
    skinType: [],
    priceRange: [],
    brand: [],
  });
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFilter = (filterType, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      return newFilters;
    });
  };

  const FilterDropdown = ({ title, options, filterType }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full flex items-center gap-1 px-4 py-2 text-sm font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title} <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-2">
            {options.map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center"
                onClick={() => {
                  toggleFilter(filterType, option);
                  setIsOpen(false);
                }}
              >
                <div
                  className={cn(
                    "w-4 h-4 border rounded mr-2",
                    activeFilters[filterType].includes(option)
                      ? "bg-primary border-primary"
                      : "border-gray-300"
                  )}
                />
                <span>{option}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const ProductCard = ({ product, viewMode }) => (
    <Link
      to={`/products/${product.id}`}
      className={cn(
        "group hover-lift bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100",
        viewMode === "grid" ? "block" : "flex items-center"
      )}
    >
      <div
        className={cn(
          "overflow-hidden bg-champagne-50",
          viewMode === "grid" ? "aspect-square" : "w-48 h-48"
        )}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className={cn("p-4", viewMode === "list" && "flex-1")}>
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs text-muted-foreground">{product.brand}</p>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-rosegold-500 fill-rosegold-500" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
        <h3 className="font-medium text-base md:text-lg mb-2">{product.name}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {product.categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="px-2 py-0.5 text-xs bg-secondary/50"
            >
              {category}
            </Badge>
          ))}
        </div>
        <p className="font-medium text-lg">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-light mb-4">All Products</h1>
            <p className="text-muted-foreground max-w-xl">
              Discover our carefully curated selection of skincare products, designed to nourish your skin and enhance your natural beauty.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="overflow-x-auto pb-4 mb-8">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={cn(
                    "rounded-full whitespace-nowrap",
                    activeCategory === category 
                      ? "bg-rosegold-500 hover:bg-rosegold-600"
                      : "hover:bg-secondary/80"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Filters and View Options */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                <Filter className="h-4 w-4" /> Filters
              </Button>
              <FilterDropdown 
                title="Skin Type" 
                options={filterOptions.skinType} 
                filterType="skinType" 
              />
              <FilterDropdown 
                title="Price Range" 
                options={filterOptions.priceRange} 
                filterType="priceRange" 
              />
              <FilterDropdown 
                title="Brand" 
                options={filterOptions.brand} 
                filterType="brand" 
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "rounded-full",
                  viewMode === "grid" && "bg-secondary/80"
                )}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "rounded-full",
                  viewMode === "list" && "bg-secondary/80"
                )}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={cn(
            viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "flex flex-col gap-6"
          )}>
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
