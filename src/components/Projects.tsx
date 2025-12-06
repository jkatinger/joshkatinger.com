import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Payment Platform",
      description:
        "Led the development of an instant payment system processing $50M+ monthly. Reduced transaction time from 3 days to seconds.",
      tags: ["Fintech", "Payments", "API"],
      metrics: [
        { icon: TrendingUp, value: "300%", label: "Volume Growth" },
        { icon: Users, value: "200K+", label: "Active Users" },
        { icon: Zap, value: "<1s", label: "Transaction Time" },
      ],
      featured: true,
    },
    {
      title: "AI-Powered Fraud Detection",
      description:
        "Shipped ML-based fraud detection that reduced fraudulent transactions by 85% while maintaining 99.9% approval rate for legitimate users.",
      tags: ["AI/ML", "Security", "Risk"],
      metrics: [
        { icon: TrendingUp, value: "85%", label: "Fraud Reduction" },
        { icon: Users, value: "99.9%", label: "Approval Rate" },
        { icon: Zap, value: "50ms", label: "Detection Speed" },
      ],
      featured: true,
    },
    {
      title: "Developer API Platform",
      description:
        "Built a self-serve API platform from 0 to 1, enabling 1000+ developers to integrate payment capabilities into their applications.",
      tags: ["API", "Developer Tools", "B2B"],
      metrics: [
        { icon: TrendingUp, value: "1000+", label: "Developers" },
        { icon: Users, value: "50M", label: "API Calls/Month" },
        { icon: Zap, value: "4.8/5", label: "Developer Rating" },
      ],
      featured: false,
    },
    {
      title: "Customer Onboarding 2.0",
      description:
        "Redesigned the onboarding experience, reducing time-to-value by 60% and improving activation rates through guided workflows.",
      tags: ["UX", "Growth", "Onboarding"],
      metrics: [
        { icon: TrendingUp, value: "60%", label: "Faster Activation" },
        { icon: Users, value: "45%", label: "Conversion Lift" },
        { icon: Zap, value: "35%", label: "Churn Reduction" },
      ],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of products I've had the privilege to build and ship.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <metric.icon className="w-4 h-4 text-primary mr-1" />
                          <span className="font-display font-bold text-lg">
                            {metric.value}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Link */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
