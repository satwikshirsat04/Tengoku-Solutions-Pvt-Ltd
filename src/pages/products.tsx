import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Leaf,
  Droplets,
  Sprout,
  ArrowRight,
  Factory,
  Flame,
  TreePine,
  Rabbit,
  Biohazard,
  Battery,
  Fuel,
  CheckCircle
} from "lucide-react";

// Import product images - Uncomment when you add actual images
import biocarbonPlus from "@/assets/products/biocarbon-plus.webp";
import aquacharFilter from "@/assets/products/aquachar-filter.webp";
import growmaxBlend from "@/assets/products/growmax-blend.webp";
import compostchar from "@/assets/products/compostchar.webp";
import biofuelPellets from "@/assets/products/biofuel-pellets.webp";
import woodVinegar from "@/assets/products/wood-vinegar.webp";
import livestockBiochar from "@/assets/products/livestock-biochar.webp";
import toxicbind from "@/assets/products/toxicbind.webp";
import biobatteryCarbon from "@/assets/products/biobattery-carbon.webp";
import pyrolysisOil from "@/assets/products/pyrolysis-oil.webp";

// Temporary placeholder
const placeholderImage = "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=400&fit=crop";

const Products = () => {
  const bioProducts = [
    {
      icon: Leaf,
      title: "BioCarbon Plus",
      description: "Premium activated biochar for maximum soil enhancement and carbon storage.",
      specifications: ["Surface area: 400+ m²/g", "pH: 8.5-9.5", "Carbon content: 85%+"],
      applications: ["Premium crops", "Organic farming", "Carbon projects"],
      features: ["High porosity structure", "Enhanced water retention", "Improved microbial habitat"],
      image: biocarbonPlus,
      imageAlt: "BioCarbon Plus product image"
    },
    {
      icon: Droplets,
      title: "AquaChar Filter",
      description: "Specialized biochar for water treatment and filtration applications.",
      specifications: ["Pore size: 2-50 μm", "Adsorption capacity: 95%+", "Regeneration cycles: 50+"],
      applications: ["Water treatment", "Industrial filtration", "Aquaculture"],
      features: ["Heavy metal removal", "Organic contaminant adsorption", "High flow rate"],
      image: aquacharFilter,
      imageAlt: "AquaChar Filter product image"
    },
    {
      icon: Sprout,
      title: "GrowMax Blend",
      description: "Custom nutrient-enriched biochar blend for enhanced plant growth.",
      specifications: ["NPK enriched", "Slow-release formula", "pH buffered"],
      applications: ["Greenhouse growing", "Nurseries", "Urban agriculture"],
      features: ["Tailored nutrient mix", "pH balancing", "Root development support"],
      image: growmaxBlend,
      imageAlt: "GrowMax Blend product image"
    },
    {
      icon: Factory,
      title: "CompostChar",
      description: "Biochar specifically designed for composting acceleration and enhancement.",
      specifications: ["High porosity", "Optimal C:N ratio", "Microbial inoculant"],
      applications: ["Composting facilities", "Waste management", "Soil remediation"],
      features: ["Odor control", "Faster decomposition", "Nutrient retention"],
      image: compostchar,
      imageAlt: "CompostChar product image"
    },
    {
      icon: Flame,
      title: "BioFuel Pellets",
      description: "High-energy biomass pellets for clean combustion and energy production.",
      specifications: ["Calorific value: 18-20 MJ/kg", "Moisture: <10%", "Ash content: <3%"],
      applications: ["Power plants", "Industrial boilers", "Residential heating"],
      features: ["High energy density", "Low emissions", "Renewable source"],
      image: biofuelPellets,
      imageAlt: "BioFuel Pellets product image"
    },
    {
      icon: TreePine,
      title: "Wood Vinegar",
      description: "Natural byproduct of pyrolysis with multiple agricultural applications.",
      specifications: ["pH: 2.5-3.5", "Organic acids: 8-12%", "Phenolic compounds: 2-4%"],
      applications: ["Plant growth promoter", "Pesticide alternative", "Odor control"],
      features: ["Natural pesticide", "Soil conditioner", "Plant growth stimulant"],
      image: woodVinegar,
      imageAlt: "Wood Vinegar product image"
    },
    {
      icon: Rabbit,
      title: "Livestock BioChar",
      description: "Special formulation for animal feed and livestock bedding applications.",
      specifications: ["Vet-approved", "High adsorption", "Dust-free"],
      applications: ["Feed additive", "Manure management", "Stable odor control"],
      features: ["Toxin binding", "Improved digestion", "Reduced ammonia"],
      image: livestockBiochar,
      imageAlt: "Livestock BioChar product image"
    },
    {
      icon: Biohazard,
      title: "ToxicBind",
      description: "Biochar engineered for heavy metal and contaminant remediation.",
      specifications: ["Heavy metal adsorption: 90%+", "Surface treatment", "Stable complexation"],
      applications: ["Brownfield remediation", "Mining sites", "Industrial cleanup"],
      features: ["Heavy metal capture", "Chemical stabilization", "Long-term binding"],
      image: toxicbind,
      imageAlt: "ToxicBind product image"
    },
    {
      icon: Battery,
      title: "BioBattery Carbon",
      description: "High-performance carbon for energy storage applications.",
      specifications: ["Conductivity: 500 S/m", "Surface area: 800+ m²/g", "Purity: 99.9%"],
      applications: ["Supercapacitors", "Battery anodes", "Fuel cells"],
      features: ["High conductivity", "Large surface area", "Electrochemical stability"],
      image: biobatteryCarbon,
      imageAlt: "BioBattery Carbon product image"
    },
    {
      icon: Fuel,
      title: "Pyrolysis Oil",
      description: "Liquid bio-oil produced from biomass pyrolysis process.",
      specifications: ["Energy density: 25 MJ/kg", "Water content: <20%", "Viscosity: 50-100 cP"],
      applications: ["Biofuel production", "Chemical feedstock", "Industrial heating"],
      features: ["Renewable fuel", "Versatile applications", "Energy dense"],
      image: pyrolysisOil,
      imageAlt: "Pyrolysis Oil product image"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Biochar Products
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            High-quality biochar solutions designed for maximum performance and environmental benefit
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white hover:bg-green-500 hover:text-white text-gray-900 mt-8 transition-colors duration-300"
            >
              Request Product Info
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Biochar Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scientifically formulated biochar solutions for diverse applications
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bioProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative rounded-[10px] h-64 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

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
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, i) => (
                          <span key={i} className="px-3 py-1 bg-energy-blue/10 text-energy-blue rounded-full text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full mt-6 hover:bg-energy-blue hover:text-white">
                    <Link to="/contact">
                      Request Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for each of our biochar products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bioProducts.map((product, index) => (
              <Card key={index} className="border-energy-blue/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <product.icon className="w-8 h-8 text-energy-blue" />
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-energy-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
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
            Ready to Enhance Your Operations with Biochar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our experts to find the perfect biochar solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-energy-blue hover:bg-blue-50">
                Get Product Samples
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/technical-specs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Full Specs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;