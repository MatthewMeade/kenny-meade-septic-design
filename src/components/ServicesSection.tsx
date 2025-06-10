
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, DollarSign, Clock, Shield } from 'lucide-react';

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-accent-green" />,
      title: "Starting at $500",
      description: "Competitive pricing for professional septic design services"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-green" />,
      title: "Complete Package",
      description: "Includes free site visit, soil testing, and septic design"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent-green" />,
      title: "Fast Turnaround",
      description: "Approval typically granted within two weeks"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent-green" />,
      title: "25+ Years Experience",
      description: "Licensed professional with extensive local knowledge"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-surface">
      <div className="container-max section-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Expert Septic Design Services
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Professional septic system design and consultation services for Southwest Newfoundland residents
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-dark-surface-light border-accent-blue/30">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Septic Designs Starting at $500
              </h3>
              <p className="text-lg text-white mb-6">
                Includes a free site visit, site testing, and septic design
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent-green hover:bg-accent-green/90 text-white font-semibold px-6 md:px-8 py-3 w-full sm:w-auto"
              >
                Request Your Free Site Visit
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-dark-surface-light border-dark-surface hover:border-accent-blue/30 transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-text-muted text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
