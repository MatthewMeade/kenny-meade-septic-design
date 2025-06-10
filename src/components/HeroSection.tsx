
import { Button } from '@/components/ui/button';
import { Phone, MapPin, CheckCircle, ChevronDown } from 'lucide-react';

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
              <span className="text-lg">Servicing Southwest Newfoundland</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Over 25 years of septic design experience. 
            <br className="hidden md:block" />
            Specializing in new and replacement systems.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent-green" />
              <span className="text-white">Free Site Visits</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent-green" />
              <span className="text-white">Professional Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent-green" />
              <span className="text-white">Licensed & Experienced</span>
            </div>
          </div>

          {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all transform hover:scale-105 w-full sm:w-[350px]"
              >
                Get Your Free Site Visit & Quote
              </Button>

              <Button
                size="lg"
                asChild
                className="bg-accent-green hover:bg-accent-green/90 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all w-full sm:w-[350px]"
              >
                <a href="tel:7092147335" className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 709-214-7335</span>
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
          className="text-white hover:text-accent-blue transition-colors left-[-50%] relative"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
