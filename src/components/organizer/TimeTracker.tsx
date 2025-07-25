
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Square, Clock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface TimeEntry {
  id: string;
  description: string;
  start_time: string;
  end_time: string | null;
  duration: number | null;
  task_id: string | null;
  project_id: string | null;
}

interface Task {
  id: string;
  title: string;
}

export const TimeTracker = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isTracking, setIsTracking] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<TimeEntry | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [description, setDescription] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState<string>('');

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking && currentEntry) {
      interval = setInterval(() => {
        const start = new Date(currentEntry.start_time).getTime();
        const now = new Date().getTime();
        setElapsedTime(Math.floor((now - start) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, currentEntry]);

  const fetchData = async () => {
    try {
      // Fetch time entries
      const { data: entriesData, error: entriesError } = await supabase
        .from('organizer_time_entries')
        .select('*')
        .eq('user_id', user?.id)
        .order('start_time', { ascending: false });

      if (entriesError) throw entriesError;

      // Fetch tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from('organizer_tasks')
        .select('id, title')
        .eq('user_id', user?.id);

      if (tasksError) throw tasksError;

      setTimeEntries(entriesData || []);
      setTasks(tasksData || []);

      // Check if there's an active tracking session
      const activeEntry = entriesData?.find(entry => !entry.end_time);
      if (activeEntry) {
        setCurrentEntry(activeEntry);
        setIsTracking(true);
        setDescription(activeEntry.description || '');
        setSelectedTaskId(activeEntry.task_id || '');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch time tracking data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const startTracking = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('organizer_time_entries')
        .insert([{
          user_id: user.id,
          description: description,
          task_id: selectedTaskId || null,
          start_time: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) throw error;

      setCurrentEntry(data);
      setIsTracking(true);
      setElapsedTime(0);
      toast({ title: "Success", description: "Time tracking started" });
    } catch (error) {
      console.error('Error starting time tracking:', error);
      toast({
        title: "Error",
        description: "Failed to start time tracking",
        variant: "destructive",
      });
    }
  };

  const stopTracking = async () => {
    if (!currentEntry) return;

    try {
      const endTime = new Date().toISOString();
      const duration = Math.floor((new Date(endTime).getTime() - new Date(currentEntry.start_time).getTime()) / 1000 / 60);

      const { error } = await supabase
        .from('organizer_time_entries')
        .update({
          end_time: endTime,
          duration: duration,
          description: description
        })
        .eq('id', currentEntry.id);

      if (error) throw error;

      setIsTracking(false);
      setCurrentEntry(null);
      setElapsedTime(0);
      setDescription('');
      setSelectedTaskId('');
      fetchData();
      toast({ title: "Success", description: "Time tracking stopped" });
    } catch (error) {
      console.error('Error stopping time tracking:', error);
      toast({
        title: "Error",
        description: "Failed to stop time tracking",
        variant: "destructive",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDuration = (minutes: number | null) => {
    if (!minutes) return '0m';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  if (loading) {
    return <div className="text-center py-8">Loading time tracker...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Time Tracker</h2>
        <p className="text-gray-600">Track time spent on different projects and tasks</p>
      </div>

      {/* Active Timer */}
      <Card className={`border-2 ${isTracking ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            {isTracking ? 'Currently Tracking' : 'Start Time Tracking'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What are you working on?"
                disabled={isTracking}
              />
            </div>
            
            <div>
              <Label htmlFor="task">Task (Optional)</Label>
              <Select value={selectedTaskId} onValueChange={setSelectedTaskId} disabled={isTracking}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a task" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">No task selected</SelectItem>
                  {tasks.map((task) => (
                    <SelectItem key={task.id} value={task.id}>
                      {task.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-mono font-bold">
              {formatTime(elapsedTime)}
            </div>
            
            <div className="flex space-x-2">
              {!isTracking ? (
                <Button onClick={startTracking} disabled={!description.trim()}>
                  <Play className="w-4 h-4 mr-2" />
                  Start
                </Button>
              ) : (
                <Button onClick={stopTracking} variant="destructive">
                  <Square className="w-4 h-4 mr-2" />
                  Stop
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Entries History */}
      <Card>
        <CardHeader>
          <CardTitle>Time Entries</CardTitle>
        </CardHeader>
        <CardContent>
          {timeEntries.filter(entry => entry.end_time).length === 0 ? (
            <p className="text-gray-500 text-center py-8">No completed time entries yet</p>
          ) : (
            <div className="space-y-3">
              {timeEntries
                .filter(entry => entry.end_time)
                .map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{entry.description}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(entry.start_time).toLocaleDateString()} - {' '}
                        {new Date(entry.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} to {' '}
                        {entry.end_time && new Date(entry.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <Badge variant="outline">
                        {formatDuration(entry.duration)}
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
