import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast, useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Users,
  Calculator,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert("Please agree to the Terms & Privacy Policy");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      toast({
        title: "Contact Form Submitted!",
        description: result.message || "Our team will contact you shortly.",
        variant: "default",
      });

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      setAgreedToTerms(false);

    } catch (error) {
      console.error("Error submitting contact form:", error);
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91-7888009568",
      description: "Mon-Fri, 8AM-6PM IST"
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
      content: "S.n. 21/4/c,b 504,5th Flr, Goldville, Dange Chowk, Chinchwadgaon, Pune, Maharashtra, India, 411033",
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
      address: "Kant Helix, 3rd floor, Bohir colony, opp. Tata Motors, Chinchwad, Pune, Maharashtra, India - 411033",
      phone: "+91-7888009568",
      email: "info@tengokusolutions.com",
      image: "/images/locations/pune.jpg",
      mapLink: "https://www.google.com/maps/dir//411033,+Dhoka+Colony,+Chinchwad,+Pimpri-Chinchwad,+Pune,+Maharashtra+411033/@18.6342448,73.7054917,34149m/data=!3m2!1e3!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bc2b9b6bbe73f2f:0x6401a5551566b8a3!2m2!1d73.7878934!2d18.6342627?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
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

                    {/* Added Terms & Privacy Policy Agreement */}
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="terms-agreement"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 w-5 h-5 text-energy-blue rounded focus:ring-energy-blue"
                      />
                      <label htmlFor="terms-agreement" className="text-sm text-gray-700">
                        I agree to the{" "}
                        <Link to="/terms" className="text-energy-blue hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-energy-blue hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-energy-gradient hover:opacity-90"
                      size="lg"
                      disabled={!agreedToTerms || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
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
      {/* <section className="py-20 bg-energy-light">
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

      {/* Office Locations */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-4 mb-6">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at our office or get in touch with our team
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="hover:shadow-lg transition-shadow group overflow-hidden relative max-w-md w-full">
              {/* Location pin decoration */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>

              {/* Office image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={offices[0].image || "/images/locations/default-office.jpg"}
                  alt={offices[0].city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <span className="bg-energy-gradient text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    1
                  </span>
                  {offices[0].city}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-50 p-2 rounded-lg mr-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Address</h4>
                      <p className="text-gray-700">{offices[0].address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-50 p-2 rounded-lg mr-3">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Phone</h4>
                      <a href={`tel:${offices[0].phone}`} className="text-gray-700 hover:text-energy-blue">
                        {offices[0].phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-50 p-2 rounded-lg mr-3">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Email</h4>
                      <a href={`mailto:${offices[0].email}`} className="text-gray-700 hover:text-energy-blue">
                        {offices[0].email}
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="mt-6 w-full group-hover:bg-energy-blue group-hover:text-white transition-colors"
                  asChild
                >
                  <a href={offices[0].mapLink} target="_blank" rel="noopener noreferrer">
                    View on Map <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section with Glow Button */}
      <div className="text-center mt-12 mb-12">
        <p className="text-gray-700 text-lg mb-6">Have more questions?</p>
        <Link
          to="/FAQ"
          className="relative group inline-block px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-50 blur-md group-hover:scale-110 transition-all duration-300"></div>

          {/* Button content */}
          <div className="flex items-center space-x-2 relative z-10">
            <span className="text-white font-semibold text-lg">
              Visit FAQ Page
            </span>
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </Link>
      </div>

      {/* CTA */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Take the first step towards energy independence with a free consultation from our experts.
          </p>
          <Button size="lg" className="bg-white text-energy-blue hover:bg-blue-50">
            <Phone className="w-5 h-5 mr-2" />
            Call Now: +91-7888009568
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
