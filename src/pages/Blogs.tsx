import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, Calendar, Clock, Leaf, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import { blogPosts } from "@/data/blogData";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <Layout>
      {/* Hero Section with Biochar Theme */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Explore Our Blogs
            </h1>
            <p className="text-lg lg:text-xl text-green-100 max-w-3xl mx-auto">
              Insights, research, and success stories on biochar technology, sustainability, and
              agricultural innovation—curated by our experts to help you grow smarter.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Badge variant="secondary" className="flex items-center">
                <Leaf className="w-4 h-4 mr-2" /> 15+ Research Papers
              </Badge>
              <Badge variant="secondary" className="flex items-center">
                <BarChart2 className="w-4 h-4 mr-2" /> 45% Yield Improvement
              </Badge>
              <Badge variant="secondary" className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" /> 1000+ Farmers
              </Badge>
            </div>
            
          </div>
        </div>
      </section>


      {/* Featured Post - Now shows the cost comparison article */}
      <section className="py-12 bg-green-50">
        <h1 className="text-center text-3xl font-bold text-green-900 mb-6">Featured Posts</h1>
        <p className="text-center text-lg text-gray-600 mt-2 mb-5">
              Actionable knowledge for farmers, researchers, and sustainability professionals
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow overflow-hidden group border border-green-50">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 w-full">
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-4">
              Practical Guides & Research
            </h2>
            <p className="text-lg text-gray-600 mb-5">
              Actionable knowledge for farmers, researchers, and sustainability professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden group border border-green-50">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                    <Badge variant="secondary" className="bg-white/90 text-green-800">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-green-200 text-green-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 w-full">
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */} 
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agricultural Practices?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Get started with our biochar solutions today and see measurable improvements in your soil health and crop yields
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/contact">
              <Button size="lg" className="bg-green-800 hover:bg-green-700 text-white">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+917888009568">
              <Button size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white/10">
                Call +91 7888009568
              </Button>
            </a>
          </div>
          <p className="text-green-200 text-sm mt-4">
            We're available 24/7 to answer your questions
          </p>
        </div>
      </section>


      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Blogs;
