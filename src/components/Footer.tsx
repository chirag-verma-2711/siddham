import siddhamLogo from 'figma:asset/icon_fotter.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 ">
            <img 
              src={siddhamLogo}
              alt="Siddham Logo" 
              className="h-24 w-auto mb-6"
            />
            <p className="text-slate-400 mb-4 max-w-md">
              Exclusive quality home products with professional stainless steel construction.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-md">
                Made in India
              </span>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-md">
                ISI Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block hover:text-primary transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('certifications')}
                className="block hover:text-primary transition-colors"
              >
                Certifications
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>
                Deep Metal Industries<br />
                Vasai East, Maharashtra
              </p>
              <p>
                <a href="mailto:info@siddham.com" className="hover:text-primary transition-colors">
                  info@siddham.com
                </a>
              </p>
              <p>
                <a href="tel:+919325063509" className="hover:text-primary transition-colors">
                  +91 9325063509
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Siddham / Deep Metal Industries. All rights reserved.
            </p>
            <p>
              UDYAM-MH-29-0014256 | GST Registered
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}