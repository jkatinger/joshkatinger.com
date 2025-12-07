const Skills = () => {
  const skillCategories = [
    {
      title: "Product Strategy",
      skills: [
        "Product Vision & Roadmapping",
        "Product Lifecycle Management",
        "Go-to-Market Strategy",
        "Platform Architecture",
        "Data Infrastructure Design",
        "OKRs & KPIs",
      ],
    },
    {
      title: "Integration & Data",
      skills: [
        "API & Integration Design",
        "iPaaS Workflows",
        "Data Fabric Architecture",
        "Kafka & Event-Driven Systems",
        "Customer Data Platforms",
        "Zero-Data-Retention Design",
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        "AI-Powered Workflows",
        "Document Automation",
        "LLM Integration",
        "Process Automation",
        "Intelligent Onboarding",
        "Secure Data Handling",
      ],
    },
    {
      title: "Tools & Methods",
      skills: [
        "Agile & Scrum (CSPO)",
        "Cross-Functional Leadership",
        "Enterprise Sales Enablement",
        "User Research & Discovery",
        "ProductBoard",
        "Stakeholder Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Skills & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building and scaling SaaS platforms in data, integrations, and automation.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow group"
              >
                <h3 className="font-display text-xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "14+", label: "Years Experience" },
              { value: "10+", label: "Products Shipped" },
              { value: "21%", label: "ARR Managed" },
              { value: "$14M+", label: "License Renewals" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="font-display text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 text-center">
            <h3 className="font-display text-xl font-semibold mb-4">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Certified Scrum Product Owner (CSPO)
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                AI Summer 2025 Certificate
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Reforge Product Management Foundations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
