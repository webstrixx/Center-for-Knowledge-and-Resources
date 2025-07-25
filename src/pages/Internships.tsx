import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, ExternalLink, Calendar, Building2, Globe, AlertTriangle, Sparkles, Rocket, Landmark, FlaskConical, Link2 } from "lucide-react";
import clsx from 'clsx';

// --- New, Updated, and Comprehensive Internship Dataset ---
const internships = [
    // Government & Research
    { company: "NITI Aayog", role: "Niti Aayog Internships", type: "Government", deadline: "Open from 1-10 of every month", description: "Work with policy verticals, 6-12 weeks, analytical skills required.", url: "https://www.niti.gov.in/internship", region: "India" },
    { company: "ISRO - MCF", role: "Master Control Facility Internship", type: "Government/Research", deadline: "Open, no deadline", description: "Engineering/science focus, space technology.", url: "https://www.isro.gov.in/Careers.html", region: "India" },
    { company: "ISRO - SDSC", role: "Satish Dhawan Space Center Internship", type: "Government/Research", deadline: "Open, no deadline", description: "Satellite development, engineering/science students.", url: "https://www.isro.gov.in/Careers.html", region: "India" },
    { company: "INST", role: "Nano Science and Technology Internship", type: "Research", deadline: "Open, no deadline", description: "Engineering/science, nanotechnology focus.", url: "https://www.inst.ac.in/careers/internships", region: "India" },
    { company: "CSIR CFTRI", role: "Summer Internships 2025", type: "Research", deadline: "Open, no deadline", description: "Food technology, biotechnology, life sciences.", url: "https://cftri.res.in/internships", region: "India" },
    { company: "CSIR CLRI", role: "Summer Internship 2025", type: "Research", deadline: "Open, no deadline", description: "Biotechnology, life sciences, mathematics.", url: "https://clri.org/Careers/Internship.aspx", region: "India" },
    { company: "IIIT Nagpur", role: "Summer Internship 2025", type: "Research", deadline: "Open, no deadline", description: "Engineering, science, mathematics.", url: "https://iiitn.ac.in/", region: "India" },
    { company: "Indian Institute of Astrophysics", role: "Summer Internship", type: "Research", deadline: "Open, no deadline", description: "Engineering/sciences, astrophysics research.", url: "https://www.iiap.res.in/", region: "India" },
    { company: "Defence Research and Studies", role: "Research Writing Internship", type: "Government", deadline: "Open, no deadline", description: "International relations, military affairs, management.", url: "https://dras.in/internship-programme/", region: "India" },
    { company: "AIWC", role: "Summer Internship Program 2025", type: "Research", deadline: "Open, no deadline", description: "Wildlife ecology, sustainability, climate change.", url: "https://www.aiwc.in/", region: "India" },
    { company: "WWF India", role: "Summer Internships 2025", type: "Research", deadline: "Open, no deadline", description: "Wildlife conservation, forestry, sustainability.", url: "https://www.wwfindia.org/get_involved/internships/", region: "India" },
    { company: "CSIR-CSMCRI", role: "Bhavnagar - Summer Training 2025", type: "Research", deadline: "Open, no deadline", description: "Engineering, sciences.", url: "https://www.csmcri.res.in/training/summer-training", region: "India" },
    { company: "ISRO - SAC", role: "Space Application Centre - Internship", type: "Government/Research", deadline: "Open, no deadline", description: "Engineering, sciences, space applications.", url: "https://www.sac.gov.in/Vyom/InternshipStudentProject.jsp", region: "India" },
    { company: "ATREE", role: "Internship Opportunity", type: "Research", deadline: "Open, no deadline", description: "Climate change, biodiversity, conservation.", url: "https://www.atree.org/opportunities", region: "India" },
    { company: "TERI", role: "Summer Internships", type: "Research", deadline: "Open, no deadline", description: "Biotechnology, environmental science, sustainability.", url: "https://www.teriin.org/careers", region: "India" },
    { company: "CPRG", role: "Summer Internships", type: "Government", deadline: "Open, no deadline", description: "Public administration, sociology, economics.", url: "https://cprgindia.org/careers/", region: "India" },
    { company: "BARC", role: "Summer Internship", type: "Research", deadline: "Open, no deadline", description: "Physics, chemistry, engineering, 60% and above required.", url: "http://www.barc.gov.in/", region: "India" },
    { company: "ISRO - URSC", role: "UR Rao Satellite Center Internships", type: "Government/Research", deadline: "Next window opens August 1, 2025", description: "Engineering, sciences, satellite technology.", url: "https://www.ursc.gov.in/internship/index.jsp", region: "India" },
    { company: "ISRO - NESAC", role: "North Eastern Space Application Center", type: "Government/Research", deadline: "Next window opens October 1, 2025", description: "Engineering, sciences, space applications.", url: "https://nesac.gov.in/outreach-programme/attachment-training-internship-dissertation-work/", region: "India" },
    { company: "RBI", role: "RBI Internships", type: "Government", deadline: "Open, no deadline", description: "Economics, finance, management, monetary policy.", url: "https://opportunities.rbi.org.in/scripts/internship.aspx", region: "India" },
    { company: "MEA", role: "Ministry of External Affairs Internships", type: "Government", deadline: "Open, no deadline", description: "International relations, diplomacy, research.", url: "https://www.mea.gov.in/internship-in-mea.htm", region: "India" },
    { company: "Parliament of India", role: "Parliamentary Internship Program", type: "Government", deadline: "Open, no deadline", description: "Legislative process, policy analysis, drafting briefs.", url: "https://parliamentofindia.nic.in/", region: "India" },
    { company: "NHRC", role: "National Human Rights Commission Internships", type: "Government", deadline: "Open, no deadline", description: "Law, political science, public administration, human rights cases.", url: "https://nhrc.nic.in/training/internship-programme", region: "India" },
    { company: "DRDO", role: "DRDO Internships", type: "Government", deadline: "Open, no deadline", description: "Defense technology, robotics, AI, engineering/science students.", url: "https://www.drdo.gov.in/careers", region: "India" },
    { company: "Supreme Court of India", role: "Supreme Court Internships", type: "Government", deadline: "Open, no deadline", description: "Law, legal drafting, judicial proceedings, law students 3rd/2nd year.", url: "https://main.sci.gov.in/internship", region: "India" },
    { company: "CPCB", role: "Central Pollution Control Board Internships", type: "Government", deadline: "Open, no deadline", description: "Environmental science, engineering, public policy.", url: "https://cpcb.nic.in/", region: "India" },
    { company: "ECI", role: "Election Commission of India Internships", type: "Government", deadline: "Open, no deadline", description: "Electoral systems, governance, research, policy formulation.", url: "https://www.eci.gov.in/new-backend/off-the-record/internship-programme-at-the-election-commission-of-india-r2/", region: "India" },
    
    // Corporate
    { company: "TCS", role: "TCS Internships", type: "Corporate", deadline: "Open, no deadline", description: "Software development, data analytics, AI, corporate culture.", url: "https://www.tcs.com/careers/india/entry-level", region: "India" },
    { company: "Google India", role: "Google Internships India", type: "Corporate", deadline: "Open, no deadline", description: "Software engineering, marketing, product management, stipend ₹60,000-1,00,000/month.", url: "https://careers.google.com/students/", region: "India" },
    { company: "Infosys", role: "Infosys InStep", type: "Corporate", deadline: "Open, no deadline", description: "Technology, business strategy, innovation, global exposure.", url: "https://www.infosys.com/careers/instep.html", region: "India" },
    { company: "Deloitte India", role: "Deloitte Internships", type: "Corporate", deadline: "Open, no deadline", description: "Consulting, auditing, tax, corporate strategy.", url: "https://www2.deloitte.com/in/en/careers/students.html", region: "India" },
    { company: "Amazon India", role: "Amazon Internships India", type: "Corporate", deadline: "Open, no deadline", description: "Operations, software development, product management, stipend ₹40,000-80,000/month.", url: "https://www.amazon.jobs/en/teams/internships-for-students", region: "India" },
    { company: "Microsoft India", role: "Microsoft Internships India", type: "Corporate", deadline: "Open, no deadline", description: "Software engineering, product design, research.", url: "https://careers.microsoft.com/v2/global/en/students-and-graduates.html", region: "India" },
    { company: "Hindustan Unilever Limited (HUL)", role: "HUL Internships", type: "Corporate", deadline: "Open, no deadline", description: "Marketing, sales, supply chain management, live projects.", url: "https://www.hul.co.in/careers/students/", region: "India" },
    { company: "Reliance Industries", role: "Reliance Internships", type: "Corporate", deadline: "Open, no deadline", description: "Engineering, management, digital transformation.", url: "https://www.ril.com/careers/students-and-graduates", region: "India" },
    { company: "Wipro", role: "Wipro Internships", type: "Corporate", deadline: "Open, no deadline", description: "Technology, management, hands-on training, IT/consulting projects.", url: "https://careers.wipro.com/careers-home/", region: "India" },
    { company: "Goldman Sachs", role: "Goldman Sachs Internships", type: "Corporate", deadline: "Open, no deadline", description: "Finance, investment banking, engineering, analytical skills.", url: "https://www.goldmansachs.com/careers/students/programs/emea/india-programs.html", region: "India" },
    { company: "Flipkart", role: "Flipkart Internships", type: "Corporate", deadline: "Open, no deadline", description: "E-commerce, supply chain, technology, customer-focused projects.", url: "https://www.flipkartcareers.com/#!/", region: "India" },
    { company: "Paytm", role: "Paytm Internships", type: "Corporate", deadline: "Open, no deadline", description: "Marketing, business development, tech roles, fintech industry.", url: "https://paytm.com/careers/", region: "India" },
    { company: "OYO Rooms", role: "OYO Internships", type: "Corporate", deadline: "Open, no deadline", description: "Marketing, operations, technology, hospitality sector.", url: "https://www.oyorooms.com/careers/", region: "India" },
    { company: "Mahindra & Mahindra", role: "Mahindra Internships", type: "Corporate", deadline: "Open, no deadline", description: "Engineering, IT, management, automotive/agriculture/technology projects.", url: "https://www.mahindra.com/careers", region: "India" },
    
    // Academic Research
    { company: "IIT Palakkad", role: "IIT Palakkad Internships", type: "Research", deadline: "March 18, 2025 (Foreign: Feb 25, 2025)", description: "All branches, no CGPA requirement.", url: "https://resap.iitpkd.ac.in/", region: "India" },
    { company: "IIT Dhanbad", role: "IIT Dhanbad Internships", type: "Research", deadline: "March 2025 (tentative)", description: "CGPA 7.5-8.5 required, stipends INR 5000-6000.", url: "https://www.iitism.ac.in/", region: "India" },
    { company: "IIT Kanpur", role: "IIT Kanpur Internships", type: "Research", deadline: "February 15, 2025", description: "Engineering undergraduates, good CGPA, stipend INR 5000-6000.", url: "https://www.iitk.ac.in/", region: "India" },
    { company: "NIT Rourkela", role: "NIT Rourkela Internships", type: "Research", deadline: "March 28, 2025", description: "2nd-year UG/PG, no strict CGPA, stipend INR 5000-6000.", url: "https://nitrkl.ac.in/", region: "India" },
    { company: "IIT Madras", role: "IIT Madras Internships", type: "Research", deadline: "February 28, 2025", description: "Pre-final year, good CGPA, stipend INR 5000-6000, on-campus accommodation.", url: "https://sfp.iitm.ac.in/", region: "India" },
    { company: "IIT Guwahati", role: "IIT Guwahati Internships", type: "Research", deadline: "March 20, 2025", description: "Civil engineering, pre-final year, no CGPA requirement.", url: "https://www.iitg.ac.in/iitg_summer_internship/", region: "India" },
    { company: "IIT Hyderabad", role: "IIT Hyderabad Internships", type: "Research", deadline: "March 5, 2025", description: "Top 20% based on CGPA, stipend INR 5000-6000.", url: "https://iith.ac.in/", region: "India" },
    { company: "VNIT Nagpur", role: "VNIT Nagpur Internships", type: "Research", deadline: "April 2025 (tentative)", description: "B.Tech 2nd/3rd year, M.Tech 1st year, CGPA above 6.75.", url: "https://vnit.ac.in/", region: "India" },
    { company: "IIT Gandhinagar", role: "IIT Gandhinagar Internships", type: "Research", deadline: "March 1, 2025", description: "UG/PG, no CGPA criteria, stipend INR 5000-6000.", url: "https://srip.iitgn.ac.in/", region: "India" },
    { company: "JNCASR", role: "JNCASR Internships", type: "Research", deadline: "February 10, 2025", description: ">65% in 10th/12th, first class in previous semesters.", url: "https://www.jncasr.ac.in/academic/fandain-srfp", region: "India" },
    { company: "IISER Pune", role: "IISER Pune Internships", type: "Research", deadline: "February 21, 2025", description: "Minimum 60% overall, or 80% in stream(s) of interest.", url: "http://www.iiserpune.ac.in/summerschool/ssp", region: "India" },
    { company: "TIFR Mumbai", role: "TIFR Mumbai Internships", type: "Research", deadline: "February 20, 2025", description: "Science and mathematics, no specific requirement.", url: "http://www.tifr.res.in/~vsp/", region: "India" },
    { company: "IISc Bangalore", role: "IISc Bangalore Internships", type: "Research", deadline: "Apply via cold emailing, no deadline", description: "Science and engineering, good CGPA, stipend INR 5000-6000.", url: "https://www.iisc.ac.in/", region: "India" },

    // Platforms & Schemes
    { company: "PM Internship Scheme", role: "Various Ministries", type: "Government", deadline: "Open throughout the year", description: "12-month internships, stipend ₹5,000/month + ₹6,000 grant.", url: "https://dopt.gov.in/", region: "India" },
    { company: "AICTE", role: "National Internship Portal", type: "Government", deadline: "Ongoing, open throughout the year", description: "Bridges academic learning and industry, various sectors.", url: "https://internship.aicte-india.org/", region: "India" },
    { company: "Internshala", role: "Various Roles", type: "Platform", deadline: "Apply as per individual deadlines", description: "7765+ internships listed, paid and summer options, flexible work.", url: "https://internshala.com/internships", region: "Global" },
    { company: "LinkedIn", role: "Various Roles", type: "Platform", deadline: "Apply as per job postings", description: "712+ summer internship jobs, network with recruiters.", url: "https://www.linkedin.com/jobs/internship-jobs/", region: "Global" },
    { company: "Indeed", role: "Various Roles", type: "Platform", deadline: "Apply as per job postings", description: "200+ intern jobs for 2025, stipends like ₹30K-60K/month for data roles.", url: "https://in.indeed.com/q-internship-jobs.html", region: "Global" },
    { company: "Glassdoor", role: "Various Roles", type: "Platform", deadline: "Apply as per company postings", description: "Top companies hiring interns, reviews and salaries available.", url: "https://www.glassdoor.co.in/Job/intern-jobs-SRCH_KO0,6.htm", region: "Global" }
];

const companyCareerPages = [
    { name: "Google", url: "https://careers.google.com/students/" },
    { name: "Microsoft", url: "https://careers.microsoft.com/v2/global/en/students-and-graduates.html" },
    { name: "Amazon", url: "https://amazon.jobs/en/teams/internships-for-students" },
    { name: "Apple", url: "https://www.apple.com/careers/us/students.html" },
    { name: "Netflix", url: "https://jobs.netflix.com/search?q=intern" },
    { name: "Infosys", url: "https://www.infosys.com/careers/instep.html" },
    { name: "TCS", url: "https://www.tcs.com/careers/india/entry-level" },
    { name: "Wipro", url: "https://careers.wipro.com/careers-home/" },
    { name: "Accenture", url: "https://www.accenture.com/in-en/careers/students" },
    { name: "Cognizant", url: "https://careers.cognizant.com/global/en/studentsandgraduates" },
    { name: "Zoho", url: "https://www.zohocorp.com/careers/india/" },
    { name: "Adobe", url: "https://careers.adobe.com/us/en/students" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/linkedin/jobs" },
    { name: "Nvidia", url: "https://www.nvidia.com/en-in/about-nvidia/careers/university-recruiting/" },
    { name: "Palo Alto Networks", url: "https://www.paloaltonetworks.com/company/careers/university" },
    { name: "L&T Tech", url: "https://www.ltts.com/careers/students-graduates" },
    { name: "Wellfound (AngelList)", url: "https://wellfound.com/jobs" },
    { name: "Y Combinator Jobs", url: "https://www.ycombinator.com/jobs" },
];

const Internships = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const categories = useMemo(() => ["All Categories", ...Array.from(new Set(internships.map(i => i.type)))], []);
  const regions = useMemo(() => ["All Regions", ...Array.from(new Set(internships.map(i => i.region)))], []);
  
  const filteredInternships = useMemo(() => {
    return internships.filter(internship => {
      const categoryMatch = selectedCategory === "All Categories" || internship.type === selectedCategory;
      const regionMatch = selectedRegion === "All Regions" || internship.region === selectedRegion;
      return categoryMatch && regionMatch;
    });
  }, [selectedCategory, selectedRegion]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg"><Briefcase className="w-8 h-8 text-orange-500" /></div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Internship Opportunities</h1>
                    <p className="text-gray-500 dark:text-gray-400">Your guide to top internships and career pages.</p>
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Filter by Type</h3>
                <div className="space-y-1.5">
                    {categories.map(category => (
                        <button key={category} onClick={() => setSelectedCategory(category)} className={clsx('w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all duration-200', selectedCategory === category ? 'bg-orange-500 text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700')}>
                            {category}
                        </button>
                    ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-4">Filter by Region</h3>
                <div className="space-y-1.5">
                    {regions.map(region => (
                        <button key={region} onClick={() => setSelectedRegion(region)} className={clsx('w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all duration-200', selectedRegion === region ? 'bg-orange-500 text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700')}>
                            {region}
                        </button>
                    ))}
                </div>
            </div>
          </aside>

          <main className="md:col-span-3">
            <Card className="mb-8 bg-yellow-50 dark:bg-yellow-900/50 border-yellow-200 dark:border-yellow-500/30">
                <CardContent className="p-6 flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200">Important Disclaimer</h3>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">The listings here are for planning purposes. Deadlines and details change. **Always verify on the official company career websites before applying.**</p>
                    </div>
                </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Top Company Career Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                {companyCareerPages.map(company => (
                    <a href={company.url} target="_blank" rel="noopener noreferrer" key={company.name} className="block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-md transition-all">
                        <p className="font-bold text-sm text-gray-800 dark:text-gray-200">{company.name}</p>
                    </a>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Internship Listings</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Showing {filteredInternships.length} of {internships.length} opportunities.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredInternships.map((internship, index) => {
                const Icon = internship.region === 'US' ? Globe : Building2;
                return (
                  <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <Badge className="mb-2">{internship.company}</Badge>
                                <h2 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight">{internship.role}</h2>
                            </div>
                            <Icon className="w-6 h-6 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">{internship.description}</p>
                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="flex items-center text-sm font-semibold text-red-600 dark:text-red-400 mb-3"><Calendar className="w-4 h-4 mr-2" /> Deadline: {internship.deadline}</p>
                            {internship.url &&
                                <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold">
                                    <a href={internship.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> View Opportunity</a>
                                </Button>
                            }
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

export default Internships;