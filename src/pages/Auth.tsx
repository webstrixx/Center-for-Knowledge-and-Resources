
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Bot, Zap, ArrowLeft } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  const service = searchParams.get('service');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      if (service === 'ai-interviews') {
        navigate('/ai-interviews');
      } else if (service === 'organizer') {
        navigate('/organizer');
      } else {
        navigate('/');
      }
    }
  }, [user, service, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(formData.email, formData.password, formData.fullName);
        if (error) {
          toast({
            title: "Sign up failed",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Success!",
            description: "Please check your email for verification link.",
          });
        }
      } else {
        const { error } = await signIn(formData.email, formData.password);
        if (error) {
          toast({
            title: "Sign in failed",
            description: error.message,
            variant: "destructive",
          });
        } else {
          // Navigation will be handled by the useEffect above
          toast({
            title: "Welcome back!",
            description: "You have been signed in successfully.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getServiceInfo = () => {
    if (service === 'ai-interviews') {
      return {
        title: 'AI Interviews',
        description: 'Practice coding interviews with AI-powered mock sessions',
        icon: Bot,
        color: 'from-blue-50 to-indigo-100'
      };
    } else if (service === 'organizer') {
      return {
        title: 'My OS (Organizer)',
        description: 'Organize your development workflow with smart tools',
        icon: Zap,
        color: 'from-green-50 to-emerald-100'
      };
    }
    return {
      title: 'DHRC',
      description: 'Dev Haven Resources Center',
      icon: Lock,
      color: 'from-gray-50 to-gray-100'
    };
  };

  const serviceInfo = getServiceInfo();
  const ServiceIcon = serviceInfo.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <ServiceIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black mb-1">{serviceInfo.title}</h1>
                <p className="text-sm text-gray-600">{serviceInfo.description}</p>
              </div>
            </div>
            <Link to="/" className="flex items-center ml-auto">
              <span className="text-sm text-gray-600 mr-2">Back to DHRC</span>
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* Auth Form */}
      <div className="max-w-md mx-auto px-4 py-12">
        <Card className={`border border-gray-200 bg-gradient-to-br ${serviceInfo.color} shadow-lg`}>
          <CardHeader className="text-center">
            <ServiceIcon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
            <CardTitle className="text-2xl font-serif text-black">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </CardTitle>
            <p className="text-gray-600 text-sm">
              {isSignUp 
                ? `Sign up to access ${serviceInfo.title}` 
                : `Sign in to continue to ${serviceInfo.title}`
              }
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-white"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
              </Button>
            </form>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 hover:underline text-sm"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
