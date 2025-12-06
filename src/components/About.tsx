import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "User-Centric",
      description: "Obsessed with understanding user needs and translating them into delightful experiences.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Track record of shipping products that drive measurable business impact and growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Focused",
      description: "Passionate about leveraging emerging technologies to solve complex problems.",
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
            {/* Left: Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary animate-pulse-glow" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-2xl" />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a product manager with 8+ years of experience building software 
                products at startups and enterprise companies. Currently leading product 
                at a Series B fintech, where I've helped scale the platform from 10K to 
                500K+ users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines deep user research, data-driven decision making, 
                and close collaboration with engineering and design teams. I believe 
                great products are built at the intersection of user needs, business 
                goals, and technical feasibility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not shipping features, you'll find me mentoring aspiring PMs, 
                contributing to product communities, and exploring the latest in AI/ML 
                applications.
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
