// src/pages/BlogPost.tsx
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find(post => post.id === postId);

  if (!post) return <NotFound />;

  // Helper function to render content with proper formatting
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return <br key={index} />;
      
      // Headings detection
      if (paragraph.match(/^[A-Z][a-z]+:/)) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-green-700">{paragraph}</h3>;
      }
      
      // List items
      if (paragraph.startsWith('- ')) {
        return (
          <ul key={index} className="list-disc pl-6 my-3 space-y-1">
            <li>{paragraph.substring(2)}</li>
          </ul>
        );
      }
      
      // Tables (simple detection)
      if (paragraph.includes('\t')) {
        const rows = paragraph.split('\n');
        return (
          <div key={index} className="overflow-x-auto my-6">
            <table className="min-w-full border border-gray-200">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                    {row.split('\t').map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 border border-gray-200">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      // Regular paragraphs
      return <p key={index} className="my-4 text-gray-700 leading-relaxed">{paragraph}</p>;
    });
  };

  return (
    <Layout>
      <article className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/blogs">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-green-600 hover:bg-green-700 text-white">
              {post.category}
            </Badge>
            {post.tags?.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-green-300 text-green-700">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.excerpt && (
            <div className="bg-green-50 border-l-4 border-green-500 px-4 py-3 mb-8">
              <p className="text-gray-700 italic font-medium">{post.excerpt}</p>
            </div>
          )}

          {post.content && renderContent(post.content)}
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link to="/blogs">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Button>
            </Link>
            
            <div className="text-sm text-gray-500">
              Published on {post.date}
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  );
};

export default BlogPost;