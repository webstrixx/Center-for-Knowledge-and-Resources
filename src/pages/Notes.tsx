import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Star, ExternalLink, Download, FileText } from "lucide-react";

// --- Data (No changes here, assuming it's correct) ---
const noteCategories = [
    {
      category: "First Year - Foundation Subjects",
      refId: "first-year",
      notes: [
        { id: "engineering-mathematics-1", title: "Engineering Mathematics I", description: "Calculus, differential equations, and linear algebra notes.", subject: "Mathematics", pages: 45, downloads: 1250, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Khan Academy", url: "#" }, { platform: "MIT OCW", url: "#" }] },
        { id: "physics-engineers", title: "Physics for Engineers", description: "Mechanics, thermodynamics, and electromagnetic theory.", subject: "Physics", pages: 38, downloads: 980, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Coursera", url: "#" }, { platform: "edX", url: "#" }] },
        { id: "c-programming-notes", title: "C Programming Quick Notes", description: "Syntax, functions, pointers, and data structures in C.", subject: "Programming", pages: 28, downloads: 1450, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Codecademy", url: "#" }, { platform: "CS50", url: "#" }] },
        { id: "engineering-drawing", title: "Engineering Drawing Basics", description: "Technical drawing, projections, and CAD fundamentals.", subject: "Drawing", pages: 25, downloads: 650, rating: 4.5, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "AutoCAD", url: "#" }] },
      ]
    },
    {
      category: "Second Year - Core Engineering",
      refId: "second-year",
      notes: [
        { id: "dsa-notes", title: "Data Structures & Algorithms", description: "Arrays, linked lists, trees, graphs, and algorithm analysis.", subject: "DSA", pages: 52, downloads: 2100, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "LeetCode", url: "#" }, { platform: "GeeksforGeeks", url: "#" }] },
        { id: "oop-notes", title: "Object-Oriented Programming", description: "OOP concepts, inheritance, polymorphism with Java/C++.", subject: "Programming", pages: 48, downloads: 1850, rating: 4.8, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Oracle", url: "#" }] },
        { id: "dbms-notes", title: "Database Management Systems", description: "SQL, normalization, transactions, and database design.", subject: "DBMS", pages: 46, downloads: 1750, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "W3Schools", url: "#" }, { platform: "SQLBolt", url: "#" }] },
        { id: "os-concepts", title: "Operating Systems Concepts", description: "Process management, memory allocation, and file systems.", subject: "OS", pages: 48, downloads: 1620, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "MIT OCW", url: "#" }] },
      ]
    },
    {
      category: "Third Year - Advanced Topics",
      refId: "third-year",
      notes: [
        { id: "computer-networks", title: "Computer Networks", description: "OSI model, TCP/IP, routing protocols, and network security.", subject: "Networks", pages: 50, downloads: 1650, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Cisco", url: "#" }, { platform: "Coursera", url: "#" }] },
        { id: "web-frameworks", title: "Web Framework Development", description: "React, Node.js, Express, and full-stack development.", subject: "Web Dev", pages: 62, downloads: 2250, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "React Docs", url: "#" }, { platform: "Node.js Docs", url: "#" }] },
        { id: "system-design-fundamentals", title: "System Design Fundamentals", description: "Scalability, microservices, and distributed systems.", subject: "System Design", pages: 52, downloads: 1980, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "GitHub", url: "#" }] },
        { id: "devops-cloud", title: "DevOps and Cloud Computing", description: "CI/CD, containerization, AWS, and deployment strategies.", subject: "DevOps", pages: 50, downloads: 1820, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "AWS", url: "#" }, { platform: "Docker", url: "#" }] },
      ]
    },
    {
      category: "Fourth Year - Specialization",
      refId: "fourth-year",
      notes: [
        { id: "ml-fundamentals", title: "Machine Learning Fundamentals", description: "Supervised learning, neural networks, and model evaluation.", subject: "ML/AI", pages: 65, downloads: 2850, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Coursera", url: "#" }, { platform: "Kaggle", url: "#" }] },
        { id: "blockchain-tech", title: "Blockchain Technology", description: "Cryptocurrency, smart contracts, and distributed ledgers.", subject: "Blockchain", pages: 48, downloads: 1650, rating: 4.7, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Ethereum", url: "#" }] },
        { id: "deep-learning-ai", title: "Deep Learning and AI", description: "Neural networks, computer vision, and NLP.", subject: "AI", pages: 70, downloads: 2450, rating: 4.9, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "DeepLearning.AI", url: "#" }] },
        { id: "big-data-analytics", title: "Big Data Analytics", description: "Hadoop, Spark, data processing, and analytics frameworks.", subject: "Big Data", pages: 55, downloads: 1880, rating: 4.6, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Coursera", url: "#" }] },
      ]
    },
    {
      category: "Interview Preparation",
      refId: "interview-prep",
      notes: [
        { id: "technical-interview", title: "Technical Interview Questions", description: "Coding problems, system design, and technical discussions.", subject: "Interview", pages: 85, downloads: 3250, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "LeetCode", url: "#" }, { platform: "InterviewBit", url: "#" }] },
        { id: "resume-building", title: "Resume Building Guide", description: "Professional resume templates and writing strategies.", subject: "Career", pages: 25, downloads: 2150, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Canva", url: "#" }] },
        { id: "aptitude-test", title: "Aptitude Test Preparation", description: "Quantitative, logical reasoning, and verbal ability.", subject: "Aptitude", pages: 68, downloads: 2850, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "IndiaBIX", url: "#" }] },
        { id: "hr-interview", title: "HR Interview Questions", description: "Behavioral questions and professional communication.", subject: "HR", pages: 32, downloads: 1950, rating: 4.6, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Glassdoor", url: "#" }] },
      ]
    }
];

const Notes = () => {
  // Create refs for each category
  const sectionRefs = noteCategories.reduce((acc, value) => {
    acc[value.refId] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const handleNav = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg"><BookOpen className="w-8 h-8 text-orange-500" /></div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Study Notes</h1>
                    <p className="text-gray-500 dark:text-gray-400">Your comprehensive library for every subject.</p>
                </div>
            </div>
            <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* --- Quick Links Sidebar --- */}
          <aside className="md:col-span-1 h-fit md:sticky top-28">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Navigation</h3>
                <div className="space-y-1.5">
                    {noteCategories.map(category => (
                        <button
                            key={category.refId}
                            onClick={() => handleNav(sectionRefs[category.refId])}
                            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            {category.category}
                        </button>
                    ))}
                </div>
            </div>
          </aside>

          {/* --- Main Content Area --- */}
          <main className="md:col-span-3">
            {noteCategories.map((category) => (
              <section key={category.refId} ref={sectionRefs[category.refId]} className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.notes.map((note) => (
                    <Card key={note.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <Link to={`/notes/${note.id}`} className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight hover:text-orange-600">{note.title}</h3>
                          </Link>
                          <Badge variant="secondary">{note.subject}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{note.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {note.resourceLinks.map(link => (
                                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                                    {link.platform} <ExternalLink className="w-3 h-3"/>
                                </a>
                            ))}
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1"><FileText className="w-4 h-4"/>{note.pages} pages</span>
                            <span className="flex items-center gap-1"><Download className="w-4 h-4"/>{note.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500"/>
                            <span className="font-semibold">{note.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Notes;