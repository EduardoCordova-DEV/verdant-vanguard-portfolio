import { GraduationCap, Award } from 'lucide-react'
import { Card } from './ui/card'

const Education = () => {
  const educationData = [
    {
      degree: 'Ingeniería en Sistemas Inteligentes',
      institution: 'Universidad Autónoma de San Luis Potosí / UASLP',
      period: '2018 - 2023',
      description:
        'Formación integral en Ciencias de la Computación e Inteligencia Artificial',
    },
    // {
    //   degree: 'React Dev',
    //   institution: 'React: De cero a experto - Edición 2025 / Udemy',
    //   period: '2025',
    //   description:
    //     'Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, AI, CRUD, Logs, MUI, Multiple Routers..',
    // },
  ]

  const certifications = [
    // 'Certificación en React Avanzado',
    // 'TypeScript Professional',
    // 'Cloud Architecture',
    // 'UI/UX Design Fundamentals',
  ]

  return (
    <section id="formacion" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Formación</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mi camino académico y certificaciones profesionales
          </p>
        </div>

        {/* Education timeline */}
        <div className="space-y-6 mb-16">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 card-glow bg-card border-border hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-foreground/80 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <Card className="p-8 card-glow bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Certificaciones</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground/90">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}

export default Education
