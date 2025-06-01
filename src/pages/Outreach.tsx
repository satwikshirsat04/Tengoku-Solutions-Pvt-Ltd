
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight, Camera, Handshake, Presentation } from "lucide-react";
import { useEffect } from "react";

const Outreach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      title: "Agricultural Innovation Summit 2024",
      date: "March 15-17, 2024",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop",
      description: "Showcasing our latest biochar technologies to farmers and agricultural experts across India.",
      attendees: 500,
      type: "Exhibition"
    },
    {
      title: "Sustainable Farming Workshop",
      date: "February 20, 2024",
      location: "Punjab, India",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      description: "Hands-on training session with local farmers on biochar application techniques.",
      attendees: 150,
      type: "Workshop"
    },
    {
      title: "Climate Action Conference",
      date: "January 10-12, 2024",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Presenting our carbon sequestration research and environmental impact studies.",
      attendees: 300,
      type: "Conference"
    },
    {
      title: "Rural Development Fair",
      date: "December 5-7, 2023",
      location: "Karnataka, India",
      image: "https://images.unsplash.com/photo-1574943320219-67456f879ffb?w=600&h=400&fit=crop",
      description: "Engaging with rural communities and demonstrating sustainable agricultural practices.",
      attendees: 200,
      type: "Fair"
    },
    {
      title: "Biochar Technology Symposium",
      date: "November 18, 2023",
      location: "Chennai, India",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&h=400&fit=crop",
      description: "Technical presentation on advanced pyrolysis technologies and biochar applications.",
      attendees: 120,
      type: "Symposium"
    },
    {
      title: "Farmers Market Showcase",
      date: "October 25, 2023",
      location: "Haryana, India",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
      description: "Direct interaction with farmers and demonstration of biochar benefits in soil health.",
      attendees: 80,
      type: "Market"
    }
  ];

  const activities = [
    {
      icon: Presentation,
      title: "Educational Workshops",
      description: "Conducting hands-on training sessions for farmers on biochar application and benefits"
    },
    {
      icon: Handshake,
      title: "Community Partnerships",
      description: "Building long-term relationships with farming communities and agricultural organizations"
    },
    {
      icon: Camera,
      title: "Awareness Campaigns",
      description: "Creating educational content and documentation to spread awareness about sustainable agriculture"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Public Engagement & Outreach
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Connecting with communities, educating farmers, and building awareness about 
              sustainable agricultural practices through biochar technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Outreach Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in the power of education and community engagement to drive sustainable change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Events & Exhibitions
            </h2>
            <p className="text-lg text-gray-600">
              Our participation in agricultural events and community engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees}+
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Community Impact
            </h2>
            <p className="text-lg text-gray-600">
              Measuring the reach and effectiveness of our outreach efforts
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-energy-blue mb-2">50+</div>
              <div className="text-gray-600">Events Participated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-energy-blue mb-2">5000+</div>
              <div className="text-gray-600">Farmers Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-energy-blue mb-2">25+</div>
              <div className="text-gray-600">Cities Visited</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-energy-blue mb-2">100+</div>
              <div className="text-gray-600">Workshops Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Our Community Outreach
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Interested in hosting an event or learning more about our outreach programs? 
            Contact us to bring sustainable agriculture education to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-energy-blue hover:bg-blue-50">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Outreach;
