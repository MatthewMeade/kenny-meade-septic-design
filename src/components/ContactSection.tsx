
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

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
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Contact Me Today
            </h2>
            <p className="text-lg text-text-muted">
              Ready to get started? Get in touch for your free site visit and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-dark-surface-light border-dark-surface">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-dark-bg border-dark-surface text-white focus:border-accent-blue placeholder:text-text-muted"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-dark-bg border-dark-surface text-white focus:border-accent-blue placeholder:text-text-muted"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-dark-bg border-dark-surface text-white focus:border-accent-blue placeholder:text-text-muted"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-dark-bg border-dark-surface text-white focus:border-accent-blue resize-none placeholder:text-text-muted"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent-green hover:bg-accent-green/90 text-white font-semibold py-3"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
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

              {/* Quick Call to Action */}
              <Card className="bg-dark-surface-light border-accent-blue/30">
                <CardContent className="p-6 md:p-8 text-center">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Need immediate assistance?
                  </h4>
                  <p className="text-text-muted mb-6">
                    Call directly for urgent inquiries or immediate consultation
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold w-full sm:w-auto"
                  >
                    <a href="tel:7092147335" className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Now: 709-214-7335</span>
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
