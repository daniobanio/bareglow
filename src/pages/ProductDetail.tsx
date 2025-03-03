import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Star, ChevronRight, Droplet, User, MessageSquare, ThumbsUp, Share, Check, BookmarkIcon, CheckCheck, XCircle, AlertTriangle, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import usePageTitle from "@/hooks/usePageTitle";

// Mock product data
const mockProductDetails = {
  id: 1,
  name: "Gentle Hydrating Cleanser",
  brand: "BareGlow",
  price: 24.99,
  rating: 4.7,
  totalReviews: 128,
  image: "/src/img/product01.png",
  images: [
    "/src/img/product01.png",
    "/src/img/product02.png",
  ],
  description: "Experience the ultimate hydration with our Gentle Hydrating Cleanser. This formula is perfect for all skin types, especially dry and sensitive skin. It effectively removes impurities while maintaining your skin's natural moisture barrier.",
  expertReview: "This gentle yet effective cleanser is a standout product for those with sensitive skin. The formula effectively removes makeup and impurities without stripping away natural oils. It's balanced pH level ensures your skin barrier remains intact, while the hydrating ingredients leave your face feeling refreshed, not tight or dry.",
  benefits: [
    "Removes makeup and impurities without stripping skin",
    "Maintains natural pH balance",
    "Hydrates while cleansing",
    "Non-comedogenic and fragrance-free",
  ],
  howToUse: "Apply a small amount to damp skin, massage gently in circular motions. Rinse thoroughly with lukewarm water and pat dry. Use morning and evening as part of your skincare routine.",
  ingredients: "Water, Glycerin, Cetyl Alcohol, Propylene Glycol, Sodium Laureth Sulfate, Stearic Acid, Sodium Hydroxide, Lauric Acid, Sodium Lauryl Sulfate, Sodium Chloride, Fragrance, Disodium EDTA, Citric Acid, Aloe Barbadensis Leaf Juice, Tocopheryl Acetate, Panthenol, Sodium Hyaluronate.",
  skinTypes: ["Dry", "Sensitive", "Normal", "Combination"],
  categories: ["Cleanser", "Dry Skin", "Sensitive"],
  ratingDistribution: {
    5: 74,
    4: 36,
    3: 12,
    2: 4,
    1: 2,
  },
  userStats: {
    have: 68,
    had: 42,
    want: 124,
    love: 86,
    like: 32,
    dislike: 8,
    hate: 2
  }
};

// Mock reviews
const mockReviews = [
  {
    id: 1,
    user: {
      name: "Emma S.",
      image: null,
      skinType: "Dry",
      age: "25-34",
    },
    rating: 5,
    title: "Best cleanser I've ever used!",
    comment: "This cleanser has completely transformed my skincare routine. It's gentle yet effective, and my skin feels so hydrated after using it. I no longer experience any tightness or dryness after washing my face.",
    date: "2 weeks ago",
    likes: 24,
    images: ["/src/img/ReviewImg1.jpg"],
  },
  {
    id: 2,
    user: {
      name: "Michael T.",
      image: null,
      skinType: "Combination",
      age: "35-44",
    },
    rating: 4,
    title: "Great for sensitive skin",
    comment: "I have very sensitive skin that reacts to almost everything, but this cleanser hasn't caused any issues. It cleans well without being harsh, though I wish it removed sunscreen a bit better.",
    date: "1 month ago",
    likes: 18,
    images: ["/src/img/ReviewImg4.jpeg"],
  },
  {
    id: 3,
    user: {
      name: "Sofia K.",
      image: null,
      skinType: "Normal",
      age: "18-24",
    },
    rating: 5,
    title: "Excellent for daily use",
    comment: "This has become my go-to morning and evening cleanser. It's gentle enough for twice-daily use and leaves my skin feeling clean but not stripped. The formula is perfect!",
    date: "2 months ago",
    likes: 31,
    images: ["/src/img/ReviewImg2.jpeg", "/src/img/ReviewImg3.jpeg"],
  },
];

// Image Modal Component
const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div className="relative max-w-2xl w-[90%]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-rosegold-200 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="relative aspect-square">
          <img
            src={imageSrc}
            alt="Expanded view"
            className="w-full h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(mockProductDetails);
  const [reviews, setReviews] = useState(mockReviews);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [userStatus, setUserStatus] = useState<string | null>(null);
  const [userOpinion, setUserOpinion] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  usePageTitle(`${product.name} by BareGlow`);

  useEffect(() => {
    window.scrollTo(0, 0);
    // In a real app, we would fetch the product details here
  }, [id]);

  const calculateRatingPercentage = (rating) => {
    return (product.ratingDistribution[rating] / product.totalReviews) * 100;
  };

  const handleStatusChange = (status: string) => {
    if (userStatus === status) {
      setUserStatus(null);
      toast.info("Status removed");
    } else {
      setUserStatus(status);
      toast.success(`Added to your "${status}" list`);
    }
  };

  const handleOpinionChange = (opinion: string) => {
    if (userOpinion === opinion) {
      setUserOpinion(null);
      toast.info("Opinion removed");
    } else {
      setUserOpinion(opinion);
      toast.success(`You've marked that you ${opinion} this product`);
    }
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-champagne-50 rounded-xl overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden border-2",
                      selectedImage === index
                        ? "border-rosegold-500"
                        : "border-transparent"
                    )}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Badge variant="outline" className="bg-rosegold-50 text-rosegold-700 border-rosegold-200">
                    {product.brand}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-light mb-4">{product.name}</h1>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(product.rating)
                            ? "text-rosegold-500 fill-rosegold-500"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground"> ({product.totalReviews} reviews)</span>
                  </div>
                </div>
                
                {/* Expert Review Section */}
                <div className="mb-6 bg-champagne-50/60 p-4 rounded-lg border border-champagne-100">
                  <h3 className="text-sm uppercase tracking-wider text-rosegold-600 mb-2">Expert Review</h3>
                  <p className="text-muted-foreground italic">{product.expertReview}</p>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-2xl font-medium mb-3">${product.price.toFixed(2)}</h2>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Skin Types:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.skinTypes.map((type) => (
                      <Badge key={type} variant="secondary" className="bg-secondary/50">
                        <Droplet className="h-3 w-3 mr-1" />
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* User Interaction Sections */}
                <div className="space-y-6 mb-8">
                  {/* Status Selection */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">I...</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant={userStatus === "have" ? "default" : "outline"} 
                        size="sm" 
                        className={cn(
                          "rounded-full",
                          userStatus === "have" && "bg-green-600 hover:bg-green-700"
                        )}
                        onClick={() => handleStatusChange("have")}
                      >
                        {userStatus === "have" ? <Check className="mr-1 h-4 w-4" /> : null}
                        Have it ({product.userStats.have})
                      </Button>
                      <Button 
                        variant={userStatus === "had" ? "default" : "outline"} 
                        size="sm" 
                        className={cn(
                          "rounded-full",
                          userStatus === "had" && "bg-blue-600 hover:bg-blue-700"
                        )}
                        onClick={() => handleStatusChange("had")}
                      >
                        {userStatus === "had" ? <CheckCheck className="mr-1 h-4 w-4" /> : null}
                        Had it ({product.userStats.had})
                      </Button>
                      <Button 
                        variant={userStatus === "want" ? "default" : "outline"} 
                        size="sm" 
                        className={cn(
                          "rounded-full",
                          userStatus === "want" && "bg-purple-600 hover:bg-purple-700"
                        )}
                        onClick={() => handleStatusChange("want")}
                      >
                        {userStatus === "want" ? <BookmarkIcon className="mr-1 h-4 w-4" /> : null}
                        Want it ({product.userStats.want})
                      </Button>
                    </div>
                  </div>
                  
                  {/* Opinion Selection */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">I think it's...</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant={userOpinion === "love" ? "default" : "outline"} 
                        size="sm" 
                        className={cn(
                          "rounded-full",
                          userOpinion === "love" && "bg-pink-600 hover:bg-pink-700"
                        )}
                        onClick={() => handleOpinionChange("love")}
                      >
                        {userOpinion === "love" ? <Heart className="mr-1 h-4 w-4 fill-white" /> : <Heart className="mr-1 h-4 w-4" />}
                        Love ({product.userStats.love})
                      </Button>
                      <Button 
                        variant={userOpinion === "like" ? "default" : "outline"} 
                        size="sm" 
                        className={cn(
                          "rounded-full",
                          userOpinion === "like" && "bg-green-600 hover:bg-green-700"
                        )}
                        onClick={() => handleOpinionChange("like")}
                      >
                        {userOpinion === "like" ? <ThumbsUp className="mr-1 h-4 w-4" /> : null}
                        Like ({product.userStats.like})
                      </Button>
                      <Button 
                        variant={userOpinion === "dislike" ? "default" : "outline"} 
                        size="sm" 
                        className={cn(
                          "rounded-full",
                          userOpinion === "dislike" && "bg-orange-600 hover:bg-orange-700"
                        )}
                        onClick={() => handleOpinionChange("dislike")}
                      >
                        {userOpinion === "dislike" ? <XCircle className="mr-1 h-4 w-4" /> : null}
                        Dislike ({product.userStats.dislike})
                      </Button>
                      <Button 
                        variant={userOpinion === "hate" ? "default" : "outline"} 
                        size="sm" 
                        className={cn(
                          "rounded-full",
                          userOpinion === "hate" && "bg-red-600 hover:bg-red-700"
                        )}
                        onClick={() => handleOpinionChange("hate")}
                      >
                        {userOpinion === "hate" ? <AlertTriangle className="mr-1 h-4 w-4" /> : null}
                        Hate ({product.userStats.hate})
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className={cn(
                        "rounded-full",
                        isLiked && "bg-rosegold-100 text-rosegold-600 border-rosegold-200"
                      )}
                      onClick={() => {
                        setIsLiked(!isLiked);
                        toast.success(isLiked ? "Removed from favorites" : "Added to favorites");
                      }}
                    >
                      <Heart
                        className={cn(
                          "h-5 w-5",
                          isLiked && "fill-rosegold-500 text-rosegold-500"
                        )}
                      />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full flex-1"
                      onClick={() => toast.info("Product saved to your collection")}
                    >
                      <BookmarkIcon className="mr-2 h-4 w-4" />
                      Save to Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rosegold-100 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-rosegold-500"></div>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients">
              <div>
                <h3 className="text-xl font-medium mb-4">Ingredients</h3>
                <p className="text-muted-foreground leading-relaxed">{product.ingredients}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="how-to-use">
              <div>
                <h3 className="text-xl font-medium mb-4">How to Use</h3>
                <p className="text-muted-foreground">{product.howToUse}</p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* AI Review Summary */}
          <div className="mb-16 bg-gradient-to-r from-champagne-50 to-rosegold-50 p-6 rounded-xl border border-rosegold-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-rosegold-100 flex items-center justify-center">
                <span className="text-rosegold-700 text-xl">AI</span>
              </div>
              <h3 className="text-xl font-medium">AI Review Summary</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Based on analyzing all user reviews, this product is highly praised for its gentle cleansing properties and suitability for sensitive skin. 
              Most users (88%) report that it effectively removes makeup without drying the skin. Common positive feedback highlights 
              the hydrating formula and lack of residue after rinsing. The few negative reviews (7%) primarily mention that it may not 
              be effective enough for removing waterproof makeup or heavy sunscreen. Overall sentiment is overwhelmingly positive with users 
              particularly appreciating how it maintains skin's natural moisture.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">Most mentioned benefit</div>
                <div className="font-medium">Gentle cleansing</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">Best for</div>
                <div className="font-medium">Sensitive skin</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">Usage frequency</div>
                <div className="font-medium">Twice daily</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">Value for money</div>
                <div className="font-medium">High (92%)</div>
              </div>
            </div>
          </div>
          
          {/* Reviews Section */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium">Customer Reviews</h2>
              <Button variant="outline" className="rounded-full">Write a Review</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Overall Rating */}
              <div className="bg-champagne-50/50 rounded-xl p-6 text-center">
                <h3 className="text-xl font-medium mb-2">Overall Rating</h3>
                <div className="text-5xl font-light text-rosegold-600 mb-2">{product.rating}</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(product.rating)
                          ? "text-rosegold-500 fill-rosegold-500"
                          : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Based on {product.totalReviews} reviews</p>
              </div>
              
              {/* Rating Distribution */}
              <div className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-medium mb-4">Rating Distribution</h3>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-12">
                        <span className="font-medium">{rating}</span>
                        <Star className="h-3 w-3 text-rosegold-500 fill-rosegold-500" />
                      </div>
                      <Progress value={calculateRatingPercentage(rating)} className="h-2 flex-1" />
                      <div className="w-10 text-right text-sm text-muted-foreground">
                        {product.ratingDistribution[rating]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border border-gray-100 rounded-xl p-6 bg-white shadow-soft">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={review.user.image} />
                        <AvatarFallback>
                          {review.user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{review.user.name}</div>
                        <div className="text-xs text-muted-foreground flex gap-2">
                          <span>{review.user.skinType} Skin</span>
                          <span>•</span>
                          <span>{review.user.age}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < review.rating
                                ? "text-rosegold-500 fill-rosegold-500"
                                : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                      <div className="font-medium">{review.title}</div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                  
                  {review.images.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {review.images.map((image, index) => (
                        <button
                          key={index}
                          className="w-20 h-20 rounded-md overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-rosegold-500"
                          onClick={() => openModal(image)}
                        >
                          <img
                            src={image}
                            alt={`Review image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm">
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Helpful ({review.likes})</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                      <Share className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="rounded-full">Load More Reviews</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Image Modal */}
      <ImageModal
        isOpen={!!modalImage}
        onClose={closeModal}
        imageSrc={modalImage}
      />
    </div>
  );
};

export default ProductDetail;
