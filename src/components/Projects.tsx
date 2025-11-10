import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "proyecto-1",
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    github: "https://github.com/usuario/proyecto-1",
    demo: "https://proyecto-1.com"
  },
  {
    id: "proyecto-2",
    title: "Dashboard Analytics",
    description: "Dashboard interactivo para visualización de datos y métricas en tiempo real con gráficos personalizables.",
    technologies: ["React", "TypeScript", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    github: "https://github.com/usuario/proyecto-2",
    demo: "https://proyecto-2.com"
  },
  {
    id: "proyecto-3",
    title: "Social Media App",
    description: "Aplicación social con chat en tiempo real, publicaciones multimedia y sistema de notificaciones.",
    technologies: ["React", "Firebase", "Socket.io", "Redux"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    github: "https://github.com/usuario/proyecto-3",
    demo: "https://proyecto-3.com"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-background" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground text-lg">
            Explora algunos de mis trabajos más recientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link to={`/proyecto/${project.id}`}>
                    Ver Detalles
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;