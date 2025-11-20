import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "Hospitality AI",
      status: "Live Platform",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769", // AI + Hotel management tech
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
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "Hospitality AI",
      status: "Demo",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692", // dashboard / system UI
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
      id: "rms",
      title: "AI Revenue Management System",
      subtitle: "Smart Revenue Optimization",
      description:
        "Powerful AI system that predicts pricing to maximize hotel revenue.",
      url: "https://ai-chieftain.webisdomtech.com",
      demoVideo: "",
      demoDocument: "",
      category: "Revenue AI",
      status: "Demo",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296", // analytics / charts / forecasting
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
      category: "Hospitality AI",
      status: "Demo",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", // restaurant + workflow image
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
      category: "Finance AI",
      status: "Live Demo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // futuristic AI face / avatar look
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978", // coworking environment + tech
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // fintech tech dashboard
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
      category: "Finance AI",
      status: "Demo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // cybersecurity + compliance tech
      features: ["Policy Tracking", "Audit Automation", "Compliance Alerts"],
      technologies: ["AI Automation"],
      benefits: ["Zero compliance risk", "Real-time monitoring"],
    },
  ];

  const [open, setOpen] = useState({
    state: false,
    product: null,
  });

  const handleDownArrowClick = (product) => {
    setOpen({
      state: open.product?.id === product.id ? !open.state : true,
      product,
    });
  };

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
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-16">
                <div className="w-full px-4 py-8 space-y-12">
                  {Object.entries(
                    products.reduce((acc, product) => {
                      // Group products by category
                      if (!acc[product.category]) acc[product.category] = [];
                      acc[product.category].push(product);
                      return acc;
                    }, {} as Record<string, typeof products>)
                  ).map(([category, categoryProducts]) => (
                    <div key={category} className="space-y-4">
                      <h2 className="text-xl font-bold text-gray-800">
                        {category}
                      </h2>
                      <div
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory p-3"
                        style={{
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                      >
                        {categoryProducts.map((product) => (
                          <div
                            key={product.id}
                            className="flex-none w-72 group bg-white/80  backdrop-blur-md border border-gray-200 rounded-2xl p-5 relative snap-start shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                            onClick={() => handleDownArrowClick(product)}
                          >
                            <div className="h-40 w-full mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative group">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                            </div>
                            <h2 className="text-lg font-bold text-gray-800 mb-1">
                              {product.title}
                            </h2>
                            <h3 className="text-sm text-gray-500 mb-4 h-20">
                              {product.subtitle}
                            </h3>

                            <div className="bottom-4 child1 group-hover:animate-bounce duration-700 left-1/2  text-2xl text-gray-600 cursor-pointer  duration-300">
                              {open.state && open.product?.id === product.id ? (
                                <ChevronUp size={30} />
                              ) : (
                                <ChevronDown />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* AnimatePresence Panel for the opened product in this row */}
                      <AnimatePresence>
                        {open.state &&
                          open.product &&
                          categoryProducts.some(
                            (p) => p.id === open.product?.id
                          ) && (
                            <motion.div
                              key={open.product.id}
                              className="mt-6 bg-white p-6 shadow-lg w-full rounded-none md:rounded-xl"
                              initial={{ opacity: 0, y: -100 }}
                              animate={{ opacity: 1, y: 10 }}
                              exit={{ opacity: 0, y: -100 }}
                              transition={{ duration: 0.3 }}
                              onDoubleClick={() =>
                                setOpen({ state: false, product: null })
                              }
                            >
                              <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex flex-col w-full md:w-1/3 justify-center">
                                  <img
                                    src={open.product.image}
                                    alt={open.product.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                  />
                                </div>
                                <div className="flex-1 space-y-4">
                                  <div>
                                    <Badge variant="outline" className="mb-2">
                                      {open.product.status}
                                    </Badge>
                                    <h2 className="text-2xl font-bold">
                                      {open.product.title}
                                    </h2>
                                    <h3 className="text-lg text-primary">
                                      {open.product.subtitle}
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                      {open.product.description}
                                    </p>
                                  </div>

                                  <div className="space-y-2">
                                    <div>
                                      <h4 className="font-semibold">
                                        Features:
                                      </h4>
                                      <div className="flex flex-wrap gap-2 mt-1">
                                        {open.product.features.map((f) => (
                                          <Badge key={f} variant="secondary">
                                            {f}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold">
                                        Technologies:
                                      </h4>
                                      <div className="flex flex-wrap gap-2 mt-1">
                                        {open.product.technologies.map((t) => (
                                          <Badge key={t} variant="secondary">
                                            {t}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold">
                                        Benefits:
                                      </h4>
                                      <div className="flex flex-wrap gap-2 mt-1">
                                        {open.product.benefits.map((b) => (
                                          <Badge key={b} variant="secondary">
                                            {b}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Buttons */}
                                  <div className="flex gap-4 mt-4 flex-wrap">
                                    <Button asChild>
                                      <Link
                                        to={`/products/${open.product.id}`}
                                        state={{ product: open.product }}
                                      >
                                        Explore Platform
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                      </Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                      <a href="/contact">Request Demo</a>
                                    </Button>
                                  </div>
                                </div>
                              </div>

                              <p className="mt-4 text-sm text-gray-400">
                                *Double click anywhere on this panel to close
                              </p>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
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
