import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import siddhamLogo from 'figma:asset/46f7468268dc4910cc1671a5d6957250ae4f881b.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src={siddhamLogo}
              alt="Siddham Logo" 
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('distributor')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </button>
            <Button 
              onClick={() => scrollToSection('distributor')}
              className="bg-primary hover:bg-primary/90"
            >
              Become a Distributor
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('certifications')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('distributor')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contact Us
              </button>
              <Button 
                onClick={() => scrollToSection('distributor')}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Become a Distributor
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}