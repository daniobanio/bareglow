import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogSection from "@/components/BlogSection";
import usePageTitle from "@/hooks/usePageTitle";

// Blog data for the page
const featuredBlogs = [
  {
    id: 1,
    title: "How to Build a Skincare Routine for Dry Skin",
    excerpt: "Learn the essential steps and products for combating dry skin and achieving a hydrated, glowing complexion all year round.",
    category: "Skincare Guides",
    date: "May 15, 2023",
    image: "/src/img/BareGlowBlog1.png",
    readTime: "7 min read",
    content: "Dry skin requires special attention to maintain hydration and prevent flakiness. Start with a gentle cleanser that doesn't strip natural oils, follow with a hydrating toner, and use a serum with hyaluronic acid. Choose a rich moisturizer with ingredients like ceramides and shea butter. Don't forget SPF during the day! Exfoliate 1-2 times per week and use overnight masks for extra hydration."
  },
  {
    id: 2,
    title: "The Ultimate Guide to Understanding Skincare Ingredients",
    excerpt: "Decode ingredient labels and learn which active ingredients work best for different skin concerns and how to combine them effectively.",
    category: "Ingredient Analysis",
    date: "June 2, 2023",
    image: "/src/img/BareGlowBlog2.png",
    readTime: "9 min read",
    content: "Understanding skincare ingredients helps you make informed choices. Key ingredients include: Hyaluronic Acid for hydration, Retinol for anti-aging, Vitamin C for brightening, Niacinamide for multiple benefits, AHAs/BHAs for exfoliation, Peptides for collagen production, and Ceramides for barrier repair. Be cautious when combining actives, and always patch test new products."
  },
  {
    id: 3,
    title: "Top 10 Sunscreens That Won't Leave a White Cast",
    excerpt: "Discover dermatologist-recommended sunscreens for all skin tones that provide excellent protection without the dreaded white residue.",
    category: "Product Reviews",
    date: "June 20, 2023",
    image: "/src/img/BareGlowBlog3.png",
    readTime: "5 min read",
    content: "Chemical sunscreens with avobenzone and oxybenzone usually don't leave a white cast. Look for formulas with newer filters like Tinosorb S and Tinosorb M. Tinted mineral sunscreens blend better on darker skin tones. Top picks include Supergoop Unseen Sunscreen, Black Girl Sunscreen, EltaMD UV Clear, and La Roche-Posay Anthelios."
  },
  {
    id: 4,
    title: "How to Layer Skincare Products for Maximum Effectiveness",
    excerpt: "Learn the correct order to apply your skincare products to ensure each ingredient can work effectively and deliver the best results.",
    category: "Skincare Guides",
    date: "July 5, 2023",
    image: "/src/img/product01.png",
    readTime: "6 min read",
    content: "Apply products from thinnest to thickest consistency: cleanser, toner, essence, serums, treatments, moisturizer, and sunscreen (AM) or facial oil (PM). Wait 1-2 minutes between layers to allow absorption. Some ingredients work better separately—use vitamin C in the morning and retinol at night. Don't mix niacinamide with vitamin C or acids with retinol."
  },
  {
    id: 5,
    title: "Skincare Myths Debunked by Dermatologists",
    excerpt: "Leading dermatologists set the record straight on common skincare misconceptions and provide evidence-based advice.",
    category: "Expert Advice",
    date: "July 18, 2023",
    image: "/src/img/product02.png",
    readTime: "8 min read",
    content: "Myths debunked: 1) You don't need sunscreen on cloudy days (FALSE - UV rays penetrate clouds), 2) Natural ingredients are always better (FALSE - natural doesn't mean safer), 3) Pores can open and close (FALSE - pores don't have muscles), 4) You outgrow acne (FALSE - adult acne is common), 5) Base your skincare on your skin type (PARTLY TRUE - consider skin concerns too)."
  },
  {
    id: 6,
    title: "The Role of Diet in Skin Health",
    excerpt: "Explore how nutrition impacts your skin and which foods can help address specific skin concerns from acne to premature aging.",
    category: "Holistic Skincare",
    date: "August 3, 2023",
    image: "/src/img/product03.png",
    readTime: "7 min read",
    content: "Your diet directly impacts skin health. Foods rich in antioxidants (berries, leafy greens) fight free radicals and prevent premature aging. Omega-3 fatty acids (salmon, walnuts) reduce inflammation. Zinc (oysters, pumpkin seeds) helps with acne. High-glycemic foods can worsen acne, while probiotics support your skin's microbiome. Stay hydrated by drinking plenty of water."
  },
  {
    id: 7,
    title: "Discover Caudalie: Natural Skincare for Radiant, Healthy Skin",
    excerpt: "Learn about Caudalie's eco-friendly skincare products that harness the power of grape extracts to nourish and rejuvenate your skin.",
    category: "Brand Spotlight",
    date: "March 3, 2025",
    image: "/src/img/product04.png",
    readTime: "8 min read",
    content: "Caudalie harnesses the power of grape extracts and plant-based ingredients for effective skincare. Their clean beauty approach avoids harmful chemicals and emphasizes sustainability with recyclable packaging."
  }
];

const categories = [
  "All Posts",
  "Skincare Guides",
  "Ingredient Analysis",
  "Product Reviews",
  "Expert Advice",
  "Holistic Skincare",
  "Brand Spotlight"
];

const BlogsPage = () => {
  usePageTitle("Blogs");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Full-width hero header */}
        <div className="relative w-full h-[40vh] mt-[72px]">
          <img 
            src="/src/img/BlogSplashImg.png" 
            alt="Blog header - Skincare and beauty insights" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                Discover Beauty Insights
              </h1>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Expert tips, skincare knowledge, and product recommendations to help you achieve your best skin ever.
              </p>
              <Button className="bg-white text-rosegold-600 hover:bg-white/90 rounded-full shadow-md">
                Subscribe to updates
              </Button>
            </div>
          </div>
        </div>

        <div className="container-custom max-w-7xl mx-auto py-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full ${
                  index === 0 ? "bg-rosegold-500 hover:bg-rosegold-600" : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1 md:col-span-2 group">
                <div className="rounded-xl overflow-hidden shadow-soft bg-white hover-lift h-full">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative">
                      <div className="aspect-[3/2] md:h-full">
                        <img
                          src={featuredBlogs[6].image}
                          alt={featuredBlogs[6].title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="backdrop-blur-sm">
                          {featuredBlogs[6].category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 md:w-3/5 md:p-8 flex flex-col">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>{featuredBlogs[6].date}</span>
                        <span>{featuredBlogs[6].readTime}</span>
                      </div>
                      <Link to={`/blogs/7`}>
                        <h3 className="text-2xl font-medium mb-3 group-hover:text-rosegold-500 transition-colors">
                          {featuredBlogs[6].title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {featuredBlogs[6].excerpt}
                      </p>
                      <Link
                        to={`/blogs/7`}
                        className="inline-flex items-center text-sm font-medium text-rosegold-600 hover:text-rosegold-700"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Posts Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.slice(0, 6).map((blog) => (
                <article
                  key={blog.id}
                  className="group relative rounded-xl overflow-hidden bg-white shadow-soft hover-lift"
                >
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge variant="secondary" className="backdrop-blur-sm">
                        {blog.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <Link to={`/blogs/${blog.id}`}>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-rosegold-500 transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="inline-flex items-center text-sm font-medium text-rosegold-600 hover:text-rosegold-700"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="rounded-full">
                Load more articles
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
