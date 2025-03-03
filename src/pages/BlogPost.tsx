import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Share2, ChevronRight, Star, Bookmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import usePageTitle from "@/hooks/usePageTitle";

// Mock product data
const relatedProducts = [
  {
    id: 1,
    name: "Vinoperfect Radiance Serum",
    brand: "Caudalie",
    price: "$79",
    rating: 4.8,
    image: "/src/img/product01.png",
  },
  {
    id: 2,
    name: "Beauty Elixir",
    brand: "Caudalie",
    price: "$49",
    rating: 4.7,
    image: "/src/img/product02.png",
  },
  {
    id: 3,
    name: "Vinosource-Hydra SOS Cream",
    brand: "Caudalie",
    price: "$42",
    rating: 4.9,
    image: "/src/img/product03.png",
  },
  {
    id: 4,
    name: "Resveratrol-Lift Firming Cream",
    brand: "Caudalie",
    price: "$65",
    rating: 4.6,
    image: "/src/img/product04.png",
  },
];

// Author information
const author = {
  name: "Mori",
  role: "Skincare Specialist",
  image: "https://avatar.iran.liara.run/public/84",
  bio: "Mori is a certified dermatology specialist with over 8 years of experience reviewing skincare products and formulations."
};

const BlogPost = () => {
  const { id } = useParams();
  usePageTitle("Discover Caudalie: Natural Skincare for Radiant, Healthy Skin");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Header */}
        <div className="relative h-[40vh] md:h-[60vh] w-full">
          <img 
            src="/src/img/BareGlowBlog1.png" 
            alt="Caudalie skincare products" 
            className="w-full h-full object-cover"
          />
          
          {/* Centered text container */}
          <div className="absolute -bottom-12 left-0 w-full px-4">
            <div className="container-custom max-w-4xl">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20">
                <div className="flex items-center gap-2 text-white/90 text-sm mb-3">
                  <Link to="/blogs" className="hover:text-white">Blog</Link>
                  <ChevronRight className="h-4 w-4" />
                  <span>Skincare Brands</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-medium text-white text-center mb-4">
                  Discover Caudalie: Natural Skincare for Radiant, Healthy Skin
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-6 text-white text-base">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>May 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 rounded-full"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 rounded-full"
                    >
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add spacing to account for overlapping header */}
        <div className="mt-24">
          {/* Article content */}
          <div className="container-custom max-w-4xl py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Caudalie, nature meets science to provide gentle, effective skincare solutions designed to enhance your natural beauty. 
                Founded in the heart of the Bordeaux vineyards, Caudalie harnesses the power of antioxidant-rich grape extracts and other 
                plant-based ingredients to nourish, protect, and rejuvenate your skin.
              </p>
              
              <h2 className="text-2xl font-medium mt-10 mb-4">Why Choose Caudalie?</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Clean Beauty:</strong> Caudalie is committed to using natural ingredients free from harmful chemicals such as parabens, phthalates, and mineral oils.
                </li>
                <li>
                  <strong>Eco-Conscious Practices:</strong> Sustainability is at the heart of Caudalie's mission. Their packaging is recyclable, and the brand supports reforestation projects worldwide.
                </li>
                <li>
                  <strong>Proven Results:</strong> Caudalie products combine botanical extracts with patented technologies to visibly improve skin texture, hydration, and tone.
                </li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-10 mb-6">Best-Selling Caudalie Products</h2>
              
              <div className="bg-champagne-50/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-6">
                  <img 
                    src="/src/img/product05.png" 
                    alt="Vinoperfect Radiance Serum" 
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-medium">Vinoperfect Radiance Serum</h3>
                    <p className="text-muted-foreground mb-2">
                      Say goodbye to dark spots with this lightweight, brightening serum. Powered by patented Viniferine, 
                      it evens out your skin tone and boosts radiance without harsh ingredients.
                    </p>
                    <Link to="/products/1">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-rosegold-600 hover:text-rosegold-700 hover:bg-rosegold-50 rounded-full"
                      >
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-champagne-50/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-6">
                  <img 
                    src="/src/img/product06.png" 
                    alt="Beauty Elixir" 
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-medium">Beauty Elixir</h3>
                    <p className="text-muted-foreground mb-2">
                      Inspired by the Queen of Hungary's elixir of youth, this cult-favorite mist refreshes and hydrates, 
                      leaving your skin instantly glowing. Perfect as a makeup setting spray or mid-day pick-me-up.
                    </p>
                    <Link to="/products/2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-rosegold-600 hover:text-rosegold-700 hover:bg-rosegold-50 rounded-full"
                      >
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-champagne-50/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-6">
                  <img 
                    src="/src/img/product07.png" 
                    alt="Vinosource-Hydra SOS Intense Moisturizing Cream" 
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-medium">Vinosource-Hydra SOS Intense Moisturizing Cream</h3>
                    <p className="text-muted-foreground mb-2">
                      Ideal for sensitive skin, this rich yet non-greasy cream deeply hydrates while calming redness and irritation. 
                      Powered by organic grape water and antioxidant polyphenols.
                    </p>
                    <Link to="/products/3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-rosegold-600 hover:text-rosegold-700 hover:bg-rosegold-50 rounded-full"
                      >
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-champagne-50/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-6">
                  <img 
                    src="/src/img/product08.png" 
                    alt="Resveratrol-Lift Firming Cashmere Cream" 
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-medium">Resveratrol-Lift Firming Cashmere Cream</h3>
                    <p className="text-muted-foreground mb-2">
                      For firmer, smoother skin, this anti-aging moisturizer combines resveratrol, hyaluronic acid, 
                      and vegan collagen to visibly reduce wrinkles and improve elasticity.
                    </p>
                    <Link to="/products/4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-rosegold-600 hover:text-rosegold-700 hover:bg-rosegold-50 rounded-full"
                      >
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium mt-10 mb-4">Skincare Solutions for Every Concern</h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white shadow-soft rounded-xl p-5">
                  <h3 className="text-lg font-medium mb-2">Brightening</h3>
                  <p className="text-muted-foreground">Target dark spots with the Vinoperfect line.</p>
                </div>
                <div className="bg-white shadow-soft rounded-xl p-5">
                  <h3 className="text-lg font-medium mb-2">Anti-Aging</h3>
                  <p className="text-muted-foreground">Smooth fine lines with the Resveratrol-Lift collection.</p>
                </div>
                <div className="bg-white shadow-soft rounded-xl p-5">
                  <h3 className="text-lg font-medium mb-2">Hydration</h3>
                  <p className="text-muted-foreground">Restore moisture with Vinosource-Hydra products, rich in soothing grape water.</p>
                </div>
                <div className="bg-white shadow-soft rounded-xl p-5">
                  <h3 className="text-lg font-medium mb-2">Purification</h3>
                  <p className="text-muted-foreground">Detoxify and balance oily skin with the Vinopure range, powered by natural salicylic acid and essential oils.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium mt-10 mb-4">A Commitment to Clean, Green Beauty</h2>
              <p>
                Caudalie leads the way in eco-responsible beauty. Their "Cosm'ethics" Charter ensures formulas that prioritize safety, 
                effectiveness, and sustainability. The brand actively supports environmental initiatives through their 1% for the Planet 
                membership, helping to plant millions of trees worldwide.
              </p>
              
              <div className="relative bg-white rounded-xl shadow-soft p-8 mt-12">
                <h3 className="text-xl font-medium mb-4">Find Your Perfect Routine</h3>
                <p className="text-muted-foreground mb-4">
                  Whether you're aiming for a radiant complexion or seeking targeted treatments for specific concerns, 
                  Caudalie offers customizable routines that fit your skin type and lifestyle. Embrace a beauty regimen 
                  inspired by nature and rooted in science.
                </p>
                <Button 
                  className="rounded-full px-6 bg-white hover:bg-white/90 text-rosegold-600 hover:text-rosegold-700 font-medium shadow-md border border-rosegold-200"
                  asChild
                >
                  <Link to="/products">Shop Caudalie Products</Link>
                </Button>
              </div>
              
              <h2 className="text-2xl font-medium mt-10 mb-6">Caudalie's Best Cleansers for Different Skin Types</h2>
              
              <h3 className="text-xl font-medium mt-8 mb-3">1. Oily & Acne-Prone Skin</h3>
              <p className="font-medium text-rosegold-600">✔ Best Pick: Vinopure Pore Purifying Gel Cleanser</p>
              <p className="mt-2"><strong>Why?</strong> This gel-based cleanser is formulated with natural salicylic acid and grape polyphenols to deeply cleanse, reduce excess oil, and unclog pores.</p>
              <p className="mt-2"><strong>Key Benefits:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Controls shine without stripping moisture</li>
                <li>Helps minimize breakouts and blackheads</li>
                <li>Refreshing gel texture with a light, natural scent</li>
              </ul>
              <p className="mt-2"><strong>How to Use:</strong> Massage onto damp skin, then rinse with warm water. Use morning and night for the best results.</p>
              
              <h3 className="text-xl font-medium mt-8 mb-3">2. Sensitive Skin</h3>
              <p className="font-medium text-rosegold-600">✔ Best Pick: Vinoclean Cleansing Almond Milk</p>
              <p className="mt-2"><strong>Why?</strong> This ultra-gentle cleansing milk is enriched with almond oil and soothing grape water, making it perfect for reactive or redness-prone skin.</p>
              <p className="mt-2"><strong>Key Benefits:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Soothes irritation and reduces redness</li>
                <li>Maintains the skin's natural hydration</li>
                <li>Silky, non-greasy texture</li>
              </ul>
              <p className="mt-2"><strong>How to Use:</strong> Apply with a cotton pad or fingertips, then rinse or wipe off gently. Can be used morning and night.</p>
              
              <h3 className="text-xl font-medium mt-8 mb-3">3. Dry & Dehydrated Skin</h3>
              <p className="font-medium text-rosegold-600">✔ Best Pick: Vinoclean Instant Foaming Cleanser</p>
              <p className="mt-2"><strong>Why?</strong> A soap-free, sulfate-free foaming cleanser infused with grape water to gently cleanse while keeping skin soft and hydrated.</p>
              <p className="mt-2"><strong>Key Benefits:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Provides a soft and cushiony cleansing experience</li>
                <li>Hydrates and soothes dry patches</li>
                <li>Suitable for even the most sensitive skin</li>
              </ul>
              <p className="mt-2"><strong>How to Use:</strong> Pump onto hands, massage over damp skin, then rinse with warm water.</p>
              
              <h3 className="text-xl font-medium mt-8 mb-3">4. Combination Skin</h3>
              <p className="font-medium text-rosegold-600">✔ Best Pick: Vinoclean Gentle Foaming Cleanser</p>
              <p className="mt-2"><strong>Why?</strong> This lightweight foaming cleanser effectively removes dirt and makeup while balancing the skin—keeping dry areas nourished and oily zones purified.</p>
              <p className="mt-2"><strong>Key Benefits:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Removes impurities without over-drying</li>
                <li>Leaves skin feeling fresh and soft</li>
                <li>Made with 97% natural-origin ingredients</li>
              </ul>
              <p className="mt-2"><strong>How to Use:</strong> Use 1-2 pumps, massage into damp skin, then rinse thoroughly.</p>
              
              <h3 className="text-xl font-medium mt-8 mb-3">5. Anti-Aging & Mature Skin</h3>
              <p className="font-medium text-rosegold-600">✔ Best Pick: Vinoclean Deep Cleansing Exfoliator</p>
              <p className="mt-2"><strong>Why?</strong> Designed to gently polish and refine skin texture, this exfoliating cleanser removes dead skin cells while promoting radiance and smoothness.</p>
              <p className="mt-2"><strong>Key Benefits:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Improves skin texture and glow</li>
                <li>Encourages cell renewal for youthful skin</li>
                <li>Contains volcanic sand microbeads for gentle exfoliation</li>
              </ul>
              <p className="mt-2"><strong>How to Use:</strong> Use 2-3 times per week, massaging into damp skin before rinsing. Follow with a hydrating serum or moisturizer.</p>
              
              <p className="mt-10">
                Shop Caudalie today to experience the difference that natural, high-performance skincare can make. 
                Your journey to radiant, healthy skin starts here!
              </p>
            </div>
            
            {/* Author bio */}
            <div className="mt-12 p-6 bg-champagne-50/50 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img 
                  src={author.image} 
                  alt={author.name} 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-medium">{author.name}</h3>
                  <p className="text-rosegold-600 mb-2">{author.role}</p>
                  <p className="text-muted-foreground">{author.bio}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related products */}
          <div className="bg-champagne-50/30 py-12">
            <div className="container-custom">
              <h2 className="text-2xl font-medium mb-8">Featured Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <Link to={`/products/${product.id}`} key={product.id} className="group">
                    <div className="bg-white rounded-xl p-4 transition-all hover:shadow-md">
                      <div className="aspect-square rounded-lg overflow-hidden mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <h3 className="font-medium group-hover:text-rosegold-600 transition-colors">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{product.price}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-rosegold-500 fill-rosegold-500" />
                          <span className="text-xs ml-1">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Related posts */}
          <div className="py-12">
            <div className="container-custom">
              <h2 className="text-2xl font-medium mb-8">You Might Also Like</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <article key={item} className="group relative rounded-xl overflow-hidden shadow-soft hover-lift">
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <img
                        src={item === 1 ? "/src/img/product09.png" : 
                             item === 2 ? "/src/img/product10.png" : 
                             "/src/img/product11.png"}
                        alt="Blog thumbnail"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <Badge variant="secondary" className="backdrop-blur-sm">
                          Skincare Tips
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>April 12, 2023</span>
                        <span>5 min read</span>
                      </div>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-rosegold-500 transition-colors">
                        {item === 1 ? "How to Choose the Right Serum for Your Skin Type" : 
                         item === 2 ? "The Ultimate Guide to Layering Skincare Products" : 
                         "Top 5 Ingredients to Look for in Anti-Aging Products"}
                      </h3>
                      <Link
                        to={`/blogs/${item + 10}`}
                        className="inline-flex items-center text-sm font-medium text-rosegold-600 hover:text-rosegold-700"
                      >
                        Read more
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
