const Experience = () => {
  const experiences = [
    {
      company: "FinFlow",
      role: "Senior Product Manager",
      period: "2021 - Present",
      description:
        "Leading product strategy for the core payments platform, driving 45% YoY revenue growth. Shipped 15+ major features including real-time payments and fraud detection.",
      achievements: [
        "Scaled platform from 10K to 500K+ active users",
        "Led cross-functional team of 12 engineers and 3 designers",
        "Reduced customer churn by 35% through improved onboarding",
      ],
    },
    {
      company: "TechCorp",
      role: "Product Manager",
      period: "2018 - 2021",
      description:
        "Owned the B2B SaaS product suite, managing a $15M ARR portfolio. Launched enterprise features that increased deal sizes by 60%.",
      achievements: [
        "Drove product-led growth strategy with 40% conversion lift",
        "Built and launched API platform serving 1000+ developers",
        "Established product discovery framework adopted company-wide",
      ],
    },
    {
      company: "StartupX",
      role: "Associate Product Manager",
      period: "2016 - 2018",
      description:
        "First PM hire, built the product function from the ground up. Helped take the product from MVP to Series A with 50K users.",
      achievements: [
        "Defined product roadmap that secured $5M Series A funding",
        "Implemented agile methodologies and OKR framework",
        "Conducted 200+ user interviews to drive product decisions",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Career
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of building products, leading teams, and driving impact at every stage.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                } md:w-1/2 pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute w-4 h-4 rounded-full bg-primary shadow-glow top-2 ${
                    index % 2 === 0
                      ? "left-0 md:left-auto md:-right-2"
                      : "left-0 md:-left-2"
                  } transform md:translate-x-0`}
                />

                {/* Content Card */}
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated">
                  <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="text-accent font-medium text-sm">
                      {exp.period}
                    </span>
                    <h3 className="font-display text-2xl font-bold mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-muted-foreground mt-4 text-left">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2 text-left">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
