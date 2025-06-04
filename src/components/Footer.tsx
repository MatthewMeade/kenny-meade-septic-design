
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-surface">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Kenny Meade Septic Design
            </h3>
            <p className="text-text-muted">
              Professional septic design services for Southwest Newfoundland
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <a 
              href="mailto:KennyDMeade@Gmail.com"
              className="flex items-center space-x-3 text-text-muted hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>KennyDMeade@Gmail.com</span>
            </a>
            <a 
              href="tel:7092147335"
              className="flex items-center space-x-3 text-text-muted hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>709-214-7335</span>
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex justify-start lg:justify-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-dark-surface mt-8 pt-8 text-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Kenny Meade Septic Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
