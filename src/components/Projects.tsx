import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Streamline Platform - Data Fabric",
      description:
        "Led the development of a zero-data-retention-architecture platform for Intellistack, purpose-built for deep, secure, and scalable process automation in healthcare and regulated industries.",
      tags: ["Data Infrastructure", "Healthcare", "Enterprise"],
      metrics: [
        { icon: Shield, value: "Zero", label: "Data Retention" },
        { icon: Users, value: "Enterprise", label: "Healthcare" },
        { icon: Zap, value: "HIMSS 2025", label: "Launch" },
      ],
      featured: true,
    },
    {
      title: "AI Document Template Generator",
      description:
        "Collaborated cross-functionally to launch Formstack's first AI-powered feature — an LLM-powered document template generator to accelerate onboarding and increase early product adoption.",
      tags: ["AI/ML", "Document Automation", "LLM"],
      metrics: [
        { icon: TrendingUp, value: "21%", label: "of Global ARR" },
        { icon: Users, value: "Faster", label: "Onboarding" },
        { icon: Zap, value: "AI-First", label: "Feature" },
      ],
      featured: true,
    },
    {
      title: "Arke Kafka Messaging Platform",
      description:
        "Spearheaded the PM role at Zapier overseeing the Arke platform that synchronized customer data with third-party marketing tools including CRM, marketing automation, and in-product messaging.",
      tags: ["Kafka", "CDP", "MarTech"],
      metrics: [
        { icon: TrendingUp, value: "HTTP", label: "Connector" },
        { icon: Users, value: "CDP", label: "Integration" },
        { icon: Zap, value: "Event", label: "Driven" },
      ],
      featured: false,
    },
    {
      title: "Enterprise Admin Console for Google Analytics",
      description:
        "Orchestrated the wireframing, prototyping, design, and launch of ShufflePoint's Enterprise Admin Console, surpassing Year-1 revenue targets with new query language features.",
      tags: ["Analytics", "SaaS", "Enterprise"],
      metrics: [
        { icon: TrendingUp, value: "Y1", label: "Targets Met" },
        { icon: Users, value: "Enterprise", label: "Customers" },
        { icon: Zap, value: "API", label: "Platform" },
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
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of impactful products I've had the privilege to build and ship.
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
                <div className={`space-y-4 ${project.featured ? "pt-6 md:pt-0" : ""}`}>
                  <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors pr-20 md:pr-0">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
