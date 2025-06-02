import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Phone, Mail, MapPin } from "lucide-react";
import FloatingCallButton from "./FloatingCallButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Outreach", href: "/outreach" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote-section");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname !== "/") {
      // Navigate to homepage and then scroll to quote section
      window.location.href = "/#quote-section";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-energy-gradient rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div> */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/images/home/Tengoku Solutions.png" alt="logo" />
              </div>

              <span className="text-xl font-bold bg-gradient-to-r from-orange-700 to-green-800 bg-clip-text text-transparent">
                Tengoku Solutions
              </span>

            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-energy-blue ${isActive(item.href)
                    ? "text-energy-blue border-b-2 border-energy-blue pb-1"
                    : "text-gray-600"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-energy-gradient hover:opacity-90 text-white"
                onClick={scrollToQuote}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${isActive(item.href)
                    ? "text-energy-blue bg-energy-light"
                    : "text-gray-600 hover:text-energy-blue hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-energy-gradient hover:opacity-90 text-white"
                  onClick={() => {
                    scrollToQuote();
                    setIsMenuOpen(false);
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>
      {/* <FAQButton /> */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                {/* <div className="w-8 h-8 bg-energy-gradient rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div> */}
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img src="/images/home/Tengoku Solutions.png" alt="logo" />
                </div>
                <span className="text-xl font-bold">Tengoku Solutions Pvt Ltd</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Leading provider of innovative biochar solutions for agriculture, water filtration, and carbon sequestration.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" className="border border-gray-600 text-gray-400 hover:text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" className="border border-gray-600 text-gray-400 hover:text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                  Twitter
                </a>
                <a href="https://facebook.com" target="_blank" className="border border-gray-600 text-gray-400 hover:text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" className="border border-gray-600 text-gray-400 hover:text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                  Instagram
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/outreach" className="hover:text-white transition-colors">Outreach</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-white-800 mr-3 flex-shrink-0" />
                  <a href="mailto:info@tengokusolutions.com" className="hover:text-white transition-colors">
                    info@tengokusolutions.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-white-800 mr-3 flex-shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-white-800 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">
                    S.n. 21/4/c,b 504,5th Flr, Goldville<br />
                    Dange Chowk, Chinchwadgaon<br />
                    Pune, Maharashtra, India, 411033
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tengoku Solutions Pvt Ltd. All rights reserved.</p>
            <span><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions |</Link></span>
            <span><Link to="/privacy" className="hover:text-white transition-colors"> Privacy Policy</Link></span>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <FloatingCallButton />
    </div>
  );
};

export default Layout;
