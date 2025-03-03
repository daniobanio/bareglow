import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Settings, BookmarkIcon, Clock, HelpCircle, LogOut, PencilIcon, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import usePageTitle from "@/hooks/usePageTitle";

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "recent", label: "Recently Viewed", icon: Clock },
    { id: "quiz", label: "Whats my Skin?", icon: HelpCircle },
    { id: "contact", label: "Contact", icon: Settings, onClick: () => navigate("/contact") },
  ];

  return (
    <div className="space-y-6">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={cn(
            "flex items-center gap-3 text-lg font-light w-full text-left py-2 transition-colors",
            activeTab === item.id
              ? "text-rosegold-500 font-normal"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={item.onClick || (() => setActiveTab(item.id))}
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </button>
      ))}
      <Separator />
      <button
        className="flex items-center gap-3 text-lg font-light w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <LogOut className="h-5 w-5" />
        Sign Out
      </button>
    </div>
  );
};

const Profile = () => {
  usePageTitle("My Profile");
  
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Kira Lam",
    age: "19",
    skinType: "Dry Skin",
    experience: "Beginner",
    description: "hi! im kira and just started doing skincare a year ago. I have sensitive dry skin and recovered from all my acne. Check my profile to see what I used! 😊",
    avatar: null,
  });
  const [editForm, setEditForm] = useState({ ...profile });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSaveProfile = () => {
    setProfile({ ...editForm });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...profile });
    setIsEditing(false);
  };

  // Sample recently viewed items data
  const recentlyViewedItems = [
    {
      id: 1,
      type: "product",
      title: "Hydrating Face Cream",
      description: "A deeply moisturizing cream perfect for dry skin",
      image: "/src/img/product05.png",
      price: "$34.99",
      viewedAt: "Today, 2:30 PM"
    },
    {
      id: 2,
      type: "article",
      title: "The Ultimate Guide to Summer Skincare",
      description: "Learn how to protect your skin during hot summer days",
      image: "/src/img/BareGlowBlog1.png",
      date: "June 12, 2023",
      viewedAt: "Today, 1:45 PM"
    },
    {
      id: 3,
      type: "product",
      title: "Vitamin C Serum",
      description: "Brighten and even out your skin tone with this powerful serum",
      image: "/src/img/product06.png",
      price: "$29.99",
      viewedAt: "Yesterday, 4:12 PM"
    },
    {
      id: 4,
      type: "article",
      title: "Understanding Your Skin Type",
      description: "A comprehensive guide to identifying and caring for your skin type",
      image: "/src/img/BareGlowBlog2.png",
      date: "May 3, 2023",
      viewedAt: "Yesterday, 11:30 AM"
    },
    {
      id: 5,
      type: "product",
      title: "Gentle Exfoliating Scrub",
      description: "Remove dead skin cells and reveal brighter skin",
      image: "/src/img/product07.png",
      price: "$22.99",
      viewedAt: "2 days ago"
    },
    {
      id: 6,
      type: "article",
      title: "The Truth About Anti-Aging Products",
      description: "Separating facts from fiction in the world of anti-aging skincare",
      image: "/src/img/BareGlowBlog3.png",
      date: "April 18, 2023",
      viewedAt: "3 days ago"
    }
  ];

  const renderProfileContent = () => (
    <div className="space-y-8">
      <div className="bg-secondary/30 rounded-lg p-6">
        <h3 className="text-sm font-medium mb-4">Preview</h3>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback className="text-2xl">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge className="bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200">{profile.age}</Badge>
                <span>•</span>
                <Badge className="bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200">{profile.skinType}</Badge>
                <span>•</span>
                <Badge className="bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200">{profile.experience}</Badge>
              </div>
              <h2 className="text-2xl font-medium mb-2">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.description}</p>
            </div>
            <Button
              variant="outline"
              className="rounded-md bg-rosegold-100 hover:bg-rosegold-200 text-rosegold-700 border-rosegold-200"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={editForm.avatar} />
                <AvatarFallback className="text-2xl">
                  {editForm.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="rounded-full">
                Upload Photo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Age</label>
                <Input
                  value={editForm.age}
                  onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
                  className="bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Skin Type</label>
                <Input
                  value={editForm.skinType}
                  onChange={(e) => setEditForm({ ...editForm, skinType: e.target.value })}
                  className="bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Experience</label>
                <Input
                  value={editForm.experience}
                  onChange={(e) => setEditForm({ ...editForm, experience: e.target.value })}
                  className="bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                className="bg-white resize-none h-32"
                maxLength={80}
              />
              <div className="text-right text-xs text-muted-foreground mt-1">
                {editForm.description.length}/80
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <Button variant="outline" className="rounded-full" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              className="rounded-full bg-rosegold-500 hover:bg-rosegold-600"
              onClick={handleSaveProfile}
            >
              Save Changes
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Name</h3>
              <p className="font-medium">{profile.name}</p>
            </div>
            
            <div className="text-right">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-rosegold-600 hover:bg-rosegold-50 hover:text-rosegold-700"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full px-3 py-1 bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200">{profile.age}</Badge>
                <Badge className="rounded-full px-3 py-1 bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200">{profile.skinType}</Badge>
                <Badge className="rounded-full px-3 py-1 bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200">{profile.experience}</Badge>
              </div>
            </div>
            
            <div className="text-right">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-rosegold-600 hover:bg-rosegold-50 hover:text-rosegold-700"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
            <Textarea
              value={profile.description}
              className="resize-none bg-secondary/30 h-32"
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );

  const renderRecentlyViewedContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-medium mb-6">Recently Viewed Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentlyViewedItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover-lift">
            <div className="aspect-video bg-champagne-50 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-white/80 text-foreground">
                {item.type === "product" ? "Product" : "Article"}
              </Badge>
              <div className="absolute bottom-3 left-3 text-xs bg-black/60 text-white px-2 py-1 rounded-full">
                {item.viewedAt}
              </div>
            </div>
            <div className="p-4">
              <Link to={item.type === "product" ? `/products/${item.id}` : `/blogs/${item.id}`}>
                <h3 className="font-medium text-lg mb-1 line-clamp-1 hover:text-rosegold-600 transition-colors">
                  {item.title}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {item.description}
              </p>
              {item.type === "product" && (
                <div className="flex items-center justify-between">
                  <span className="font-medium text-rosegold-600">{item.price}</span>
                  <Button variant="outline" size="sm" className="rounded-full" asChild>
                    <Link to={`/products/${item.id}`}>View Details</Link>
                  </Button>
                </div>
              )}
              {item.type === "article" && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                  <Button variant="outline" size="sm" className="rounded-full" asChild>
                    <Link to={`/blogs/${item.id}`}>Read Article</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Button variant="outline" className="rounded-full" asChild>
          <Link to="/saved">View All Saved Items</Link>
        </Button>
      </div>
    </div>
  );

  // We'll keep the quiz content the same but just update the recommended blog posts
  const renderQuizContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-medium mb-6">Your Skin Profile</h2>
      <div className="bg-rosegold-50/50 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Your Skin Type</h3>
            <div className="text-xl font-medium">{profile.skinType}</div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Primary Concerns</h3>
            <div className="text-xl font-medium">Dryness, Sensitivity</div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Secondary Concerns</h3>
            <div className="text-xl font-medium">Fine Lines</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <h3 className="text-xl font-medium mb-4">Recommended Routine</h3>
          <div className="space-y-4">
            {["Cleanse", "Tone", "Treat", "Moisturize", "Sun Protection"].map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rosegold-100 flex items-center justify-center">
                  <span className="text-rosegold-700 font-medium">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-medium">{step}</h4>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 && "Gentle hydrating cleanser"}
                    {index === 1 && "Alcohol-free toner with hyaluronic acid"}
                    {index === 2 && "Niacinamide serum for barrier repair"}
                    {index === 3 && "Rich cream moisturizer"}
                    {index === 4 && "SPF 30+ broad spectrum sunscreen"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
          <h3 className="text-xl font-medium mb-4">Recommended Products</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <Link to={`/products/${item}`} key={item} className="flex items-center gap-4 hover:bg-secondary/20 p-2 rounded-lg transition-colors">
                <div className="w-16 h-16 bg-champagne-50 rounded-md overflow-hidden">
                  <img
                    src={item === 1 ? "/src/img/product08.png" : 
                         item === 2 ? "/src/img/product09.png" :
                         item === 3 ? "/src/img/product10.png" :
                         "/src/img/product11.png"}
                    alt={`Product ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">
                    {item === 1 ? "BareGlow Hydrating Cream" :
                     item === 2 ? "Nourishing Facial Oil" :
                     item === 3 ? "Barrier Repair Serum" :
                     "Gentle Cleansing Milk"}
                  </h4>
                  <p className="text-sm text-muted-foreground">Perfect for dry skin</p>
                </div>
                <div className="text-rosegold-600 font-medium">$24.99</div>
              </Link>
            ))}
            <div className="text-center pt-2">
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/products">View All Recommendations</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 mt-8">
        <h3 className="text-xl font-medium mb-4">Recommended Blog Posts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link to={`/blogs/${item}`} key={item} className="flex items-start gap-4 hover:bg-secondary/20 p-2 rounded-lg transition-colors">
              <div className="w-20 h-20 bg-champagne-50 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item === 1 ? "/src/img/BareGlowBlog1.png" :
                       item === 2 ? "/src/img/BareGlowBlog2.png" :
                       item === 3 ? "/src/img/BareGlowBlog3.png" :
                       "/src/img/BlogSplashImg.png"}
                  alt={`Blog post ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium line-clamp-2">{item === 1 ? "The Ultimate Guide to Dry Skin Care" : 
                                                         item === 2 ? "How to Treat Sensitivity and Redness" : 
                                                         item === 3 ? "Best Ingredients for Sensitive Skin Types" :
                                                         "Winter Skincare Tips for Dry Skin"}</h4>
                <p className="text-sm text-muted-foreground mt-1">5 min read</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center pt-4">
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/blogs">View All Articles</Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-champagne-50/50 rounded-xl p-6 text-center">
        <h3 className="text-xl font-medium mb-3">Want to update your skin profile?</h3>
        <p className="text-muted-foreground mb-4">Take our skin quiz again to get the most up-to-date recommendations.</p>
        <Button className="rounded-full bg-rosegold-500 hover:bg-rosegold-600" asChild>
          <Link to="/quiz">Retake Skin Quiz</Link>
        </Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfileContent();
      case "recent":
        return renderRecentlyViewedContent();
      case "quiz":
        return renderQuizContent();
      default:
        return renderProfileContent();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-light mb-10">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="md:col-span-3">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
