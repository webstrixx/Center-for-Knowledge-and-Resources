
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ExternalLink, Trophy, Presentation, Coffee } from "lucide-react";
import React from "react";

const Events = () => {
  const events = [
    {
      title: "Smart India Hackathon 2025",
      organizer: "Government of India",
      type: "Hackathon",
      category: "Competition",
      date: "2025-02-15",
      endDate: "2025-02-17",
      time: "09:00 AM - 06:00 PM",
      location: "Various Institutes Across India",
      mode: "Offline",
      participants: "50,000+ expected",
      prize: "₹1,00,000 - ₹10,00,000",
      description: "India's biggest hackathon where students solve real-world problems for government ministries and industries",
      requirements: ["Teams of 6 members", "Students from recognized institutions", "Original problem statements"],
      registrationDeadline: "2025-01-20",
      url: "https://sih.gov.in/",
      tags: ["Government", "Innovation", "Problem Solving"]
    },
    {
      title: "Google Developer Student Clubs Solution Challenge",
      organizer: "Google",
      type: "Competition",
      category: "Development",
      date: "2025-03-01",
      endDate: "2025-05-30",
      time: "Online Submission",
      location: "Global (Virtual)",
      mode: "Online",
      participants: "10,000+ teams globally",
      prize: "$3,000 - $1,000 per team member",
      description: "Build solutions for one or more of the UN's 17 Sustainable Development Goals using Google technology",
      requirements: ["Teams of 1-4 members", "Use Google technology", "Address UN SDGs"],
      registrationDeadline: "2025-02-15",
      url: "https://developers.google.com/community/dsc-solution-challenge",
      tags: ["Google", "SDGs", "Social Impact"]
    },
    {
      title: "Microsoft Imagine Cup India Finals",
      organizer: "Microsoft India",
      type: "Competition",
      category: "Innovation",
      date: "2025-04-10",
      endDate: "2025-04-12",
      time: "10:00 AM - 05:00 PM",
      location: "Microsoft Office, Hyderabad",
      mode: "Hybrid",
      participants: "200+ teams",
      prize: "₹5,00,000 + Azure Credits",
      description: "Premier technology competition for student entrepreneurs to showcase innovative solutions",
      requirements: ["Student teams", "Technology-based solutions", "Business viability"],
      registrationDeadline: "2025-03-01",
      url: "https://imaginecup.microsoft.com/",
      tags: ["Microsoft", "Entrepreneurship", "Technology"]
    },
    {
      title: "TechCrunch Startup Battlefield India",
      organizer: "TechCrunch",
      type: "Pitch Competition",
      category: "Startup",
      date: "2025-03-20",
      endDate: "2025-03-21",
      time: "11:00 AM - 06:00 PM",
      location: "Bangalore International Exhibition Centre",
      mode: "Offline",
      participants: "100+ startups",
      prize: "$10,000 + Mentorship",
      description: "Premier startup competition where early-stage startups compete for funding and exposure",
      requirements: ["Early-stage startups", "Innovative products", "Scalable business model"],
      registrationDeadline: "2025-02-20",
      url: "https://techcrunch.com/startup-battlefield/",
      tags: ["Startup", "Funding", "Pitch"]
    },
    {
      title: "IEEE International Conference on AI & ML",
      organizer: "IEEE India",
      type: "Conference",
      category: "Academic",
      date: "2025-05-15",
      endDate: "2025-05-17",
      time: "09:00 AM - 05:00 PM",
      location: "IIT Bombay, Mumbai",
      mode: "Hybrid",
      participants: "1,500+ attendees",
      prize: "Best Paper Awards",
      description: "Premier academic conference on Artificial Intelligence and Machine Learning research",
      requirements: ["Research papers", "Academic affiliation", "Peer review process"],
      registrationDeadline: "2025-04-01",
      url: "https://ieeeconference-aiml.org/",
      tags: ["IEEE", "Research", "AI/ML"]
    },
    {
      title: "Flipkart GRID 5.0",
      organizer: "Flipkart",
      type: "Hackathon",
      category: "Industry",
      date: "2025-06-01",
      endDate: "2025-06-30",
      time: "Online Challenge",
      location: "Virtual + Bangalore Finals",
      mode: "Hybrid",
      participants: "50,000+ participants",
      prize: "₹5,00,000 + Job Offers",
      description: "India's biggest e-commerce hackathon focusing on supply chain and technology challenges",
      requirements: ["Engineering/MBA students", "Problem-solving skills", "Team of 2-4 members"],
      registrationDeadline: "2025-05-15",
      url: "https://grid.flipkart.com/",
      tags: ["Flipkart", "E-commerce", "Supply Chain"]
    },
    {
      title: "AWS DeepRacer Student League",
      organizer: "Amazon Web Services",
      type: "Competition",
      category: "Machine Learning",
      date: "2025-07-10",
      endDate: "2025-09-30",
      time: "Online Racing",
      location: "Virtual Championship",
      mode: "Online",
      participants: "5,000+ students",
      prize: "$5,000 + AWS Credits",
      description: "Autonomous car racing league powered by machine learning for students",
      requirements: ["Students aged 16+", "Basic ML knowledge", "AWS account"],
      registrationDeadline: "2025-06-30",
      url: "https://aws.amazon.com/deepracer/league/",
      tags: ["AWS", "Machine Learning", "Racing"]
    },
    {
      title: "GitHub Campus Expert Summit India",
      organizer: "GitHub",
      type: "Workshop",
      category: "Community",
      date: "2025-08-05",
      endDate: "2025-08-07",
      time: "10:00 AM - 04:00 PM",
      location: "Multiple Cities",
      mode: "Offline",
      participants: "500+ students",
      prize: "Certification + Swag",
      description: "Community building and technical skills workshop for student developers",
      requirements: ["Active GitHub profile", "Community leadership interest", "Technical background"],
      registrationDeadline: "2025-07-15",
      url: "https://education.github.com/campus-experts",
      tags: ["GitHub", "Community", "Open Source"]
    },
    {
      title: "NASSCOM Product Conclave Student Track",
      organizer: "NASSCOM",
      type: "Conference",
      category: "Industry",
      date: "2025-09-20",
      endDate: "2025-09-22",
      time: "09:30 AM - 06:00 PM",
      location: "Hyderabad Convention Centre",
      mode: "Offline",
      participants: "2,000+ delegates",
      prize: "Networking + Internships",
      description: "Premier product management and technology conference with dedicated student track",
      requirements: ["Student ID", "Interest in product management", "Technology background"],
      registrationDeadline: "2025-08-30",
      url: "https://nasscom.in/product-conclave",
      tags: ["NASSCOM", "Product Management", "Industry"]
    },
    {
      title: "Facebook Developer Circles Community Challenge",
      organizer: "Meta",
      type: "Hackathon",
      category: "Social Impact",
      date: "2025-10-15",
      endDate: "2025-12-15",
      time: "2-month Challenge",
      location: "Global (Virtual)",
      mode: "Online",
      participants: "20,000+ developers",
      prize: "$1,000 per team + Mentorship",
      description: "Global challenge to build solutions addressing social issues in local communities",
      requirements: ["Teams of 2-5", "Use Facebook technologies", "Address social issues"],
      registrationDeadline: "2025-09-30",
      url: "https://developers.facebook.com/developercircles/",
      tags: ["Meta", "Social Impact", "Community"]
    }
  ];

  // List of major Indian cities/states for filtering
  const locations = [
    "All", "Hyderabad", "Bangalore", "Mumbai", "Delhi", "Chennai", "Pune", "Kolkata", "Virtual", "Other"
  ];

  // Keep only the updated/new 2024 events (Hyderabad DevFest 2024, Bangalore AI Summit 2024, Mumbai Startup Expo 2024, Delhi Code Carnival 2024, Chennai Women in Tech Summit 2024)
  const updated2024Events = [
    {
      title: "Hyderabad DevFest 2024",
      organizer: "GDG Hyderabad",
      type: "Conference",
      category: "Community",
      date: "2024-11-10",
      endDate: "2024-11-11",
      time: "09:00 AM - 06:00 PM",
      location: "HICC, Hyderabad",
      mode: "Offline",
      participants: "2,500+ attendees",
      prize: "Swag + Networking",
      description: "Largest annual developer festival in Hyderabad with talks, workshops, and networking.",
      requirements: ["Open to all", "Registration required"],
      registrationDeadline: "2024-10-31",
      url: "https://devfest.gdghyderabad.in/",
      tags: ["Hyderabad", "Developers", "Workshops"]
    },
    {
      title: "Bangalore AI Summit 2024",
      organizer: "AI India Foundation",
      type: "Conference",
      category: "Academic",
      date: "2024-12-05",
      endDate: "2024-12-06",
      time: "10:00 AM - 05:00 PM",
      location: "NIMHANS Convention Centre, Bangalore",
      mode: "Offline",
      participants: "1,200+ researchers",
      prize: "Best Paper Awards",
      description: "Premier AI research summit with paper presentations, panels, and workshops.",
      requirements: ["Research paper submission (optional)", "Open to all"],
      registrationDeadline: "2024-11-20",
      url: "https://aiindiaconf.org/",
      tags: ["Bangalore", "AI", "Research"]
    },
    {
      title: "Mumbai Startup Expo 2024",
      organizer: "Mumbai Angels",
      type: "Expo",
      category: "Startup",
      date: "2024-10-15",
      endDate: "2024-10-16",
      time: "10:00 AM - 06:00 PM",
      location: "Bombay Exhibition Centre, Mumbai",
      mode: "Offline",
      participants: "500+ startups",
      prize: "Funding + Mentorship",
      description: "Showcase and pitch your startup to investors, mentors, and the ecosystem.",
      requirements: ["Startup registration", "Pitch deck"],
      registrationDeadline: "2024-10-01",
      url: "https://mumbaistartupexpo.com/",
      tags: ["Mumbai", "Startup", "Expo"]
    },
    {
      title: "Delhi Code Carnival 2024",
      organizer: "Code for India",
      type: "Hackathon",
      category: "Competition",
      date: "2024-09-20",
      endDate: "2024-09-22",
      time: "09:00 AM - 08:00 PM",
      location: "Pragati Maidan, Delhi",
      mode: "Offline",
      participants: "1,000+ coders",
      prize: "₹2,00,000 + Goodies",
      description: "National-level hackathon for students and professionals to solve real-world problems.",
      requirements: ["Team of 2-5", "Open to all"],
      registrationDeadline: "2024-09-10",
      url: "https://delhicarnival.in/",
      tags: ["Delhi", "Hackathon", "Coding"]
    },
    {
      title: "Chennai Women in Tech Summit 2024",
      organizer: "Women Techmakers Chennai",
      type: "Summit",
      category: "Community",
      date: "2024-08-25",
      endDate: "2024-08-25",
      time: "10:00 AM - 05:00 PM",
      location: "Anna University, Chennai",
      mode: "Offline",
      participants: "800+ attendees",
      prize: "Swag + Mentorship",
      description: "Empowering women in tech with talks, panels, and networking.",
      requirements: ["Open to all", "Women encouraged"],
      registrationDeadline: "2024-08-15",
      url: "https://witmchennai.com/",
      tags: ["Chennai", "Women", "Tech"]
    }
  ];
  // Remove all 2024 events from the main events array
  const filteredEventsMain = events.filter(e => !(e.date && e.date.startsWith('2024')));
  // Add T-Hub Hyderabad events for 2024-2025
  const tHubEvents = [
    {
      title: "T-Hub Innovation Summit 2024",
      organizer: "T-Hub Hyderabad",
      type: "Summit",
      category: "Startup",
      date: "2024-12-12",
      endDate: "2024-12-13",
      time: "09:00 AM - 06:00 PM",
      location: "T-Hub, Hyderabad",
      mode: "Offline",
      participants: "1,500+ innovators",
      prize: "Startup Grants + Mentorship",
      description: "Annual summit for startups, investors, and innovators to connect, learn, and grow.",
      requirements: ["Startup registration", "Open to all innovators"],
      registrationDeadline: "2024-12-01",
      url: "https://thub.co/innovation-summit",
      tags: ["T-Hub", "Hyderabad", "Startup"]
    },
    {
      title: "T-Hub HackX 2025",
      organizer: "T-Hub Hyderabad",
      type: "Hackathon",
      category: "Competition",
      date: "2025-02-20",
      endDate: "2025-02-22",
      time: "10:00 AM - 08:00 PM",
      location: "T-Hub, Hyderabad",
      mode: "Offline",
      participants: "500+ hackers",
      prize: "₹3,00,000 + Incubation",
      description: "Flagship hackathon for students and professionals to solve real-world challenges with tech.",
      requirements: ["Team of 2-5", "Open to all"],
      registrationDeadline: "2025-02-10",
      url: "https://thub.co/hackx",
      tags: ["T-Hub", "Hyderabad", "Hackathon"]
    },
    {
      title: "T-Hub Startup Bootcamp 2025",
      organizer: "T-Hub Hyderabad",
      type: "Workshop",
      category: "Startup",
      date: "2025-03-15",
      endDate: "2025-03-17",
      time: "09:30 AM - 05:30 PM",
      location: "T-Hub, Hyderabad",
      mode: "Offline",
      participants: "300+ founders",
      prize: "Mentorship + Networking",
      description: "Intensive bootcamp for early-stage founders to learn, network, and accelerate their startups.",
      requirements: ["Startup idea", "Early-stage founders"],
      registrationDeadline: "2025-03-01",
      url: "https://thub.co/bootcamp",
      tags: ["T-Hub", "Hyderabad", "Bootcamp"]
    }
  ];

  // Location filter state
  const [selectedLocation, setSelectedLocation] = React.useState('All');
  // Combine all events for rendering
  const allEvents = [
    ...updated2024Events,
    ...tHubEvents,
    ...filteredEventsMain
  ];
  const filteredEvents = selectedLocation === 'All'
    ? allEvents
    : allEvents.filter(e => (e.location || '').toLowerCase().includes(selectedLocation.toLowerCase()));

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Hackathon":
      case "Competition":
        return Trophy;
      case "Conference":
        return Presentation;
      case "Workshop":
        return Coffee;
      default:
        return Calendar;
    }
  };

  const getEventBadgeColor = (category: string) => {
    switch (category) {
      case "Competition":
        return "bg-red-100 text-red-800";
      case "Academic":
        return "bg-blue-100 text-blue-800";
      case "Industry":
        return "bg-green-100 text-green-800";
      case "Community":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="w-full py-12 mb-6 bg-gradient-to-br from-orange-100 via-white to-gray-100 rounded-3xl shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Upcoming Tech Events in India</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">Explore the latest hackathons, conferences, and summits happening in Hyderabad and across India. Filter by city and never miss an opportunity to learn, compete, and connect!</p>
            <a href="#submit-event" className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-full shadow hover:bg-gray-900 transition">
              Submit Your Event
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135758.png" alt="Events Illustration" className="w-80 h-80 object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Location Filter Bar */}
      <div className="w-full overflow-x-auto pb-2">
        <div className="flex gap-3 min-w-max px-2">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap text-sm font-semibold shadow-sm ${selectedLocation === loc ? 'bg-orange-500 text-white border-orange-500' : 'bg-white/80 text-gray-700 border-gray-200 hover:bg-orange-100'}`}
            >
              <MapPin className="w-4 h-4" />
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* T-Hub Events Highlighted Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-orange-600 text-center mb-2">T-Hub Hyderabad Special Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.filter(e => e.tags && e.tags.includes('T-Hub')).map((event, index) => {
            const EventIcon = getEventIcon(event.type);
            return (
              <Card key={index} className="bg-orange-50/80 border-2 border-orange-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <EventIcon className="w-6 h-6 text-orange-500" />
                      <Badge className={getEventBadgeColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {event.mode}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-orange-700">{event.organizer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-600">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{event.date}{event.endDate && ` - ${event.endDate}`}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{event.location}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" />{event.participants}</span>
                    {event.prize && <span className="flex items-center gap-1"><Trophy className="w-4 h-4" />{event.prize}</span>}
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                      {event.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-red-600 font-medium">
                      Register by: {event.registrationDeadline}
                    </span>
                    <Button size="sm" asChild>
                      <a href={event.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Register
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Event Cards (excluding T-Hub) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredEvents.filter(e => !(e.tags && e.tags.includes('T-Hub'))).map((event, index) => {
          const EventIcon = getEventIcon(event.type);
          return (
            <Card key={index} className="bg-white/70 backdrop-blur-md border-2 border-orange-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <EventIcon className="w-6 h-6 text-orange-500" />
                    <Badge className={getEventBadgeColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {event.mode}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {event.title}
                </CardTitle>
                <p className="text-sm font-medium text-blue-600">{event.organizer}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{event.date}{event.endDate && ` - ${event.endDate}`}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{event.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{event.location}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />{event.participants}</span>
                  {event.prize && <span className="flex items-center gap-1"><Trophy className="w-4 h-4" />{event.prize}</span>}
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                  <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                    {event.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-red-600 font-medium">
                    Register by: {event.registrationDeadline}
                  </span>
                  <Button size="sm" asChild>
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Register
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Submit Event Anchor */}
      <div id="submit-event" className="pt-24" />
    </div>
  );
};

export default Events;
