import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  BarChart3,
  MapPin,
  CheckCircle,
  Brain,
  Eye,
  TrendingUp,
  Shield,
  Cpu,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import { Navigate, useNavigate } from "react-router-dom";

const Services = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const navigate = useNavigate();
  const auditProcess = [
    {
      icon: Search,
      title: "Performance Benchmarking",
      description:
        "Comprehensive evaluation of your AI systems against industry standards, identifying optimization opportunities and performance gaps.",
      duration: "1-2 weeks",
    },
    {
      icon: Shield,
      title: "Bias Detection & Ethical Compliance",
      description:
        "Advanced analysis to detect algorithmic bias, ensure fairness, and maintain ethical AI standards across all systems.",
      duration: "2-3 weeks",
    },
    {
      icon: MapPin,
      title: "Improvement Roadmap",
      description:
        "Strategic plan with actionable insights, technical recommendations, and clear implementation pathways for AI optimization.",
      duration: "1 week",
    },
  ];

  const auditBenefits = [
    "Performance benchmarking against industry leaders",
    "Advanced bias detection and fairness analysis",
    "Ethical AI compliance validation and certification",
    "Detailed improvement roadmaps with clear milestones",
    "ROI projections and cost-benefit optimization",
    "Risk mitigation strategies for AI deployment",
  ];

  const aiLabServices = [
    {
      icon: Brain,
      title: "Custom AI Models",
      description:
        "Tailored machine learning models designed specifically for your business needs, from concept to deployment.",
    },
    {
      icon: Cpu,
      title: "NLP Systems",
      description:
        "Advanced natural language processing solutions for intelligent automation, sentiment analysis, and conversational AI.",
    },
    {
      icon: Eye,
      title: "Computer Vision Tools",
      description:
        "Cutting-edge image and video analysis systems for automated quality control, object detection, and visual intelligence.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Data-driven forecasting models that transform historical data into actionable future insights and strategic advantages.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Enterprise <span className="text-gradient">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From intelligent auditing to custom AI development—empowering
                businesses with cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* AI Audit Service */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="card-gradient hover:shadow-strong transition-all duration-500">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-3xl">
                      AI Audit as a Service
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground mt-4 text-lg">
                    Evaluate and optimize your AI systems through advanced
                    performance benchmarking, bias detection, ethical compliance
                    validation, and strategic improvement roadmaps.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">What You Get:</h4>
                      <ul className="space-y-3">
                        {auditBenefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">
                        Process Timeline:
                      </h4>
                      <div className="space-y-4">
                        {auditProcess.map((step, index) => (
                          <div
                            key={step.title}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <h5 className="font-medium">{step.title}</h5>
                              <p className="text-sm text-accent">
                                {step.duration}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <Button
                      size="lg"
                      onClick={() => setIsAuditDialogOpen(true)}
                    >
                      Request AI Audit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Audit Process */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Enterprise-Grade{" "}
                <span className="text-gradient">AI Auditing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic 4-6 week evaluation process delivering actionable
                insights for AI excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auditProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={step.title}
                    className="card-gradient hover:shadow-medium transition-all duration-300 text-center"
                  >
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-accent font-medium mb-4">
                        {step.duration}
                      </p>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => setIsAuditDialogOpen(true)}>
                Start Your AI Audit
              </Button>
            </div>
          </div>
        </section>

        {/* AI Lab Solutions */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="h-10 w-10 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold">
                  AI Lab <span className="text-gradient">Solutions</span>
                </h2>
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Where innovation meets intelligence. Our AI Lab designs and
                develops custom AI models, NLP systems, computer vision tools,
                and predictive analytics solutions that scale with your
                ambitions.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We collaborate closely with your team to transform complex
                challenges into intelligent, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {aiLabServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="card-gradient hover:shadow-strong transition-all duration-500 group"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="card-gradient hover:shadow-strong transition-all duration-500 border-primary/20">
              <CardContent className="p-12 text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Transform Your Business with{" "}
                  <span className="text-gradient">
                    Intelligent AI Solutions
                  </span>
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Ready to unlock the full potential of artificial intelligence?
                  Let's build the future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => setIsDemoDialogOpen(true)}>
                    Schedule a Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsAuditDialogOpen(true)}
                  >
                    Request AI Audit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-secondary/20 cursor-pointer">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Latest Insights from Our{" "}
                <span className="text-gradient">AI Blog</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with trends, innovations, and expert discussions
                shaping the AI landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Blog 1 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 space-y-3">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    AI Strategy
                  </span>
                  <h3 className="text-xl font-bold">
                    How AI is Transforming Global Enterprise Workflows
                  </h3>
                  <p className="text-muted-foreground">
                    A deep look at automation, optimization, and intelligent
                    decision systems reshaping enterprise operations.
                  </p>
                </div>
              </div>

              {/* Blog 2 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 space-y-3">
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                    NLP
                  </span>
                  <h3 className="text-xl font-bold">
                    Revolution of NLP-Powered Automation
                  </h3>
                  <p className="text-muted-foreground">
                    A new generation of NLP systems is enabling intelligent
                    conversations, fast operations, and smart insights.
                  </p>
                </div>
              </div>

              {/* Blog 3 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 space-y-3">
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    Computer Vision
                  </span>
                  <h3 className="text-xl font-bold">
                    Computer Vision is Changing Automation Forever
                  </h3>
                  <p className="text-muted-foreground">
                    Industries are adopting automated inspection, object
                    tracking, and AI-powered detection at massive scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Case Studies Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Real Impact, Real{" "}
                <span className="text-gradient">AI Success</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore how our AI solutions helped companies transform their
                workflows, reduce costs, and unlock new business opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Case Study 1 */}
              <div className="bg-secondary/20 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3">
                  Hotel Chain — AI Revenue Management
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implemented an AI-powered revenue management model resulting
                  in:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 32% increase in monthly revenue</li>
                  <li>• Reduced manual analysis time by 78%</li>
                  <li>• Fully automated forecasting engine</li>
                </ul>
                <p className="mt-4 text-primary font-medium">
                  Outcome: AI-driven pricing boosted profitability across 18+
                  properties.
                </p>
              </div>

              {/* Case Study 2 */}
              <div className="bg-secondary/20 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3">
                  Fintech — Fraud Detection Engine
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deployed a real-time fraud analytics system leveraging anomaly
                  detection:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 91% faster fraud spotting</li>
                  <li>• 40% reduction in false-positive alerts</li>
                  <li>• ML model trained on 20M+ transactions</li>
                </ul>
                <p className="mt-4 text-primary font-medium">
                  Outcome: Reduced fraud losses and improved compliance.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button onClick={()=>navigate('/products')} className="px-6 py-3 text-lg border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                Know More
              </button>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-28 bg-gradient-to-b from-secondary/30 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Businesses Choose{" "}
                <span className="text-gradient">Our AI Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                We combine cutting-edge research with enterprise-grade
                engineering to deliver AI solutions you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Cpu className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Full-Stack AI Development
                </h3>
                <p className="text-muted-foreground">
                  From model building to deployment—complete AI engineering
                  under one roof.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  We follow industry-leading security, compliance, and ethical
                  AI practices.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Scalable for Millions
                </h3>
                <p className="text-muted-foreground">
                  AI pipelines optimized for massive datasets and high
                  throughput.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Human-Centric Design</h3>
                <p className="text-muted-foreground">
                  Our AI solutions enhance human decision-making—not replace it.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Precision & Accuracy</h3>
                <p className="text-muted-foreground">
                  Models optimized for high reliability across all use cases.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Faster Deployment</h3>
                <p className="text-muted-foreground">
                  Our AI deployment frameworks ensure rapid go-to-market
                  execution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <AuditRequestDialog
        open={isAuditDialogOpen}
        onOpenChange={setIsAuditDialogOpen}
      />
      <DemoRequestDialog
        open={isDemoDialogOpen}
        onOpenChange={setIsDemoDialogOpen}
      />
    </div>
  );
};

export default Services;
