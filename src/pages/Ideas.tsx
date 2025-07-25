import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Lightbulb, TrendingUp, Clock, Users, Search, MessageSquare, BrainCircuit } from "lucide-react";
import placeholder from '/public/placeholder.svg'; // Assuming placeholder.svg is in the public folder

// --- Data and Helper Functions (No changes here) ---

const ideas = [ /* ... Your full list of ideas remains here ... */ 
    {
      title: "Smart Home Energy Optimizer",
      description: "AI-powered system that learns usage patterns and automatically optimizes energy consumption",
      category: "IoT & AI",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Machine Learning", "Energy", "Smart Home"],
      timeToMarket: "6-12 months",
      targetAudience: "Homeowners",
    },
    {
      title: "Code Review Assistant",
      description: "AI tool that provides intelligent code reviews, suggests improvements, and detects security vulnerabilities",
      category: "Developer Tools",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["AI", "Code Analysis", "Security", "DevOps"],
      timeToMarket: "8-14 months",
      targetAudience: "Developers",
    },
    {
      title: "Virtual Study Buddy",
      description: "Platform connecting students for virtual study sessions with AI-powered matching and progress tracking",
      category: "EdTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Education", "Social", "AI Matching", "Study"],
      timeToMarket: "4-8 months",
      targetAudience: "Students",
    },
    {
      title: "Sustainable Transport Router",
      description: "App that finds eco-friendly route combinations including public transport, bike-sharing, and walking",
      category: "GreenTech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Sustainability", "Transportation", "Mobile", "APIs"],
      timeToMarket: "3-6 months",
      targetAudience: "Eco-conscious travelers",
    },
    {
      title: "Mental Health Companion",
      description: "AI-powered mental health support app with mood tracking, personalized insights, and professional connections",
      category: "HealthTech",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["Mental Health", "AI", "Healthcare", "Privacy"],
      timeToMarket: "12-18 months",
      targetAudience: "General public",
    },
    {
      title: "Local Skill Exchange Platform",
      description: "Community platform where people can trade skills and services without money, using a credit system",
      category: "Social Impact",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Community", "Skills", "Barter", "Local"],
      timeToMarket: "2-4 months",
      targetAudience: "Local communities",
    },
    {
      title: "AR Interior Designer",
      description: "Augmented reality app for visualizing furniture and decor in real spaces before purchasing",
      category: "AR/VR",
      marketPotential: "High",
      complexity: "High",
      tags: ["AR", "Interior Design", "E-commerce", "3D"],
      timeToMarket: "10-15 months",
      targetAudience: "Homeowners",
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform using blockchain technology for elections and polls",
      category: "Blockchain",
      marketPotential: "Very High",
      complexity: "Very High",
      tags: ["Blockchain", "Security", "Democracy", "Transparency"],
      timeToMarket: "18-24 months",
      targetAudience: "Government & Organizations",
    },
    {
      title: "Voice-Controlled Recipe Assistant",
      description: "Smart kitchen companion that guides cooking with voice commands and ingredient recognition",
      category: "IoT",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Voice AI", "Cooking", "Smart Kitchen", "IoT"],
      timeToMarket: "6-10 months",
      targetAudience: "Home cooks",
    },
    {
      title: "Personal Finance AI Coach",
      description: "AI-driven financial advisor that analyzes spending patterns and provides personalized money management tips",
      category: "FinTech",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["AI", "Finance", "Budgeting", "Investment"],
      timeToMarket: "8-12 months",
      targetAudience: "Young professionals",
    },
    {
      title: "Pet Health Monitor",
      description: "Wearable device and app to track pet vital signs, activity, and health metrics",
      category: "PetTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Health", "Pets", "Wearables"],
      timeToMarket: "8-12 months",
      targetAudience: "Pet owners",
    },
    {
      title: "Language Exchange VR",
      description: "Virtual reality platform for immersive language learning through conversation with native speakers",
      category: "EdTech",
      marketPotential: "High",
      complexity: "High",
      tags: ["VR", "Language Learning", "Social", "Education"],
      timeToMarket: "12-18 months",
      targetAudience: "Language learners",
    },
    {
      title: "Micro-Investment Game",
      description: "Gamified investment platform teaching financial literacy through small, real investments",
      category: "FinTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Gaming", "Investment", "Education", "Finance"],
      timeToMarket: "6-9 months",
      targetAudience: "Young adults",
    },
    {
      title: "Smart Garden Assistant",
      description: "IoT system monitoring soil, weather, and plant health with automated watering and care recommendations",
      category: "AgriTech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["IoT", "Agriculture", "Automation", "Sustainability"],
      timeToMarket: "5-8 months",
      targetAudience: "Garden enthusiasts",
    },
    {
      title: "Mood-Based Music Generator",
      description: "AI that creates personalized music based on detected emotions and environmental factors",
      category: "AI & Music",
      marketPotential: "Medium",
      complexity: "High",
      tags: ["AI", "Music", "Emotion Detection", "Personalization"],
      timeToMarket: "10-14 months",
      targetAudience: "Music lovers",
    },
    {
      title: "Collaborative Workspace VR",
      description: "Virtual reality platform for remote teams to collaborate in shared 3D workspaces",
      category: "Remote Work",
      marketPotential: "Very High",
      complexity: "Very High",
      tags: ["VR", "Collaboration", "Remote Work", "3D"],
      timeToMarket: "15-20 months",
      targetAudience: "Remote teams",
    },
    {
      title: "Habit Formation Tracker",
      description: "Psychology-based app using behavioral science to help users build and maintain healthy habits",
      category: "Wellness",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Psychology", "Habits", "Wellness", "Gamification"],
      timeToMarket: "4-7 months",
      targetAudience: "Self-improvement seekers",
    },
    {
      title: "AI-Powered Resume Builder",
      description: "Intelligent resume creation tool that adapts content based on job descriptions and industry trends",
      category: "Career Tools",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Career", "Resume", "Job Search"],
      timeToMarket: "3-6 months",
      targetAudience: "Job seekers",
    },
    {
      title: "Smart Wardrobe Assistant",
      description: "AI-powered closet organizer that suggests outfits based on weather, events, and personal style",
      category: "Fashion Tech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["AI", "Fashion", "Style", "Weather"],
      timeToMarket: "6-9 months",
      targetAudience: "Fashion conscious",
    },
    {
      title: "Neighborhood Safety Network",
      description: "Community-driven platform for sharing safety information and coordinating neighborhood watch activities",
      category: "Safety",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Community", "Safety", "Social", "Location"],
      timeToMarket: "3-5 months",
      targetAudience: "Local communities",
    },
    {
      title: "Elderly Care Companion",
      description: "AI companion app for elderly users providing medication reminders, emergency alerts, and social interaction",
      category: "HealthTech",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["Healthcare", "AI", "Elderly Care", "Emergency"],
      timeToMarket: "10-15 months",
      targetAudience: "Elderly & families",
    },
    {
      title: "Event Planning Assistant",
      description: "Comprehensive platform for planning events with vendor matching, budget tracking, and timeline management",
      category: "Event Management",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Events", "Planning", "Budget", "Vendor Management"],
      timeToMarket: "5-8 months",
      targetAudience: "Event planners",
    },
    {
      title: "Skill Assessment Platform",
      description: "AI-driven platform for evaluating technical and soft skills through interactive challenges and simulations",
      category: "HR Tech",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Skills", "Assessment", "HR"],
      timeToMarket: "8-12 months",
      targetAudience: "HR departments",
    },
    {
      title: "Local Food Discovery",
      description: "App connecting users with local food producers, farmers markets, and authentic regional cuisine",
      category: "Food Tech",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Food", "Local", "Discovery", "Community"],
      timeToMarket: "3-6 months",
      targetAudience: "Food enthusiasts",
    },
    {
      title: "Meditation Space Finder",
      description: "Platform for finding and booking quiet spaces for meditation, yoga, and mindfulness practices",
      category: "Wellness",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Meditation", "Wellness", "Booking", "Mindfulness"],
      timeToMarket: "2-4 months",
      targetAudience: "Wellness seekers",
    },
    {
      title: "Smart Water Quality Monitor",
      description: "IoT device and app for real-time monitoring of home water quality with health recommendations",
      category: "HealthTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Health", "Water Quality", "Monitoring"],
      timeToMarket: "6-10 months",
      targetAudience: "Health-conscious families",
    },
    {
      title: "Virtual Art Gallery",
      description: "VR/AR platform for artists to showcase work in immersive digital galleries with social features",
      category: "Art & Culture",
      marketPotential: "Medium",
      complexity: "High",
      tags: ["VR", "AR", "Art", "Gallery", "Social"],
      timeToMarket: "8-12 months",
      targetAudience: "Artists & art lovers",
    },
    {
      title: "Freelancer Project Matcher",
      description: "AI-powered platform matching freelancers with projects based on skills, availability, and preferences",
      category: "Gig Economy",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Freelancing", "Matching", "Gig Economy"],
      timeToMarket: "4-7 months",
      targetAudience: "Freelancers & businesses",
    },
    {
      title: "Sleep Optimization Coach",
      description: "Comprehensive sleep tracking and improvement platform using environmental data and personal habits",
      category: "HealthTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Sleep", "Health", "Tracking", "Optimization"],
      timeToMarket: "5-8 months",
      targetAudience: "Sleep-troubled individuals",
    },
    {
      title: "Carbon Footprint Gamifier",
      description: "Gamified app for tracking and reducing personal carbon footprint with community challenges",
      category: "Sustainability",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Sustainability", "Gaming", "Carbon", "Community"],
      timeToMarket: "4-6 months",
      targetAudience: "Environmentally conscious",
    },
    {
      title: "Remote Team Building Hub",
      description: "Platform offering virtual team building activities, games, and collaboration exercises",
      category: "Remote Work",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Remote Work", "Team Building", "Games", "Collaboration"],
      timeToMarket: "3-5 months",
      targetAudience: "Remote teams",
    },
    {
      title: "AI Recipe Optimizer",
      description: "Smart cooking assistant that optimizes recipes based on available ingredients and dietary preferences",
      category: "Food Tech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["AI", "Cooking", "Recipe", "Optimization"],
      timeToMarket: "4-7 months",
      targetAudience: "Home cooks",
    },
    {
      title: "Digital Detox Companion",
      description: "App helping users reduce screen time through mindful usage tracking and alternative activity suggestions",
      category: "Digital Wellness",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Digital Wellness", "Screen Time", "Mindfulness", "Health"],
      timeToMarket: "2-4 months",
      targetAudience: "Digital wellness seekers",
    },
    {
      title: "Smart Parking Solution",
      description: "IoT-based parking management system with real-time availability tracking and reservation features",
      category: "Smart City",
      marketPotential: "High",
      complexity: "High",
      tags: ["IoT", "Smart City", "Parking", "Real-time"],
      timeToMarket: "8-12 months",
      targetAudience: "City planners & drivers",
    },
    {
      title: "Volunteer Matching Platform",
      description: "Platform connecting volunteers with organizations based on skills, interests, and availability",
      category: "Social Impact",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Volunteering", "Social Impact", "Matching", "Community"],
      timeToMarket: "3-5 months",
      targetAudience: "Volunteers & nonprofits",
    },
    {
      title: "Language Pronunciation Coach",
      description: "AI-powered app for improving pronunciation using speech recognition and personalized feedback",
      category: "EdTech",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Language Learning", "Speech Recognition", "Education"],
      timeToMarket: "6-10 months",
      targetAudience: "Language learners",
    },
    {
      title: "Sustainable Shopping Guide",
      description: "App scanning products to provide sustainability ratings and eco-friendly alternatives",
      category: "Sustainability",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Sustainability", "Shopping", "Eco-friendly", "Scanner"],
      timeToMarket: "5-8 months",
      targetAudience: "Conscious consumers",
    },
    {
      title: "Personal Brand Builder",
      description: "Comprehensive platform for building and managing personal brand across social media and professional networks",
      category: "Personal Development",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Personal Branding", "Social Media", "Professional", "Content"],
      timeToMarket: "4-7 months",
      targetAudience: "Professionals & creators",
    },
    {
      title: "Micro-Learning Platform",
      description: "Bite-sized learning platform delivering personalized educational content in 5-minute sessions",
      category: "EdTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Education", "Micro-learning", "Personalization", "Mobile"],
      timeToMarket: "5-8 months",
      targetAudience: "Busy professionals",
    },
    {
      title: "Smart Home Security Hub",
      description: "Integrated security system with AI-powered threat detection and automated response protocols",
      category: "Smart Home",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["Smart Home", "Security", "AI", "Automation"],
      timeToMarket: "10-15 months",
      targetAudience: "Homeowners",
    },
    {
      title: "Wellness Challenge Creator",
      description: "Platform for creating and participating in personalized wellness challenges with friends and community",
      category: "Wellness",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Wellness", "Challenges", "Community", "Gamification"],
      timeToMarket: "3-5 months",
      targetAudience: "Health enthusiasts",
    },
    {
      title: "AI Code Documentation",
      description: "Automated tool for generating comprehensive code documentation using AI analysis of codebases",
      category: "Developer Tools",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Documentation", "Code Analysis", "Developer Tools"],
      timeToMarket: "6-9 months",
      targetAudience: "Developers",
    },
    {
      title: "Virtual Interior Design",
      description: "AI-powered interior design service offering personalized room makeovers through virtual consultations",
      category: "Design Tech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Interior Design", "Virtual", "Personalization"],
      timeToMarket: "6-10 months",
      targetAudience: "Homeowners",
    },
    {
      title: "Fitness Form Checker",
      description: "AI-powered app using computer vision to analyze workout form and provide real-time corrections",
      category: "FitnesssTech",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Computer Vision", "Fitness", "Form Analysis"],
      timeToMarket: "8-12 months",
      targetAudience: "Fitness enthusiasts",
    },
    {
      title: "Startup Idea Validator",
      description: "Platform for validating startup ideas through market research, competitor analysis, and user feedback",
      category: "Business Tools",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Startup", "Validation", "Market Research", "Analysis"],
      timeToMarket: "4-6 months",
      targetAudience: "Entrepreneurs",
    },
    {
      title: "Smart Study Scheduler",
      description: "AI-powered study planner that optimizes learning schedules based on retention patterns and deadlines",
      category: "EdTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Education", "Scheduling", "Learning Optimization"],
      timeToMarket: "5-8 months",
      targetAudience: "Students",
    },
    {
      title: "Community Garden Network",
      description: "Platform connecting community gardens with volunteers, resources, and knowledge sharing",
      category: "Community",
      marketPotential: "Low",
      complexity: "Low",
      tags: ["Community", "Gardening", "Volunteering", "Sustainability"],
      timeToMarket: "2-4 months",
      targetAudience: "Community gardeners",
    },
    {
      title: "Expense Splitting Smart App",
      description: "Advanced expense splitting app with OCR receipt scanning, automatic categorization, and payment integration",
      category: "FinTech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Finance", "Expense Splitting", "OCR", "Payment"],
      timeToMarket: "4-6 months",
      targetAudience: "Groups & roommates",
    },
    {
      title: "Senior Tech Support",
      description: "Simplified tech support platform specifically designed for elderly users with patient, step-by-step guidance",
      category: "Accessibility",
      marketPotential: "High",
      complexity: "Low",
      tags: ["Accessibility", "Senior Citizens", "Tech Support", "Simplicity"],
      timeToMarket: "3-5 months",
      targetAudience: "Elderly users",
    },
    {
      title: "Travel Memory Keeper",
      description: "AI-powered travel journal that automatically organizes photos, routes, and experiences into beautiful travel stories",
      category: "Travel Tech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Travel", "AI", "Photo Organization", "Storytelling"],
      timeToMarket: "5-8 months",
      targetAudience: "Travelers",
    }
];

const getMarketPotentialColor = (potential: string) => {
    switch (potential) {
      case "Very High": return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
      case "High": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
      case "Medium": return "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300";
      case "Low": return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
};

const getComplexityColor = (complexity: string) => {
    switch (complexity) {
        case "Low": return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
        case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
        case "High": return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
        case "Very High": return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300";
        default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
};

const Ideas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allCategories = useMemo(() => {
    return ["All", ...Array.from(new Set(ideas.map(idea => idea.category)))];
  }, []);
  
  const filteredIdeas = useMemo(() => {
    return ideas.filter(idea => {
      const matchesCategory = !selectedCategory || selectedCategory === "All" || idea.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-orange-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <Lightbulb className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Project Ideas</h1>
              <p className="text-gray-500 dark:text-gray-400">A launchpad for your next innovation.</p>
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
          
          {/* --- Filter Sidebar (Quick Links) --- */}
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

          {/* --- Ideas Grid --- */}
          <main className="md:col-span-3">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search ideas by title, tag, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full text-base focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Showing {filteredIdeas.length} of {ideas.length} ideas in <span className='font-semibold text-orange-500'>{selectedCategory || 'All'}</span>.
            </p>

            {/* --- ChatterBox CTA --- */}
            <Card className="mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <BrainCircuit size={40} />
                        <div>
                            <h3 className="font-bold text-lg">Want to brainstorm?</h3>
                            <p className="text-sm opacity-90">Discuss these concepts, get more details, or generate new ideas with our AI assistant.</p>
                        </div>
                    </div>
                    <Button asChild className="bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-full w-full sm:w-auto flex-shrink-0">
                        <Link to="/chatterbox"><MessageSquare className="w-4 h-4 mr-2"/> Start Chatting</Link>
                    </Button>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredIdeas.map((idea, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                        <Badge className="bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 mb-2">{idea.category}</Badge>
                        <h2 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight">{idea.title}</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">{idea.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {idea.tags.slice(0, 4).map((tag, i) => <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>)}
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-500" /><span className='font-medium text-gray-700 dark:text-gray-300'>Potential:</span><span className={getMarketPotentialColor(idea.marketPotential) + " px-2 py-0.5 rounded-full text-xs"}>{idea.marketPotential}</span></div>
                        <div className="flex items-center gap-2"><BrainCircuit className="w-4 h-4 text-purple-500" /><span className='font-medium text-gray-700 dark:text-gray-300'>Complexity:</span><span className={getComplexityColor(idea.complexity) + " px-2 py-0.5 rounded-full text-xs"}>{idea.complexity}</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /><span className='font-medium text-gray-700 dark:text-gray-300'>Timeline:</span><span className='text-gray-600 dark:text-gray-400'>{idea.timeToMarket}</span></div>
                        <div className="flex items-center gap-2"><Users className="w-4 h-4 text-yellow-500" /><span className='font-medium text-gray-700 dark:text-gray-300'>Audience:</span><span className='text-gray-600 dark:text-gray-400'>{idea.targetAudience}</span></div>
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

export default Ideas;