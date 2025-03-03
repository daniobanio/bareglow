import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon, FilterIcon, ArrowUpDown } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const SavedItemsPage = () => {
  usePageTitle("My Saved");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCollection, setActiveCollection] = useState("favorites");
  const [sortBy, setSortBy] = useState("newest");
  const [activeFilter, setActiveFilter] = useState("all");

  const collections = [
    { id: "favorites", name: "Favorites" },
    { id: "summer", name: "Summer Essentials" },
    { id: "winter", name: "Winter Care" },
    { id: "wishlist", name: "Wishlist" }
  ];

  const filters = [
    { id: "all", name: "All Items" },
    { id: "products", name: "Products" },
    { id: "articles", name: "Articles" },
    { id: "routines", name: "Routines" }
  ];

  const savedItems = [
    {
      id: 1,
      type: "product",
      title: "Hydrating Face Cream",
      description: "A deeply moisturizing cream perfect for dry skin",
      image: "/src/img/product01.png",
      price: "$34.99",
      collections: ["favorites", "winter"]
    },
    {
      id: 2,
      type: "article",
      title: "The Ultimate Guide to Summer Skincare",
      description: "Learn how to protect your skin during hot summer days",
      image: "/src/img/BareGlowBlog1.png",
      date: "June 12, 2023",
      collections: ["favorites", "summer"]
    },
    {
      id: 3,
      type: "product",
      title: "Vitamin C Serum",
      description: "Brighten and even out your skin tone with this powerful serum",
      image: "/src/img/product02.png",
      price: "$29.99",
      collections: ["favorites", "summer", "wishlist"]
    },
    {
      id: 4,
      type: "article",
      title: "Understanding Your Skin Type",
      description: "A comprehensive guide to identifying and caring for your skin type",
      image: "/src/img/BareGlowBlog2.png",
      date: "May 3, 2023",
      collections: ["winter"]
    },
    {
      id: 5,
      type: "product",
      title: "Gentle Exfoliating Scrub",
      description: "Remove dead skin cells and reveal brighter skin",
      image: "/src/img/product03.png",
      price: "$22.99",
      collections: ["wishlist"]
    },
    {
      id: 6,
      type: "routine",
      title: "Morning Routine for Oily Skin",
      description: "A step-by-step guide to managing oily skin in the morning",
      image: "/src/img/SkinQuizImage.png",
      steps: 5,
      collections: ["favorites"]
    },
    {
      id: 7,
      type: "product",
      title: "Night Repair Serum",
      description: "Rejuvenate your skin while you sleep",
      image: "/src/img/product04.png",
      price: "$45.99",
      collections: ["favorites", "winter"]
    },
    {
      id: 8,
      type: "article",
      title: "The Truth About Anti-Aging Products",
      description: "Separating facts from fiction in the world of anti-aging skincare",
      image: "/src/img/BareGlowBlog3.png",
      date: "April 18, 2023",
      collections: ["favorites"]
    }
  ];

  // Filter items based on active collection and filters
  const filteredItems = savedItems.filter(item => {
    const inCollection = item.collections.includes(activeCollection);
    const matchesFilter = activeFilter === "all" || item.type === activeFilter;
    return inCollection && matchesFilter;
  });

  // Sort items based on sort option
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "newest") return b.id - a.id;
    if (sortBy === "oldest") return a.id - b.id;
    if (sortBy === "a-z") return a.title.localeCompare(b.title);
    if (sortBy === "z-a") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-light mb-2">My Saved</h1>
              <p className="text-muted-foreground">Organize and browse your favorite products, articles, and routines</p>
            </div>
            
            <div className="w-full md:w-auto">
              <Select value={activeCollection} onValueChange={setActiveCollection}>
                <SelectTrigger className="w-full md:w-[220px]">
                  <SelectValue placeholder="Select Collection" />
                </SelectTrigger>
                <SelectContent>
                  {collections.map(collection => (
                    <SelectItem key={collection.id} value={collection.id}>
                      {collection.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft p-6 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-between mb-8">
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    className={activeFilter === filter.id ? "bg-rosegold-500 hover:bg-rosegold-600" : ""}
                    onClick={() => setActiveFilter(filter.id)}
                    size="sm"
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <FilterIcon className="h-4 w-4 text-muted-foreground" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="a-z">A-Z</SelectItem>
                    <SelectItem value="z-a">Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedItems.length > 0 ? (
                sortedItems.map(item => (
                  <div key={item.id} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover-lift">
                    <div className="aspect-video bg-champagne-50 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 right-3 bg-white/80 text-foreground">
                        {item.type === "product" ? "Product" : item.type === "article" ? "Article" : "Routine"}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-1 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
                      {item.type === "product" && (
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-rosegold-600">{item.price}</span>
                          <Button variant="outline" size="sm" className="rounded-full">View Details</Button>
                        </div>
                      )}
                      {item.type === "article" && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                          <Button variant="outline" size="sm" className="rounded-full">Read Article</Button>
                        </div>
                      )}
                      {item.type === "routine" && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{item.steps} steps</span>
                          <Button variant="outline" size="sm" className="rounded-full">View Routine</Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-muted-foreground mb-4">No saved items in this collection</p>
                  <Button className="rounded-full bg-rosegold-500 hover:bg-rosegold-600" asChild>
                    <Link to="/products">Browse Products</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-champagne-50/50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-light mb-4">Create Your Own Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Organize your saved items into custom collections based on your skincare needs, seasonal routines, or wishlist items.
            </p>
            <Button className="rounded-full bg-rosegold-500 hover:bg-rosegold-600">Create New Collection</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavedItemsPage;
