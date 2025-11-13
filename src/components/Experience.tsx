import { Briefcase, MapPin } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { useLanguage } from '@/contexts/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()
  
  const experiences = [
    {
      position: t('experience.position'),
      company: (
        <h2>
          <a
            href="https://www.bentho.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('experience.company')}
          </a>
        </h2>
      ),
      location: t('experience.location'),
      period: t('experience.period'),
      description: <span>{t('experience.description')}</span>,
      technologies: [
        'HTML',
        'CSS',
        'Laravel',
        '.NET',
        'C#',
        'JavaScript',
        'Angular',
      ],
    },
  ]

  return (
    <section
      id="experiencia"
      className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('experience.title')} <span className="text-gradient">{t('experience.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 card-glow bg-card border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and timeline */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="hidden md:block w-0.5 h-full bg-border"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-foreground/80 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
