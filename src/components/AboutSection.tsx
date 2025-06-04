
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-accent-blue" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-blue" />,
      number: "500+",
      label: "Projects Completed"
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent-blue" />,
      number: "100%",
      label: "Local Focus"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-blue" />,
      number: "2 Week",
      label: "Avg. Approval Time"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Kenny Meade Septic Design?
            </h2>
            <p className="text-lg text-text-muted">
              Trusted expertise and local knowledge you can count on
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-dark-surface border-dark-surface-light text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-text-muted text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Content */}
          <Card className="bg-dark-surface border-dark-surface-light">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-text-muted leading-relaxed mb-6">
                  With over 15 years of specialized experience in septic design, Kenny Meade 
                  has established himself as Southwest Newfoundland's trusted septic design expert. 
                  Our deep understanding of local soil conditions, regulations, and environmental 
                  factors ensures your septic system is designed correctly the first time.
                </p>
                
                <p className="text-text-muted leading-relaxed mb-6">
                  We work closely with Service NL and local authorities to ensure all designs 
                  meet current standards and regulations. Whether you're building a new home, 
                  replacing a failing system, or need a design for land development, we provide 
                  professional, reliable service that homeowners and contractors trust.
                </p>

                <div className="bg-dark-surface-light p-6 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Our Commitment to You:</h4>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Thorough site evaluation and soil testing</li>
                    <li>• Designs that meet all provincial regulations</li>
                    <li>• Professional consultation throughout the process</li>
                    <li>• Support with permit applications and inspections</li>
                    <li>• Solutions for challenging or failing systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
