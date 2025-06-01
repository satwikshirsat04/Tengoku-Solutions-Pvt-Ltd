
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Zap, TrendingUp, Users, Building } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "GreenTech Manufacturing Solar Installation",
      category: "Commercial Solar",
      location: "Austin, Texas",
      date: "2024",
      capacity: "2.5 MW",
      savings: "40%",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      description: "Complete rooftop solar installation for a 200,000 sq ft manufacturing facility, including energy storage and smart grid integration.",
      highlights: [
        "2,500 solar panels installed",
        "$2.8M in projected 25-year savings",
        "1,200 tons CO₂ reduced annually",
        "Grid-tie with battery backup"
      ]
    },
    {
      title: "WindView Residential Community",
      category: "Wind + Solar Hybrid",
      location: "Denver, Colorado",
      date: "2023",
      capacity: "5 MW",
      savings: "55%",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      description: "Mixed renewable energy solution for 500-home residential community featuring wind turbines and rooftop solar systems.",
      highlights: [
        "10 small wind turbines",
        "1,500 residential solar systems",
        "Community energy storage",
        "Smart grid microgrid design"
      ]
    },
    {
      title: "University Campus Microgrid",
      category: "Smart Grid",
      location: "San Diego, California",
      date: "2023",
      capacity: "8 MW",
      savings: "45%",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      description: "Comprehensive campus-wide energy solution including solar, storage, and intelligent energy management systems.",
      highlights: [
        "Campus-wide solar coverage",
        "10 MWh battery storage",
        "AI-powered energy optimization",
        "Emergency backup capability"
      ]
    }
  ];

  const allProjects = [
    {
      title: "Downtown Office Complex",
      category: "Commercial Solar",
      location: "Phoenix, AZ",
      capacity: "1.2 MW",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      title: "Agricultural Solar Farm",
      category: "Utility Scale",
      location: "Fresno, CA",
      capacity: "15 MW",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"
    },
    {
      title: "Hospital Energy Storage",
      category: "Energy Storage",
      location: "Miami, FL",
      capacity: "5 MWh",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      title: "Retail Chain Solar Program",
      category: "Commercial Solar",
      location: "Multiple States",
      capacity: "25 MW",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      title: "Wind Farm Development",
      category: "Wind Energy",
      location: "Kansas",
      capacity: "50 MW",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Home Community",
      category: "Residential",
      location: "Portland, OR",
      capacity: "3 MW",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
    }
  ];

  const stats = [
    { icon: Zap, number: "250+", label: "MW Installed" },
    { icon: Building, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "50K+", label: "Customers Served" },
    { icon: TrendingUp, number: "$100M+", label: "Client Savings" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our successful renewable energy installations across various industries and scales, 
              demonstrating real-world impact and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-energy-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing our most impactful renewable energy installations
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge className="bg-energy-blue">{project.category}</Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-energy-blue">{project.capacity}</div>
                      <div className="text-sm text-gray-600">Total Capacity</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-energy-green">{project.savings}</div>
                      <div className="text-sm text-gray-600">Energy Savings</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-gray-600">
                        <TrendingUp className="w-4 h-4 text-energy-blue mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className="bg-energy-gradient hover:opacity-90">
                      Similar Project Quote
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              More Projects
            </h2>
            <p className="text-lg text-gray-600">
              A selection of our diverse project portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-energy-blue">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-energy-blue font-medium">
                    <Zap className="w-4 h-4 mr-1" />
                    {project.capacity}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Want to Learn More?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download detailed case studies or schedule a consultation to discuss 
            how we can create a similar solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-energy-gradient hover:opacity-90">
              Download Case Studies
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-energy-blue text-energy-blue hover:bg-energy-blue hover:text-white">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join hundreds of satisfied clients who have transformed their energy infrastructure with our solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-energy-blue hover:bg-blue-50">
              Get Project Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
