import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "@/components/Chatbot";
import { ArrowRight, X, Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';

// Main navigation links
const navLinks = [
  { title: "Certificates", path: "/certificates" },
  { title: "Projects", path: "/projects" },
  { title: "Notes", path: "/notes" },
  { title: "Campus Notes", path: "/campus-notes" },
  { title: "Roadmaps", path: "/roadmaps" },
  { title: "Student Projects", path: "/student-projects" },
  { title: "Events", path: "/events" },
  { title: "Templates", path: "/templates" },
];

// Quick access links
const quickLinks = [
    { title: "DSA Roadmap", path: "/roadmaps/dsa" },
    { title: "Web Dev Roadmap", path: "/roadmaps/web-development" },
    { title: "Latest Internships", path: "/internships" },
    { title: "SQL Interview Questions", path: "/interview-questions" },
    { title: "Submit a Project", path: "/student-projects/submit" },
];

const resourceCards = [
    // ... (resourceCards data remains the same)
    {
        title: "Certificates",
        description: "Industry-recognized certifications and online courses.",
        path: "/certificates",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
        status: 'Updated'
    },
    {
        title: "Projects",
        description: "Hands-on projects and portfolio ideas.",
        path: "/projects",
        img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
        title: "Ideas",
        description: "Innovation concepts and startup ideas.",
        path: "/ideas",
        img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
    },
    {
        title: "Blogs",
        description: "Technical articles and engineering insights.",
        path: "/blogs",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
        title: "DSA",
        description: "Data Structures and Algorithms resources.",
        path: "/dsa",
        img: "https://cdn-icons-png.flaticon.com/512/2721/2721298.png"
    },
    {
        title: "Coding Challenges",
        description: "Programming contests and practice problems.",
        path: "/coding-challenges",
        img: "https://cdn-icons-png.flaticon.com/512/1055/1055672.png"
    },
    {
        title: "Internships",
        description: "Internship opportunities and career guidance.",
        path: "/internships",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        status: 'Updated'
    },
    {
        title: "Notes",
        description: "Study materials and quick reference guides.",
        path: "/notes",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png"
    },
    {
        title: "Campus Notes",
        description: "Collaborative study notes and campus resources.",
        path: "/campus-notes",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135772.png"
    },
    {
        title: "Documents",
        description: "Technical documentation and manuals.",
        path: "/documents",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135766.png",
        status: 'Coming Soon'
    },
    {
        title: "Theories",
        description: "Fundamental concepts and theoretical knowledge.",
        path: "/theories",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135762.png",
        status: 'Coming Soon'
    },
    {
        title: "Roadmaps",
        description: "Structured learning paths for DSA and Web Development.",
        path: "/roadmaps",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135757.png"
    },
    {
        title: "Student Projects",
        description: "Innovative projects built by students across India.",
        path: "/student-projects",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135758.png"
    },
    {
        title: "Events",
        description: "Tech events, competitions, and conferences.",
        path: "/events",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135760.png"
    },
    {
        title: "Interview Questions",
        description: "Comprehensive SQL interview questions and answers.",
        path: "/interview-questions",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135764.png"
    },
    {
        title: "Anyone Can Develop",
        description: "Complete guide to creating webpages with AI assistance.",
        path: "/anyone-can-develop",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135770.png",
        status: 'On Working'
    },
    {
        title: "Templates",
        description: "Ready-to-use web templates and design resources.",
        path: "/templates",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135769.png",
        status: 'On Working'
    }
];

const NOTIF_KEY = 'dhrc_tos_update_dismissed';

// Theme Toggler Component
const ThemeToggler = ({ theme, toggleTheme }) => (
    <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
    >
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
);

const Index = () => {
    const [showNotif, setShowNotif] = useState(true);
    const [theme, setTheme] = useState(() => {
        // Check for saved theme in localStorage or default to system preference
        if (typeof window !== 'undefined') {
            const savedTheme = window.localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        // Apply the theme to the root HTML element
        const root = window.document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setShowNotif(!window.sessionStorage.getItem(NOTIF_KEY));
        }
    }, []);

    const dismissNotif = () => {
        setShowNotif(false);
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem(NOTIF_KEY, '1');
        }
    };
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const getBadgeClass = (status) => {
        switch (status) {
            case 'Updated': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Coming Soon': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
            case 'On Working': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
            default: return '';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans">
            <Analytics />

            {/* Top Notification Bar */}
            {showNotif && (
                <div className="w-full bg-orange-600 text-white text-sm py-2.5 px-4 flex items-center justify-center gap-x-3 z-50 shadow-md">
                    <p>
                        <strong>Notice:</strong> We've updated the site and our{' '}
                        <Link to="https://dhrc-tools.vercel.app/" className="underline font-bold hover:text-orange-200 transition-colors">
                            Tools Dashboard
                        </Link>.
                    </p>
                    <button onClick={dismissNotif} className="p-1.5 rounded-full hover:bg-orange-700 transition-colors" aria-label="Dismiss notification">
                        <X size={18} />
                    </button>
                </div>
            )}

            {/* Header */}
            <header className="sticky top-0 w-full border-b-2 border-orange-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="https://i.ibb.co/PGDSpW4p/Screenshot-2025-07-20-at-3-09-38-AM.png"
                            alt="DHRC Logo"
                            className="w-16 h-16 object-contain"
                        />
                        <div>
                            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-gray-100">
                                Center for Knowledge & Resources
                            </h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">DATA-HUB & RESOURCE CENTER</p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
                        <Link to="/resume-generator">
                            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:border-orange-400 dark:hover:bg-gray-800 dark:hover:text-orange-300 font-bold px-4 sm:px-6 py-2.5 rounded-full shadow-sm transition-all transform hover:scale-105">
                                Resume Generator
                            </Button>
                        </Link>
                        <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-orange-500 text-white hover:bg-orange-600 font-bold px-6 py-2.5 rounded-full shadow-sm transition-all transform hover:scale-105">
                                Sign In
                            </Button>
                        </a>
                    </div>
                </div>
            </header>
            
            {/* Primary Navigation Bar */}
            <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            className="px-5 py-2 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-200"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Quick Links Bar */}
            <section className="w-full bg-gray-100 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center gap-4">
                    <h3 className="text-md font-bold text-gray-700 dark:text-gray-300 flex-shrink-0">Quick Links:</h3>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
                        {quickLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 hover:underline transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ChatterBox Access Banner */}
            <section className="w-full bg-blue-50 dark:bg-blue-900/30">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png" alt="ChatterBox Icon" className="w-12 h-12 object-contain" />
                        <div>
                            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">Engage with ChatterBox</h2>
                            <p className="text-md text-blue-700 dark:text-blue-400">Ask questions, find solutions, and collaborate with peers in our community forum.</p>
                        </div>
                    </div>
                    <Link to="/chatterbox">
                        <Button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all transform hover:scale-105">
                            Access ChatterBox <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-1 w-full py-12 sm:py-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Explore Our Resources</h2>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">Find everything you need to succeed in your engineering studies and career.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {resourceCards.map(card => (
                            <Card key={card.title} className="group bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-md hover:shadow-xl dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    {card.status && (
                                        <Badge className={`absolute top-3 right-3 text-xs font-bold py-1 px-3 rounded-full ${getBadgeClass(card.status)}`}>
                                            {card.status}
                                        </Badge>
                                    )}
                                    <img src={card.img} alt={`${card.title} icon`} className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110" />
                                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">{card.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{card.description}</p>
                                    <Link to={card.path}>
                                        <Button variant="ghost" className="text-orange-600 dark:text-orange-400 font-bold hover:bg-orange-100 dark:hover:bg-gray-700 dark:hover:text-orange-300 rounded-full">
                                            Explore <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            {/* Redesigned Footer */}
            <footer className="bg-gray-800 dark:bg-gray-900/70 text-white">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Column 1: Branding */}
                        <div className="md:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <img src="https://i.ibb.co/PGDSpW4p/Screenshot-2025-07-20-at-3-09-38-AM.png" alt="DHRC Logo" className="w-12 h-12 bg-white rounded-full p-1" />
                                <span className="text-lg font-extrabold text-gray-100">CKR</span>
                            </Link>
                            <p className="text-gray-400 dark:text-gray-500 text-sm">
                                Your central hub for engineering knowledge, projects, and career resources.
                            </p>
                        </div>

                        {/* Column 2: Resources */}
                        <div>
                            <h3 className="font-bold text-gray-200 tracking-wider uppercase mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li><Link to="/certificates" className="text-gray-400 hover:text-orange-400 transition-colors">Certificates</Link></li>
                                <li><Link to="/projects" className="text-gray-400 hover:text-orange-400 transition-colors">Projects</Link></li>
                                <li><Link to="/roadmaps" className="text-gray-400 hover:text-orange-400 transition-colors">Roadmaps</Link></li>
                                <li><Link to="/notes" className="text-gray-400 hover:text-orange-400 transition-colors">Notes</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Community */}
                        <div>
                            <h3 className="font-bold text-gray-200 tracking-wider uppercase mb-4">Community</h3>
                            <ul className="space-y-3">
                                <li><Link to="/student-projects" className="text-gray-400 hover:text-orange-400 transition-colors">Student Projects</Link></li>
                                <li><Link to="/events" className="text-gray-400 hover:text-orange-400 transition-colors">Events</Link></li>
                                <li><Link to="/chatterbox" className="text-gray-400 hover:text-orange-400 transition-colors">ChatterBox</Link></li>
                                <li><Link to="/internships" className="text-gray-400 hover:text-orange-400 transition-colors">Internships</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Social Links */}
                        <div>
                            <h3 className="font-bold text-gray-200 tracking-wider uppercase mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors"><Github size={24} /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors"><Linkedin size={24} /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors"><Twitter size={24} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-10 pt-8 border-t border-gray-700 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500 dark:text-gray-600 mb-4 sm:mb-0">
                            © {new Date().getFullYear()} CKR - Center for Knowledge & Resources. All Rights Reserved.
                        </p>
                        <div className="flex space-x-4 text-sm">
                            <Link to="/terms-of-service" className="text-gray-500 dark:text-gray-600 hover:text-orange-400">Terms of Service</Link>
                            <Link to="/privacy-policy" className="text-gray-500 dark:text-gray-600 hover:text-orange-400">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>

            <Chatbot />
        </div>
    );
};

export default Index;