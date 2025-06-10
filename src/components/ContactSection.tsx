
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-accent-blue" />,
      label: "Phone",
      value: "709-214-7335",
      href: "tel:7092147335"
    },
    {
      icon: <Mail className="w-5 h-5 text-accent-blue" />,
      label: "Email",
      value: "KennyDMeade@Gmail.com",
      href: "mailto:KennyDMeade@Gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent-blue" />,
      label: "Service Area",
      value: "Southwest Newfoundland",
      href: null
    },
    {
      icon: <Clock className="w-5 h-5 text-accent-blue" />,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-surface">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Contact Me Today
            </h2>
            <p className="text-lg text-text-muted">
              Ready to get started? Get in touch for your free site visit and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="bg-dark-bg border-dark-surface">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-text-muted mb-1">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-accent-blue transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Actions */}
            <div className="space-y-6">
              {/* Facebook Messenger */}
              <Card className="bg-dark-surface-light border-accent-blue/30">
                <CardContent className="p-6 md:p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Message Me on Facebook
                  </h4>
                  <p className="text-text-muted mb-6">
                    Get instant responses to your questions via Facebook Messenger
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold w-full"
                  >
                    <a 
                      href="https://m.me/kenny.meade.septic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Send Message</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Phone Call */}
              <Card className="bg-dark-surface-light border-accent-green/30">
                <CardContent className="p-6 md:p-8 text-center">
                  <Phone className="w-12 h-12 text-accent-green mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Need immediate assistance?
                  </h4>
                  <p className="text-text-muted mb-6">
                    Call directly for urgent inquiries or immediate consultation
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-accent-green hover:bg-accent-green/90 text-white font-semibold w-full"
                  >
                    <a href="tel:7092147335" className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Now: 709-214-7335</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-dark-bg border-dark-surface">
                <CardContent className="p-6 md:p-8 text-center">
                  <Mail className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Email for Detailed Inquiries
                  </h4>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white font-semibold w-full"
                  >
                    <a href="mailto:KennyDMeade@Gmail.com" className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Send Email</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
