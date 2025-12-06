const Skills = () => {
  const skillCategories = [
    {
      title: "Product Strategy",
      skills: [
        "Product Vision & Roadmapping",
        "Market Research & Analysis",
        "Competitive Intelligence",
        "Go-to-Market Strategy",
        "Pricing & Monetization",
        "OKRs & KPIs",
      ],
    },
    {
      title: "Product Discovery",
      skills: [
        "User Research & Interviews",
        "Jobs-to-be-Done Framework",
        "Customer Journey Mapping",
        "A/B Testing & Experimentation",
        "Data Analysis & SQL",
        "Product Analytics",
      ],
    },
    {
      title: "Product Delivery",
      skills: [
        "Agile & Scrum Methodologies",
        "Sprint Planning & Estimation",
        "Technical Requirements",
        "API & Integration Design",
        "Launch Management",
        "Stakeholder Communication",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Jira, Linear, Notion",
        "Figma, Miro, FigJam",
        "Amplitude, Mixpanel",
        "SQL, Python Basics",
        "Postman, Swagger",
        "Slack, Loom, Confluence",
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
              Skills & <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building and scaling successful products.
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
              { value: "8+", label: "Years Experience" },
              { value: "15+", label: "Products Shipped" },
              { value: "500K+", label: "Users Impacted" },
              { value: "$50M+", label: "Revenue Generated" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="font-display text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
