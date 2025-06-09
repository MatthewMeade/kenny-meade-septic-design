
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ApplicationsSection = () => {
  const applications = [
    {
      title: "Water and Sewage Application",
      description: "Required for new septic system installations",
      url: "https://www.gov.nl.ca/dgsnl/files/forms-pdf-application-to-develop-land-c.pdf"
    },
    {
      title: "Protected Roads Application",
      description: "For properties within 400m of Trans Canada Highway",
      url: "https://www.gov.nl.ca/dgsnl/files/forms-pdf-preliminaryappltodevland-web.pdf"
    },
    {
      title: "Municipal Approval Form",
      description: "Local municipal approval documentation",
      url: "/MunicipalApprovalForm.pdf"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Required Forms & Applications
            </h2>
            <p className="text-lg text-text-muted">
              Download the forms you may need for your septic design project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="bg-dark-surface border-dark-surface-light hover:border-accent-blue/30 transition-all group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center space-y-4 flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {app.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-medium transition-all mt-auto"
                  >
                    <a 
                      href={app.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Download Form
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-dark-surface-light border-accent-green/20">
              <CardContent className="p-6">
                <p className="text-text-muted">
                  <strong className="text-white">Need help with applications?</strong>
                  {' '}For a fee, I can act as your agent and submit completed forms along with all required documents to Service NL.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
