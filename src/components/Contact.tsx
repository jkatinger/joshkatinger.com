import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      action: "james@example.com",
      href: "mailto:james@example.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "linkedin.com/in/james",
      href: "https://linkedin.com",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-min chat",
      action: "calendly.com/james",
      href: "https://calendly.com",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss product strategy, 
              or just want to connect — I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {method.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-8 md:p-12 rounded-2xl bg-gradient-card border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to start a project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently available for consulting, advisory roles, and speaking engagements. 
              Let's discuss how I can help you achieve your product goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Me a Message
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
