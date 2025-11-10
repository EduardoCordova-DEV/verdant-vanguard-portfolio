import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Calendar, Users } from "lucide-react";
import Footer from "@/components/Footer";

// Este objeto debería estar en un archivo separado para reutilizarlo
const projectsData: Record<string, any> = {
  "proyecto-1": {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    longDescription: "Desarrollé una plataforma de e-commerce full-stack que permite a los usuarios navegar por productos, agregar items al carrito, y completar compras de manera segura. Incluye un panel de administración completo para gestionar productos, órdenes y usuarios. La aplicación cuenta con autenticación segura, integración con Stripe para pagos, y un diseño responsive optimizado para dispositivos móviles.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT", "Docker"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop",
    github: "https://github.com/usuario/proyecto-1",
    demo: "https://proyecto-1.com",
    date: "2024",
    team: "Individual",
    features: [
      "Catálogo de productos con búsqueda y filtros avanzados",
      "Carrito de compras con persistencia",
      "Integración con pasarela de pagos Stripe",
      "Panel de administración completo",
      "Sistema de autenticación y autorización",
      "Gestión de inventario en tiempo real"
    ],
    challenges: [
      "Implementación de un sistema de pagos seguro y confiable",
      "Optimización del rendimiento para manejar grandes catálogos",
      "Diseño de una arquitectura escalable"
    ]
  },
  "proyecto-2": {
    title: "Dashboard Analytics",
    description: "Dashboard interactivo para visualización de datos y métricas en tiempo real con gráficos personalizables.",
    longDescription: "Creé un dashboard analítico completo que permite visualizar datos complejos de manera intuitiva. Incluye gráficos interactivos, filtros dinámicos, y actualización en tiempo real de las métricas. La aplicación está optimizada para mostrar grandes volúmenes de datos sin comprometer el rendimiento.",
    technologies: ["React", "TypeScript", "D3.js", "Tailwind", "WebSocket", "Redux"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
    github: "https://github.com/usuario/proyecto-2",
    demo: "https://proyecto-2.com",
    date: "2024",
    team: "2 Desarrolladores",
    features: [
      "Visualización de datos en tiempo real",
      "Gráficos interactivos y personalizables",
      "Sistema de filtros avanzados",
      "Exportación de reportes en PDF/Excel",
      "Modo oscuro/claro",
      "Responsive design"
    ],
    challenges: [
      "Optimización del rendimiento con grandes datasets",
      "Implementación de actualizaciones en tiempo real",
      "Diseño de gráficos accesibles y responsive"
    ]
  },
  "proyecto-3": {
    title: "Social Media App",
    description: "Aplicación social con chat en tiempo real, publicaciones multimedia y sistema de notificaciones.",
    longDescription: "Desarrollé una aplicación social completa con funcionalidades de red social modernas. Incluye sistema de publicaciones con soporte multimedia, chat en tiempo real, notificaciones push, y sistema de seguidores. La aplicación está optimizada para ofrecer una experiencia fluida y rápida.",
    technologies: ["React", "Firebase", "Socket.io", "Redux", "PWA", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop",
    github: "https://github.com/usuario/proyecto-3",
    demo: "https://proyecto-3.com",
    date: "2023",
    team: "3 Desarrolladores",
    features: [
      "Sistema de publicaciones con multimedia",
      "Chat en tiempo real",
      "Notificaciones push",
      "Sistema de seguidores/seguidos",
      "Perfil de usuario personalizable",
      "Feed de noticias algorítmico"
    ],
    challenges: [
      "Implementación de chat en tiempo real escalable",
      "Gestión de multimedia y optimización de imágenes",
      "Desarrollo de un algoritmo de feed personalizado"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-6xl px-4 pb-12">
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Link>
            </Button>
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Características Principales</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Desafíos Técnicos</h2>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Tecnologías</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Año:</span>
                    <span className="font-semibold">{project.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Equipo:</span>
                    <span className="font-semibold">{project.team}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Enlaces</h3>
                  <Button asChild className="w-full">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Ver Código
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;