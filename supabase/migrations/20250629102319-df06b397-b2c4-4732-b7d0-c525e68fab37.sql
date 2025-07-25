
-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create AI interview sessions table
CREATE TABLE public.ai_interview_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  topic TEXT,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  status TEXT CHECK (status IN ('active', 'completed', 'paused')) DEFAULT 'active',
  score INTEGER,
  feedback TEXT,
  questions_asked INTEGER DEFAULT 0,
  correct_answers INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create AI interview questions table
CREATE TABLE public.ai_interview_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.ai_interview_sessions ON DELETE CASCADE NOT NULL,
  question_text TEXT NOT NULL,
  user_answer TEXT,
  correct_answer TEXT,
  is_correct BOOLEAN,
  time_taken INTEGER, -- in seconds
  asked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create organizer tasks table
CREATE TABLE public.organizer_tasks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('todo', 'in_progress', 'completed')) DEFAULT 'todo',
  priority TEXT CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
  due_date DATE,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create organizer projects table
CREATE TABLE public.organizer_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('planning', 'active', 'completed', 'on_hold')) DEFAULT 'planning',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create organizer notes table
CREATE TABLE public.organizer_notes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create organizer time tracking table
CREATE TABLE public.organizer_time_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  task_id UUID REFERENCES public.organizer_tasks ON DELETE CASCADE,
  project_id UUID REFERENCES public.organizer_projects ON DELETE CASCADE,
  description TEXT,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE,
  duration INTEGER, -- in minutes
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_interview_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_interview_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizer_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizer_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizer_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizer_time_entries ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS policies for AI interview sessions
CREATE POLICY "Users can view their own interview sessions" ON public.ai_interview_sessions
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own interview sessions" ON public.ai_interview_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own interview sessions" ON public.ai_interview_sessions
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for AI interview questions
CREATE POLICY "Users can view questions from their sessions" ON public.ai_interview_questions
  FOR SELECT USING (auth.uid() = (SELECT user_id FROM public.ai_interview_sessions WHERE id = session_id));
CREATE POLICY "Users can create questions for their sessions" ON public.ai_interview_questions
  FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.ai_interview_sessions WHERE id = session_id));
CREATE POLICY "Users can update questions from their sessions" ON public.ai_interview_questions
  FOR UPDATE USING (auth.uid() = (SELECT user_id FROM public.ai_interview_sessions WHERE id = session_id));

-- Create RLS policies for organizer tasks
CREATE POLICY "Users can view their own tasks" ON public.organizer_tasks
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own tasks" ON public.organizer_tasks
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own tasks" ON public.organizer_tasks
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own tasks" ON public.organizer_tasks
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for organizer projects
CREATE POLICY "Users can view their own projects" ON public.organizer_projects
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own projects" ON public.organizer_projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own projects" ON public.organizer_projects
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own projects" ON public.organizer_projects
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for organizer notes
CREATE POLICY "Users can view their own notes" ON public.organizer_notes
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own notes" ON public.organizer_notes
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own notes" ON public.organizer_notes
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own notes" ON public.organizer_notes
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for organizer time entries
CREATE POLICY "Users can view their own time entries" ON public.organizer_time_entries
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own time entries" ON public.organizer_time_entries
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own time entries" ON public.organizer_time_entries
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own time entries" ON public.organizer_time_entries
  FOR DELETE USING (auth.uid() = user_id);

-- Create trigger function to handle new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', '')
  );
  RETURN NEW;
END;
$$;

-- Create trigger to automatically create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
