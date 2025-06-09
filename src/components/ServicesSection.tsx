
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, FileText, Clock, Shield } from 'lucide-react';

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-green" />,
      title: "Complete Site Assessment",
      description: "Thorough site visit with soil testing and evaluation of property conditions"
    },
    {
      icon: <FileText className="w-6 h-6 text-accent-green" />,
      title: "Professional Design",
      description: "Custom septic system design that meets all provincial regulations and standards"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent-green" />,
      title: "Fast Processing",
      description: "Designs typically approved within two weeks of submission"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent-green" />,
      title: "Application Support",
      description: "Assistance with permit applications and regulatory submissions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-surface">
      <div className="container-max section-padding">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What's Included
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Comprehensive septic design services starting at $500 - everything you need for approval
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-dark-surface-light border-dark-surface hover:border-accent-blue/30 transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-text-muted text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent-green hover:bg-accent-green/90 text-white font-semibold px-8 py-3"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
