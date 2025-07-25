import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BookOpen, Clock, User, ExternalLink, Search } from "lucide-react";

// --- Data and Helper Functions (No changes here) ---
const blogPosts = [
    {
      title: "React 19 Features That Will Change How You Code",
      author: "Dan Abramov",
      readTime: "8 min read",
      category: "React",
      date: "Aug 15, 2025",
      description: "Explore the revolutionary features in React 19 including automatic batching, concurrent features, and the new use hook.",
      tags: ["React", "JavaScript", "Frontend"],
      url: "https://react.dev/blog/2024/04/25/react-19"
    },
    {
      title: "The Future of TypeScript: What's Coming in 2025",
      author: "Anders Hejlsberg",
      readTime: "12 min read",
      category: "TypeScript",
      date: "Jul 28, 2025",
      description: "A deep dive into TypeScript's roadmap with new features like explicit resource management and improved inference.",
      tags: ["TypeScript", "JavaScript", "Development"],
      url: "https://devblogs.microsoft.com/typescript/"
    },
    {
      title: "Building Scalable Applications with Next.js 15",
      author: "Vercel Team",
      readTime: "15 min read",
      category: "Next.js",
      date: "Jul 10, 2025",
      description: "Learn about Next.js 15's new features including partial prerendering, improved caching, and better developer experience.",
      tags: ["Next.js", "React", "Full-stack"],
      url: "https://nextjs.org/blog"
    },
    {
      title: "State Management in 2025: Beyond Redux",
      author: "Kent C. Dodds",
      readTime: "10 min read",
      category: "State Management",
      date: "Jun 22, 2025",
      description: "Exploring modern state management solutions including Zustand, Jotai, and the latest patterns in React.",
      tags: ["State Management", "React", "Architecture"],
      url: "https://kentcdodds.com/blog"
    },
    {
      title: "CSS Container Queries: The Game Changer",
      author: "Una Kravets",
      readTime: "9 min read",
      category: "CSS",
      date: "May 18, 2025",
      description: "How container queries are revolutionizing responsive design and component-based styling approaches.",
      tags: ["CSS", "Responsive Design", "Frontend"],
      url: "https://web.dev/new-responsive/"
    },
    {
      title: "Mastering Web Performance in 2025",
      author: "Addy Osmani",
      readTime: "14 min read",
      category: "Performance",
      date: "Apr 30, 2025",
      description: "Advanced techniques for optimizing web performance including Core Web Vitals, lazy loading, and modern bundling.",
      tags: ["Performance", "Web Vitals", "Optimization"],
      url: "https://web.dev/articles/optimize-lcp"
    },
    {
      title: "The Rise of Edge Computing in Web Development",
      author: "Guillermo Rauch",
      readTime: "11 min read",
      category: "Edge Computing",
      date: "Mar 25, 2025",
      description: "Understanding edge computing benefits and how to leverage edge functions for better user experiences.",
      tags: ["Edge Computing", "Serverless", "Performance"],
      url: "https://vercel.com/blog"
    },
    {
      title: "AI-Powered Development Tools That Actually Work",
      author: "GitHub Team",
      readTime: "13 min read",
      category: "AI Tools",
      date: "Feb 14, 2025",
      description: "A comprehensive review of AI coding assistants, automated testing tools, and productivity enhancers for developers.",
      tags: ["AI", "Developer Tools", "Productivity"],
      url: "https://github.blog/2024-01-09-github-copilot-in-2024-a-year-of-growth-and-evolution/"
    },
    {
      title: "Security Best Practices for Modern Web Apps",
      author: "Troy Hunt",
      readTime: "16 min read",
      category: "Security",
      date: "Jan 28, 2025",
      description: "Essential security practices including HTTPS, CSP, authentication patterns, and protecting against modern threats.",
      tags: ["Security", "Web Security", "Best Practices"],
      url: "https://www.troyhunt.com/"
    },
    {
      title: "The Evolution of JavaScript Frameworks in 2025",
      author: "Evan You",
      readTime: "12 min read",
      category: "JavaScript",
      date: "Jan 10, 2025",
      description: "Comparing Vue 3.4, React 19, Svelte 5, and emerging frameworks, discussing their strengths and use cases.",
      tags: ["JavaScript", "Frameworks", "Vue", "React"],
      url: "https://blog.vuejs.org/"
    }
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique categories for the quick links, memoized for performance
  const allCategories = useMemo(() => {
    return ["All", ...Array.from(new Set(blogPosts.map(p => p.category)))];
  }, []);

  // Combined filtering logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = !selectedCategory || selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);
  
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <BookOpen className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Engineering Blogs</h1>
              <p className="text-gray-500 dark:text-gray-400">Insights and analysis from industry experts.</p>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* --- Category Filters (Quick Links) --- */}
          <aside className="md:col-span-1 h-fit md:sticky top-28">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Categories</h3>
                <div className="space-y-1.5">
                    {allCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                selectedCategory === category
                                ? 'bg-orange-500 text-white shadow-sm'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
          </aside>

          {/* --- Blog Posts Grid --- */}
          <main className="md:col-span-3">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles by title, author, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full text-base focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Featured Post */}
            {featuredPost && (
                <Card className="mb-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                            <Badge className="bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300">Featured Article</Badge>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{featuredPost.date}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 hover:text-orange-600 transition-colors">
                            <a href={featuredPost.url} target="_blank" rel="noopener noreferrer">{featuredPost.title}</a>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredPost.description}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-1.5"><User className="w-4 h-4 text-orange-500" /> {featuredPost.author}</div>
                                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" /> {featuredPost.readTime}</div>
                            </div>
                            <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold">
                                <a href={featuredPost.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> Read Now</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {regularPosts.map((post, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                        <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mb-2">{post.category}</Badge>
                        <h2 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight hover:text-orange-600 transition-colors">
                          <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-2">{post.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag, i) => <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>)}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</div>
                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Blogs;