import { Database, Workflow, Cpu } from "lucide-react";
import joshHeadshot from "@/assets/josh-headshot.jpeg";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Infrastructure",
      description: "Building scalable, secure data flows and integration patterns that power complex customer use cases.",
    },
    {
      icon: Workflow,
      title: "Business Automation",
      description: "Driving intelligent document generation and workflow automation for enterprise customers.",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Defining platform-level requirements to enable AI-driven workflows with secure data handling.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Crafting Products That <span className="text-gradient">Matter</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-elevated">
                <img 
                  src={joshHeadshot} 
                  alt="Josh Katinger - Software Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-2xl" />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Principal Product Manager focused on building products that power 
                business-critical workflows — from data infrastructure and integrations 
                to intelligent document generation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Intellistack, I'm currently leading product strategy for data and integrations 
                on the next-generation "Streamline" platform — a ground-up rebuild designed for 
                scale, security, and extensibility. My work spans zero-data-retention integration 
                architecture and iPaaS adoption to support a broader ecosystem of third-party tools.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach blends systems thinking, cross-functional collaboration, and a 
                strong sense of customer value. I've worked extensively on both early-stage 
                platform launches and established products — optimizing performance, expanding 
                capabilities, and driving customer adoption.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
