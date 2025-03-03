import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Star, Heart, Award, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import usePageTitle from "@/hooks/usePageTitle";

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft text-center group">
      <div className="w-32 h-32 rounded-full bg-champagne-50 mx-auto mb-6 overflow-hidden relative">
        <img 
          src={image || "/lovable-uploads/c6d6de21-6e42-4875-9808-4bb8f5b53ad6.png"} 
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-medium mb-1 group-hover:text-rosegold-600 transition-colors">{name}</h3>
      <p className="text-muted-foreground uppercase text-sm tracking-wider mb-6">{role}</p>
      
      <div className="flex justify-center space-x-4">
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-rosegold-100 hover:text-rosegold-600 transition-colors">
          <Facebook className="h-4 w-4 text-gray-500 group-hover:text-rosegold-500" />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-rosegold-100 hover:text-rosegold-600 transition-colors">
          <Twitter className="h-4 w-4 text-gray-500 group-hover:text-rosegold-500" />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-rosegold-100 hover:text-rosegold-600 transition-colors">
          <Instagram className="h-4 w-4 text-gray-500 group-hover:text-rosegold-500" />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-rosegold-100 hover:text-rosegold-600 transition-colors">
          <Linkedin className="h-4 w-4 text-gray-500 group-hover:text-rosegold-500" />
        </a>
      </div>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-soft hover-lift">
    <div className="bg-rosegold-50 w-14 h-14 flex items-center justify-center rounded-full mb-6">
      <Icon className="h-6 w-6 text-rosegold-500" />
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const teamMembers = [
  { name: "Journey", role: "Style/Design Lead", image: "https://avatar.iran.liara.run/public/56" },
  { name: "Daniel", role: "Developer", image: "https://avatar.iran.liara.run/public/21" },
  { name: "Manveer", role: "Content Lead", image: "https://avatar.iran.liara.run/public/38" },
  { name: "Mori", role: "Content Lead", image: "https://avatar.iran.liara.run/public/84" },
  { name: "Yuki", role: "UI Designer", image: "https://avatar.iran.liara.run/public/83" },
];

const companyValues = [
  { 
    icon: Star, 
    title: "Skin First", 
    description: "We believe in gentle, science-driven formulations that deeply hydrate, nourish, and restore radiance to your skin."
  },
  { 
    icon: Shield, 
    title: "Radical Transparency", 
    description: "You deserve to know exactly what you're putting on your skin—no secrets, no compromises."
  },
  { 
    icon: Award, 
    title: "Ethical & Sustainable", 
    description: "Our products are vegan, cruelty-free, and crafted with environmentally responsible practices."
  },
  { 
    icon: Heart, 
    title: "Inclusive Beauty", 
    description: "Skincare is for everyone. Our solutions cater to diverse skin types, tones, and concerns."
  }
];

const AboutPage = () => {
  usePageTitle("About");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-champagne-50/30">
      <Navbar />
      <main className="pb-20">
        {/* Hero Section - Full-width header */}
        <section className="relative w-full h-[40vh] mb-16 mt-[72px]">
          <img 
            src="/src/img/AboutSplashImg.png" 
            alt="About Bare Glow"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <Badge variant="secondary" className="mb-4 backdrop-blur-sm">OUR MISSION</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                Bare Glow Beauty
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                We're on a mission to transform your skincare routine with products that enhance your natural beauty while prioritizing skin health and sustainability.
              </p>
            </div>
          </div>
        </section>

        <div className="container-custom">
          {/* Our Story - Centered without image */}
          <section className="mb-20">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">OUR STORY</Badge>
              <h2 className="text-3xl font-light mb-6">A passion for natural beauty</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Bare Glow, we believe skincare should be simple, effective, and inclusive. Our mission is to craft high-quality, science-backed products that enhance your natural beauty while prioritizing skin health and sustainability.
              </p>
              <p className="text-lg text-muted-foreground">
                With a steadfast commitment to transparency and ethical sourcing, every ingredient in our formulations is carefully selected for its nourishing and rejuvenating properties.
              </p>
            </div>
          </section>

          {/* Our Philosophy - Redesigned with value cards */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">OUR PHILOSOPHY</Badge>
              <h2 className="text-3xl font-light mb-6">What We Stand For</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our core values guide everything we do, from product development to customer relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <ValueCard 
                  key={index} 
                  icon={value.icon} 
                  title={value.title} 
                  description={value.description} 
                />
              ))}
            </div>
          </section>

          {/* Why Choose Bare Glow - With visual elements */}
          <section className="mb-20 bg-gradient-to-r from-rosegold-50 to-champagne-50 rounded-2xl p-10 md:p-16">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">WHY CHOOSE US</Badge>
              <h2 className="text-3xl font-light mb-6">The Bare Glow Difference</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets us apart in the crowded skincare landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft">
                <h3 className="text-xl font-medium mb-4">Premium Ingredients</h3>
                <p className="text-muted-foreground">
                  We carefully select skin-loving components that are free from harsh chemicals and unnecessary additives, ensuring every product delivers exceptional results.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft">
                <h3 className="text-xl font-medium mb-4">Results You Can See</h3>
                <p className="text-muted-foreground">
                  Our formulas are designed to deliver visible improvements, enhancing your skin's natural luminosity with consistent use.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft">
                <h3 className="text-xl font-medium mb-4">Community & Connection</h3>
                <p className="text-muted-foreground">
                  We listen, learn, and evolve based on real feedback from our dedicated community of skincare enthusiasts.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft">
                <h3 className="text-xl font-medium mb-4">The Bare Glow Movement</h3>
                <p className="text-muted-foreground">
                  Bare Glow is more than a skincare brand—it's a movement for confidence, authenticity, and self-care. Follow us and become a part of our glowing community.
                </p>
              </div>
            </div>
          </section>

          {/* Team - Redesigned with more elegant styling */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">OUR TEAM</Badge>
              <h2 className="text-3xl font-light mb-6">Meet the Faces Behind Bare Glow</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals who bring our vision to life every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.slice(0, 3).map((member, idx) => (
                <TeamMember 
                  key={idx}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8 gap-8">
              {teamMembers.slice(3).map((member, idx) => (
                <TeamMember 
                  key={idx}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
          </section>

          {/* CTA - Redesigned with more visual interest */}
          <section className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-rosegold-500/90 to-rosegold-600/80 z-10"></div>
            <img 
              src="/src/img/AboutSplashImg.png" 
              alt="Join Bare Glow Beauty" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 p-10 md:p-16 text-center">
              <h2 className="text-3xl font-light mb-4 text-white">Ready to experience Bare Glow?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join our community of skincare enthusiasts and discover products that are right for your unique skin needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full px-8 bg-white text-rosegold-600 hover:bg-white/90" asChild>
                  <Link to="/products">Shop Products</Link>
                </Button>
                <Button variant="outline" className="rounded-full px-8 border-white text-white bg-white/10 hover:bg-white/20" asChild>
                  <Link to="/quiz">Take Skin Quiz</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
