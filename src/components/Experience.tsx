const Experience = () => {
  const experiences = [
    {
      company: "Intellistack",
      role: "Principal Product Manager - Data Infrastructure & Ecosystem",
      period: "Oct 2025 - Present",
      description:
        "Leading the cross-platform data infrastructure strategy: building scalable, secure data flows and integration patterns that power customer use cases across enterprise healthcare and regulated industries.",
      achievements: [
        "Driving the post-MVP growth of Intellistack's Streamline platform into a secure, scalable automation backbone",
        "Partnering with executive leadership on platform strategy and go-to-market planning",
        "Defining platform-level requirements to enable AI-driven workflows with secure data handling",
        "Awarded Most Significant Contribution - Product & Engineering, 2024",
      ],
    },
    {
      company: "Intellistack",
      role: "Senior Product Manager - Data & Integrations",
      period: "Nov 2024 - Oct 2025",
      description:
        "Led the development of the Data Fabric for the next-generation 'Streamline' platform - a zero-data-retention-architecture platform, purpose-built for deep, secure, and scalable process automation.",
      achievements: [
        "Drove integration strategy from complex custom data integrations to event-driven iPaaS workflows",
        "Partnered with engineering and design to deliver platform MVP and launch at HIMSS 2025",
        "Translated enterprise integration needs into platform-level architecture",
      ],
    },
    {
      company: "Intellistack (Formstack)",
      role: "Senior Product Manager - Document Generation",
      period: "Jun 2024 - Oct 2024",
      description:
        "Collaborated cross-functionally to launch Formstack's first AI-powered feature — an AI Document Template Generator powered by an LLM to accelerate onboarding and increase early product adoption.",
      achievements: [
        "Managed Document Generation product line (~21% of global ARR)",
        "Reoriented product roadmap to align with strategic corporate objectives",
        "Instituted customer listening program to inform strategic roadmap",
      ],
    },
    {
      company: "Zapier",
      role: "Product Manager",
      period: "Jun 2022 - Jul 2023",
      description:
        "Spearheaded the introduction of the PM role within the Marketing Operations Engineering team, overseeing the Arke Kafka Messaging platform that synchronized customer data with third-party marketing tools.",
      achievements: [
        "Led cross-functional steering committee that selected and integrated a Customer Data Platform (CDP)",
        "Orchestrated successful rollout of the 'HTTP Connector' bridging Kafka event stream with CDP",
        "Shifted team focus to outcome-driven approach with product-focused KPIs",
      ],
    },
    {
      company: "Merkle | Cardinal Path",
      role: "Director Of Business Development",
      period: "Jan 2020 - May 2022",
      description:
        "Supported the acquisition of E-Nor by Merkle | Cardinal Path, a marketing data and analytics consultancy. Established sales operations and managed enterprise software relationships.",
      achievements: [
        "Established sales operations team managing $14M in annual software license renewals",
        "Made significant contributions to establish premier Google partnership",
        "Directed go-to-market strategies for Enterprise Analytics University",
      ],
    },
    {
      company: "E-Nor",
      role: "VP Sales and Marketing",
      period: "Jan 2017 - Dec 2019",
      description:
        "Led marketing team for global digital analytics and marketing optimization consulting firm. Promoted SaaS analytics product, web-based training platform and consulting services.",
      achievements: [
        "Oversaw go-to-market efforts for Enterprise Analytics University (EAU)",
        "Assumed P&L responsibility for consolidated Sales and Marketing team",
        "Assisted CEO in preparations for and execution of sale to Dentsu Network",
      ],
    },
    {
      company: "ShufflePoint, Inc.",
      role: "Product Manager & Partner",
      period: "Jan 2014 - Dec 2016",
      description:
        "Developed and executed product strategy for an API-powered SaaS platform enabling automated data imports from various marketing tools.",
      achievements: [
        "Managed feature roadmap incorporating customer feedback and prioritizing by business impact",
        "Orchestrated wireframing, prototyping, and launch of Enterprise Admin Console for Google Analytics",
        "Surpassed Year-1 revenue targets with new query language features",
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
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              14+ years building products, leading teams, and driving impact across SaaS platforms.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.role}`}
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
                    <h3 className="font-display text-xl font-bold mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-muted-foreground mt-4 text-left text-sm">
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
