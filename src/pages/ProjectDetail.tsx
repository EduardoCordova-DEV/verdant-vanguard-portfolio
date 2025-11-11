import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Github, ExternalLink, Calendar, Users } from 'lucide-react'
import Footer from '@/components/Footer'

import productionLineImg from '../assets/images/production-line.jpeg'
import hospitalDashboardImg from '../assets/images/hospital-dashboard.jpg'
import benthoImg from '../assets/images/bentho.jpg'

// Este objeto debería estar en un archivo separado para reutilizarlo
const projectsData: Record<string, any> = {
  'gm-trazabilidad': {
    title: 'GM Trazabilidad',
    description:
      'Aplicacion Web para la trazabilidad de la linea de producción.',
    longDescription: (
      <span>
        Aplicación web para el escaneo de piezas en una línea de producción para
        la industria automotriz, garantizando precisión y eficiencia en el
        proceso de fabricación. Se implemento un sistema de seguridad para el
        inicio de sesión mediante hardware de detección de huellas dactilares,
        mejorando la autenticación y el control de acceso. Optimización del
        flujo de trabajo en la línea de producción integrando tecnologías de
        escaneo avanzadas. Colaboré con equipos multidisciplinarios para
        asegurar una integración fluida de hardware/software y una experiencia
        de usuario segura.
      </span>
    ),
    technologies: ['.NET', 'C#', 'Entity Framework', 'SQL'],
    image: productionLineImg,
    gallery: [],
    github: '',
    demo: '',
    date: '2023',
    team: '2 Desarrolladores',
    features: [
      'Sistema de autenticación y autorización por medio de datos biométricos',
      'Recepción de entradas por medio de escanerés',
      'Panel de administración completo',
      'Gestión de línea de producción en tiempo real',
    ],
    challenges: [
      'Implementación del hardware de datos biometrícos.',
      'Implementación del hardware para el escaneo de producto.',
    ],
  },
  'dashboard-hospital': {
    title: 'Dashboard Profesional',
    description: 'Dashboard administrativo para hospital privado.',
    longDescription: (
      <span>
        Se desarrollo una aplicación web integral para la gestión de un hospital
        privado, incorporando módulos esenciales para la operación médica y
        administrativa. Entre sus principales funcionalidades se incluyen:
        <ul>
          <li>
            • Registro y gestión de pacientes y médicos, facilitando el control
            tanto de información personal como de datos profesionales.
          </li>
          <li>
            • Administración de inventarios médicos para asegurar la
            disponibilidad y trazabilidad de suministros y recursos.
          </li>
          <li>
            • Gestión de expedientes clínicos con acceso seguro a historiales
            médicos y documentación relacionada.
          </li>
          <li>
            • Generación de reportes y visualización de datos para apoyar la
            toma de decisiones estratégicas.
          </li>
          <li>
            • Gestión de pagos, facturación y control de caja con seguimiento
            preciso de las transacciones financieras.
          </li>
          <li>
            • Manejo de historiales administrativos y médicos, permitiendo una
            atención continua y optimizada al paciente.
          </li>
        </ul>
      </span>
    ),
    technologies: ['Laravel', 'SQL', 'Bootstrap'],
    image: hospitalDashboardImg,
    gallery: [],
    github: '',
    demo: '',
    date: '2024',
    team: '5 Desarrolladores',
    features: [
      'Gestión de pacientes y médicos',
      'Control de inventarios y suministros médicos',
      'Expedientes clínicos y acceso seguro a historial',
      'Generación de reportes e indicadores clave',
      'Gestión de pagos, facturas y caja',
      'Trazabilidad de historiales administrativos y médicos',
    ],
    challenges: ['Estructuración de la base de datos relacional.'],
  },
  'bentho-cotizador': {
    title: 'BenthoCotizador',
    description:
      'Aplicación Web de generación de cotizaciones automaticas para Bentho Automation.',
    longDescription: (
      <span>
        Desarrollé una aplicación web interna para la generación automática de
        cotizaciones especializadas para clientes, optimizando el flujo
        comercial y la atención al cliente. La solución permitió agilizar el
        proceso de elaboración de cotizaciones, reducir significativamente los
        tiempos de respuesta y mejorar la experiencia del usuario final.
      </span>
    ),
    technologies: ['Laravel', 'PHP', 'SQL'],
    image: benthoImg,
    gallery: [],
    github: '',
    demo: '',
    date: '2023',
    team: '1 Desarrollador',
    features: [
      'Generación automática de cotizaciones personalizadas',
      'Disminución del tiempo de respuesta al cliente',
      'Interfaz intuitiva y fácil de usar',
      'Integración con sistemas internos y bases de datos',
      'Mejora en la eficiencia del proceso de ventas',
      'Incremento en la satisfacción del cliente',
    ],
    challenges: ['Optimización en la consulta de lista de productos +100,000'],
  },
}

const ProjectDetail = () => {
  const { id } = useParams()
  const project = id ? projectsData[id] : null

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
    )
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
            <p
              className="text-xl text-muted-foreground animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
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
                  <h2 className="text-2xl font-bold mb-4">
                    Descripción del Proyecto
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Características Principales
                  </h2>
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
                    {project.challenges.map(
                      (challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent mt-1">→</span>
                          <span className="text-muted-foreground">
                            {challenge}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
              {Array.isArray(project.gallery) &&
                project.gallery.filter(Boolean).length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-4">
                        Galería de Imágenes
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {project.gallery.map((img: string, index: number) => (
                          <div
                            key={index}
                            className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
                          >
                            <img
                              src={img}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300"></div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                      Tecnologías
                    </h3>
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
              {(project.github?.trim() !== '' ||
                project.demo?.trim() !== '') && (
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                      Enlaces
                    </h3>
                    {project.github && project.github.trim() !== '' && (
                      <Button asChild className="w-full">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                    {project.demo && project.demo.trim() !== '' && (
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Ver Código
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProjectDetail
