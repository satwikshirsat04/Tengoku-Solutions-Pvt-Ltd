
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: "biochar-basics",
      title: "Understanding Biochar: The Complete Guide to Soil Enhancement",
      excerpt: "Discover how biochar transforms soil health, increases crop yields, and combats climate change through carbon sequestration.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      author: "Dr. Priya Sharma",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Education",
      tags: ["Biochar", "Soil Health", "Agriculture"]
    },
    {
      id: "carbon-sequestration",
      title: "Carbon Sequestration: How Biochar Fights Climate Change",
      excerpt: "Learn about biochar's role in removing carbon dioxide from the atmosphere and creating carbon-negative agricultural systems.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop",
      author: "Dr. Rajesh Kumar",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Environment",
      tags: ["Carbon", "Climate", "Sustainability"]
    },
    {
      id: "application-techniques",
      title: "Best Practices for Biochar Application in Different Crops",
      excerpt: "Step-by-step guide on how to apply biochar effectively across various crop types for maximum yield improvement.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&h=400&fit=crop",
      author: "Agricultue Team",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Application",
      tags: ["Farming", "Techniques", "Crops"]
    },
    {
      id: "water-filtration",
      title: "Biochar in Water Treatment: Purifying Water Naturally",
      excerpt: "Explore how biochar's unique properties make it an excellent medium for water filtration and purification systems.",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop",
      author: "Dr. Meera Patel",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Water Treatment",
      tags: ["Water", "Filtration", "Environment"]
    },
    {
      id: "economic-benefits",
      title: "Economic Benefits of Biochar: ROI for Farmers",
      excerpt: "Analyzing the cost-benefit ratio of biochar application and how it improves farm profitability over time.",
      image: "https://images.unsplash.com/photo-1574943320219-67456f879ffb?w=600&h=400&fit=crop",
      author: "Economics Team",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Economics",
      tags: ["ROI", "Economics", "Farming"]
    },
    {
      id: "production-process",
      title: "Inside Our Biochar Production: From Waste to Wonder",
      excerpt: "Take a behind-the-scenes look at our pyrolysis process and how we transform agricultural waste into premium biochar.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=400&fit=crop",
      author: "Production Team",
      date: "February 15, 2024",
      readTime: "12 min read",
      category: "Production",
      tags: ["Manufacturing", "Process", "Technology"]
    }
  ];

  const categories = ["All", "Education", "Environment", "Application", "Water Treatment", "Economics", "Production"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Biochar Insights & Knowledge
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest research, applications, and innovations in biochar technology 
              and sustainable agriculture practices.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-energy-blue hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-energy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge>{blogPosts[0].category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">By {blogPosts[0].author}</span>
                  </div>
                  
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    <Button>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Explore our collection of articles on biochar and sustainable agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button size="sm" variant="outline">
                        Read More
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter and get the latest articles, research findings, 
            and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900"
            />
            <Button size="lg" className="bg-white text-energy-blue hover:bg-blue-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
