
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What is a septic system?",
      answer: "A septic system is generally made up of two parts: A Septic Tank and A Leaching Field. Your septic system stores and treats sewage / grey water from your home before it is released back into the local water table."
    },
    {
      id: "item-2",
      question: "What is the cost of a new septic system?",
      answer: "Approximately $5,000 - $7,000 for a basic system, add an additional $5,000 or more if imported fill is required."
    },
    {
      id: "item-3",
      question: "How much land is required for a septic system?",
      answer: "Semi service lot (Water source is off site): 0.14 hectares or about 15,000 square feet. Full service lot (Water source is on the lot): 0.2 hectares or about 20,000 square feet."
    },
    {
      id: "item-4",
      question: "What size septic tank is required?",
      answer: "A minimum of 500 gallons is required by standard, but only 600 gallon tanks are available locally. If the dwelling has over 3 bedrooms a larger tank will be needed."
    },
    {
      id: "item-5",
      question: "What is the separation distance between my well and septic system?",
      answer: "The septic tank and absorption field must have a minimum separation distance of: 100 feet from a natural water source or dug well, 50 feet from a drilled well."
    },
    {
      id: "item-6",
      question: "Can an ocean outfall be used in place of an absorption field?",
      answer: "Ocean outfalls can be used if they are common in the area and soil conditions are unsuitable for an absorption field."
    },
    {
      id: "item-7",
      question: "Can an ocean outfall be shared?",
      answer: "An ocean outfall can be shared provided you have written consent from the other party, and your own septic tank per CSA standards."
    },
    {
      id: "item-8",
      question: "What is the difference between the white and green pipe?",
      answer: "The green pipe is road grade, it is used where there may be a load on the surface."
    },
    {
      id: "item-9",
      question: "What is involved in the free site visit?",
      answer: "The site visit is a primary evaluation of the property. At this point we determine if the property is suitable for a septic field and determine the optimal location for the septic field."
    },
    {
      id: "item-10",
      question: "What does it cost for the design process?",
      answer: "Charges start at $500 for testing and design, the client is responsible for the cost of the backhoe or excavator."
    },
    {
      id: "item-11",
      question: "What information is required during the site visit?",
      answer: "The following information is required for the site visit: Completed application to develop land, Floor plan of the dwelling, Property Dimensions."
    },
    {
      id: "item-12",
      question: "When is a new septic system design required?",
      answer: "A new septic system design is required when: Applying for Crown land, Applying to develop land, Requested by Service NL, Requested by lenders or lawyers, Replacing a failing system."
    },
    {
      id: "item-13",
      question: "What can I do if I have a failing system but don't meet the requirements for a new system?",
      answer: "We will work with Service NL to design a replacement system."
    },
    {
      id: "item-14",
      question: "How long do I have to install the system once the design process is completed?",
      answer: "Once the design is completed, you have two years to install it with a possible extension of an additional year (unless otherwise instructed by Service NL)."
    },
    {
      id: "item-15",
      question: "When installing my septic system, where do I call for an inspection?",
      answer: "Call Service NL five working days before the install. The septic system can not be back filled until the inspection is completed. Service NL can be reached at: 643-8651 or 643-8652."
    },
    {
      id: "item-16",
      question: "When can I apply for an Electrical permit?",
      answer: "An Electrical permit can be obtained once the sewer design is approved and an approval certificate is issued to the home owner."
    },
    {
      id: "item-17",
      question: "Who is responsible to arrange a backhoe or excavator for the soil tests?",
      answer: "The applicant is responsible for the cost of rental and arranging a contractor to be on site during the time of soil testing. I will provide a list of contractors / equipment owners who would be available for hire."
    },
    {
      id: "item-18",
      question: "Who submits the preliminary application to develop land?",
      answer: "These can be filled out by the applicant and submitted to Service NL by the applicant. For a fee, I can act as your agent and submit the completed form along with all required documents to Service NL."
    },
    {
      id: "item-19",
      question: "How long does it take to have a sewer design completed and approved?",
      answer: "After the site visit and testing of soil, approval is usually granted within two weeks."
    },
    {
      id: "item-20",
      question: "What is protected roads?",
      answer: "Protected Roads is a 400 meter easement from the Trans Canada Highway. If you are within this area a Preliminary Application to Develop Land must be completed and submitted to Service NL."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dark-surface">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-muted">
              Everything you need to know about septic design services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-dark-surface-light border-dark-surface rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-accent-blue transition-colors text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
