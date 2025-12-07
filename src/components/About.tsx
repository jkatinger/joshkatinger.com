import { History, Cpu, BookOpen } from "lucide-react";
import joshHeadshot from "@/assets/josh-headshot.jpeg";

const About = () => {
  const highlights = [
    {
      icon: History,
      title: "Looking Back to Move Forward",
      description: "I avoid repeating old mistakes by uncovering hidden assumptions in systems and spotting patterns others miss.",
    },
    {
      icon: Cpu,
      title: "Grounding Decisions in Reality",
      description: "I bring clarity by understanding how we got here — the root cause, the story behind the data, the lessons learned.",
    },
    {
      icon: BookOpen,
      title: "Preserving Through Storytelling",
      description: "I protect history from being lost — elevating voices that would otherwise fade and preserving meaning through narrative.",
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
              Context Is My Superpower
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
                Years ago, I took the CliftonStrengths assessment — twice, because I didn't 
                believe the first result. Both times, my leading strength came back as 
                "Context." I had no idea what to do with it. It didn't sound as flashy as 
                "Strategic" or "Communication." It sounded like someone politely calling me nostalgic.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Then it clicked. People with Context are wired to look backward in order to 
                move forward. We make better decisions when we understand how we got here — 
                the history, the root cause, the story behind the data. We ask: "What led to this? 
                Has this happened before? What context is missing?"
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Suddenly, my two seemingly unrelated passions made perfect sense. My obsession 
                with WWII pilot memoirs. My love for first-person history. My product-management 
                instinct to understand existing systems before changing them. They're not separate 
                interests — they're the same cognitive strength expressed in two domains.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium text-foreground">
                I'm a storyteller because I'm a product manager with Context. I'm a strong 
                product manager because I'm a storyteller with Context.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {highlights.map((item) => (
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
