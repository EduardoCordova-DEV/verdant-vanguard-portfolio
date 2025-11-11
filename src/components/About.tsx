import { Card } from './ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Code2, Bot, Disc3, SquareTerminal } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import profileImage from '@/assets/images/profile.png'

const About = () => {
  const { t } = useLanguage()

  const skills = [
    {
      icon: Code2,
      title: t('about.frontend'),
      description: t('about.frontendDesc'),
    },
    {
      icon: SquareTerminal,
      title: t('about.backend'),
      description: t('about.backendDesc'),
    },
    {
      icon: Bot,
      title: t('about.ai'),
      description: t('about.aiDesc'),
    },
    {
      icon: Disc3,
      title: t('about.music'),
      description: t('about.musicDesc'),
    },
  ]

  return (
    <section
      id="sobre-mi"
      className="py-24 px-4 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')}{' '}
            <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 card-glow cursor-pointer group">
                  <img
                    src={profileImage}
                    alt="Eduardo Cordova"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                      Click para ampliar
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <img
                  src={profileImage}
                  alt="Eduardo Cordova"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t('about.description')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 card-glow bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-card border border-border card-glow">
          <h3 className="text-2xl font-bold mb-4">
            {t('about.experienceTitle')}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t('about.experienceDesc')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
