import { Card } from './ui/card'
import { Code2, Bot, Disc3, SquareTerminal } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Desarrollo Frontend',
      description: (
        <span>
          <strong>React</strong>, <strong>TypeScript</strong> y frameworks
          modernos para crear interfaces interactivas y responsivas.
        </span>
      ),
    },
    {
      icon: SquareTerminal,
      title: 'Desarrollo Backend',
      description: (
        <span>
          Conocimientos en <strong>Node.js, .NET/C#, PHP (Laravel),</strong>{' '}
          Especializado en la construcción de APIs y sistemas backend
          eficientes.
        </span>
      ),
    },
    {
      icon: Bot,
      title: 'Aplicación de IA',
      description: (
        <span>
          Apasionado por la aplicación de <strong>IA</strong> en el ciclo de
          desarrollo, utilizando herramientas como{' '}
          <strong>ChatGPT, GitHub Copilot y Lovable</strong>.
        </span>
      ),
    },
    {
      icon: Disc3,
      title: 'DJ / Producción Músical',
      description: (
        <span>
          Sueño con convertirme en un <strong>DJ/Productor Músical</strong>, más
          allá de mi vida profesional, la música es mi pasión.
        </span>
      ),
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
            Sobre <span className="text-gradient">mí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apasionado por la tecnología y el desarrollo web, me especializo en
            convertir ideas en soluciones digitales elegantes y funcionales.
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
            {' '}
            <span className="text-primary font-semibold">
              Ingeniero en Sistemas Inteligentes
            </span>{' '}
            con experiencia en aplicaciones web y de escritorio, tanto en
            frontend como en backend. Especializado en tecnologías como{' '}
            <span className="text-primary font-semibold">
              .NET, Angular, PHP, React y Node.js,
            </span>{' '}
            con enfoque en soluciones escalables y optimización del rendimiento.
            Hábil para resolver problemas complejos y colaborar eficazmente en
            equipo para lograr resultados eficientes y orientados al usuario.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
