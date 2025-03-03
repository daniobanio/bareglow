
import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Facebook, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-champagne-50/80 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-light tracking-tight mb-6 inline-block">
              BareGlow
            </Link>
            <p className="text-muted-foreground mb-6 text-sm">
              Your trusted source for skincare reviews, guides, and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-rosegold-100 text-rosegold-600 hover:bg-rosegold-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-rosegold-100 text-rosegold-600 hover:bg-rosegold-50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-rosegold-100 text-rosegold-600 hover:bg-rosegold-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@bareglow.com"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-rosegold-100 text-rosegold-600 hover:bg-rosegold-50 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  Skin Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-rosegold-600 text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-medium text-base mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest updates on new products, skincare tips, and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-l-full rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="rounded-r-full rounded-l-none bg-rosegold-500 hover:bg-rosegold-600">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-rosegold-100/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BareGlow. All rights reserved.
            </p>
            <p className="text-sm flex items-center">
              Made with <Heart className="h-3 w-3 text-rosegold-500 mx-1 fill-rosegold-500" /> by BareGlow Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
