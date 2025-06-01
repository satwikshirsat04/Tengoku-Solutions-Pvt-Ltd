import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      name: "General Questions",
      items: [
        {
          question: "What is biochar and how does it work?",
          answer: "Biochar is a carbon-rich charcoal produced from organic waste through pyrolysis. It enhances soil fertility by improving water retention, nutrient availability, and microbial activity while sequestering carbon for centuries."
        },
        {
          question: "How is Tengoku Solutions different from other biochar providers?",
          answer: "We specialize in customized biochar formulations tailored to specific soil types and crops, backed by 15+ years of agricultural research and sustainable production methods."
        },
        {
          question: "Where do you operate?",
          answer: "We're headquartered in Pune, India but serve clients globally with distribution partners in 15+ countries across Asia, Europe, and North America."
        }
      ]
    },
    {
      name: "Product Information",
      items: [
        {
          question: "What types of biochar products do you offer?",
          answer: "We provide premium agricultural biochar, water filtration solutions, custom biochar blends, and biochar production technology systems."
        },
        {
          question: "How do I choose the right biochar for my needs?",
          answer: "Our agricultural experts will analyze your soil type, crops, and local conditions to recommend the optimal biochar formulation and application rate."
        },
        {
          question: "What certifications do your products have?",
          answer: "Our biochar is IBI certified, meets ISO standards, and carries organic certifications where applicable."
        }
      ]
    },
    {
      name: "Application & Usage",
      items: [
        {
          question: "How do I apply biochar to my soil?",
          answer: "Application methods vary by crop and soil type. Generally, we recommend mixing biochar with compost or fertilizer before incorporating it into the top 6-12 inches of soil at rates between 5-20% by volume."
        },
        {
          question: "How long until I see results from biochar?",
          answer: "Initial improvements in water retention may appear within weeks, while full benefits for soil fertility and crop yields typically emerge over 1-2 growing seasons as the biochar integrates with your soil ecosystem."
        },
        {
          question: "Can biochar be used with other soil amendments?",
          answer: "Yes, biochar works synergistically with organic fertilizers and compost. We often recommend pre-charging biochar with nutrients before application."
        }
      ]
    },
    {
      name: "Technical & Scientific",
      items: [
        {
          question: "What is the carbon sequestration potential of biochar?",
          answer: "Our biochar sequesters approximately 3 tons of CO₂ equivalent per ton of biochar applied, with stability in soils for hundreds to thousands of years."
        },
        {
          question: "How does biochar improve water retention?",
          answer: "Biochar's porous structure acts like a sponge, holding up to 5 times its weight in water while improving soil structure to prevent runoff and evaporation."
        },
        {
          question: "What research supports your claims?",
          answer: "Our products are backed by peer-reviewed studies from our R&D team and university partners. We can provide technical documentation and case studies upon request."
        }
      ]
    },
    {
      name: "Ordering & Support",
      items: [
        {
          question: "How can I place an order?",
          answer: "Contact our sales team through the website form, email, or phone to discuss your requirements. We'll prepare a customized quote and delivery plan."
        },
        {
          question: "Do you offer bulk discounts?",
          answer: "Yes, we provide volume pricing for agricultural operations and commercial projects. Discounts start at orders over 5 tons."
        },
        {
          question: "What support do you provide after purchase?",
          answer: "We offer comprehensive technical support including application guidance, soil testing recommendations, and follow-up consultations to ensure optimal results."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our biochar products and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-energy-light rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-5 h-5 text-energy-blue mr-2" />
              <span className="text-energy-blue font-medium">How can we help?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Answers to Your Biochar Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? <Link to="/contact" className="text-energy-blue hover:underline">Contact our team</Link> for personalized assistance.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const index = categoryIndex * 10 + itemIndex; // Create unique index
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full text-left"
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between items-center">
                              <h4 className="font-semibold text-gray-900">
                                {item.question}
                              </h4>
                              {activeIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-energy-blue" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-energy-blue" />
                              )}
                            </div>
                            {activeIndex === index && (
                              <p className="mt-4 text-gray-600">{item.answer}</p>
                            )}
                          </CardContent>
                        </button>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our biochar experts are ready to provide detailed answers and recommendations for your specific needs.
            </p>
            <Link to="/contact">
              <Button className="bg-energy-gradient text-white hover:opacity-90">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;