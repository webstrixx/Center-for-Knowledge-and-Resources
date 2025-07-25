import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, FileText, Beaker, PenTool, Award, Code, Zap, Users, Download, ExternalLink } from "lucide-react";

// --- Data (No changes here, assuming it's correct) ---
const academicYears = [
    {
      year: "First Year",
      refId: "first-year",
      color: "from-green-500 to-teal-500",
      description: "Foundation subjects and basic engineering concepts",
      driveLink: "https://drive.google.com/drive/folders/1hvUXtsjpxLre6jtHR5UFbH2IMBAP2ZDT",
      subjects: ["Mathematics", "Physics", "Chemistry", "Programming", "Engineering Drawing"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 25, description: "Physics, Chemistry & Programming labs" },
        { name: "Lab Records", icon: FileText, count: 30, description: "Complete lab record formats" },
        { name: "Assignments", icon: PenTool, count: 40, description: "Solved assignments for all subjects" },
        { name: "Previous Year Papers", icon: Award, count: 80, description: "Last 5 years solved papers" },
        { name: "Micro Projects", icon: Code, count: 15, description: "Small projects for skill building" },
        { name: "Subject Notes", icon: BookOpen, count: 50, description: "Comprehensive notes for all subjects" },
      ]
    },
    {
      year: "Second Year",
      refId: "second-year",
      color: "from-blue-500 to-indigo-500",
      description: "Core engineering subjects and programming fundamentals",
      driveLink: "https://drive.google.com/drive/folders/1VuZAozNvWES5agsAdfto2sG8_aBRdKj4",
      subjects: ["Data Structures", "Digital Electronics", "DBMS", "Computer Organization", "OOP"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 35, description: "DSA, DBMS & Digital Electronics labs" },
        { name: "Lab Records", icon: FileText, count: 42, description: "Programming and circuit lab records" },
        { name: "Assignments", icon: PenTool, count: 55, description: "Coding assignments and problem sets" },
        { name: "Previous Year Papers", icon: Award, count: 95, description: "Exam papers with detailed solutions" },
        { name: "Micro Projects", icon: Code, count: 22, description: "Web and database projects" },
        { name: "Subject Notes", icon: BookOpen, count: 65, description: "Core CS subjects notes" },
      ]
    },
    {
      year: "Third Year",
      refId: "third-year",
      color: "from-purple-500 to-pink-500",
      description: "Advanced topics and specialization subjects",
      driveLink: "https://drive.google.com/drive/folders/1yYfCuRWI8Jv-MZx9S_5wiScvEqj69kJt",
      subjects: ["Software Engineering", "Computer Networks", "OS", "Web Dev", "AI/ML"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 45, description: "Advanced programming & networking labs" },
        { name: "Lab Records", icon: FileText, count: 50, description: "System programming and network labs" },
        { name: "Assignments", icon: PenTool, count: 65, description: "Complex programming assignments" },
        { name: "Previous Year Papers", icon: Award, count: 110, description: "Advanced subject question papers" },
        { name: "Micro Projects", icon: Code, count: 28, description: "Full-stack and AI/ML projects" },
        { name: "Subject Notes", icon: BookOpen, count: 75, description: "Advanced CS concepts" },
      ]
    },
    {
      year: "Fourth Year",
      refId: "fourth-year",
      color: "from-red-500 to-orange-500",
      description: "Final year projects and industry preparation",
      driveLink: "#",
      subjects: ["Capstone Project", "Blockchain", "Cloud Computing", "DevOps"],
      resources: [
        { name: "Project Reports", icon: FileText, count: 30, description: "Sample final year project reports" },
        { name: "Research Papers", icon: BookOpen, count: 40, description: "Key papers for literature survey" },
        { name: "Interview Prep", icon: Users, count: 50, description: "Company-specific interview notes" },
        { name: "Placement Papers", icon: Award, count: 120, description: "Previous years' placement papers" },
      ]
    }
];

const CampusNotes = () => {
  const sectionRefs = academicYears.reduce((acc, value) => {
    acc[value.refId] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const handleNav = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getTotalResources = () => {
    return academicYears.reduce((total, year) => total + year.resources.reduce((yearTotal, resource) => yearTotal + resource.count, 0), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg"><BookOpen className="w-8 h-8 text-orange-500" /></div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Campus Notes</h1>
                    <p className="text-gray-500 dark:text-gray-400">All subjects, all years, all in one place.</p>
                </div>
            </div>
            <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
        </div>
      </header>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <aside className="md:col-span-1 h-fit md:sticky top-28">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Navigation</h3>
                <div className="space-y-1.5">
                    {academicYears.map(year => (
                        <button
                            key={year.refId}
                            onClick={() => handleNav(sectionRefs[year.refId])}
                            className="w-full text-left px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            {year.year}
                        </button>
                    ))}
                </div>
            </div>
          </aside>

          <main className="md:col-span-3">
            <div className="space-y-12">
              {academicYears.map((yearData) => (
                <section key={yearData.refId} ref={sectionRefs[yearData.refId]} className="scroll-mt-28">
                  <div className={`bg-gradient-to-r ${yearData.color} p-6 rounded-t-2xl text-white shadow-lg`}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-1">{yearData.year}</h2>
                            <p className="text-white/90 max-w-md">{yearData.description}</p>
                        </div>
                        <Button asChild className="bg-white text-gray-900 hover:bg-gray-100 mt-4 sm:mt-0 font-bold rounded-full">
                            <a href={yearData.driveLink} target="_blank" rel="noopener noreferrer"><Download className="w-4 h-4 mr-2" /> Access Drive</a>
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {yearData.subjects.map((subject, index) => (
                            <Badge key={index} className="bg-white/20 text-white border-white/30">{subject}</Badge>
                        ))}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-2xl p-6 shadow-lg">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {yearData.resources.map((resource) => {
                        const IconComponent = resource.icon;
                        return (
                          <div key={resource.name} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center gap-4">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-md">
                                <IconComponent className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 dark:text-gray-200">{resource.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{resource.count > 0 ? `${resource.count}+ files` : 'View resources'}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CampusNotes;