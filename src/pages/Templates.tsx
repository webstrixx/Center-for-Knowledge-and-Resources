
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Layout, ExternalLink, Github, Eye } from "lucide-react";

const Templates = () => {
  const templateCategories = [
    {
      category: "Landing Pages",
      templates: [
        {
          id: 1,
          title: "SaaS Landing Page",
          description: "Modern landing page template for SaaS products with pricing section",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/saas-landing",
          demoUrl: "https://saas-landing-demo.com",
          tags: ["React", "Tailwind CSS", "TypeScript"],
          isNew: true
        },
        {
          id: 2,
          title: "Agency Portfolio",
          description: "Clean and professional portfolio template for creative agencies",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/agency-portfolio",
          demoUrl: "https://agency-portfolio-demo.com",
          tags: ["React", "CSS3", "JavaScript"]
        },
        {
          id: 3,
          title: "Startup Landing",
          description: "Minimal and conversion-focused landing page for startups",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/startup-landing",
          demoUrl: "https://startup-landing-demo.com",
          tags: ["Vue.js", "Bootstrap", "SCSS"]
        },
        {
          id: 4,
          title: "SaaS Landing Page",
          description: "Modern landing page template for SaaS products with pricing section",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/saas-landing",
          demoUrl: "https://saas-landing-demo.com",
          tags: ["React", "Tailwind CSS", "TypeScript"],
          isNew: true
        },
        {
          id: 5,
          title: "Agency Portfolio",
          description: "Clean and professional portfolio template for creative agencies",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/agency-portfolio",
          demoUrl: "https://agency-portfolio-demo.com",
          tags: ["React", "CSS3", "JavaScript"]
        },
        {
          id: 6,
          title: "Startup Landing",
          description: "Minimal and conversion-focused landing page for startups",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/startup-landing",
          demoUrl: "https://startup-landing-demo.com",
          tags: ["Vue.js", "Bootstrap", "SCSS"]
        }
      ]
    },
    {
      category: "E-commerce",
      templates: [
        {
          id: 4,
          title: "Fashion Store",
          description: "Elegant e-commerce template for fashion and lifestyle brands",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/fashion-store",
          demoUrl: "https://fashion-store-demo.com",
          tags: ["React", "Redux", "Stripe"],
          isNew: true
        },
        {
          id: 5,
          title: "Electronics Shop",
          description: "Feature-rich template for electronics and gadgets store",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/electronics-shop",
          demoUrl: "https://electronics-shop-demo.com",
          tags: ["Next.js", "Tailwind CSS", "PayPal"]
        }
      ]
    },
    {
      category: "Dashboards",
      templates: [
        {
          id: 6,
          title: "Admin Dashboard",
          description: "Comprehensive admin dashboard with charts and analytics",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/admin-dashboard",
          demoUrl: "https://admin-dashboard-demo.com",
          tags: ["React", "Chart.js", "Material-UI"]
        },
        {
          id: 7,
          title: "Analytics Dashboard",
          description: "Data visualization dashboard for business analytics",
          image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/analytics-dashboard",
          demoUrl: "https://analytics-dashboard-demo.com",
          tags: ["Vue.js", "D3.js", "Vuetify"],
          isNew: true
        }
      ]
    },
    {
      category: "Blogs & CMS",
      templates: [
        {
          id: 8,
          title: "Tech Blog",
          description: "Modern blog template for tech writers and developers",
          image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/tech-blog",
          demoUrl: "https://tech-blog-demo.com",
          tags: ["Gatsby", "GraphQL", "Markdown"]
        },
        {
          id: 9,
          title: "Magazine Layout",
          description: "Rich content layout for online magazines and publications",
          image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/magazine-layout",
          demoUrl: "https://magazine-layout-demo.com",
          tags: ["React", "Contentful", "CSS Grid"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero/Intro Section */}
      <section className="w-full py-12 mb-10 border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 leading-tight">Web Templates Gallery</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
              Discover a curated collection of clean, modern, and responsive web templates. Each template is ready to use, open source, and designed for real-world projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-100 text-purple-800">Responsive</Badge>
              <Badge className="bg-purple-50 text-purple-700">Modern UI</Badge>
              <Badge className="bg-gray-100 text-gray-800">Open Source</Badge>
              <Badge className="bg-blue-50 text-blue-700">Easy to Customize</Badge>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135770.png" alt="Templates Illustration" className="w-[320px] h-[220px] object-contain rounded-xl border border-gray-200" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Template Categories */}
        <div className="space-y-16">
          {templateCategories.map((category) => (
            <section key={category.category}>
              <h2 className="text-2xl font-bold text-purple-700 mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.templates.map((template) => (
                  <Card key={template.id} className="border border-gray-200 rounded-xl shadow-none hover:shadow-md transition-shadow overflow-hidden">
                    <div className="relative">
                      <img 
                        src={template.image} 
                        alt={template.title}
                        className="w-full h-44 object-cover rounded-t-xl"
                      />
                      {template.isNew && (
                        <Badge className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">New</Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-gray-900 font-semibold mb-1">{template.title}</CardTitle>
                      <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.tags.map((tag) => (
                          <Badge key={tag} className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-purple-600 text-white hover:bg-purple-700 rounded-full"
                          onClick={() => window.open(template.demoUrl, '_blank')}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 rounded-full border-purple-600 text-purple-700 hover:bg-purple-50"
                          onClick={() => window.open(template.githubUrl, '_blank')}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 border border-gray-200 shadow-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We’re always adding new templates. If you have a request or want to contribute, let us know!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Template
              </Button>
              <Button variant="outline" className="rounded-full border-purple-600 text-purple-700 hover:bg-purple-50">
                <Github className="w-4 h-4 mr-2" />
                Contribute Templates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Templates;
