import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Rocket, 
  Users, 
  Code, 
  Palette, 
  Globe, 
  CheckCircle, 
  ExternalLink,
  Lightbulb,
  Target,
  Zap,
  Monitor,
  Smartphone,
  Settings
} from "lucide-react";

const AnyoneCanDevelop = () => {
  const skillLevels = [
    {
      level: "Beginners",
      icon: Users,
      description: "Simple single-page sites like a personal bio, hobby page, or a contact form with basic styling and functionality.",
      examples: ["Personal portfolio", "Hobby showcase", "Contact forms", "Landing pages"],
      color: "bg-green-100 text-green-800"
    },
    {
      level: "Intermediate Users", 
      icon: Code,
      description: "Multi-page websites like portfolios, blogs, or small business sites with interactive forms, navigation, and dynamic content.",
      examples: ["Business websites", "Blog platforms", "E-commerce sites", "Portfolio sites"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      level: "Advanced Developers",
      icon: Rocket,
      description: "Full-stack web applications with dynamic features like APIs, databases, authentication, and AI-driven components.",
      examples: ["Web applications", "SaaS platforms", "Social networks", "AI-powered tools"],
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const developmentSteps = [
    {
      step: 1,
      title: "Planning the Webpage",
      icon: Target,
      objective: "Define the webpage's purpose, target audience, content structure, and technical requirements.",
      importance: "A clear plan ensures the webpage aligns with its goals, user needs, and provides a roadmap for development.",
      tools: [
        { name: "Grok", url: "https://grok.x.ai/", description: "Brainstorm creative ideas and generate detailed outlines for single-page or multi-page sites" },
        { name: "ChatGPT", url: "https://chat.openai.com/", description: "Generate comprehensive content plans, JSON sitemaps, and SEO-friendly content strategies" },
        { name: "Claude", url: "https://claude.ai/", description: "Create detailed project specifications and user experience flows" },
        { name: "Dribbble", url: "https://dribbble.com/", description: "Browse thousands of design inspirations and UI/UX patterns" },
        { name: "Behance", url: "https://www.behance.net/", description: "Explore creative portfolios and design case studies" },
        { name: "Ready AI", url: "https://www.readyai.org/", description: "Beginner-friendly planning tools for educational and personal projects" }
      ],
      actionSteps: [
        "Define your webpage's primary purpose and goals",
        "Identify your target audience and their needs",
        "Create a content outline with main sections",
        "Plan the user journey and interaction flow",
        "Choose appropriate tools based on your skill level"
      ],
      output: "A comprehensive outline with sections, features, target audience, and technical requirements"
    },
    {
      step: 2,
      title: "Designing the User Interface (UI)",
      icon: Palette,
      objective: "Create an attractive, user-friendly, and accessible design that enhances user engagement and experience.",
      importance: "Good design increases user engagement, improves accessibility, and reflects professionalism.",
      tools: [
        { name: "Lovable", url: "https://lovable.dev/", description: "Create React-based UI with Tailwind CSS using natural language prompts" },
        { name: "Vercel v0", url: "https://v0.dev/", description: "Generate modern, responsive React components with Tailwind CSS" },
        { name: "Uizard", url: "https://uizard.io/", description: "AI-powered UI design tool that converts sketches to designs" },
        { name: "Canva", url: "https://www.canva.com/", description: "Create quick mockups, graphics, and visual elements" },
        { name: "Figma", url: "https://www.figma.com/", description: "Professional design tool with AI plugins like Magician for advanced wireframes" },
        { name: "Adobe XD", url: "https://www.adobe.com/products/xd.html", description: "Create detailed prototypes and design systems" }
      ],
      actionSteps: [
        "Choose a design style and color palette",
        "Create wireframes for your layout",
        "Design responsive layouts for different screen sizes",
        "Select appropriate typography and visual hierarchy",
        "Generate or create visual assets and graphics"
      ],
      output: "Complete UI mockups or AI-generated code for responsive layouts"
    },
    {
      step: 3,
      title: "Developing the Frontend",
      icon: Code,
      objective: "Build the webpage's structure, styling, and client-side functionality using modern web technologies.",
      importance: "The frontend defines the user's visual and interactive experience across all devices.",
      tools: [
        { name: "Replit", url: "https://replit.com/", description: "Browser-based IDE with AI Agent for real-time coding and testing" },
        { name: "CodePen", url: "https://codepen.io/", description: "Test and experiment with HTML, CSS, and JavaScript snippets" },
        { name: "VS Code", url: "https://code.visualstudio.com/", description: "Professional code editor with extensive extensions" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI-powered coding assistant for faster development" },
        { name: "Cursor", url: "https://cursor.sh/", description: "AI-first code editor for enhanced productivity" },
        { name: "Tabnine", url: "https://www.tabnine.com/", description: "AI code completion tool supporting multiple languages" }
      ],
      actionSteps: [
        "Set up your development environment",
        "Create semantic HTML structure",
        "Implement responsive CSS styling",
        "Add JavaScript for interactivity",
        "Optimize for performance and accessibility"
      ],
      output: "A fully functional frontend with responsive design and interactive elements"
    },
    {
      step: 4,
      title: "Adding Interactivity and Features",
      icon: Zap,
      objective: "Implement dynamic features like forms, animations, API integrations, and user interactions.",
      importance: "Interactivity enhances user engagement and provides practical functionality.",
      tools: [
        { name: "Bolt.new", url: "https://bolt.new/", description: "Generate complete full-stack applications with AI in minutes" },
        { name: "Formspree", url: "https://formspree.io/", description: "Simple backend service for form submissions without server setup" },
        { name: "Supabase", url: "https://supabase.com/", description: "Open-source Firebase alternative with database, auth, and APIs" },
        { name: "Firebase", url: "https://firebase.google.com/", description: "Google's platform for building web and mobile applications" },
        { name: "Netlify Forms", url: "https://www.netlify.com/products/forms/", description: "Handle form submissions with built-in spam protection" },
        { name: "Lottie", url: "https://lottiefiles.com/", description: "Add high-quality animations to your website" }
      ],
      actionSteps: [
        "Implement contact forms with validation",
        "Add smooth animations and transitions",
        "Integrate with external APIs if needed",
        "Set up user authentication if required",
        "Add interactive elements like sliders, modals, and dropdowns"
      ],
      output: "Interactive webpage with functional forms, animations, and dynamic content"
    },
    {
      step: 5,
      title: "Content Creation and Optimization",
      icon: Lightbulb,
      objective: "Create engaging, SEO-friendly content including text, images, and multimedia elements.",
      importance: "High-quality content attracts visitors, improves SEO rankings, and keeps users engaged.",
      tools: [
        { name: "MidJourney", url: "https://www.midjourney.com/", description: "Generate stunning, high-quality images with AI prompts" },
        { name: "DALL-E", url: "https://openai.com/dall-e-2/", description: "Create unique images and graphics from text descriptions" },
        { name: "Stable Diffusion", url: "https://stability.ai/", description: "Open-source AI model for image generation" },
        { name: "Grammarly", url: "https://www.grammarly.com/", description: "Polish text for clarity, grammar, and professionalism" },
        { name: "Jasper", url: "https://www.jasper.ai/", description: "AI writing assistant for marketing and creative content" },
        { name: "Unsplash", url: "https://unsplash.com/", description: "Free high-quality stock photos and images" }
      ],
      actionSteps: [
        "Write compelling headlines and descriptions",
        "Generate or source high-quality images",
        "Optimize content for search engines",
        "Ensure content is accessible and readable",
        "Add meta descriptions and alt tags"
      ],
      output: "Optimized content with professional text, images, and SEO elements"
    },
    {
      step: 6,
      title: "Testing and Quality Assurance",
      icon: Settings,
      objective: "Ensure the webpage functions correctly across different devices, browsers, and user scenarios.",
      importance: "Thorough testing prevents bugs and ensures a seamless user experience for all visitors.",
      tools: [
        { name: "Testim", url: "https://www.testim.io/", description: "AI-powered automated testing for web applications" },
        { name: "BrowserStack", url: "https://www.browserstack.com/", description: "Test across 3000+ real devices and browsers" },
        { name: "Lighthouse", url: "https://developers.google.com/web/tools/lighthouse", description: "Google's tool for performance and accessibility auditing" },
        { name: "GTmetrix", url: "https://gtmetrix.com/", description: "Analyze page speed and performance metrics" },
        { name: "WAVE", url: "https://wave.webaim.org/", description: "Web accessibility evaluation tool" },
        { name: "Responsively", url: "https://responsively.app/", description: "Test responsive design across multiple devices simultaneously" }
      ],
      actionSteps: [
        "Test functionality across different browsers",
        "Verify responsive design on various screen sizes",
        "Check loading speed and performance",
        "Validate accessibility compliance",
        "Test forms and interactive elements"
      ],
      output: "A thoroughly tested, cross-browser compatible, and accessible webpage"
    },
    {
      step: 7,
      title: "Deployment and Hosting",
      icon: Globe,
      objective: "Make the webpage accessible to users worldwide through reliable hosting services.",
      importance: "Proper deployment ensures your website is available 24/7 with good performance and security.",
      tools: [
        { name: "Netlify", url: "https://www.netlify.com/", description: "Simple deployment with drag-and-drop, continuous deployment, and CDN" },
        { name: "Vercel", url: "https://vercel.com/", description: "Optimized for frontend frameworks with automatic scaling" },
        { name: "GitHub Pages", url: "https://pages.github.com/", description: "Free hosting for static sites directly from GitHub repositories" },
        { name: "Cloudflare Pages", url: "https://pages.cloudflare.com/", description: "Fast global deployment with built-in security features" },
        { name: "Firebase Hosting", url: "https://firebase.google.com/products/hosting", description: "Fast and secure hosting for web applications" },
        { name: "Surge", url: "https://surge.sh/", description: "Simple static web publishing from the command line" }
      ],
      actionSteps: [
        "Choose appropriate hosting service",
        "Set up domain name and DNS",
        "Configure SSL certificates for security",
        "Set up continuous deployment",
        "Monitor uptime and performance"
      ],
      output: "Live webpage accessible via a custom domain with SSL security"
    },
    {
      step: 8,
      title: "Analytics and Continuous Improvement",
      icon: Monitor,
      objective: "Track user behavior, gather feedback, and continuously improve the webpage based on data insights.",
      importance: "Ongoing optimization ensures your website remains relevant, user-friendly, and effective.",
      tools: [
        { name: "Google Analytics", url: "https://analytics.google.com/", description: "Comprehensive web analytics with AI-driven insights" },
        { name: "Hotjar", url: "https://www.hotjar.com/", description: "Heatmaps, session recordings, and user feedback tools" },
        { name: "Mixpanel", url: "https://mixpanel.com/", description: "Advanced analytics for user engagement and conversion tracking" },
        { name: "Crazy Egg", url: "https://www.crazyegg.com/", description: "Visual analytics and A/B testing tools" },
        { name: "Microsoft Clarity", url: "https://clarity.microsoft.com/", description: "Free user behavior analytics with heatmaps" },
        { name: "Typeform", url: "https://www.typeform.com/", description: "Create engaging surveys and feedback forms" }
      ],
      actionSteps: [
        "Set up analytics tracking",
        "Monitor user behavior and engagement",
        "Collect user feedback and suggestions",
        "Analyze performance metrics",
        "Implement improvements based on data"
      ],
      output: "Data-driven insights and continuous improvements to enhance user experience"
    }
  ];

  const additionalResources = [
    {
      category: "Learning Platforms",
      tools: [
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", description: "Free coding bootcamp with hands-on projects" },
        { name: "Codecademy", url: "https://www.codecademy.com/", description: "Interactive coding lessons and projects" },
        { name: "Khan Academy", url: "https://www.khanacademy.org/", description: "Free educational content including programming" },
        { name: "Coursera", url: "https://www.coursera.org/", description: "University-level courses from top institutions" }
      ]
    },
    {
      category: "Design Resources",
      tools: [
        { name: "Google Fonts", url: "https://fonts.google.com/", description: "Free web fonts for better typography" },
        { name: "Coolors", url: "https://coolors.co/", description: "Generate beautiful color palettes" },
        { name: "Feather Icons", url: "https://feathericons.com/", description: "Beautiful open-source icons" },
        { name: "Pexels", url: "https://www.pexels.com/", description: "Free stock photos and videos" }
      ]
    },
    {
      category: "Development Tools",
      tools: [
        { name: "Git", url: "https://git-scm.com/", description: "Version control system for tracking changes" },
        { name: "npm", url: "https://www.npmjs.com/", description: "Package manager for JavaScript libraries" },
        { name: "Prettier", url: "https://prettier.io/", description: "Code formatter for consistent styling" },
        { name: "ESLint", url: "https://eslint.org/", description: "Tool for identifying and fixing JavaScript errors" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-14 mb-10 border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 leading-tight">Anyone Can Develop</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              A calm, step-by-step guide to building beautiful, professional websites with AI—no matter your skill level.
            </p>
            <div className="flex gap-4">
              <Button asChild className="rounded-full px-8 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700">
                <a href="#guide">Get Started</a>
              </Button>
              <Button variant="outline" asChild className="rounded-full px-8 py-3 text-base font-semibold border-blue-600 text-blue-700 hover:bg-blue-50">
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135757.png" alt="Web Development Illustration" className="w-[320px] h-[240px] object-contain rounded-xl border border-gray-200" />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8" id="guide">
        {/* Introduction Card */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Building a webpage is an exciting and accessible process with the help of AI tools, enabling everyone from beginners 
              to advanced developers to create stunning websites. AI streamlines planning, design, coding, testing, and deployment, 
              making it easier to craft anything from a simple personal page to a complex web application. This comprehensive guide 
              provides detailed instructions, tool recommendations, and step-by-step processes for creating professional websites 
              using the latest AI-powered development tools.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">AI-Powered</Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Beginner-Friendly</Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">Professional Results</Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">Step-by-Step</Badge>
            </div>
          </CardContent>
        </Card>

        {/* What You Can Create */}
        <Card className="mb-12 border border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-700 flex items-center">
              <Users className="w-7 h-7 mr-2 text-blue-600" />
              What Can You Create with AI?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {skillLevels.map((level, index) => {
                const IconComponent = level.icon;
                return (
                  <Card key={index} className="border border-gray-200 rounded-xl shadow-none hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <Badge className={level.color + " mb-3 mx-auto block w-fit text-base"}>{level.level}</Badge>
                      <p className="text-gray-700 text-base leading-relaxed mb-4 text-center">{level.description}</p>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-xs text-gray-800 text-center">Examples:</h4>
                        <ul className="text-xs text-gray-600 space-y-1 text-center">
                          {level.examples.map((example, idx) => (
                            <li key={idx}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
              Comprehensive Development Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="step1" className="w-full">
              <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-6">
                {developmentSteps.map((step) => (
                  <TabsTrigger key={step.step} value={`step${step.step}`} className="text-xs">
                    Step {step.step}
                  </TabsTrigger>
                ))}
              </TabsList>

              {developmentSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <TabsContent key={step.step} value={`step${step.step}`}>
                    <Card className="border-2 border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                            <p className="text-gray-600 mb-3">{step.objective}</p>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                              <p className="text-sm text-blue-800"><strong>Why This Matters:</strong> {step.importance}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-black mb-3">Recommended AI Tools:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {step.tools.map((tool, index) => (
                              <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors">
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-medium text-black">{tool.name}</h5>
                                    <Button variant="ghost" size="sm" asChild>
                                      <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4" />
                                      </a>
                                    </Button>
                                  </div>
                                  <p className="text-sm text-gray-600">{tool.description}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-black mb-3">Action Steps:</h4>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <ol className="list-decimal list-inside space-y-2">
                              {step.actionSteps.map((action, index) => (
                                <li key={index} className="text-sm text-gray-700">{action}</li>
                              ))}
                            </ol>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Expected Output:
                          </h4>
                          <p className="text-green-700 text-sm">{step.output}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-yellow-600" />
              Additional Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalResources.map((category, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-black mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <Card key={toolIndex} className="border border-gray-200 hover:border-blue-300 transition-colors">
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-black text-sm">{tool.name}</h4>
                            <Button variant="ghost" size="sm" asChild>
                              <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </Button>
                          </div>
                          <p className="text-xs text-gray-600">{tool.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sample Portfolio Demo */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black flex items-center">
              <Monitor className="w-6 h-6 mr-2 text-purple-600" />
              Sample Portfolio Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 mb-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">My AI-Powered Portfolio</h3>
                <p className="text-gray-600">Built with Grok, Lovable, and More!</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">Welcome</h4>
                  <p className="text-sm text-gray-600">Explore my work, crafted with AI tools for a seamless experience.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">About Me</h4>
                  <p className="text-sm text-gray-600">I'm passionate about creating websites using AI tools like Grok, ChatGPT, Lovable, and Replit.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">Contact Me</h4>
                  <p className="text-sm text-gray-600">Get in touch through the contact form below.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">Contact Form Preview</p>
                <div className="space-y-2">
                  <div className="h-8 bg-white rounded border"></div>
                  <div className="h-8 bg-white rounded border"></div>
                  <div className="h-16 bg-white rounded border"></div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-purple-700">
              © 2025 My Portfolio. Built with AI Tools!
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-blue-100 mb-6">
              Begin your web development journey today with AI-powered tools and create amazing websites in minutes, not months! 
              With this comprehensive guide, you have everything you need to build professional, responsive, and engaging websites.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" asChild>
                <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer">
                  Start with Lovable
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <a href="https://bolt.new/" target="_blank" rel="noopener noreferrer">
                  Try Bolt.new
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
                <a href="https://v0.dev/" target="_blank" rel="noopener noreferrer">
                  Explore v0.dev
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AnyoneCanDevelop;
