import Layout from "@/components/Layout";
import QuoteForm from "@/components/QuoteForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Leaf,
  Droplets,
  Sprout,
  Recycle,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Mail,
  Phone,
  Factory,
  Globe,
  Award,
  Heart,
  Lightbulb,
  Zap,
  MapPin,
  Trees,
  Microscope,
  Dumbbell,
  ThermometerSun,
  Play,
  Download
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroSlides = [
    {
      image: "/images/home/wastetobio.webp",
      quote: "From Waste to Bio Products: A Sustainable Future"
    },
    {
      image: "/images/home/micro crop.webp",
      quote: "Transforming Agriculture with Sustainable Bio Solutions"
    },
    {
      image: "/images/home/c3.webp",
      quote: "Carbon Sequestration Through Innovation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Leaf,
      title: "Premium Agricultural Biochar",
      description: "High-quality biochar products specially formulated to enhance soil fertility, water retention, and crop yields.",
      image: "images/home/biochar.jpg",
      features: ["Increased crop yields", "Improved soil health", "Carbon sequestration"]
    },
    {
      icon: Droplets,
      title: "Water Filtration Solutions",
      description: "Advanced biochar-based filtration systems for clean water in agricultural, industrial, and residential applications.",
      image: "images/services/water filter.webp",
      features: ["Contaminant removal", "Sustainable filtration", "Low maintenance"]
    },
    {
      icon: Sprout,
      title: "Custom Biochar Blends",
      description: "Tailored biochar formulations designed for specific soil types, crops, and environmental conditions.",
      image: "images/services/biochar blends.webp",
      features: ["Customized solutions", "Expert consultation", "Ongoing support"]
    },
    {
      icon: Recycle,
      title: "Biochar Production Technology",
      description: "Innovative pyrolysis systems for sustainable on-site biochar production using agricultural waste materials.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=400&fit=crop",
      features: ["Waste reduction", "Energy recovery", "Carbon-negative process"]
    }
  ];

  const stats = [
    { number: "100", label: "Projects Completed" },
    { number: "1000", label: "Happy Clients" },
    { number: "250", label: "MW Energy Generated" },
    { number: "98", label: "% Uptime Guarantee" }
  ];

  const whyChoosePoints = [
    {
      icon: Shield,
      title: "Proven Effectiveness",
      description: "Research-backed biochar solutions with demonstrated results in diverse agricultural settings",
      subPoints: ["Field-tested across 500+ farms", "Peer-reviewed research publications", "University partnerships"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Agricultural scientists and engineers with extensive experience in biochar applications",
      subPoints: ["PhD-level soil scientists", "Agricultural engineering expertise", "24/7 technical support"]
    },
    {
      icon: TrendingUp,
      title: "Guaranteed Results",
      description: "Up to 45% improvement in soil health and crop yields with our premium biochar products",
      subPoints: ["Performance guarantees", "Yield improvement tracking", "ROI optimization"]
    },
    // {
    //   icon: Award,
    //   title: "Quality Standards",
    //   description: "International certifications and adherence to highest quality standards",
    //   subPoints: ["IBI certified products", "ISO compliance", "Organic certifications"]
    // },
    {
      icon: Heart,
      title: "Environmental Impact",
      description: "Significant carbon sequestration and environmental benefits",
      subPoints: ["Carbon-negative process", "Waste biomass utilization", "Sustainable practices"]
    },
    // {
    //   icon: Lightbulb,
    //   title: "Innovation Leadership",
    //   description: "Cutting-edge research and continuous product development",
    //   subPoints: ["R&D investments", "Technology partnerships", "Patent portfolio"]
    // }
  ];

  const biocharBenefits = [
    {
      icon: Trees,
      title: "Climate Positive",
      description: "Biochar locks carbon in the soil for centuries, creating a significant carbon sink to combat climate change.",
      backgroundImage: "/images/benifits/Climate Positive.jpeg"
    },
    {
      icon: Droplets,
      title: "Water Efficiency",
      description: "Increases soil water holding capacity by up to 30%, reducing irrigation needs and improving drought resilience.",
      backgroundImage: "/images/benifits/Water Efficiency.webp"
    },
    {
      icon: Microscope,
      title: "Microbial Activity",
      description: "Creates ideal habitat for beneficial soil microorganisms, enhancing the soil food web and plant health.",
      backgroundImage: "/images/benifits/Microbial.webp"
    },
    {
      icon: Dumbbell,
      title: "Soil Structure",
      description: "Improves soil tilth, reduces compaction, and enhances root penetration for healthier, stronger plants.",
      backgroundImage: "/images/benifits/Soil Structure.jpeg"
    },
    {
      icon: ThermometerSun,
      title: "Climate Adaptation",
      description: "Helps agricultural systems adapt to climate extremes through improved soil resilience and stress tolerance.",
      backgroundImage: "/images/benifits/Climate Adaptation.jpeg"
    },
    {
      icon: Leaf,
      title: "Waste Reduction",
      description: "Converts agricultural and forestry waste into valuable soil amendments, closing the loop in biomass cycles.",
      backgroundImage: "/images/benifits/Waste Reduction.jpeg"
    }
  ];

  const testimonials = [
    {
      quote: "Increased our crop yield by 20% with Tengoku's biochar solutions",
      company: "GreenFarm Ltd.",
      logo: "https://placehold.co/100x40/4ade80/white?text=GreenFarm"
    },
    {
      quote: "Biochar improved our soil quality significantly in just one season",
      company: "AgriTech Solutions",
      logo: "https://placehold.co/100x40/38bdf8/white?text=AgriTech"
    },
    {
      quote: "The best investment we made for sustainable farming practices",
      company: "EcoHarvest Inc.",
      logo: "https://placehold.co/100x40/fbbf24/black?text=EcoHarvest"
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    // Replace with your actual brochure file path
    const fileUrl = "src/assets/brochures/tengoku_brochure.pdf";
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'tengoku-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      {/* Hero Section with Carousel - Responsive */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Increased carousel size */}
        <div className="h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[40vh] relative overflow-hidden">
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            ))}
          </div>

          <div className="relative h-full flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center text-white max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 animate-fade-in">
                {heroSlides[currentSlide].quote}
              </h1>
              <Button
                size="sm"
                className="bg-white text-energy-blue hover:bg-blue-50 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base"
                onClick={() => {
                  document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Quote
                <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>

          {/* Carousel Indicators - Responsive */}
          <div className="absolute bottom-4 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section - Bottom 2/3 - Fully Responsive */}
        <div className="min-h-[65vh] sm:min-h-[60vh] md:min-h-[55vh] lg:min-h-[60vh] bg-gradient-to-br from-blue-50 to-green-50 flex items-center py-4 sm:py-6 md:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full">

            {/* Biochar Definition Section with Enhanced Particle Effect */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 relative py-6 px-6 rounded-xl shadow-sm max-w-3xl mx-auto overflow-hidden bg-[#0a0a08] border border-[#2a3a1e]">
              {/* Enhanced biochar particles background */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => {
                  const size = Math.random() * 10 + 3;
                  const delay = Math.random() * 5;
                  const duration = Math.random() * 15 + 10;
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full bg-[#1a120b]"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${Math.random() * 100}%`,
                        bottom: `-${size}px`,
                        opacity: Math.random() * 0.7 + 0.3,
                        animation: `rise ${duration}s ease-in ${delay}s infinite`,
                        boxShadow: '0 0 3px 1px rgba(74, 85, 44, 0.5)',
                      }}
                    />
                  );
                })}
              </div>

              {/* Soil texture overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-soil.png')] opacity-100" />

              <p className="text-base sm:text-lg md:text-xl font-medium text-[#e6ccb2] relative z-10 flex items-center justify-center">
                <Sprout className="mr-2 w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                <span>
                  Biochar: Carbon-rich charcoal from organic waste, boosts soil fertility, and traps CO₂
                </span>
              </p>

              {/* Animation keyframes */}
              <style>{`
    @keyframes rise {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      100% {
        transform: translateY(-120vh) rotate(360deg);
        opacity: 0;
      }
    }
  `}</style>
            </div>


            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight">
                Transforming Agriculture Worldwide
              </h2> */}
              <div className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
                Our innovative biochar solutions are making a real impact across the globe,
                helping farmers achieve better yields while protecting the environment.
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              {stats.map((stat, index) => {
                const isPercentage = stat.label.includes("%");
                return (
                  <div key={index} className="text-center animate-fade-in bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-energy-blue mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                      {isPercentage ? (
                        <>
                          <AnimatedCounter
                            end={parseInt(stat.number)}
                            duration={2000}
                            suffix="%"
                          />
                        </>
                      ) : stat.label.includes("MW") ? (
                        <>
                          <AnimatedCounter
                            end={parseInt(stat.number)}
                            duration={2000}
                          /> MW
                        </>
                      ) : (
                        <>
                          <AnimatedCounter
                            end={parseInt(stat.number)}
                            duration={2000}
                            suffix="+"
                          />
                        </>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-medium leading-tight">
                      {stat.label.replace(/^[0-9]+\+?\s|\%\s?/g, '')}
                    </div>
                    <div className="mt-2 sm:mt-3 md:mt-4 w-full bg-gray-200 rounded-full h-1 sm:h-1.5 md:h-2">
                      <div
                        className="bg-energy-gradient h-full rounded-full animate-slide-in transition-all duration-1000"
                        style={{ width: `${75 + (index * 5)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center bg-white rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 shadow-lg">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500 mr-2 sm:mr-3" />
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">Average Soil Improvement</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-500">
                    <AnimatedCounter end={45} suffix="%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tengoku Solutions is a pioneering company in biochar technology and sustainable agriculture.
                We specialize in developing and manufacturing high-quality biochar products that transform
                agricultural practices while combating climate change.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded with a mission to create sustainable solutions for soil health and carbon sequestration,
                we combine cutting-edge science with practical applications to deliver measurable results for
                farmers, environmental organizations, and communities worldwide.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-energy-blue"><AnimatedCounter end={10} />+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-energy-blue"><AnimatedCounter end={1000} />+</div>
                  <div className="text-gray-600">Farmers Served</div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl ">
              <img
                src="/images/home/who we are.webp"
                alt="About Tengoku Solutions"
                className="rounded-2xl shadow-xl animate-[slide-in-right_1s_ease-out] hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Brochure Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Want to learn more?
            </h3>
            <button
              onClick={handleDownload}
              className="relative group px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-600 animate-[float_3s_ease-in-out_infinite]"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-50 blur-md group-hover:scale-110 transition-all duration-300"></div>

              {/* Button content */}
              <div className="flex items-center space-x-2 relative z-10">
                <Download className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">
                  Download Our Brochure
                </span>
              </div>
            </button>
            <p className="mt-4 text-gray-600">
              PDF, 2.4 MB • Updated June 2025
            </p>
          </div>
        </div>

        {/* Add to your global CSS */}
        <style>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }
  `}</style>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tengoku Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge biochar technology with unmatched expertise to deliver
              sustainable solutions that drive real results for farmers and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.subPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Bio Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Bio Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive biochar products and services designed to enhance agricultural
              productivity, improve water quality, and promote environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-energy-gradient rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button variant="outline" className="group-hover:bg-energy-blue group-hover:text-white transition-colors">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Benefits of Biochar */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Benefits of Biochar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Biochar provides multiple environmental, agricultural, and economic benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biocharBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={benefit.backgroundImage}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Biochar Media Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Understanding Biochar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how biochar is made and its real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Explainer Video */}
            {/* Explainer Video */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="relative aspect-video bg-black">
                <div className="relative w-full h-full aspect-video">
                  <iframe
                    className="w-full h-full object-cover rounded-xl"
                    src="https://www.youtube.com/embed/1CaMjVoZs8Q"
                    title="Biochar Explainer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Biochar Explainer Video</h3>
                <p className="text-gray-600">🌾Learn how biochar benefits agriculture and the environment</p>
              </div>
            </div>

            {/* Infographic */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=400&fit=crop"
                  alt="Biochar production infographic"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How Biochar is Made</h3>
                <p className="text-gray-600 mb-4">The process from organic waste to valuable soil amendment</p>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">1</span>
                      </div>
                      <div className="text-xs">Biomass Collection</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">2</span>
                      </div>
                      <div className="text-xs">Pyrolysis</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">3</span>
                      </div>
                      <div className="text-xs">Soil Application</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Photos */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop"
                  alt="Biochar in farm application"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Biochar in Action</h3>
                <p className="text-gray-600">Real-world applications in farms and factories</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <img
                    src="images/farmers/f4.jpg"
                    alt="Farm application"
                    className="rounded-lg"
                  />
                  <img
                    src="images/farmers/f6.jpg"
                    alt="Production facility"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make in India & Global Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Make in India - Keep this part unchanged */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Made in India</h2>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/home/india.jpg"
                  alt="Manufacturing facility"
                  className="rounded-2xl shadow-lg mb-6 w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <p className="text-lg text-gray-600">
                Our state-of-the-art manufacturing facility in India produces world-class
                biochar products using advanced pyrolysis technology.
              </p>
            </div>

            {/* Improved Global Impact Section with Animated Bars */}
            <div className="text-center relative">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Impact</h2>
              <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <style>{`
    @keyframes carbonBar {
      from { width: 0%; }
      to { width: 75%; }
    }
    @keyframes farmersBar {
      from { width: 0%; }
      to { width: 85%; }
    }
    @keyframes countriesBar {
      from { width: 0%; }
      to { width: 60%; }
    }
  `}</style>
                  {/* Carbon Sequestered */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Carbon Sequestered</span>
                      <span className="font-bold text-energy-blue">
                        <AnimatedCounter end={5000} suffix="+ tons" />
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-black h-3 rounded-full transition-all duration-1000"
                        style={{
                          width: '0%',
                          animation: 'carbonBar 3s forwards',
                          animationDelay: '0.2s'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Farmers Impacted */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Farmers Impacted</span>
                      <span className="font-bold text-energy-blue">
                        <AnimatedCounter end={1000} suffix="+" />
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                        style={{
                          width: '0%',
                          animation: 'farmersBar 3s forwards',
                          animationDelay: '0.4s'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Countries Served */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Countries Served</span>
                      <span className="font-bold text-energy-blue">
                        <AnimatedCounter end={3} />
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                        style={{
                          width: '0%',
                          animation: 'countriesBar 3s forwards',
                          animationDelay: '0.6s'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Get Quote Section */}
      <section id="quote-section" className="py-20 bg-energy-light scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8 hidden lg:block">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get a Quote From Us
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ready to transform your energy infrastructure? Fill out the form and our experts
                will create a customized quote based on your specific needs and requirements.
              </p>

              <div className="flex items-center justify-center lg:justify-start mb-8 text-xl">
                <div className="flex items-center text-energy-blue">
                  <Phone className="mr-2 h-6 w-6" />
                  <a href="tel:+917888009568" className="font-semibold hover:underline">
                    Call +91-7888009568
                  </a>
                </div>
                <span className="mx-3 text-gray-400">or</span>
                <span className="text-gray-700">Fill out the form</span>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Detailed Analysis",
                    description: "We analyze your current energy usage and needs"
                  },
                  {
                    icon: Shield,
                    title: "Custom Solutions",
                    description: "Tailored clean energy solutions for your specific situation"
                  },
                  {
                    icon: Mail,
                    title: "Quick Response",
                    description: "Receive your personalized quote within 24 hours"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-energy-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from farmers and agricultural businesses that have transformed their operations with our biochar solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 ">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="h-10 object-contain rounded-lg"  // Added rounded-lg here
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-gray-900 font-semibold text-center">- {testimonial.company}</div>
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
            Ready to Transform Your Agricultural Future?
          </h2>
          <div className="text-lg text-blue-100 mb-8">
            Get a free consultation and discover how much you can save with our biochar solutions.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-blue-50">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+917888009568">
              <Button size="lg" variant="outline" className="border-white text-gray-900 hover:bg-blue-50">
                Call +91 7888009568
              </Button>
            </a>
          </div>
          <p className="text-green-100 text-sm mt-4">
            We're available 24/7 to answer your questions
          </p>
        </div>

      </section>
    </Layout>
  );
};

export default Index;
