import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
      
      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 animate-fade-up opacity-0 delay-100">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 delay-200">
            Josh Katinger
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up opacity-0 delay-300">
            Software Product Manager
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 delay-400">
            Building products that power business-critical workflows — from data infrastructure 
            and integrations to intelligent document generation and AI-driven automation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0 delay-500">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-up opacity-0 delay-600">
            <a
              href="https://www.linkedin.com/in/josh-katinger/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jkatinger@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
