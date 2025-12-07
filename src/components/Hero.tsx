import { Linkedin, Mail } from "lucide-react";

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
            Software Product Manager and Aviation History Enthusiast
          </h2>
          
          {/* Description */}
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 delay-400">
            <p className="mb-4">
              I'm a Product Manager working in the world of SaaS, APIs, data, and AI. When I'm not doing that… I'm probably still at my desk, just time-traveling into aviation history instead of optimizing workflows. I love the dichotomy of moving between the past, present, and future.
            </p>
            <p>
              This is my personal site where you can explore{" "}
              <a href="/professional" className="text-primary hover:underline">what I build</a>,{" "}
              <a href="/personal" className="text-primary hover:underline">what I obsess over</a>, and{" "}
              <a href="/contact" className="text-primary hover:underline">reach out</a> if anything here sparks a conversation.
            </p>
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
        
      </div>
    </section>
  );
};

export default Hero;
