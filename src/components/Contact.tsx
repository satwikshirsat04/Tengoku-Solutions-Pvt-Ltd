
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import GoogleMap from "@/components/GoogleMap";
import AnimatedCounter from "@/components/AnimatedCounter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  MessageSquare,
  Users,
  Calculator
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You would typically send this to your backend
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91-7888009568",
      description: "Mon-Fri, 8AM-6PM PST"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@tengokusolutions.com",
      description: "24/7 support"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "S.n. 21/4/c,b 504,5th Flr, Goldville, Dange Chowk, Chinchwadgaon, Pune, Pune City, Maharashtra, India, 411033",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 8AM - 6PM",
      description: "Emergency support available"
    }
  ];

  const services = [
    {
      icon: Calculator,
      title: "Free Energy Audit",
      description: "Comprehensive analysis of your current energy usage and potential savings"
    },
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "Expert advice on the best renewable energy solutions for your needs"
    },
    {
      icon: Users,
      title: "Project Planning",
      description: "Detailed project timeline, costs, and implementation strategy"
    }
  ];

  const offices = [
    {
      city: "Pune",
      address: "S.n. 21/4/c,b 504,5th Flr, Goldville, Dange Chowk, Chinchwadgaon, Pune, Pune City, Maharashtra, India, 411033",
      phone: "+91-7888009568",
      email: "info@tengokusolutions.com"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your energy future? Contact our experts for a free consultation 
              and discover how renewable energy can benefit your business.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">Visit us at our headquarters or get directions</p>
          </div>
          <GoogleMap address="S.n. 21/4/c,b 504,5th Flr, Goldville, Dange Chowk, Chinchwadgaon, Pune, Pune City, Maharashtra, India, 411033" height="500px" />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your project, energy goals, or any specific questions..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-energy-gradient hover:opacity-90" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-energy-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-700">{info.content}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-energy-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-4 h-4 text-energy-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our office
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="text-center hover:shadow-lg transition-shadow max-w-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{offices[0].city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start justify-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="text-sm text-left">{offices[0].address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{offices[0].phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{offices[0].email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical solar installation take?",
                answer: "Most residential installations take 1-3 days, while commercial projects can take 1-4 weeks depending on size and complexity."
              },
              {
                question: "What financing options do you offer?",
                answer: "We offer various financing options including cash purchase, solar loans, leases, and power purchase agreements (PPAs) to fit your budget."
              },
              {
                question: "Do you handle permits and inspections?",
                answer: "Yes, we handle all permitting, utility interconnection, and inspection processes to ensure a smooth installation experience."
              },
              {
                question: "What warranties do you provide?",
                answer: "We offer 25-year performance warranties on solar panels, 10-year warranties on inverters, and comprehensive workmanship warranties."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-energy-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Take the first step towards energy independence with a free consultation from our experts.
          </p>
          <a href="tel:+917888009568" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium bg-white text-energy-blue hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Phone className="w-5 h-5 mr-2" />
            Call Now: <AnimatedCounter end={555} suffix="-" duration={1500} /> <AnimatedCounter end={123} suffix="-" duration={1500} /> <AnimatedCounter end={4567} duration={1500} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
