import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Added import
import { ArrowLeft, Calendar, Ticket, PlusCircle } from "lucide-react";
import Events from "@/components/Events";

const EventsPage = () => {
  const featuredEvent = {
    title: "Innovate AI 2025 Hackathon",
    date: "August 15-17, 2025",
    description: "Join the brightest minds to build the next generation of AI applications. Compete for prizes, attend workshops, and network with industry leaders.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    url: "https://example.com/register", // Replaced placeholder
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
              <Calendar className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Tech Events</h1>
              <p className="text-gray-500 dark:text-gray-400">Competitions, conferences, and workshops.</p>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Event Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Featured Event</h2>
          <Card className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-2xl md:grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-2">Hackathon</Badge>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{featuredEvent.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{featuredEvent.date}</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{featuredEvent.description}</p>
              <div className="mt-6 flex gap-2">
                <Button asChild className="rounded-full" aria-label="Register for the featured event">
                  <a href={featuredEvent.url} target="_blank" rel="noopener noreferrer">
                    <Ticket className="w-4 h-4 mr-2" /> Register Now
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full" aria-label="Learn more about the featured event">
                  <a href={featuredEvent.url} target="_blank" rel="noopener noreferrer">Learn More</a>
                </Button>
              </div>
            </div>
            <img
              src={featuredEvent.imageUrl}
              alt={`Poster for ${featuredEvent.title}`}
              onError={(e) => (e.currentTarget.src = "/path/to/fallback-image.jpg")}
              className="w-full h-64 md:h-full object-cover"
            />
          </Card>
        </section>

        {/* Upcoming Events List */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Upcoming Events</h2>
          <Events />
        </section>

        {/* "Host an Event" Call-to-Action Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg">
            <CardContent className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="flex items-center gap-5">
                <PlusCircle size={48} className="flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">Want to Host an Event?</h3>
                  <p className="text-sm opacity-90 mt-1">
                    Have a workshop, hackathon, or conference to share? List your event on our platform and reach thousands of students and developers.
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-full w-full sm:w-auto flex-shrink-0 px-8 py-3 text-base"
              >
                <Link to="/submit-event">Submit an Event</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default EventsPage;