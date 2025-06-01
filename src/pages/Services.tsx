
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Leaf,
  Droplets,
  Sprout,
  Recycle,
  CheckCircle,
  ArrowRight,
  Factory,
  Beaker,
  Settings,
  Target,
  Award,
  Users
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: "Premium Agricultural Biochar",
      description: "High-quality biochar products specially formulated to enhance soil fertility, water retention, and crop yields.",
      image: "images/services/biochar.jpg",
      features: ["Increased crop yields", "Improved soil health", "Carbon sequestration", "Enhanced nutrient retention"],
      benefits: ["30-40% increase in water retention", "25-35% improvement in crop yields", "Long-term carbon storage", "Reduced fertilizer requirements"]
    },
    {
      icon: Droplets,
      title: "Water Filtration Solutions",
      description: "Advanced biochar-based filtration systems for clean water in agricultural, industrial, and residential applications.",
      image: "images/services/water filter.webp",
      features: ["Contaminant removal", "Sustainable filtration", "Low maintenance", "Cost-effective solution"],
      benefits: ["99% removal of heavy metals", "Improved water quality", "Reduced operational costs", "Environmentally friendly"]
    },
    {
      icon: Sprout,
      title: "Custom Biochar Blends",
      description: "Tailored biochar formulations designed for specific soil types, crops, and environmental conditions.",
      image: "images/services/biochar blends.webp",
      features: ["Customized solutions", "Expert consultation", "Ongoing support", "Quality assurance"],
      benefits: ["Optimized for local conditions", "Maximum effectiveness", "Professional guidance", "Proven results"]
    },
    {
      icon: Recycle,
      title: "Biochar Production Technology",
      description: "Innovative pyrolysis systems for sustainable on-site biochar production using agricultural waste materials.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=400&fit=crop",
      features: ["Waste reduction", "Energy recovery", "Carbon-negative process", "Scalable systems"],
      benefits: ["Convert waste to value", "Generate renewable energy", "Reduce carbon footprint", "Flexible deployment"]
    },
    {
      icon: Recycle,
      title: "Consultancy",
      description: "Expert guidance on biochar production, integration strategies, policy compliance, and sustainable agricultural practices.",
      image: "images/services/consultancy.jpg",
      features: [
        "Custom biochar implementation plans",
        "On-site and remote consultations",
        "Regulatory and policy support",
        "Soil and carbon impact assessments"
      ],
      benefits: [
        "Maximize ROI from biochar solutions",
        "Ensure regulatory compliance",
        "Improve soil health and yield",
        "Support carbon sequestration goals"
      ]
    }

  ];

  const additionalServices = [
    {
      icon: Factory,
      title: "On-Site Production Setup",
      description: "Complete installation and commissioning of biochar production facilities at your location."
    },
    {
      icon: Beaker,
      title: "Laboratory Testing",
      description: "Comprehensive soil and biochar analysis to optimize application strategies."
    },
    {
      icon: Settings,
      title: "Equipment Maintenance",
      description: "Ongoing support and maintenance services for all biochar production equipment."
    },
    {
      icon: Target,
      title: "Application Consulting",
      description: "Expert guidance on biochar application rates, timing, and methods for maximum benefit."
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "Assistance with organic certification and carbon credit program participation."
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Comprehensive training for farmers and technicians on biochar production and application."
    }
  ];

  const bioProducts = [
    {
      icon: Leaf,
      title: "BioCarbon Plus",
      description: "Premium activated biochar for maximum soil enhancement and carbon storage.",
      specifications: ["Surface area: 400+ m²/g", "pH: 8.5-9.5", "Carbon content: 85%+"],
      applications: ["Premium crops", "Organic farming", "Carbon projects"]
    },
    {
      icon: Droplets,
      title: "AquaChar Filter",
      description: "Specialized biochar for water treatment and filtration applications.",
      specifications: ["Pore size: 2-50 μm", "Adsorption capacity: 95%+", "Regeneration cycles: 50+"],
      applications: ["Water treatment", "Industrial filtration", "Aquaculture"]
    },
    {
      icon: Sprout,
      title: "GrowMax Blend",
      description: "Custom nutrient-enriched biochar blend for enhanced plant growth.",
      specifications: ["NPK enriched", "Slow-release formula", "pH buffered"],
      applications: ["Greenhouse growing", "Nurseries", "Urban agriculture"]
    },
    {
      icon: Factory,
      title: "CompostChar",
      description: "Biochar specifically designed for composting acceleration and enhancement.",
      specifications: ["High porosity", "Optimal C:N ratio", "Microbial inoculant"],
      applications: ["Composting facilities", "Waste management", "Soil remediation"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="py-20 bg-gradient-to-br from-energy-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive biochar solutions and services designed to transform your agricultural 
              practices, improve environmental sustainability, and maximize your investment returns.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-energy-gradient hover:opacity-90 text-white">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive biochar solutions and services designed to transform your agricultural
              practices, improve environmental sustainability, and maximize your investment returns.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-energy-gradient hover:opacity-90 text-white mt-5">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core Biochar Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our flagship products and services that form the foundation of sustainable agriculture
            </p>
          </div> */}

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-energy-blue mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-energy-gradient hover:opacity-90 text-white">
                      Get Quote Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Bio Products Section */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Bio Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specially formulated biochar products designed for specific applications and maximum effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bioProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specifications</h4>
                      <ul className="space-y-1">
                        {product.specifications.map((spec, specIndex) => (
                          <li key={specIndex} className="text-sm text-gray-600">
                            • {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((application, appIndex) => (
                          <span key={appIndex} className="px-3 py-1 bg-energy-blue/10 text-energy-blue rounded-full text-sm">
                            {application}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link to="/contact">
                      <Button variant="outline" className="w-full hover:bg-energy-blue hover:text-white transition-colors">
                        Request Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to ensure your success with biochar implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agriculture?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your specific needs and get a customized biochar solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-energy-blue hover:bg-blue-50">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Call (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
