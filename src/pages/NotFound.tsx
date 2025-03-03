import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import usePageTitle from "@/hooks/usePageTitle";

const NotFound = () => {
  const location = useLocation();
  usePageTitle("404 Not Found");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-champagne-50/50 px-4">
      <div className="text-center max-w-md">
        <div className="inline-block mb-8">
          <div className="relative">
            <div className="h-40 w-40 bg-rosegold-100 rounded-full mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-7xl font-light text-rosegold-600">404</h1>
            </div>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Page not found</h2>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="rounded-full px-8 border-rosegold-300 text-rosegold-700 hover:bg-rosegold-50"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
          <Link to="/">
            <Button className="rounded-full px-8 bg-rosegold-500 hover:bg-rosegold-600 w-full sm:w-auto">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
