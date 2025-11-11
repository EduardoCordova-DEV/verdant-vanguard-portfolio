import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'

import productionLineImg from '../assets/images/production-line.jpeg'
import hospitalDashboardImg from '../assets/images/hospital-dashboard.jpg'
import benthoImg from '../assets/images/bentho.jpg'

const projects = [
  {
    id: 'gm-trazabilidad',
    title: 'GM Trazabilidad',
    description:
      'Aplicacion Web para la trazabilidad de la linea de producción.',
    technologies: ['.NET', 'C#', 'Entity Framework', 'SQL'],
    image: productionLineImg,
    github: '',
    demo: '',
  },
  {
    id: 'dashboard-hospital',
    title: 'Hospital Managment Dashboard',
    description: 'Dashboard administrativo para hospital privado.',
    technologies: ['Laravel', 'PHP', 'SQL', 'Bootstrap'],
    image: hospitalDashboardImg,
    github: '',
    demo: '',
  },
  {
    id: 'bentho-cotizador',
    title: 'BenthoCotizador',
    description:
      'Aplicación Web de generación de cotizaciones automaticas para Bentho Automation.',
    technologies: ['Laravel', 'PHP', 'SQL'],
    image: benthoImg,
    github: '',
    demo: '',
  },
]

const Projects = () => {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 px-4 bg-background" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('projects.subtitle')}
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
                  <Link to={`/proyecto/${project.id}`}>{t('projects.viewDetails')}</Link>
                </Button>

                {project.github && project.github.trim() !== '' && (
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}

                {project.demo && project.demo.trim() !== '' && (
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
