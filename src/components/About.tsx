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
              Past, Present, and Future
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
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                By day, I'm a Product Manager building the future — shaping SaaS platforms, 
                APIs, and AI-driven workflows that help businesses move faster. By night 
                (and most weekends), I'm a historian — researching, narrating, and preserving 
                the stories of aviation legends who shaped our past.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It might seem like an odd pairing, but I've found they're deeply connected. 
                Both require systems thinking — understanding how pieces fit together, whether 
                it's an integration architecture or the chain of events that led to a historic 
                mission. Both demand storytelling — translating complexity into something 
                people can grasp and care about.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love living in multiple timelines. One moment I'm defining platform strategy 
                for a next-gen product; the next, I'm behind a microphone bringing a WWII 
                triple ace's memoir to life. The dichotomy keeps me curious, creative, and 
                constantly learning.
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
