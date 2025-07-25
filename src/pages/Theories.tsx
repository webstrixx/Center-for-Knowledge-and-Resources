
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Brain, Cpu, Database, Globe, Shield, Zap, Lightbulb } from "lucide-react";

const Theories = () => {
  const theoryCategories = [
    {
      category: "First Year - Mathematical & Scientific Foundations",
      icon: Brain,
      color: "bg-green-50 border-green-200",
      theories: [
        { id: "set-theory", title: "Set Theory and Mathematical Logic", description: "Fundamental concepts of sets, relations, functions, and logical reasoning", difficulty: "Beginner", readTime: "45 min", applications: "Database design, Programming logic", year: "1st Year" },
        { id: "number-theory", title: "Number Theory Fundamentals", description: "Prime numbers, modular arithmetic, and cryptographic applications", difficulty: "Intermediate", readTime: "50 min", applications: "Cryptography, Computer Security", year: "1st Year" },
        { id: "linear-algebra", title: "Linear Algebra Theory", description: "Vector spaces, matrices, eigenvalues, and linear transformations", difficulty: "Intermediate", readTime: "60 min", applications: "Computer Graphics, Machine Learning", year: "1st Year" },
        { id: "calculus-engineering", title: "Calculus in Engineering", description: "Differential and integral calculus applications in engineering problems", difficulty: "Intermediate", readTime: "55 min", applications: "Signal Processing, Control Systems", year: "1st Year" },
        { id: "physics-computation", title: "Physics of Computation", description: "Physical principles underlying computational processes and electronic devices", difficulty: "Beginner", readTime: "40 min", applications: "Hardware Design, Quantum Computing", year: "1st Year" },
        { id: "chemistry-materials", title: "Chemistry in Materials Science", description: "Chemical bonding, properties of materials used in computing systems", difficulty: "Beginner", readTime: "35 min", applications: "Semiconductor Design, Battery Technology", year: "1st Year" },
        { id: "boolean-algebra", title: "Boolean Algebra Theory", description: "Fundamental operations, laws, and simplification techniques", difficulty: "Beginner", readTime: "40 min", applications: "Digital Circuit Design, Logic Gates", year: "1st Year" }
      ]
    },
    {
      category: "Second Year - Computer Science Fundamentals",
      icon: Cpu,
      color: "bg-blue-50 border-blue-200",
      theories: [
        { id: "computational-complexity", title: "Computational Complexity Theory", description: "Study of P vs NP problems, complexity classes, and algorithmic efficiency analysis", difficulty: "Advanced", readTime: "75 min", applications: "Algorithm Design, Optimization", year: "2nd Year" },
        { id: "automata-theory", title: "Automata Theory", description: "Finite state machines, regular expressions, context-free grammars, and formal languages", difficulty: "Intermediate", readTime: "65 min", applications: "Compiler Design, Pattern Matching", year: "2nd Year" },
        { id: "graph-theory", title: "Graph Theory Applications", description: "Mathematical study of graphs, algorithms for connectivity, shortest paths, and network analysis", difficulty: "Intermediate", readTime: "70 min", applications: "Social Networks, Route Planning", year: "2nd Year" },
        { id: "information-theory", title: "Information Theory", description: "Entropy, data compression, error correction, and information transmission principles", difficulty: "Advanced", readTime: "60 min", applications: "Data Compression, Communication Systems", year: "2nd Year" },
        { id: "probability-computing", title: "Probability Theory in Computing", description: "Random variables, probability distributions, and stochastic processes", difficulty: "Intermediate", readTime: "55 min", applications: "Machine Learning, Statistical Analysis", year: "2nd Year" },
        { id: "digital-logic", title: "Digital Logic Design Theory", description: "Combinational and sequential circuit design principles", difficulty: "Intermediate", readTime: "50 min", applications: "Processor Design, Digital Systems", year: "2nd Year" },
        { id: "data-structure-theory", title: "Data Structure Theory", description: "Abstract data types, complexity analysis, and optimal data organization", difficulty: "Intermediate", readTime: "65 min", applications: "Database Systems, Algorithm Implementation", year: "2nd Year" },
        { id: "computer-architecture", title: "Computer Architecture Theory", description: "Von Neumann architecture, instruction sets, and processor design principles", difficulty: "Advanced", readTime: "80 min", applications: "Processor Design, System Optimization", year: "2nd Year" }
      ]
    },
    {
      category: "Third Year - Software Engineering & Systems",
      icon: Globe,
      color: "bg-purple-50 border-purple-200",
      theories: [
        { id: "solid-principles", title: "SOLID Principles", description: "Five fundamental design principles for writing maintainable and scalable object-oriented software", difficulty: "Intermediate", readTime: "45 min", applications: "Software Architecture, Code Quality", year: "3rd Year" },
        { id: "design-patterns", title: "Design Patterns Theory", description: "Reusable solutions to commonly occurring problems in software design and architecture", difficulty: "Advanced", readTime: "90 min", applications: "Framework Development, System Design", year: "3rd Year" },
        { id: "software-architecture", title: "Software Architecture Patterns", description: "High-level structural patterns including MVC, MVP, MVVM, and microservices architecture", difficulty: "Advanced", readTime: "85 min", applications: "Enterprise Applications, Web Services", year: "3rd Year" },
        { id: "database-theory", title: "Database Theory", description: "Relational algebra, normalization theory, transaction processing, and ACID properties", difficulty: "Advanced", readTime: "75 min", applications: "Database Design, Data Management", year: "3rd Year" },
        { id: "network-protocol", title: "Network Protocol Theory", description: "OSI model, TCP/IP stack, routing algorithms, and network security principles", difficulty: "Advanced", readTime: "70 min", applications: "Network Design, Internet Protocols", year: "3rd Year" },
        { id: "operating-system", title: "Operating System Theory", description: "Process management, memory allocation, file systems, and concurrent programming", difficulty: "Advanced", readTime: "80 min", applications: "System Programming, Resource Management", year: "3rd Year" },
        { id: "compiler-design", title: "Compiler Design Theory", description: "Lexical analysis, parsing, code generation, and optimization techniques", difficulty: "Advanced", readTime: "95 min", applications: "Programming Languages, Code Optimization", year: "3rd Year" },
        { id: "distributed-systems", title: "Distributed Systems Theory", description: "Consistency models, consensus algorithms, and fault tolerance in distributed computing", difficulty: "Advanced", readTime: "85 min", applications: "Cloud Computing, Blockchain", year: "3rd Year" },
        { id: "cryptography-theory", title: "Cryptography Theory", description: "Mathematical foundations of encryption, digital signatures, and security protocols", difficulty: "Advanced", readTime: "80 min", applications: "Information Security, Blockchain", year: "3rd Year" }
      ]
    },
    {
      category: "Fourth Year - Advanced Technologies & Specialization",
      icon: Zap,
      color: "bg-red-50 border-red-200",
      theories: [
        { id: "machine-learning-theory", title: "Machine Learning Theory", description: "Statistical learning theory, bias-variance tradeoff, and generalization bounds", difficulty: "Advanced", readTime: "100 min", applications: "AI Systems, Data Science", year: "4th Year" },
        { id: "ai-foundations", title: "Artificial Intelligence Foundations", description: "Search algorithms, knowledge representation, reasoning, and planning", difficulty: "Advanced", readTime: "110 min", applications: "Expert Systems, Robotics", year: "4th Year" },
        { id: "deep-learning-theory", title: "Deep Learning Theory", description: "Neural network architectures, backpropagation, and optimization in deep networks", difficulty: "Advanced", readTime: "120 min", applications: "Computer Vision, NLP", year: "4th Year" },
        { id: "quantum-computing", title: "Quantum Computing Theory", description: "Quantum mechanics principles, quantum algorithms, and quantum supremacy", difficulty: "Expert", readTime: "130 min", applications: "Quantum Algorithms, Cryptography", year: "4th Year" },
        { id: "blockchain-theory", title: "Blockchain Technology Theory", description: "Distributed ledger technology, consensus mechanisms, and smart contracts", difficulty: "Advanced", readTime: "85 min", applications: "Cryptocurrency, Decentralized Apps", year: "4th Year" },
        { id: "computer-vision", title: "Computer Vision Theory", description: "Image processing, feature extraction, and pattern recognition algorithms", difficulty: "Advanced", readTime: "95 min", applications: "Image Analysis, Autonomous Systems", year: "4th Year" },
        { id: "nlp-theory", title: "Natural Language Processing Theory", description: "Linguistic theory, statistical models, and language understanding algorithms", difficulty: "Advanced", readTime: "90 min", applications: "Chatbots, Translation Systems", year: "4th Year" },
        { id: "game-theory", title: "Game Theory in Computing", description: "Strategic decision making, mechanism design, and algorithmic game theory", difficulty: "Advanced", readTime: "75 min", applications: "Resource Allocation, Network Security", year: "4th Year" },
        { id: "cloud-computing-theory", title: "Cloud Computing Theory", description: "Virtualization, service models, scalability, and cloud architecture patterns", difficulty: "Advanced", readTime: "80 min", applications: "Cloud Services, DevOps", year: "4th Year" },
        { id: "iot-theory", title: "Internet of Things Theory", description: "Sensor networks, edge computing, and IoT system architecture", difficulty: "Intermediate", readTime: "70 min", applications: "Smart Cities, Industrial IoT", year: "4th Year" }
      ]
    },
    {
      category: "Research & Emerging Technologies",
      icon: Lightbulb,
      color: "bg-yellow-50 border-yellow-200",
      theories: [
        { id: "bioinformatics", title: "Bioinformatics Theory", description: "Computational methods for analyzing biological data and genomic sequences", difficulty: "Advanced", readTime: "85 min", applications: "Drug Discovery, Genetic Analysis", year: "Research" },
        { id: "neuromorphic-computing", title: "Neuromorphic Computing", description: "Brain-inspired computing architectures and spike-based neural networks", difficulty: "Expert", readTime: "95 min", applications: "AI Hardware, Cognitive Computing", year: "Research" },
        { id: "edge-computing", title: "Edge Computing Theory", description: "Distributed computing paradigms and latency-sensitive applications", difficulty: "Advanced", readTime: "70 min", applications: "IoT Systems, Real-time Processing", year: "Research" },
        { id: "augmented-reality", title: "Augmented Reality Theory", description: "Computer vision, 3D rendering, and human-computer interaction principles", difficulty: "Advanced", readTime: "80 min", applications: "AR Applications, Mixed Reality", year: "Research" },
        { id: "robotics-theory", title: "Robotics Theory", description: "Kinematics, dynamics, control systems, and autonomous navigation", difficulty: "Advanced", readTime: "100 min", applications: "Autonomous Robots, Industrial Automation", year: "Research" },
        { id: "green-computing", title: "Green Computing Theory", description: "Energy-efficient computing, sustainable technology, and environmental impact", difficulty: "Intermediate", readTime: "60 min", applications: "Sustainable Tech, Energy Optimization", year: "Research" }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      case "Expert": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getYearColor = (year: string) => {
    switch (year) {
      case "1st Year": return "bg-blue-100 text-blue-800";
      case "2nd Year": return "bg-green-100 text-green-800";
      case "3rd Year": return "bg-purple-100 text-purple-800";
      case "4th Year": return "bg-red-100 text-red-800";
      case "Research": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135772.png" alt="Theories Coming Soon" className="w-40 h-40 object-contain mx-auto drop-shadow-xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Engineering Theories - Coming Soon</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're working on bringing you a comprehensive collection of engineering theories, concepts, and reference materials for all academic years. Stay tuned for updates!
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

export default Theories;
