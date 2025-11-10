import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contacto@example.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Icon badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">Desarrollador Web</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hola, soy{" "}
            <span className="text-gradient">
              Tu Nombre
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Desarrollador web especializado en crear experiencias digitales modernas, 
            funcionales y estéticamente impactantes.
          </p>

          {/* Social links */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="card-glow group"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-colors group-hover:text-primary" />
                </a>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 mt-4"
          >
            Ver mi trabajo
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
