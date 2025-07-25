
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, ArrowLeft, Play, BookOpen, Trophy, Code } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const AIInterviews = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth?service=ai-interviews');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black mb-1">AI Interviews</h1>
                <p className="text-sm text-gray-600">Practice coding interviews with AI-powered mock sessions</p>
              </div>
            </div>
            <Link to="/" className="flex items-center ml-auto">
              <span className="text-sm text-gray-600 mr-2">Back to DHRC</span>
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">Welcome back, {user.email}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Start Interview */}
          <Card className="border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardHeader>
              <Play className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="text-xl">Start New Interview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Begin a new AI-powered coding interview session with personalized questions.
              </p>
              <Button className="w-full">
                Start Interview
              </Button>
            </CardContent>
          </Card>

          {/* Practice Topics */}
          <Card className="border border-gray-200">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle className="text-xl">Practice Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Choose specific topics to focus your interview practice on.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">Arrays & Strings</Button>
                <Button variant="outline" className="w-full justify-start">Trees & Graphs</Button>
                <Button variant="outline" className="w-full justify-start">Dynamic Programming</Button>
              </div>
            </CardContent>
          </Card>

          {/* Previous Sessions */}
          <Card className="border border-gray-200">
            <CardHeader>
              <Trophy className="w-8 h-8 text-yellow-600 mb-2" />
              <CardTitle className="text-xl">Previous Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Review your past interview sessions and track your progress.
              </p>
              <Button variant="outline" className="w-full">
                View History
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Interview Tips */}
        <Card className="mt-8 border border-gray-200 bg-gray-50">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-black">Interview Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Before the Interview</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Review fundamental data structures</li>
                  <li>• Practice coding without IDE assistance</li>
                  <li>• Prepare questions about the company</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">During the Interview</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Think out loud while coding</li>
                  <li>• Ask clarifying questions</li>
                  <li>• Consider edge cases and optimizations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIInterviews;
