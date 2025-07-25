import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, BookOpen, Code, Cpu, Database, Cloud, FlaskConical, GitBranch, Globe, Layers, Lock, Network, PenTool, PieChart, Presentation, Settings, Shield, Terminal, Users, Wrench } from "lucide-react";

const documents = [
  {
    title: "Lab Report Template",
    description: "Standardized format for all engineering lab reports.",
    icon: FlaskConical,
    url: "#"
  },
  {
    title: "Project Proposal Guide",
    description: "Step-by-step guide for writing project proposals.",
    icon: Presentation,
    url: "#"
  },
  {
    title: "Resume Template",
    description: "Modern, ATS-friendly resume template for engineers.",
    icon: Users,
    url: "#"
  },
  {
    title: "Research Paper Format",
    description: "IEEE/Elsevier-compliant research paper template.",
    icon: BookOpen,
    url: "#"
  },
  {
    title: "Circuit Diagram Symbols",
    description: "Reference sheet for all standard circuit symbols.",
    icon: Cpu,
    url: "#"
  },
  {
    title: "Database ER Diagram Guide",
    description: "How to create and interpret ER diagrams.",
    icon: Database,
    url: "#"
  },
  {
    title: "Cloud Computing Cheat Sheet",
    description: "Quick reference for AWS, Azure, and GCP basics.",
    icon: Cloud,
    url: "#"
  },
  {
    title: "Git & Version Control Guide",
    description: "Essential git commands and workflows for projects.",
    icon: GitBranch,
    url: "#"
  },
  {
    title: "Software Design Patterns",
    description: "Summary of key OOP and software design patterns.",
    icon: Layers,
    url: "#"
  },
  {
    title: "Network Protocols Reference",
    description: "OSI, TCP/IP, and common network protocol cheat sheet.",
    icon: Network,
    url: "#"
  },
  {
    title: "Python Coding Standards",
    description: "Best practices and style guide for Python code.",
    icon: Code,
    url: "#"
  },
  {
    title: "Linux Command Line Guide",
    description: "Essential Linux/Unix commands for engineers.",
    icon: Terminal,
    url: "#"
  },
  {
    title: "Engineering Drawing Symbols",
    description: "Reference for mechanical and civil drawing symbols.",
    icon: PenTool,
    url: "#"
  },
  {
    title: "Data Visualization Handbook",
    description: "Principles and tools for effective data visualization.",
    icon: PieChart,
    url: "#"
  },
  {
    title: "Presentation Slide Template",
    description: "Clean, professional slide deck for seminars and reviews.",
    icon: Presentation,
    url: "#"
  },
  {
    title: "System Design Checklist",
    description: "Key questions and diagrams for system design interviews.",
    icon: Settings,
    url: "#"
  },
  {
    title: "Cybersecurity Best Practices",
    description: "Security checklist for student projects and labs.",
    icon: Shield,
    url: "#"
  },
  {
    title: "Engineering Ethics Guide",
    description: "Summary of professional ethics and responsibilities.",
    icon: Globe,
    url: "#"
  },
  {
    title: "Troubleshooting Flowcharts",
    description: "Step-by-step guides for debugging hardware/software.",
    icon: Wrench,
    url: "#"
  },
  {
    title: "Confidentiality Agreement",
    description: "Template NDA for student projects and collaborations.",
    icon: Lock,
    url: "#"
  }
];

const Documents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100">
      {/* No header or hero section, page starts with coming soon content */}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135766.png" alt="Documents Coming Soon" className="w-40 h-40 object-contain mx-auto drop-shadow-xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Engineering Documents - Coming Soon</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're working on bringing you a comprehensive collection of engineering documents, templates, and reference materials for all academic years. Stay tuned for updates!
          </p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-6 py-3">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Documents;
