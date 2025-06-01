import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Users, Target, Award, Globe, Lightbulb, Heart, Smile, FileText, Flag } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "David Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in renewable energy, former Tesla executive"
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e57893?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Electrical Engineering, solar technology innovator"
    },
    {
      name: "Michael Johnson",
      role: "VP of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Project management expert with 500+ installations"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Environmental scientist focused on clean energy solutions"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing the boundaries of renewable energy technology"
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to protecting our planet for future generations"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with our clients and communities"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering the highest quality solutions and services"
    }
  ];

  const milestones = [
    { year: "2018", event: "Company Founded", description: "Started with a mission to democratize clean energy" },
    { year: "2019", event: "First 100 MW", description: "Reached our first major milestone in energy generation" },
    { year: "2021", event: "Series A Funding", description: "Secured $50M to expand operations nationwide" },
    { year: "2023", event: "500+ Projects", description: "Completed over 500 successful installations" },
    { year: "2024", event: "International Expansion", description: "Launched operations in Canada and Mexico" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Tengoku Solutions
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to accelerate the world's transition to sustainable energy 
              through innovative solutions and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                To make renewable energy accessible, affordable, and reliable for everyone. 
                We believe that sustainable energy is not just an environmental imperative, 
                but an economic opportunity that benefits communities worldwide.
              </p>
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center">
                  <Flag className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                To create a world where clean, sustainable energy powers every home, business, and community,
                ensuring a healthier planet for future generations while driving economic prosperity through
                innovation and environmental stewardship.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-energy-blue mb-2">
                    <AnimatedCounter end={250} suffix="MW" duration={2000} />
                  </div>
                  <div className="text-gray-600">Clean Energy Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-energy-green mb-2">
                    <AnimatedCounter end={50} suffix="K+" duration={2000} />
                  </div>
                  <div className="text-gray-600">Tons CO₂ Saved</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop" 
                alt="Solar farm" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-energy-blue" />
                  <div>
                    <p className="font-semibold">Global Impact</p>
                    <p className="text-sm text-gray-600"><AnimatedCounter end={3} duration={1000} /> Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adding Smiles Section */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Adding Smiles on Farmers' Faces
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our biochar solutions are transforming agricultural practices, helping farmers increase yields,
              reduce costs, and build more sustainable businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop" 
                  alt="Farmer with biochar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Yield Improvements</h3>
                <p className="text-gray-600 mb-4">
                  Farmers using our biochar products have seen crop yields increase by 
                  <span className="font-bold text-energy-blue"> <AnimatedCounter end={30} suffix="%" duration={2000} /></span>
                  on average.
                </p>
                <Badge variant="outline" className="px-3 py-1 border-energy-blue text-energy-blue">
                  <AnimatedCounter end={10000} suffix="+" duration={2500} /> Farms
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&h=400&fit=crop" 
                  alt="Sustainable farming" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Water Conservation</h3>
                <p className="text-gray-600 mb-4">
                  Reduced irrigation requirements by up to
                  <span className="font-bold text-energy-blue"> <AnimatedCounter end={25} suffix="%" duration={2000} /></span>
                  while maintaining optimal soil moisture.
                </p>
                <Badge variant="outline" className="px-3 py-1 border-energy-blue text-energy-blue">
                  <AnimatedCounter end={5} suffix="B" duration={2500} /> Gallons Saved
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop" 
                  alt="Biochar application" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Fertilizer Reduction</h3>
                <p className="text-gray-600 mb-4">
                  Decreased synthetic fertilizer usage by
                  <span className="font-bold text-energy-blue"> <AnimatedCounter end={40} suffix="%" duration={2000} /></span>
                  while improving nutrient availability.
                </p>
                <Badge variant="outline" className="px-3 py-1 border-energy-blue text-energy-blue">
                  <AnimatedCounter end={30} suffix="M" duration={2500} /> In Savings
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to transform energy
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-energy-blue"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <Badge className="mb-3 bg-energy-blue">{milestone.year}</Badge>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-energy-blue rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The experts driving innovation in renewable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-energy-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
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
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Whether you're looking for energy solutions or want to be part of our mission, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-4 bg-white/10 border-white/20">
              <CardContent className="p-0 text-white">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Our Goal</h3>
                <p className="text-sm text-blue-100">1GW of clean energy by 2030</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
