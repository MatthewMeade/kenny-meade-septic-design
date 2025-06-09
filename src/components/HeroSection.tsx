
import { Button } from '@/components/ui/button';
import { Phone, MapPin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-dark-surface overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Kenny Meade</span>
              <br />
              <span className="text-gradient font-poppins">Septic Design</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-text-muted">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Southwest Newfoundland</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Professional septic system design and consultation
            <br className="hidden md:block" />
            for new builds and system replacements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Get Your Free Site Visit
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all w-full sm:w-auto"
            >
              <a href="tel:7092147335" className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call: 709-214-7335</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          onClick={scrollToServices}
          variant="ghost"
          size="sm"
          className="text-white hover:text-accent-blue transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
