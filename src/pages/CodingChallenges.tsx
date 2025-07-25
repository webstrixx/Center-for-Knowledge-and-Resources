import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, ExternalLink, Code2, Award, Rocket, Brain, Globe, University, HardHat, Facebook, Puzzle, BarChart, Link2 } from "lucide-react";
import clsx from 'clsx';

// --- New, Expanded Platform Data with Icons ---
const platforms = [
    { name: "LeetCode", icon: Code2, url: "https://leetcode.com/contest/" },
    { name: "HackerRank", icon: Award, url: "https://www.hackerrank.com/contests" },
    { name: "CodeChef", icon: Trophy, url: "https://www.codechef.com/contests" },
    { name: "Codeforces", icon: Rocket, url: "https://codeforces.com/contests" },
    { name: "AtCoder", icon: Puzzle, url: "https://atcoder.jp/contests/" },
    { name: "TopCoder", icon: HardHat, url: "https://www.topcoder.com/challenges" },
    { name: "Google", icon: Brain, url: "https://codingcompetitions.withgoogle.com/" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/codingcompetitions/hacker-cup" },
    { name: "TCS CodeVita", icon: Code2, url: "https://www.tcscodevita.com/" },
    { name: "Kaggle", icon: BarChart, url: "https://www.kaggle.com/competitions" },
    { name: "ICPC", icon: Globe, url: "https://icpc.global/" }
];

// --- New, Updated Contest Data Structure ---
const upcomingContests = [
    { platform: "LeetCode", name: "Weekly Contest 460", date: "28 July 2025, 2:30 AM IST", url: "https://leetcode.com/contest/" },
    { platform: "LeetCode", name: "Biweekly Contest 162", date: "27 July 2025, 2:30 PM IST", url: "https://leetcode.com/contest/" },
    { platform: "HackerRank", name: "Salesforce – Agent of Change Challenge", date: "26 July 2025", url: "https://www.hackerrank.com/contests" },
    { platform: "HackerRank", name: "UKG India Pioneers Challenge", date: "27 July 2025", url: "https://www.hackerrank.com/contests" },
    { platform: "CodeChef", name: "Upcoming Starters, Long Challenge, Cook-Off, Lunchtime", date: "", url: "https://www.codechef.com/contests" },
    { platform: "Codeforces", name: "Upcoming Rounds (TBD)", date: "", url: "https://codeforces.com/contests" },
    { platform: "AtCoder", name: "Beginner Contest (ABC)", date: "Next: 27 July 2025", url: "https://atcoder.jp/contests/" },
    { platform: "TopCoder", name: "SRMs – Weekly Algorithm Challenges", date: "Weekly", url: "https://www.topcoder.com/challenges" },
    { platform: "Google", name: "Google Kick Start", date: "No contest currently open", url: "https://codingcompetitions.withgoogle.com/kickstart" },
    { platform: "Facebook", name: "Hacker Cup Portal", date: "Upcoming details TBA", url: "https://www.facebook.com/codingcompetitions/hacker-cup" },
    { platform: "TCS CodeVita", name: "Season 13", date: "Likely to open late 2025", url: "https://www.tcscodevita.com/" },
    { platform: "Kaggle", name: "Current Competitions", date: "Ongoing", url: "https://www.kaggle.com/competitions" },
    { platform: "ICPC", name: "Regionals & World Finals", date: "2025–26 schedule in progress", url: "https://icpc.global/ICPC-Regionals" }
];

const CodingChallenges = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>("All");

  const allPlatformNames = useMemo(() => ["All", ...platforms.map(p => p.name)], []);

  const filteredContests = useMemo(() => {
    if (!selectedPlatform || selectedPlatform === "All") return upcomingContests;
    return upcomingContests.filter(contest => contest.platform === selectedPlatform);
  }, [selectedPlatform]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                    <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Coding Challenges</h1>
                    <p className="text-gray-500 dark:text-gray-400">Your central hub for global contests.</p>
                </div>
            </div>
            <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
        </div>
      </header>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* --- Quick Links Sidebar --- */}
          <aside className="md:col-span-1 h-fit md:sticky top-28">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Platforms</h3>
                <div className="space-y-1.5">
                    {allPlatformNames.map(platformName => (
                        <button
                            key={platformName}
                            onClick={() => setSelectedPlatform(platformName)}
                            className={clsx(
                                'w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-3',
                                selectedPlatform === platformName
                                ? 'bg-orange-500 text-white shadow-sm'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            )}
                        >
                            {React.createElement(platforms.find(p => p.name === platformName)?.icon || Globe, {className: "w-4 h-4"})}
                            {platformName}
                        </button>
                    ))}
                </div>
            </div>
          </aside>

          {/* --- Main Content Area --- */}
          <main className="md:col-span-3">
            {/* --- Connect Profiles CTA --- */}
            <Card className="mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link2 size={40} />
                        <div>
                            <h3 className="font-bold text-lg">Connect Your Coding Profiles</h3>
                            <p className="text-sm opacity-90">Track your progress and showcase your skills by connecting your competitive programming profiles.</p>
                        </div>
                    </div>
                    <Button asChild className="bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-full w-full sm:w-auto flex-shrink-0">
                        <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2"/> Connect Now
                        </a>
                    </Button>
                </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Upcoming Contests</h2>
            <div className="space-y-6">
              {filteredContests.map((contest, index) => {
                  const platformInfo = platforms.find(p => p.name === contest.platform);
                  const Icon = platformInfo ? platformInfo.icon : Rocket;
                  return (
                    <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <a href={contest.url} target="_blank" rel="noopener noreferrer" className="block p-5">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <Icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-gray-200">{contest.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {contest.platform} {contest.date && `• ${contest.date}`}
                                        </p>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                            </div>
                        </a>
                    </Card>
                  );
              })}
              {filteredContests.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400 py-8">No upcoming contests found for this platform. Check their official site for updates.</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CodingChallenges;