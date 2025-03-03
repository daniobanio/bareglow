import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, BookmarkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true);
        setIsAtTop(false);
      } else {
        setIsScrolled(false);
        setIsAtTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Quiz", path: "/quiz" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled 
          ? "bg-white/50 backdrop-blur-md shadow-sm" 
          : "bg-white"
        } 
        ${isScrolled ? "py-3" : "py-5"}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-light tracking-tight hover:opacity-80 transition-opacity text-foreground"
          >
            <img src="/src/img/BareGlow_logo.png" alt="BareGlow" className="h-6 md:h-8" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-foreground/80 hover:text-primary transition-colors duration-200 text-base uppercase tracking-wide navbar-link ${
                  location.pathname === link.path ? "text-primary font-medium" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-2 hover:bg-secondary rounded-full transition-colors duration-200"
            >
              <Search className="h-5 w-5 text-foreground/80 navbar-icon" />
            </button>
            <Link
              to="/saved"
              aria-label="My Saved"
              className="p-2 hover:bg-secondary rounded-full transition-colors duration-200"
            >
              <BookmarkIcon className="h-5 w-5 text-foreground/80 navbar-icon" />
            </Link>
            <Link
              to="/profile"
              className="p-2 hover:bg-secondary rounded-full transition-colors duration-200"
            >
              <User className="h-5 w-5 text-foreground/80 navbar-icon" />
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 rounded-full navbar-button"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/profile"
            className="text-2xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            My Account
          </Link>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
