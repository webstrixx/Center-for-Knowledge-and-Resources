import React, { useState } from 'react'; // Corrected: Added the main React import
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, PlusCircle, FolderGit2, ExternalLink, Award } from "lucide-react";
import StudentProjects from "@/components/StudentProjects"; // This component contains the project grid
import clsx from 'clsx';

const StudentProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "AI/ML", "Mobile", "Blockchain", "DevOps"];

  // Example featured project - this could be fetched from an API
  const featuredProject = {
    title: "AI-Powered Financial Forecaster",
    author: "Jane Doe & Team",
    description: "A web app using machine learning to predict stock market trends with an interactive data visualization dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    githubUrl: "#",
    liveDemoUrl: "#",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                    <Users className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Student Projects</h1>
                    <p className="text-gray-500 dark:text-gray-400">Innovate, build, and get inspired.</p>
                </div>
            </div>
            <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Project Showcase</h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover innovative projects built by students and developers. Use the filters to find your next inspiration!
            </p>
        </div>

        {/* --- Quick Links Filter Tabs --- */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={clsx(
                        'px-4 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none',
                        selectedCategory === category
                        ? 'border-b-2 border-orange-500 text-orange-600 dark:text-orange-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    )}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* --- Featured Project Section --- */}
        {selectedCategory === "All" && (
            <section className="mb-12">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Award className="text-orange-500"/> Project of the Week
                </h3>
                <Card className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-2xl md:grid md:grid-cols-2">
                    <div className="p-8">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{featuredProject.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">by {featuredProject.author}</p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">{featuredProject.description}</p>
                        <div className="mt-6 flex gap-2">
                            <Button asChild><a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">View Code</a></Button>
                            <Button asChild variant="outline"><a href={featuredProject.liveDemoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        </div>
                    </div>
                    <img src={featuredProject.imageUrl} alt={featuredProject.title} className="w-full h-64 md:h-full object-cover"/>
                </Card>
            </section>
        )}
        
        {/* The StudentProjects component renders the actual grid of projects */}
        <StudentProjects selectedCategory={selectedCategory} />

        {/* --- Call-to-Action Sections --- */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-500/30">
                <CardContent className="p-8 flex flex-col items-center text-center">
                    <PlusCircle className="w-12 h-12 text-orange-500 mb-4"/>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">Share Your Work</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">
                        Contribute to our library, showcase your skills, and inspire others in the community.
                    </p>
                    <Button asChild className="rounded-full">
                        <Link to="/submit-project">Submit Your Project</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card className="bg-gray-800 dark:bg-gray-700 text-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                    <FolderGit2 className="w-12 h-12 text-orange-400 mb-4"/>
                    <h3 className="font-bold text-xl text-white">Access the Project Manager</h3>
                    <p className="text-sm text-gray-300 mt-2 mb-4">
                        Explore the public repository and manage your submissions on the DHRC Tools platform.
                    </p>
                    <Button asChild variant="secondary" className="rounded-full">
                        <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2"/> Go to Manager
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </section>
      </main>
    </div>
  );
};

export default StudentProjectsPage;