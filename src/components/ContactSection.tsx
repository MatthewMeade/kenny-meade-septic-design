
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Smartphone } from 'lucide-react';

const ContactSection = () => {


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

          {/* Contact Actions */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Facebook Messenger */}
            <Card className="bg-dark-surface-light border-accent-blue/30">
              <CardContent className="p-6 md:p-8 text-center flex flex-col h-full">
                <MessageCircle className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">
                  Facebook
                </h4>
                <p className="text-text-muted mb-6 flex-grow">
                  Contact me on Facebook Messenger
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold w-full mt-auto"
                >
                  <a
                    href="https://m.me/kenny.meade.77"
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
              <CardContent className="p-6 md:p-8 text-center flex flex-col h-full">
                <Smartphone className="w-12 h-12 text-accent-green mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">
                  Call or Text
                </h4>
                <a href="sms:7092147335" className="flex items-center justify-center space-x-2">

                  <p className="text-text-muted mb-6 flex-grow">
                    1-709-214-733
                  </p>
                </a>

                <div className='grid grid-cols-2 gap-4 mt-auto'>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent-green hover:bg-accent-green/90 text-white font-semibold "
                  >
                    <a href="tel:7092147335" className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call</span>
                    </a>

                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent-green hover:bg-accent-green/90 text-white font-semibold "
                  >
                    <a href="sms:7092147335" className="flex items-center justify-center space-x-2">
                      <Smartphone className="w-5 h-5" />
                      <span> Text</span>
                    </a>

                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-dark-surface-light border-accent-blue/30">
              <CardContent className="p-6 md:p-8 text-center flex flex-col h-full">
                <Mail className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">
                  Send me an email
                </h4>
                <p className="text-text-muted mb-6 flex-grow">
                  <a
                    href="mailto:KennyDMeade@Gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >KennyDMeade@gmail.com</a>
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold w-full mt-auto"
                >
                  <a
                    href="mailto:KennyDMeade@Gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
