
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-bg/95 backdrop-blur-sm  border-dark-surface' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold">
              <span className="text-white">Kenny Meade</span>{' '}
              <span className="text-gradient">Septic Design</span>
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-text-muted hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-text-muted hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-text-muted hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-muted hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a href="tel:7092147335" className="flex items-center space-x-2 text-text-muted hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>709-214-7335</span>
              </a>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent-blue hover:bg-accent-blue/90 text-white font-medium px-3 md:px-4 py-2 rounded-md transition-all text-sm md:text-base"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
