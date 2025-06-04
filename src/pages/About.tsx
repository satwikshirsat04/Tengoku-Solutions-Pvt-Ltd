
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Users, Target, Award, Globe, Lightbulb, Heart, Smile, FileText, Flag, Mail, Linkedin, Twitter, Instagram } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "David Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years in renewable energy, former Tesla executive with expertise in scaling clean technology solutions.",
      email: "david@tengoku.com",
      linkedin: "https://linkedin.com/in/davidchen",
      twitter: "https://twitter.com/davidchen",
      instagram: "https://instagram.com/davidchen"
    },
    // {
    //   name: "Sarah Martinez",
    //   role: "CTO",
    //   image: "https://images.unsplash.com/photo-1494790108755-2616b9e57893?w=400&h=400&fit=crop&crop=face",
    //   bio: "PhD in Electrical Engineering, solar technology innovator with 20+ patents in renewable energy systems.",
    //   email: "sarah@tengoku.com",
    //   linkedin: "https://linkedin.com/in/sarahmartinez",
    //   twitter: "https://twitter.com/sarahmartinez",
    //   instagram: "https://instagram.com/sarahmartinez"
    // },
    // {
    //   name: "Michael Johnson",
    //   role: "VP of Operations",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    //   bio: "Project management expert with 500+ installations across North America and proven track record in scaling operations.",
    //   email: "michael@tengoku.com",
    //   linkedin: "https://linkedin.com/in/michaeljohnson",
    //   twitter: "https://twitter.com/michaeljohnson",
    //   instagram: "https://instagram.com/michaeljohnson"
    // },
    {
      name: "Emily Rodriguez",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Environmental scientist focused on clean energy solutions with expertise in carbon sequestration and biochar applications.",
      email: "emily@tengoku.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
      instagram: "https://instagram.com/emilyrodriguez"
    }
  ];

  const visionCards = [
    {
      title: "Global Clean Energy",
      description: "Powering the world with 100% renewable energy sources",
      icon: Globe,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Carbon Neutrality",
      description: "Achieving net-zero emissions through innovative biochar solutions",
      icon: Lightbulb,
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Sustainable Agriculture",
      description: "Transforming farming practices with regenerative soil solutions",
      icon: Heart,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Community Impact",
      description: "Empowering local communities through clean energy access",
      icon: Users,
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Innovation Leadership",
      description: "Leading breakthrough technologies in renewable energy",
      icon: Award,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Climate Resilience",
      description: "Building adaptive solutions for climate change challenges",
      icon: Target,
      gradient: "from-green-500 to-blue-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to accelerate the world's transition to sustainable energy
              through innovative solutions and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Details with Large Image and Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading the Clean Energy Revolution
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Since 2024, Tengoku Solutions Pvt Ltd has been at the forefront of sustainable energy innovation,
                transforming how communities and businesses approach renewable energy and carbon sequestration.
                Our cutting-edge biochar technology and comprehensive energy solutions have made a measurable
                impact on environmental sustainability.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
                  <div className="text-4xl font-bold text-energy-blue mb-2">
                    <AnimatedCounter end={250} suffix="MW" duration={2500} />
                  </div>
                  <div className="text-gray-700 font-medium">Clean Energy Generated</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
                  <div className="text-4xl font-bold text-energy-green mb-2">
                    <AnimatedCounter end={75} suffix="K+" duration={2500} />
                  </div>
                  <div className="text-gray-700 font-medium">Tons CO₂ Sequestered</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    <AnimatedCounter end={500} suffix="+" duration={2500} />
                  </div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    <AnimatedCounter end={15} suffix="K+" duration={2500} />
                  </div>
                  <div className="text-gray-700 font-medium">Farmers Helped</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="images/about/company1.webp"
                alt="Tengoku Solutions Facility"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <Globe className="w-12 h-12 text-energy-blue" />
                  <div>
                    <p className="text-xl font-bold text-gray-900">Global Impact</p>
                    <p className="text-energy-blue font-medium"><AnimatedCounter end={3} duration={1500} /> Countries & Growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-energy-gradient rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To make renewable energy accessible, affordable, and reliable for everyone while pioneering
              biochar solutions that transform agricultural practices and combat climate change. We believe
              that sustainable energy is not just an environmental imperative, but an economic opportunity
              that benefits communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Vision - Sliding Cards */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Flag className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Creating a sustainable future through innovative clean energy and biochar solutions
            </p>
          </div>
        </div>

        {/* Continuous Sliding Cards */}
        <div className="relative">
          <div className="flex animate-slide space-x-6">
            {[...visionCards, ...visionCards, ...visionCards].map((card, index) => (
              <Card key={index} className={`min-w-[300px] bg-gradient-to-br ${card.gradient} border-0 text-white flex-shrink-0`}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-white/90">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by passion, expertise, and a shared commitment to sustainable innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-200 font-medium">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center space-x-2">
                      <Linkedin className="w-4 h-4" />

                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center space-x-2">
                      <Twitter className="w-4 h-4" />

                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center space-x-2">
                      <Instagram className="w-4 h-4" />

                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adding Smiles Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-energy-gradient rounded-2xl flex items-center justify-center">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Adding Smiles on Farmer's Faces
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Our biochar solutions are transforming agricultural practices, helping farmers increase yields,
              reduce costs, and build more sustainable businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop"
                  alt="Farmer with biochar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4">Yield Improvements</h3>
                <p className="text-gray-600 mb-6">
                  Farmers using our biochar products have seen crop yields increase by
                  <span className="font-bold text-energy-blue"> <AnimatedCounter end={30} suffix="%" duration={2000} /></span>
                  on average.
                </p>
                <Badge variant="outline" className="px-4 py-2 border-energy-blue text-energy-blue">
                  <AnimatedCounter end={10000} suffix="+" duration={2500} /> Farms Served
                </Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&h=400&fit=crop"
                  alt="Sustainable farming"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4">Water Conservation</h3>
                <p className="text-gray-600 mb-6">
                  Reduced irrigation requirements by up to
                  <span className="font-bold text-energy-blue"> <AnimatedCounter end={25} suffix="%" duration={2000} /></span>
                  while maintaining optimal soil moisture.
                </p>
                <Badge variant="outline" className="px-4 py-2 border-energy-blue text-energy-blue">
                  <AnimatedCounter end={5} suffix="B" duration={2500} /> Gallons Saved
                </Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop"
                  alt="Biochar application"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4">Cost Reduction</h3>
                <p className="text-gray-600 mb-6">
                  Decreased synthetic fertilizer usage by
                  <span className="font-bold text-energy-blue"> <AnimatedCounter end={40} suffix="%" duration={2000} /></span>
                  while improving nutrient availability.
                </p>
                <Badge variant="outline" className="px-4 py-2 border-energy-blue text-energy-blue">
                  <AnimatedCounter end={30} suffix="M" duration={2500} /> In Savings
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're looking for energy solutions or want to be part of our mission,
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-6 bg-white/10 border-white/20">
              <CardContent className="p-0 text-white">
                <Target className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Our Goal</h3>
                <p className="text-blue-100">1GW of clean energy by 2030</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
