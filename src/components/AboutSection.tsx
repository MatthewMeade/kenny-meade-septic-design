
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, MapPin } from 'lucide-react';

const AboutSection = () => {
  const credentials = [
    {
      icon: <Award className="w-8 h-8 text-accent-blue" />,
      title: "Licensed Professional",
      description: "Certified septic design specialist"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-blue" />,
      title: "Proven Track Record",
      description: "Hundreds of successful projects"
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent-blue" />,
      title: "Local Expertise",
      description: "Deep knowledge of regional conditions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose My Services?
            </h2>
            <p className="text-lg text-text-muted">
              Local expertise and professional experience you can trust
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {credentials.map((credential, index) => (
              <Card key={index} className="bg-dark-surface border-dark-surface-light text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {credential.icon}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    {credential.title}
                  </div>
                  <div className="text-text-muted text-sm">
                    {credential.description}
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
                  I've been designing septic systems in Southwest Newfoundland for over 15 years. 
                  My experience with local soil conditions, environmental factors, and regulatory 
                  requirements means your system gets designed right the first time.
                </p>
                
                <p className="text-text-muted leading-relaxed mb-6">
                  Whether you're building a new home, replacing a failing system, or developing 
                  land, I provide the professional design and consultation services you need. 
                  Every project gets my personal attention from initial site visit through final approval.
                </p>

                <div className="bg-dark-surface-light p-6 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">What You Can Expect:</h4>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Thorough site evaluation and professional soil testing</li>
                    <li>• Custom designs that meet all current regulations</li>
                    <li>• Clear communication throughout the entire process</li>
                    <li>• Support with applications and regulatory submissions</li>
                    <li>• Solutions for challenging sites and replacement systems</li>
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
