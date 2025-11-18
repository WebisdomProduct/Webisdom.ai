import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Zap,
  Shield,
  BarChart3,
  Users,
  Calendar,
  MessageSquare,
  Brain,
  Hotel,
  Utensils,
} from "lucide-react";
import CaseStudies from "@/components/sections/CaseStudies";
import { useState } from "react";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";

const Products = () => {
  const products = [
    {
      id: "ai-chieftain",
      title: "AI Chieftain",
      subtitle: "Hotel Management Revolution",
      description:
        "Complete AI-powered hotel management system that transforms guest experience and operational efficiency.",
      url: "",
      demoVideo: "", // you will add
      demoDocument: "", // you will add
      category: "Hospitality AI",
      status: "Live Platform",
      image: "/lovable-uploads/2ca69ba8-ceb5-425d-92d5-52e9066faf81.png",
      features: [
        "Smart Room Management",
        "Guest Experience AI",
        "Revenue Optimization",
        "Predictive Analytics",
        "Automated Check-in/out",
        "Real-time Reporting",
      ],
      technologies: [
        "Machine Learning",
        "Natural Language Processing",
        "IoT Integration",
        "Cloud Computing",
      ],
      benefits: [
        "30% increase in operational efficiency",
        "25% improvement in guest satisfaction",
        "40% reduction in manual tasks",
        "Real-time insights and analytics",
      ],
    },

    {
      id: "ai-pms",
      title: "AI PMS",
      subtitle: "Property Management System for Hotels",
      description:
        "Smart, AI-powered PMS that automates daily hotel operations with real-time analytics.",
      url: "",
      demoVideo: "",
      demoDocument: "",
      category: "Hospitality AI",
      status: "Demo",
      image: "/placeholder/pms.png",
      features: [
        "Reservation Automation",
        "Room Status AI",
        "Payment & Billing AI",
        "Forecasting & Reporting",
        "Multi-location Management",
      ],
      technologies: ["AI Automation", "Cloud PMS", "Predictive Analytics"],
      benefits: [
        "Reduced workload for staff",
        "Faster check-in/check-out",
        "Better forecasting accuracy",
      ],
    },

    {
      id: "ai-chieftain-ilora",
      title: "AI Chieftain (Ilora)",
      subtitle: "Ilora-specific Hospitality Automation",
      description:
        "A customized version of AI Chieftain built for Ilora brand hotels.",
      url: "",
      demoVideo: "",
      demoDocument: "",
      category: "Hospitality AI",
      status: "Production Ready",
      image: "/placeholder/ilora-chieftain.png",
      features: [
        "Brand-specific Automation",
        "Guest Profiling",
        "Smart Housekeeping",
        "Revenue Intelligence",
      ],
      technologies: ["AI", "Hotel Automation"],
      benefits: ["Better brand personalization", "Higher guest engagement"],
    },

    {
      id: "ai-pms-ilora",
      title: "AI PMS (Ilora)",
      subtitle: "Customized PMS System for Ilora Hotels",
      description: "A full PMS system tailored for Ilora hotel operations.",
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "PMS Solution",
      status: "Demo",
      image: "/placeholder/ilora-pms.png",
      features: [
        "Room Management",
        "Staff Assignment",
        "Automated Billing",
        "Reporting",
      ],
      technologies: ["Cloud PMS", "Automation"],
      benefits: ["Streamlined hotel operations"],
    },

    {
      id: "rms",
      title: "AI Revenue Management System",
      subtitle: "Smart Revenue Optimization",
      description:
        "Powerful AI system that predicts pricing to maximize hotel revenue.",
      url: "",
      demoVideo: "",
      demoDocument: "",
      category: "Revenue AI",
      status: "Demo",
      image: "/placeholder/rms.png",
      features: [
        "Dynamic Pricing",
        "Demand Forecasting",
        "Market Intelligence",
      ],
      technologies: ["Predictive AI", "Data Analytics"],
      benefits: ["Increase RevPAR", "Optimize pricing 24/7"],
    },

    {
      id: "restaurant-agent",
      title: "Restaurant AI Agent",
      subtitle: "AI Assistant for Restaurants",
      description:
        "AI agent that automates table reservations, menu suggestions, customer support, and feedback handling.",
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "Food & Beverage AI",
      status: "Demo",
      image: "/placeholder/restaurant-ai.png",
      features: [
        "Menu Recommendations",
        "Booking Automation",
        "Customer Chat",
        "Feedback Analysis",
      ],
      technologies: ["AI Chat", "Voice AI"],
      benefits: ["Faster service", "Reduced manpower costs"],
    },

    {
      id: "ferozee-avatar",
      title: "AI Avatar for Ferozee Azeez",
      subtitle: "Personalized AI Avatar",
      description:
        "An AI-driven multimedia avatar designed for interactive storytelling, brand communication, and automation.",
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "AI Avatars",
      status: "Live Demo",
      image: "/placeholder/avatar.png",
      features: ["Lifelike Avatar", "Voice AI", "Interactive Responses"],
      technologies: ["Deep Learning", "Face AI"],
      benefits: ["Brand growth", "24/7 availability"],
    },

    {
      id: "coworking-agent",
      title: "AI Agent for Coworking Spaces",
      subtitle: "Smart Automation for Coworking Centers",
      description:
        "AI assistant for operations, member support, tour booking, and billing automation.",
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "Coworking Automation",
      status: "Demo",
      image: "/placeholder/coworking.png",
      features: [
        "Tour Booking Automation",
        "Billing AI",
        "Space Utilization AI",
      ],
      technologies: ["AI Chatbots", "Automation"],
      benefits: ["Better occupancy", "Improved member experience"],
    },

    {
      id: "loan-agent",
      title: "Loan Processing AI Agent",
      subtitle: "Automated Loan Evaluation",
      description:
        "AI that analyzes documents, verifies user data, and evaluates loan eligibility instantly.",
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "Finance AI",
      status: "Demo",
      image: "/placeholder/loan.png",
      features: ["Document AI", "KYC Automation", "Credit Evaluation"],
      technologies: ["OCR", "AI Risk Scoring"],
      benefits: ["Faster approvals", "Reduced manual processing"],
    },

    {
      id: "compliance-agent",
      title: "Compliance AI Agent",
      subtitle: "Automated Compliance Monitoring",
      description:
        "AI that tracks compliance tasks, audits, updates, and document workflows.",
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "Compliance AI",
      status: "Demo",
      image: "/placeholder/compliance.png",
      features: ["Policy Tracking", "Audit Automation", "Compliance Alerts"],
      technologies: ["AI Automation"],
      benefits: ["Zero compliance risk", "Real-time monitoring"],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                AI-Powered <span className="text-gradient">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our cutting-edge AI solutions designed to transform
                your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Brain className="w-4 h-4 mr-2" />
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Enterprise Ready
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Real-time Analytics
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Products & Case Studies Tabs */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-16">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Product Image */}
                    <div
                      className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <Card className="overflow-hidden">
                        <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          {product.id === "ai-chieftain" ? (
                            <Hotel className="w-24 h-24 text-primary/60" />
                          ) : (
                            <BarChart3 className="w-24 h-24 text-primary/60" />
                          )}
                          <div className="absolute top-4 right-4">
                            <Badge variant="default">{product.status}</Badge>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Product Details */}
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <div>
                        <Badge variant="outline" className="mb-4">
                          {product.category}
                        </Badge>
                        <h2 className="text-3xl font-bold mb-3">
                          {product.title}
                        </h2>
                        <h3 className="text-xl text-primary mb-4">
                          {product.subtitle}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {product.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold mb-3">Proven Results</h4>
                        <div className="space-y-2">
                          {product.benefits.map((benefit, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <BarChart3 className="w-4 h-4 text-accent" />
                              <span className="text-sm font-medium">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                          to={`/products/${product.id}`}
                          state={{ product }} 
                        >
                          <Button asChild>
                            <a>
                              Explore Platform
                              <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                        </Link>
                        <Button variant="outline" asChild>
                          <a href="/contact">Request Demo</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="case-studies">
                <CaseStudies />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our AI Products?
              </h2>
              <p className="text-muted-foreground text-lg">
                Our products are built with cutting-edge AI technology and deep
                industry expertise to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Advanced AI Technology
                </h3>
                <p className="text-muted-foreground">
                  Built with state-of-the-art machine learning algorithms and
                  neural networks for superior performance.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  Developed by industry experts with deep understanding of
                  business processes and challenges.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-grade security with compliance to international standards
                  and data protection regulations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already using our AI solutions to drive
              growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cursor-pointer">
              <Button
                size="lg"
                variant="secondary"
                asChild
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                <a>Schedule a Demo</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <DemoRequestDialog open={isModalOpen} onOpenChange={setIsModalOpen} />
      <Footer />
    </div>
  );
};

export default Products;
