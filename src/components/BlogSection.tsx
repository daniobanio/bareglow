import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "How to Build a Skincare Routine for Dry Skin",
    excerpt: "Learn the essential steps and products for combating dry skin and achieving a hydrated, glowing complexion all year round.",
    category: "Skincare Guides",
    date: "May 15, 2023",
    image: "/src/img/BareGlowBlog1.png",
    readTime: "7 min read"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Understanding Skincare Ingredients",
    excerpt: "Decode ingredient labels and learn which active ingredients work best for different skin concerns and how to combine them effectively.",
    category: "Ingredient Analysis",
    date: "June 2, 2023",
    image: "/src/img/BareGlowBlog2.png",
    readTime: "9 min read"
  },
  {
    id: 3,
    title: "Top 10 Sunscreens That Won't Leave a White Cast",
    excerpt: "Discover dermatologist-recommended sunscreens for all skin tones that provide excellent protection without the dreaded white residue.",
    category: "Product Reviews",
    date: "June 20, 2023",
    image: "/src/img/BareGlowBlog3.png",
    readTime: "5 min read"
  }
];

const BlogSection = () => {
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
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl mb-6 md:mb-0">
            <div className="inline-block px-3 py-1 bg-rosegold-50 text-rosegold-600 rounded-full text-xs font-medium mb-4 fade-in-hidden">
              EXPERT INSIGHTS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 fade-in-hidden">
              Latest from our blog
            </h2>
            <p className="text-muted-foreground fade-in-hidden">
              Explore our collection of skincare guides, ingredient breakdowns, and product reviews written by skincare experts and enthusiasts.
            </p>
          </div>
          <div className="fade-in-hidden">
            <Button
              variant="ghost"
              className="text-rosegold-600 hover:text-rosegold-700 hover:bg-rosegold-50 rounded-full group"
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover-lift fade-in-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
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
      </div>
    </section>
  );
};

export default BlogSection;
