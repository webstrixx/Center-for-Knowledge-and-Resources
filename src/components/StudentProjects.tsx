import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Users, Calendar, Youtube } from "lucide-react";
import React from "react"; // Ensure React is imported for useState

const StudentProjects = () => {
  const projects = [
    {
      title: "Student Management System",
      author: "Rahul Sharma",
      institution: "IIT Delhi",
      description: "Complete web application for managing student records, grades, and attendance",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      level: "Advanced",
      duration: "3 months",
      stars: 245,
      forks: 89,
      contributors: 4,
      lastUpdated: "2024-12-15",
      githubUrl: "https://github.com/student-projects/student-management",
      demoUrl: "https://student-mgmt-demo.vercel.app",
      features: ["Authentication", "Grade Management", "Attendance Tracking", "Reports Generation"]
    },
    {
      title: "Food Delivery App",
      author: "Priya Patel",
      institution: "NIT Surat",
      description: "Mobile-first food delivery application with real-time tracking",
      technologies: ["React Native", "Firebase", "Node.js", "Express"],
      category: "Mobile Development",
      level: "Advanced",
      duration: "4 months",
      stars: 189,
      forks: 67,
      contributors: 3,
      lastUpdated: "2024-12-10",
      githubUrl: "https://github.com/student-projects/food-delivery-app",
      demoUrl: "https://expo.dev/@priya/food-delivery",
      features: ["Real-time Tracking", "Payment Integration", "Push Notifications", "Restaurant Management"]
    },
    {
      title: "E-Commerce Website with Admin Dashboard",
      author: "Advanced Tutorial",
      institution: "Web Dev Academy",
      description: "Full-stack e-commerce platform with comprehensive admin panel and payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "E-Commerce",
      level: "Advanced",
      duration: "6 months",
      stars: 420,
      forks: 156,
      contributors: 8,
      lastUpdated: "2024-12-20",
      githubUrl: "https://github.com/tutorials/ecommerce-admin",
      demoUrl: "https://www.youtube.com/watch?v=4mOkFXyxfsU",
      tutorialUrl: "https://www.youtube.com/watch?v=4mOkFXyxfsU",
      features: ["Product Management", "Order Processing", "Payment Gateway", "Admin Dashboard"],
      isVideoTutorial: true
    },
    {
      title: "Real-Time Chat Application",
      author: "Socket.IO Master",
      institution: "Tech University",
      description: "Modern real-time chat application with Socket.IO integration",
      technologies: ["React", "Node.js", "Socket.IO"],
      category: "Real-Time Apps",
      level: "Intermediate",
      duration: "2 months",
      stars: 280,
      forks: 95,
      contributors: 3,
      lastUpdated: "2024-12-18",
      githubUrl: "https://github.com/tutorials/realtime-chat",
      demoUrl: "https://www.youtube.com/watch?v=z1DxyP1bQ24",
      tutorialUrl: "https://www.youtube.com/watch?v=z1DxyP1bQ24",
      features: ["Real-time Messaging", "User Authentication", "Room Management", "File Sharing"],
      isVideoTutorial: true
    },
    {
      title: "Task Manager (Trello Clone)",
      author: "React Expert",
      institution: "Code Academy",
      description: "Drag-and-drop task management application inspired by Trello",
      technologies: ["React", "Firebase", "React DnD"],
      category: "Productivity",
      level: "Intermediate",
      duration: "3 months",
      stars: 195,
      forks: 78,
      contributors: 5,
      lastUpdated: "2024-12-16",
      githubUrl: "https://github.com/tutorials/trello-clone",
      demoUrl: "https://www.youtube.com/watch?v=AoF1BGhWzLk",
      tutorialUrl: "https://www.youtube.com/watch?v=AoF1BGhWzLk",
      features: ["Drag & Drop", "Board Management", "Card Creation", "Real-time Updates"],
      isVideoTutorial: true
    },
    {
      title: "Portfolio + Blog (Markdown CMS)",
      author: "Next.js Developer",
      institution: "Web Design Institute",
      description: "Modern portfolio website with integrated blog using Markdown CMS",
      technologies: ["Next.js", "Tailwind", "MDX"],
      category: "Portfolio",
      level: "Advanced",
      duration: "2 months",
      stars: 340,
      forks: 120,
      contributors: 2,
      lastUpdated: "2024-12-22",
      githubUrl: "https://github.com/tutorials/portfolio-blog",
      demoUrl: "https://www.youtube.com/watch?v=F02wKp4I-sU",
      tutorialUrl: "https://www.youtube.com/watch?v=F02wKp4I-sU",
      features: ["Static Site Generation", "Markdown Support", "SEO Optimized", "Responsive Design"],
      isVideoTutorial: true
    },
    {
      title: "Crypto Dashboard with Live Prices",
      author: "Crypto Enthusiast",
      institution: "Blockchain Academy",
      description: "Real-time cryptocurrency dashboard with live price updates and charts",
      technologies: ["React", "Chart.js", "CoinGecko API"],
      category: "FinTech",
      level: "Intermediate",
      duration: "3 months",
      stars: 267,
      forks: 89,
      contributors: 4,
      lastUpdated: "2024-12-19",
      githubUrl: "https://github.com/tutorials/crypto-dashboard",
      demoUrl: "https://www.youtube.com/watch?v=GPI6dYz1OHg",
      tutorialUrl: "https://www.youtube.com/watch?v=GPI6dYz1OHg",
      features: ["Live Price Updates", "Interactive Charts", "Portfolio Tracking", "Market Analysis"],
      isVideoTutorial: true
    },
    {
      title: "Authentication System (JWT + OAuth + SSO)",
      author: "Security Expert",
      institution: "Cyber Security Institute",
      description: "Comprehensive authentication system with multiple login options",
      technologies: ["Node.js", "MongoDB", "Passport.js"],
      category: "Security",
      level: "Advanced",
      duration: "4 months",
      stars: 380,
      forks: 142,
      contributors: 6,
      lastUpdated: "2024-12-17",
      githubUrl: "https://github.com/tutorials/auth-system",
      demoUrl: "https://www.youtube.com/watch?v=2jqok-WgelI",
      tutorialUrl: "https://www.youtube.com/watch?v=2jqok-WgelI",
      features: ["JWT Authentication", "OAuth Integration", "SSO Support", "Role-based Access"],
      isVideoTutorial: true
    },
    {
      title: "Video Streaming Platform (Mini YouTube)",
      author: "Media Developer",
      institution: "Digital Media College",
      description: "Video streaming platform with upload, playback, and user management",
      technologies: ["React", "Node.js", "Firebase Storage"],
      category: "Media",
      level: "Advanced",
      duration: "5 months",
      stars: 456,
      forks: 167,
      contributors: 7,
      lastUpdated: "2024-12-21",
      githubUrl: "https://github.com/tutorials/video-platform",
      demoUrl: "https://www.youtube.com/watch?v=EO8UjzTzcII",
      tutorialUrl: "https://www.youtube.com/watch?v=EO8UjzTzcII",
      features: ["Video Upload", "Streaming", "User Subscriptions", "Comments System"],
      isVideoTutorial: true
    },
    {
      title: "Weather App with Geolocation & Charts",
      author: "Weather Tech",
      institution: "Meteorology Institute",
      description: "Weather application with location-based forecasts and data visualization",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      category: "Weather",
      level: "Intermediate",
      duration: "2 months",
      stars: 198,
      forks: 74,
      contributors: 3,
      lastUpdated: "2024-12-20",
      githubUrl: "https://github.com/tutorials/weather-app",
      demoUrl: "https://www.youtube.com/watch?v=GuA0_Z1llYU",
      tutorialUrl: "https://www.youtube.com/watch?v=GuA0_Z1llYU",
      features: ["Geolocation", "Weather Charts", "5-day Forecast", "Multiple Cities"],
      isVideoTutorial: true
    },
    {
      title: "Expense Tracker with Visualization",
      author: "Finance Developer",
      institution: "Finance Tech Academy",
      description: "Personal expense tracking application with detailed analytics and charts",
      technologies: ["React", "Chart.js", "Firebase/IndexedDB"],
      category: "FinTech",
      level: "Intermediate",
      duration: "3 months",
      stars: 223,
      forks: 86,
      contributors: 4,
      lastUpdated: "2024-12-18",
      githubUrl: "https://github.com/tutorials/expense-tracker",
      demoUrl: "https://www.youtube.com/watch?v=XuFDcZABiDQ",
      tutorialUrl: "https://www.youtube.com/watch?v=XuFDcZABiDQ",
      features: ["Expense Categorization", "Visual Charts", "Budget Tracking", "Export Data"],
      isVideoTutorial: true
    },
    {
      title: "Admin Analytics Dashboard",
      author: "Dashboard Master",
      institution: "Analytics Institute",
      description: "Comprehensive admin dashboard with analytics and data visualization",
      technologies: ["Next.js", "Supabase", "Chart.js"],
      category: "Analytics",
      level: "Advanced",
      duration: "4 months",
      stars: 312,
      forks: 118,
      contributors: 5,
      lastUpdated: "2024-12-19",
      githubUrl: "https://github.com/tutorials/admin-dashboard",
      demoUrl: "https://www.youtube.com/watch?v=qfEOE4vtxE",
      tutorialUrl: "https://www.youtube.com/watch?v=qfEOE4vtxE",
      features: ["Real-time Analytics", "Data Visualization", "User Management", "Report Generation"],
      isVideoTutorial: true
    }
  ];

  const categories = [
    "All", "Web Development", "Mobile Development", "Machine Learning", "EdTech", 
    "FinTech", "Healthcare", "Productivity", "E-Commerce", "Real-Time Apps", 
    "Portfolio", "Security", "Media", "Weather", "Analytics"
  ];

  // Illustrations by category (default fallback)
  const categoryIcons: Record<string, string> = {
    'Web Development': 'https://cdn-icons-png.flaticon.com/512/2721/2721296.png',
    'Mobile Development': 'https://cdn-icons-png.flaticon.com/512/2721/2721304.png',
    'Machine Learning': 'https://cdn-icons-png.flaticon.com/512/2721/2721302.png',
    'EdTech': 'https://cdn-icons-png.flaticon.com/512/2721/2721301.png',
    'FinTech': 'https://cdn-icons-png.flaticon.com/512/2721/2721300.png',
    'Healthcare': 'https://cdn-icons-png.flaticon.com/512/2721/2721299.png',
    'Productivity': 'https://cdn-icons-png.flaticon.com/512/2721/2721298.png',
    'E-Commerce': 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
    'Real-Time Apps': 'https://cdn-icons-png.flaticon.com/512/2721/2721295.png',
    'Portfolio': 'https://cdn-icons-png.flaticon.com/512/2721/2721294.png',
    'Security': 'https://cdn-icons-png.flaticon.com/512/2721/2721293.png',
    'Media': 'https://cdn-icons-png.flaticon.com/512/2721/2721292.png',
    'Weather': 'https://cdn-icons-png.flaticon.com/512/2721/2721291.png',
    'Analytics': 'https://cdn-icons-png.flaticon.com/512/2721/2721290.png',
    'All': 'https://cdn-icons-png.flaticon.com/512/3135/3135757.png',
  };

  // Category filter state
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Bar */}
      <div className="w-full overflow-x-auto pb-2">
        <div className="flex gap-3 min-w-max px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap text-sm font-semibold shadow-sm ${selectedCategory === cat ? 'bg-orange-500 text-white border-orange-500' : 'bg-white/80 text-gray-700 border-gray-200 hover:bg-orange-100'}`}
            >
              <img src={categoryIcons[cat] || categoryIcons['All']} alt={cat} className="w-5 h-5" />
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="bg-white/70 backdrop-blur-md border-2 border-orange-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col"
            style={{ borderTop: `6px solid #fb923c` }}
          >
            <CardHeader className="flex flex-col items-center pb-2">
              <img
                src={categoryIcons[project.category] || categoryIcons['All']}
                alt={project.category}
                className="w-16 h-16 mb-2 drop-shadow"
              />
              <div className="flex justify-between items-center w-full mb-2">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <div className="flex gap-1">
                  <Badge className={project.level === "Advanced" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}>
                    {project.level}
                  </Badge>
                  {project.isVideoTutorial && (
                    <Badge className="bg-green-100 text-green-800">
                      Tutorial
                    </Badge>
                  )}
                </div>
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900 text-center">
                {project.title}
              </CardTitle>
              <div className="text-sm text-gray-600 text-center">
                <p className="font-medium">{project.author}</p>
                <p>{project.institution}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <p className="text-gray-700 text-sm mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4 justify-center">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{project.duration}</div>
                <div className="flex items-center gap-1"><Star className="w-4 h-4" />{project.stars}</div>
                <div className="flex items-center gap-1"><Users className="w-4 h-4" />{project.contributors}</div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm text-center">Key Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 justify-center">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    {project.isVideoTutorial ? (
                      <>
                        <Youtube className="w-4 h-4 mr-1" />
                        Watch
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </>
                    )}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submit Project Anchor */}
      <div id="submit" className="pt-24" />
    </div>
  );
};

export default StudentProjects;
