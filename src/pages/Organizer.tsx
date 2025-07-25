
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Calendar, CheckSquare, FileText, Folder, Clock, Target, User, LogOut, Plus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { TaskManager } from "@/components/organizer/TaskManager";
import { ProjectCalendar } from "@/components/organizer/ProjectCalendar";
import { NotesManager } from "@/components/organizer/NotesManager";
import { TimeTracker } from "@/components/organizer/TimeTracker";
import { GoalSetting } from "@/components/organizer/GoalSetting";
import { FileOrganizer } from "@/components/organizer/FileOrganizer";
import { ProfileModal } from "@/components/organizer/ProfileModal";

const Organizer = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("tasks");
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth?service=organizer');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been logged out.",
      });
      navigate('/auth?service=organizer');
    }
  };

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

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "tasks":
        return <TaskManager />;
      case "calendar":
        return <ProjectCalendar />;
      case "notes":
        return <NotesManager />;
      case "files":
        return <FileOrganizer />;
      case "time":
        return <TimeTracker />;
      case "goals":
        return <GoalSetting />;
      default:
        return <TaskManager />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black mb-1">My OS (Organizer)</h1>
                <p className="text-sm text-gray-600">Organize your development workflow with smart tools</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowProfile(true)}
                className="flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
              
              <Link to="/" className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Back to DHRC</span>
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <p className="text-gray-600">Welcome back, {user.email}!</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: "tasks", label: "Task Manager", icon: CheckSquare },
            { id: "calendar", label: "Calendar", icon: Calendar },
            { id: "notes", label: "Notes", icon: FileText },
            { id: "files", label: "Files", icon: Folder },
            { id: "time", label: "Time Tracker", icon: Clock },
            { id: "goals", label: "Goals", icon: Target },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-green-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Component */}
        <div className="mb-8">
          {renderActiveComponent()}
        </div>

        {/* Productivity Tips */}
        <Card className="border border-gray-200 bg-gray-50">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-black">Productivity Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Daily Workflow</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Start with high-priority tasks</li>
                  <li>• Use time-blocking for focused work</li>
                  <li>• Take regular breaks to maintain focus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Organization</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep a clean workspace and file system</li>
                  <li>• Document your progress regularly</li>
                  <li>• Review and adjust goals weekly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Modal */}
      <ProfileModal 
        isOpen={showProfile} 
        onClose={() => setShowProfile(false)} 
      />
    </div>
  );
};

export default Organizer;
