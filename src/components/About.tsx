import { Card } from "./ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Desarrollo Frontend",
      description: "Experto en React, TypeScript y frameworks modernos para crear interfaces interactivas y responsivas.",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Creación de experiencias visuales atractivas con atención al detalle y enfoque en usabilidad.",
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Desarrollo de aplicaciones rápidas y eficientes con las mejores prácticas de performance.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">mí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apasionado por la tecnología y el desarrollo web, me especializo en convertir 
            ideas en soluciones digitales elegantes y funcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 card-glow bg-card border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-card border border-border card-glow">
          <h3 className="text-2xl font-bold mb-4">Mi experiencia</h3>
          <p className="text-muted-foreground leading-relaxed">
            Con más de <span className="text-primary font-semibold">X años</span> de experiencia en 
            desarrollo web, he trabajado en diversos proyectos que van desde landing pages hasta 
            aplicaciones web complejas. Mi enfoque siempre es crear código limpio, mantenible y 
            escalable, utilizando las últimas tecnologías y mejores prácticas del sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
