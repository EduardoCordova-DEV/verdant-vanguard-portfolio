import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ArrowLeft, Github, ExternalLink, Calendar, Users } from 'lucide-react'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

import productionLineImg from '../assets/images/production-line.jpeg'
import hospitalDashboardImg from '../assets/images/hospital-dashboard.jpg'
import benthoImg from '../assets/images/bentho.jpg'

interface Project {
  title: string
  description: string
  longDescription: React.ReactNode
  technologies: string[]
  image: string
  gallery: string[]
  github: string
  demo: string
  date: string
  team: string
  features: string[]
  challenges: string[]
}

const ProjectDetail = () => {
  const { id } = useParams()
  const { t } = useLanguage()

  const getProjectData = (projectId: string): Project | null => {
    const projectMap: Record<string, () => Project> = {
      'gm-trazabilidad': () => ({
        title: t('project.gm.title'),
        description: t('project.gm.description'),
        longDescription: <span>{t('project.gm.longDescription')}</span>,
        technologies: ['.NET', 'C#', 'Entity Framework', 'SQL'],
        image: productionLineImg,
        gallery: [],
        github: '',
        demo: '',
        date: '2023',
        team: `2 ${t('team.developers')}`,
        features: [
          t('project.gm.feature1'),
          t('project.gm.feature2'),
          t('project.gm.feature3'),
          t('project.gm.feature4'),
        ],
        challenges: [
          t('project.gm.challenge1'),
          t('project.gm.challenge2'),
        ],
      }),
      'dashboard-hospital': () => ({
        title: t('project.hospital.title'),
        description: t('project.hospital.description'),
        longDescription: <span>{t('project.hospital.longDescription')}</span>,
        technologies: ['Laravel', 'SQL', 'Bootstrap'],
        image: hospitalDashboardImg,
        gallery: [],
        github: '',
        demo: '',
        date: '2024',
        team: `5 ${t('team.developers')}`,
        features: [
          t('project.hospital.feature1'),
          t('project.hospital.feature2'),
          t('project.hospital.feature3'),
          t('project.hospital.feature4'),
          t('project.hospital.feature5'),
          t('project.hospital.feature6'),
        ],
        challenges: [t('project.hospital.challenge1')],
      }),
      'bentho-cotizador': () => ({
        title: t('project.bentho.title'),
        description: t('project.bentho.description'),
        longDescription: <span>{t('project.bentho.longDescription')}</span>,
        technologies: ['Laravel', 'PHP', 'SQL'],
        image: benthoImg,
        gallery: [],
        github: '',
        demo: '',
        date: '2023',
        team: `1 ${t('team.developer')}`,
        features: [
          t('project.bentho.feature1'),
          t('project.bentho.feature2'),
          t('project.bentho.feature3'),
          t('project.bentho.feature4'),
          t('project.bentho.feature5'),
          t('project.bentho.feature6'),
        ],
        challenges: [t('project.bentho.challenge1')],
      }),
    }

    return projectMap[projectId] ? projectMap[projectId]() : null
  }

  const project = id ? getProjectData(id) : null

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('projectDetail.notFound')}</h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('projectDetail.backToHome')}
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
                {t('projectDetail.back')}
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
                    {t('projectDetail.descriptionTitle')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {t('projectDetail.featuresTitle')}
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
                  <h2 className="text-2xl font-bold mb-4">{t('projectDetail.challengesTitle')}</h2>
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
                        {t('projectDetail.galleryTitle')}
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {project.gallery.map((img: string, index: number) => (
                          <Dialog key={index}>
                            <DialogTrigger asChild>
                              <div className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer">
                                <img
                                  src={img}
                                  alt={`${project.title} screenshot ${
                                    index + 1
                                  }`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {t('projectDetail.clickToEnlarge')}
                                  </span>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <img
                                src={img}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-auto"
                              />
                            </DialogContent>
                          </Dialog>
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
                      {t('projectDetail.technologiesTitle')}
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
                    <span className="text-muted-foreground">{t('projectDetail.yearLabel')}</span>
                    <span className="font-semibold">{project.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{t('projectDetail.teamLabel')}</span>
                    <span className="font-semibold">{project.team}</span>
                  </div>
                </CardContent>
              </Card>
              {(project.github?.trim() !== '' ||
                project.demo?.trim() !== '') && (
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                      {t('projectDetail.linksTitle')}
                    </h3>
                    {project.github && project.github.trim() !== '' && (
                      <Button asChild className="w-full">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t('projectDetail.viewDemo')}
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
                          {t('projectDetail.viewCode')}
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
