import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ExternalLink, Clock, Users, Star, Search, Award, Code as CodeIcon, Cloud, Shield, Database, Layers, Globe, Zap, BookOpen, XCircle } from "lucide-react";

// --- Data and Helper Functions (No changes here) ---

const tagIcons: Record<string, any> = {
  Cloud: Cloud, AWS: Cloud, GCP: Cloud, Azure: Cloud, Kubernetes: Layers, Docker: Layers,
  Security: Shield, Java: CodeIcon, Python: CodeIcon, React: CodeIcon, Node: CodeIcon,
  Data: Database, Analytics: Database, Machine: Zap, AI: Zap, Project: BookOpen,
  Management: BookOpen, Web: Globe, Frontend: Globe, Backend: Database, Mobile: Users,
  Blockchain: Layers, Linux: CodeIcon, Testing: Shield, Business: BookOpen, Marketing: Globe,
  Design: BookOpen, ERP: Layers, Game: Zap, 'C++': CodeIcon, PHP: CodeIcon, Ruby: CodeIcon,
  Go: CodeIcon, Rust: CodeIcon, Jira: BookOpen, Splunk: Database, ServiceNow: Database,
  Snowflake: Database, Databricks: Database, Salesforce: Globe, SAP: Layers, VMware: Cloud,
  Big: Database, IoT: Cloud, Unity: Zap, Unreal: Zap, Atlassian: BookOpen, ITIL: BookOpen,
  COBIT: BookOpen, Digital: Globe, Bitcoin: Layers, Ethereum: Layers, Hyperledger: Layers,
};

const getCertIcon = (tags: string[]) => {
  for (const tag of tags) { if (tagIcons[tag]) return tagIcons[tag]; }
  return Award;
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
    case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
    case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
    case "Professional": return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

const getPaidColor = (paid: boolean) =>
  paid 
  ? "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 border-orange-200 dark:border-orange-500/50" 
  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600";

const certificates = [ /* ... Your full list of certificates remains here ... */ 
    // Cloud Computing
    { title: "AWS Certified Solutions Architect", provider: "Amazon Web Services", duration: "3-6 months", level: "Professional", rating: 4.8, students: "50K+", description: "Design and deploy scalable AWS solutions", link: "https://aws.amazon.com/certification/", tags: ["Cloud", "AWS", "Architecture"] },
    { title: "Google Cloud Professional Cloud Architect", provider: "Google Cloud", duration: "4-8 months", level: "Professional", rating: 4.7, students: "25K+", description: "Design and manage Google Cloud solutions", link: "https://cloud.google.com/certification/", tags: ["Cloud", "GCP", "Architecture"] },
    { title: "Microsoft Azure Fundamentals", provider: "Microsoft", duration: "1-2 months", level: "Beginner", rating: 4.6, students: "100K+", description: "Learn Azure cloud services fundamentals", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Cloud", "Azure", "Fundamentals"] },
    { title: "AWS Certified Developer", provider: "Amazon Web Services", duration: "2-4 months", level: "Professional", rating: 4.7, students: "40K+", description: "Develop applications on AWS platform", link: "https://aws.amazon.com/certification/", tags: ["AWS", "Development", "Cloud"] },
    { title: "Google Cloud Associate Cloud Engineer", provider: "Google Cloud", duration: "2-3 months", level: "Intermediate", rating: 4.5, students: "30K+", description: "Deploy and manage Google Cloud solutions", link: "https://cloud.google.com/certification/", tags: ["GCP", "Engineering", "Cloud"] },
    { title: "Azure Administrator Associate", provider: "Microsoft", duration: "3-4 months", level: "Intermediate", rating: 4.6, students: "35K+", description: "Manage Azure subscriptions and resources", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "Administration", "Cloud"] },
    { title: "AWS Certified SysOps Administrator", provider: "Amazon Web Services", duration: "3-5 months", level: "Professional", rating: 4.5, students: "20K+", description: "Deploy and manage AWS systems", link: "https://aws.amazon.com/certification/", tags: ["AWS", "SysOps", "Administration"] },
    { title: "Google Cloud Professional DevOps Engineer", provider: "Google Cloud", duration: "4-6 months", level: "Advanced", rating: 4.8, students: "15K+", description: "Implement DevOps practices on GCP", link: "https://cloud.google.com/certification/", tags: ["GCP", "DevOps", "Engineering"] },
    
    // DevOps & Containers
    { title: "Certified Kubernetes Administrator", provider: "Cloud Native Computing Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.9, students: "15K+", description: "Master Kubernetes cluster administration", link: "https://www.cncf.io/certification/cka/", tags: ["Kubernetes", "DevOps", "Containers"] },
    { title: "Docker Certified Associate", provider: "Docker", duration: "1-3 months", level: "Intermediate", rating: 4.5, students: "30K+", description: "Containerization and Docker expertise", link: "https://www.docker.com/certification/", tags: ["Docker", "Containers", "DevOps"] },
    { title: "Certified Kubernetes Application Developer", provider: "CNCF", duration: "2-3 months", level: "Intermediate", rating: 4.7, students: "12K+", description: "Develop applications for Kubernetes", link: "https://www.cncf.io/certification/ckad/", tags: ["Kubernetes", "Development", "Containers"] },
    { title: "Jenkins Certified Engineer", provider: "CloudBees", duration: "1-2 months", level: "Intermediate", rating: 4.3, students: "8K+", description: "Master Jenkins CI/CD pipelines", link: "https://www.cloudbees.com/jenkins/certification", tags: ["Jenkins", "CI/CD", "DevOps"] },
    { title: "Terraform Associate", provider: "HashiCorp", duration: "2-3 months", level: "Intermediate", rating: 4.6, students: "18K+", description: "Infrastructure as Code with Terraform", link: "https://www.hashicorp.com/certification/terraform-associate", tags: ["Terraform", "IaC", "DevOps"] },
    { title: "Ansible Automation Platform", provider: "Red Hat", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "10K+", description: "Automate IT infrastructure with Ansible", link: "https://www.redhat.com/en/services/certification", tags: ["Ansible", "Automation", "DevOps"] },
    
    // Cybersecurity
    { title: "Certified Ethical Hacker", provider: "EC-Council", duration: "3-6 months", level: "Advanced", rating: 4.4, students: "40K+", description: "Ethical hacking and penetration testing", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/", tags: ["Security", "Ethical Hacking", "Penetration Testing"] },
    { title: "CISSP", provider: "ISC2", duration: "6-12 months", level: "Advanced", rating: 4.7, students: "25K+", description: "Information Systems Security Professional", link: "https://www.isc2.org/Certifications/CISSP", tags: ["Security", "Risk Management", "Governance"] },
    { title: "CompTIA Security+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "60K+", description: "Foundation-level cybersecurity skills", link: "https://www.comptia.org/certifications/security", tags: ["Security", "CompTIA", "Fundamentals"] },
    { title: "CISM", provider: "ISACA", duration: "4-8 months", level: "Advanced", rating: 4.6, students: "15K+", description: "Certified Information Security Manager", link: "https://www.isaca.org/credentialing/cism", tags: ["Security", "Management", "Governance"] },
    { title: "CISA", provider: "ISACA", duration: "4-8 months", level: "Advanced", rating: 4.5, students: "12K+", description: "Certified Information Systems Auditor", link: "https://www.isaca.org/credentialing/cisa", tags: ["Security", "Audit", "Risk"] },
    
    // Programming & Development
    { title: "Oracle Certified Professional Java", provider: "Oracle", duration: "3-6 months", level: "Professional", rating: 4.6, students: "45K+", description: "Master Java programming language", link: "https://education.oracle.com/java", tags: ["Java", "Programming", "Oracle"] },
    { title: "Microsoft Certified: Azure Developer", provider: "Microsoft", duration: "3-5 months", level: "Professional", rating: 4.5, students: "28K+", description: "Develop solutions for Microsoft Azure", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "Development", "Microsoft"] },
    { title: "Python Institute PCAP", provider: "Python Institute", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "22K+", description: "Certified Associate Python Programmer", link: "https://pythoninstitute.org/pcap", tags: ["Python", "Programming", "Development"] },
    { title: "React Developer Certification", provider: "Meta", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "35K+", description: "Build modern web applications with React", link: "https://developers.facebook.com/developercircles/", tags: ["React", "JavaScript", "Frontend"] },
    { title: "Node.js Application Developer", provider: "OpenJS Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "18K+", description: "Server-side JavaScript development", link: "https://openjsf.org/certification/", tags: ["Node.js", "JavaScript", "Backend"] },
    
    // Data Science & Analytics
    { title: "Google Data Analytics Certificate", provider: "Google", duration: "3-6 months", level: "Beginner", rating: 4.7, students: "150K+", description: "Analyze data and gain insights", link: "https://grow.google/certificates/data-analytics/", tags: ["Data Analytics", "Google", "Business Intelligence"] },
    { title: "IBM Data Science Professional", provider: "IBM", duration: "4-8 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Complete data science methodology", link: "https://www.ibm.com/training/badge/data-science-professional-certificate-v2", tags: ["Data Science", "IBM", "Machine Learning"] },
    { title: "Microsoft Power BI Data Analyst", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "40K+", description: "Business intelligence and data visualization", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Power BI", "Analytics", "Visualization"] },
    { title: "Tableau Desktop Specialist", provider: "Tableau", duration: "1-3 months", level: "Beginner", rating: 4.4, students: "25K+", description: "Data visualization with Tableau", link: "https://www.tableau.com/learn/certification", tags: ["Tableau", "Visualization", "Analytics"] },
    { title: "SAS Certified Specialist", provider: "SAS", duration: "3-5 months", level: "Intermediate", rating: 4.3, students: "15K+", description: "Statistical analysis and data management", link: "https://www.sas.com/en_us/certification.html", tags: ["SAS", "Statistics", "Analytics"] },
    
    // Machine Learning & AI
    { title: "Google Machine Learning Engineer", provider: "Google Cloud", duration: "4-8 months", level: "Advanced", rating: 4.8, students: "20K+", description: "Design and implement ML solutions", link: "https://cloud.google.com/certification/", tags: ["Machine Learning", "GCP", "AI"] },
    { title: "AWS Certified Machine Learning", provider: "Amazon Web Services", duration: "4-8 months", level: "Advanced", rating: 4.7, students: "18K+", description: "ML solutions on AWS platform", link: "https://aws.amazon.com/certification/", tags: ["Machine Learning", "AWS", "AI"] },
    { title: "TensorFlow Developer Certificate", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "30K+", description: "Build ML models with TensorFlow", link: "https://www.tensorflow.org/certificate", tags: ["TensorFlow", "Deep Learning", "AI"] },
    { title: "Azure AI Engineer Associate", provider: "Microsoft", duration: "3-5 months", level: "Professional", rating: 4.5, students: "12K+", description: "Design AI solutions on Azure", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "AI", "Machine Learning"] },
    
    // Database Management
    { title: "Oracle Database Administrator", provider: "Oracle", duration: "4-8 months", level: "Professional", rating: 4.6, students: "20K+", description: "Manage Oracle database systems", link: "https://education.oracle.com/database", tags: ["Oracle", "Database", "Administration"] },
    { title: "Microsoft SQL Server DBA", provider: "Microsoft", duration: "3-6 months", level: "Professional", rating: 4.4, students: "25K+", description: "SQL Server database administration", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["SQL Server", "Database", "Microsoft"] },
    { title: "MongoDB Certified Developer", provider: "MongoDB", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "15K+", description: "NoSQL database development", link: "https://university.mongodb.com/certification", tags: ["MongoDB", "NoSQL", "Database"] },
    { title: "MySQL Database Administrator", provider: "Oracle", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "18K+", description: "MySQL database management", link: "https://education.oracle.com/mysql", tags: ["MySQL", "Database", "Administration"] },
    
    // Project Management
    { title: "PMP Certification", provider: "PMI", duration: "4-8 months", level: "Professional", rating: 4.7, students: "200K+", description: "Project Management Professional", link: "https://www.pmi.org/certifications/project-management-pmp", tags: ["Project Management", "PMI", "Leadership"] },
    { title: "Certified Scrum Master", provider: "Scrum Alliance", duration: "1-2 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Agile project management with Scrum", link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster", tags: ["Scrum", "Agile", "Management"] },
    { title: "PRINCE2 Foundation", provider: "AXELOS", duration: "2-3 months", level: "Beginner", rating: 4.4, students: "50K+", description: "Structured project management method", link: "https://www.axelos.com/certifications/prince2", tags: ["PRINCE2", "Project Management", "Methodology"] },
    { title: "Agile Certified Practitioner", provider: "PMI", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "35K+", description: "Agile project management practices", link: "https://www.pmi.org/certifications/agile-acp", tags: ["Agile", "PMI", "Project Management"] },
    
    // Web Development
    { title: "Google UX Design Certificate", provider: "Google", duration: "3-6 months", level: "Beginner", rating: 4.6, students: "120K+", description: "User experience design fundamentals", link: "https://grow.google/certificates/ux-design/", tags: ["UX Design", "Google", "Design"] },
    { title: "Adobe Certified Expert", provider: "Adobe", duration: "2-4 months", level: "Professional", rating: 4.4, students: "30K+", description: "Master Adobe Creative Suite", link: "https://www.adobe.com/training/certification.html", tags: ["Adobe", "Design", "Creative"] },
    { title: "W3C Frontend Developer", provider: "W3C", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "25K+", description: "Modern frontend web development", link: "https://www.w3.org/", tags: ["Frontend", "HTML", "CSS"] },
    { title: "Vue.js Developer Certification", provider: "Vue School", duration: "1-3 months", level: "Intermediate", rating: 4.5, students: "15K+", description: "Progressive JavaScript framework", link: "https://vueschool.io/", tags: ["Vue.js", "JavaScript", "Frontend"] },
    { title: "Angular Developer Certification", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "20K+", description: "Build dynamic web applications", link: "https://developers.google.com/certification/", tags: ["Angular", "TypeScript", "Frontend"] },
    
    // Mobile Development
    { title: "Android Developer Certification", provider: "Google", duration: "3-6 months", level: "Intermediate", rating: 4.5, students: "40K+", description: "Build Android mobile applications", link: "https://developers.google.com/certification/", tags: ["Android", "Mobile", "Java"] },
    { title: "iOS Developer Certification", provider: "Apple", duration: "3-6 months", level: "Intermediate", rating: 4.6, students: "30K+", description: "Develop apps for iOS platform", link: "https://developer.apple.com/certification/", tags: ["iOS", "Swift", "Mobile"] },
    { title: "React Native Developer", provider: "Meta", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "25K+", description: "Cross-platform mobile development", link: "https://reactnative.dev/", tags: ["React Native", "Mobile", "JavaScript"] },
    { title: "Flutter Developer Certification", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "20K+", description: "Cross-platform app development", link: "https://flutter.dev/", tags: ["Flutter", "Dart", "Mobile"] },
    
    // Networking
    { title: "Cisco CCNA", provider: "Cisco", duration: "3-6 months", level: "Professional", rating: 4.7, students: "100K+", description: "Network Associate certification", link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html", tags: ["Cisco", "Networking", "Infrastructure"] },
    { title: "CompTIA Network+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Networking fundamentals and protocols", link: "https://www.comptia.org/certifications/network", tags: ["CompTIA", "Networking", "Infrastructure"] },
    { title: "Juniper JNCIA", provider: "Juniper Networks", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "15K+", description: "Junos associate certification", link: "https://www.juniper.net/us/en/training/certification/", tags: ["Juniper", "Networking", "Junos"] },
    { title: "Fortinet NSE", provider: "Fortinet", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "12K+", description: "Network Security Expert", link: "https://www.fortinet.com/training/cybersecurity-professionals", tags: ["Fortinet", "Security", "Networking"] },
    
    // Linux & System Administration
    { title: "Red Hat Certified Engineer", provider: "Red Hat", duration: "4-8 months", level: "Professional", rating: 4.8, students: "25K+", description: "Advanced Linux system administration", link: "https://www.redhat.com/en/services/certification/rhce", tags: ["Red Hat", "Linux", "System Administration"] },
    { title: "CompTIA Linux+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "35K+", description: "Linux system administration skills", link: "https://www.comptia.org/certifications/linux", tags: ["CompTIA", "Linux", "System Administration"] },
    { title: "Ubuntu Certified Professional", provider: "Canonical", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "18K+", description: "Ubuntu Linux administration", link: "https://ubuntu.com/certification", tags: ["Ubuntu", "Linux", "Canonical"] },
    { title: "SUSE Certified Administrator", provider: "SUSE", duration: "2-4 months", level: "Intermediate", rating: 4.2, students: "10K+", description: "SUSE Linux Enterprise administration", link: "https://www.suse.com/training/", tags: ["SUSE", "Linux", "Enterprise"] },
    
    // Quality Assurance
    { title: "ISTQB Foundation Level", provider: "ISTQB", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "150K+", description: "Software testing fundamentals", link: "https://www.istqb.org/", tags: ["Testing", "Quality Assurance", "ISTQB"] },
    { title: "Selenium WebDriver", provider: "Selenium", duration: "1-3 months", level: "Intermediate", rating: 4.4, students: "40K+", description: "Automated web testing", link: "https://selenium.dev/", tags: ["Selenium", "Automation", "Testing"] },
    { title: "Certified Tester Advanced Level", provider: "ISTQB", duration: "3-6 months", level: "Advanced", rating: 4.6, students: "50K+", description: "Advanced software testing", link: "https://www.istqb.org/", tags: ["Testing", "Advanced", "ISTQB"] },
    
    // Business Analysis
    { title: "CBAP Certification", provider: "IIBA", duration: "4-8 months", level: "Professional", rating: 4.6, students: "30K+", description: "Certified Business Analysis Professional", link: "https://www.iiba.org/career-resources/a-business-analysts-guide-to-career-development/certifications/cbap/", tags: ["Business Analysis", "IIBA", "Requirements"] },
    { title: "PMI-PBA", provider: "PMI", duration: "3-6 months", level: "Professional", rating: 4.5, students: "20K+", description: "Professional in Business Analysis", link: "https://www.pmi.org/certifications/business-analysis-pba", tags: ["Business Analysis", "PMI", "Requirements"] },
    
    // Digital Marketing
    { title: "Google Ads Certification", provider: "Google", duration: "1-2 months", level: "Beginner", rating: 4.4, students: "200K+", description: "Online advertising with Google Ads", link: "https://skillshop.withgoogle.com/", tags: ["Google Ads", "Marketing", "Advertising"] },
    { title: "Google Analytics Certified", provider: "Google", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "180K+", description: "Web analytics and data insights", link: "https://skillshop.withgoogle.com/", tags: ["Google Analytics", "Marketing", "Analytics"] },
    { title: "Facebook Blueprint Certification", provider: "Meta", duration: "1-3 months", level: "Intermediate", rating: 4.3, students: "100K+", description: "Social media marketing expertise", link: "https://www.facebook.com/business/learn", tags: ["Facebook", "Social Media", "Marketing"] },
    { title: "HubSpot Content Marketing", provider: "HubSpot", duration: "1-2 months", level: "Beginner", rating: 4.4, students: "80K+", description: "Inbound marketing strategies", link: "https://academy.hubspot.com/", tags: ["HubSpot", "Content Marketing", "Inbound"] },
    
    // Blockchain & Cryptocurrency
    { title: "Certified Bitcoin Professional", provider: "CryptoCurrency Certification Consortium", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "15K+", description: "Bitcoin and blockchain fundamentals", link: "https://cryptoconsortium.org/certifications/CBP", tags: ["Bitcoin", "Blockchain", "Cryptocurrency"] },
    { title: "Ethereum Developer Certification", provider: "ConsenSys", duration: "3-6 months", level: "Advanced", rating: 4.5, students: "12K+", description: "Smart contract development", link: "https://consensys.net/academy/", tags: ["Ethereum", "Smart Contracts", "Blockchain"] },
    { title: "Hyperledger Fabric Developer", provider: "Linux Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "8K+", description: "Enterprise blockchain development", link: "https://www.hyperledger.org/", tags: ["Hyperledger", "Blockchain", "Enterprise"] },
    
    // IT Service Management
    { title: "ITIL 4 Foundation", provider: "AXELOS", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "300K+", description: "IT service management best practices", link: "https://www.axelos.com/certifications/itil-service-management", tags: ["ITIL", "Service Management", "ITSM"] },
    { title: "COBIT 2019 Foundation", provider: "ISACA", duration: "2-3 months", level: "Intermediate", rating: 4.4, students: "40K+", description: "IT governance framework", link: "https://www.isaca.org/credentialing/cobit", tags: ["COBIT", "Governance", "Framework"] },
    
    // Salesforce
    { title: "Salesforce Administrator", provider: "Salesforce", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "100K+", description: "Salesforce platform administration", link: "https://trailhead.salesforce.com/credentials/administrator", tags: ["Salesforce", "CRM", "Administration"] },
    { title: "Salesforce Developer", provider: "Salesforce", duration: "3-6 months", level: "Professional", rating: 4.5, students: "60K+", description: "Custom Salesforce development", link: "https://trailhead.salesforce.com/credentials/platformdeveloper", tags: ["Salesforce", "Development", "Apex"] },
    { title: "Salesforce Consultant", provider: "Salesforce", duration: "4-8 months", level: "Professional", rating: 4.7, students: "40K+", description: "Salesforce implementation consulting", link: "https://trailhead.salesforce.com/credentials/consultant", tags: ["Salesforce", "Consulting", "Implementation"] },
    
    // SAP
    { title: "SAP Certified Application Associate", provider: "SAP", duration: "3-6 months", level: "Professional", rating: 4.4, students: "50K+", description: "SAP ERP system expertise", link: "https://training.sap.com/certification", tags: ["SAP", "ERP", "Enterprise"] },
    { title: "SAP HANA Developer", provider: "SAP", duration: "2-4 months", level: "Professional", rating: 4.3, students: "15K+", description: "In-memory database development", link: "https://training.sap.com/certification", tags: ["SAP HANA", "Database", "Development"] },
    
    // Virtualization
    { title: "VMware Certified Professional", provider: "VMware", duration: "3-6 months", level: "Professional", rating: 4.6, students: "80K+", description: "Virtualization and cloud infrastructure", link: "https://www.vmware.com/education-services/certification.html", tags: ["VMware", "Virtualization", "Infrastructure"] },
    { title: "Microsoft Hyper-V", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "25K+", description: "Windows Server virtualization", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Hyper-V", "Virtualization", "Windows Server"] },
    
    // Big Data
    { title: "Cloudera Data Engineer", provider: "Cloudera", duration: "3-6 months", level: "Professional", rating: 4.5, students: "20K+", description: "Big data engineering with Hadoop", link: "https://www.cloudera.com/about/training/certification.html", tags: ["Cloudera", "Big Data", "Hadoop"] },
    { title: "Apache Spark Developer", provider: "Databricks", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "15K+", description: "Distributed data processing", link: "https://academy.databricks.com/", tags: ["Spark", "Big Data", "Analytics"] },
    { title: "Elastic Certified Engineer", provider: "Elastic", duration: "2-3 months", level: "Intermediate", rating: 4.4, students: "12K+", description: "Elasticsearch and data search", link: "https://www.elastic.co/training/certification", tags: ["Elasticsearch", "Search", "Analytics"] },
    
    // IoT
    { title: "AWS IoT Core Developer", provider: "Amazon Web Services", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "10K+", description: "Internet of Things solutions", link: "https://aws.amazon.com/certification/", tags: ["IoT", "AWS", "Connected Devices"] },
    { title: "Microsoft Azure IoT Developer", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "8K+", description: "IoT solutions on Azure platform", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure IoT", "IoT", "Cloud"] },
    
    // Game Development
    { title: "Unity Certified Developer", provider: "Unity Technologies", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "25K+", description: "Game development with Unity", link: "https://unity.com/products/unity-certifications", tags: ["Unity", "Game Development", "C#"] },
    { title: "Unreal Engine Developer", provider: "Epic Games", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "15K+", description: "Game development with Unreal Engine", link: "https://www.unrealengine.com/", tags: ["Unreal Engine", "Game Development", "C++"] },
    
    // Additional Programming Languages
    { title: "C++ Certified Associate", provider: "C++ Institute", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "20K+", description: "C++ programming fundamentals", link: "https://cppinstitute.org/", tags: ["C++", "Programming", "Systems"] },
    { title: "PHP Zend Certified Engineer", provider: "Zend", duration: "2-3 months", level: "Professional", rating: 4.2, students: "15K+", description: "PHP web development expertise", link: "https://www.zend.com/training/php-certification-exam", tags: ["PHP", "Web Development", "Backend"] },
    { title: "Ruby Association Certified", provider: "Ruby Association", duration: "1-3 months", level: "Intermediate", rating: 4.3, students: "12K+", description: "Ruby programming language", link: "https://www.ruby.or.jp/en/certification/examination/", tags: ["Ruby", "Programming", "Web"] },
    { title: "Go Developer Certification", provider: "Google", duration: "1-3 months", level: "Intermediate", rating: 4.4, students: "18K+", description: "Go programming language", link: "https://golang.org/", tags: ["Go", "Programming", "Backend"] },
    { title: "Rust Programming Certification", provider: "Rust Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "10K+", description: "Systems programming with Rust", link: "https://www.rust-lang.org/", tags: ["Rust", "Systems Programming", "Performance"] },
    
    // Additional Specialized Areas
    { title: "Atlassian Certified Jira Administrator", provider: "Atlassian", duration: "1-2 months", level: "Intermediate", rating: 4.4, students: "30K+", description: "Project tracking and management", link: "https://www.atlassian.com/university/certification", tags: ["Jira", "Project Management", "Atlassian"] },
    { title: "Splunk Core Certified User", provider: "Splunk", duration: "1-3 months", level: "Beginner", rating: 4.3, students: "20K+", description: "Machine data analytics platform", link: "https://www.splunk.com/en_us/training.html", tags: ["Splunk", "Analytics", "Monitoring"] },
    { title: "ServiceNow Certified System Administrator", provider: "ServiceNow", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "25K+", description: "IT service management platform", link: "https://www.servicenow.com/services/training-and-certification.html", tags: ["ServiceNow", "ITSM", "Platform"] },
    { title: "Snowflake SnowPro Core", provider: "Snowflake", duration: "2-3 months", level: "Intermediate", rating: 4.6, students: "15K+", description: "Cloud data warehouse platform", link: "https://www.snowflake.com/certifications/", tags: ["Snowflake", "Data Warehouse", "Cloud"] },
    { title: "Databricks Certified Developer", provider: "Databricks", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "12K+", description: "Unified analytics platform", link: "https://academy.databricks.com/", tags: ["Databricks", "Analytics", "Big Data"] }
];

const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Memoize all unique tags to avoid recalculating on every render
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    certificates.forEach(cert => cert.tags.forEach(tag => tagsSet.add(tag)));
    return Array.from(tagsSet).sort();
  }, []);
  
  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };
  
  // Filter logic now includes selected tags
  const filteredCertificates = useMemo(() => {
    return certificates.filter(cert => {
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => cert.tags.includes(tag));
      const matchesSearch = 
        searchQuery === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTags && matchesSearch;
    });
  }, [searchQuery, selectedTags]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800/50 border-b-2 border-orange-500 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Award className="w-10 h-10 text-orange-500" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Certifications</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Your guide to professional growth.</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild className="ml-auto text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                selectedTags.includes(tag)
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                {selectedTags.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={() => setSelectedTags([])} className="w-full mt-4 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700">
                        Clear All Filters
                    </Button>
                )}
            </div>
          </aside>

          {/* --- Certificates Grid --- */}
          <main className="md:col-span-3">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search certificates by title, provider, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full text-base focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            {/* Active Filters Display */}
            {selectedTags.length > 0 && (
                <div className="mb-4 flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Active Filters:</span>
                    {selectedTags.map(tag => (
                        <Badge key={tag} className="bg-orange-500 text-white flex items-center gap-1.5">
                            {tag}
                            <button onClick={() => handleTagClick(tag)}>
                                <XCircle className="w-3.5 h-3.5" />
                            </button>
                        </Badge>
                    ))}
                </div>
            )}

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Showing {filteredCertificates.length} of {certificates.length} certificates.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCertificates.map((cert, index) => {
                const Icon = getCertIcon(cert.tags);
                const paid = index % 3 === 0; // Demo logic
                return (
                  <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/50">
                          <Icon className="w-7 h-7 text-orange-500 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight">{cert.title}</h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{cert.provider}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-2">{cert.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {cert.tags.slice(0, 3).map((tag, i) => <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>)}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{cert.duration}</div>
                        <div className="flex items-center gap-1.5"><Users className="w-4 h-4" />{cert.students}</div>
                        <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-500" />{cert.rating}</div>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                         <Badge className={getPaidColor(paid)}>{paid ? "Paid Course" : "Free Course"}</Badge>
                         <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 py-2 font-semibold">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              View Course <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Certificates;