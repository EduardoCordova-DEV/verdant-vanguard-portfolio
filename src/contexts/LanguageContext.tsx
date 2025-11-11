import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Hero
    'hero.badge': 'Full Stack Software Engineer',
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Eduardo Cordova',
    'hero.subtitle': 'Ingeniero en Sistemas Inteligentes, especializado en el Desarrollo Web.',
    'hero.cv': 'Mi CV',
    
    // About
    'about.title': 'Sobre',
    'about.titleHighlight': 'mí',
    'about.description': 'Apasionado por la tecnología y el desarrollo web, me especializo en convertir ideas en soluciones digitales elegantes y funcionales.',
    'about.frontend': 'Desarrollo Frontend',
    'about.frontendDesc': 'React, TypeScript y frameworks modernos para crear interfaces interactivas y responsivas.',
    'about.backend': 'Desarrollo Backend',
    'about.backendDesc': 'Conocimientos en Node.js, .NET/C#, PHP (Laravel), Especializado en la construcción de APIs y sistemas backend eficientes.',
    'about.ai': 'Aplicación de IA',
    'about.aiDesc': 'Apasionado por la aplicación de IA en el ciclo de desarrollo, utilizando herramientas como ChatGPT, GitHub Copilot y Lovable.',
    'about.music': 'DJ / Producción Músical',
    'about.musicDesc': 'Sueño con convertirme en un DJ/Productor Músical, más allá de mi vida profesional, la música es mi pasión.',
    'about.experienceTitle': 'Mi experiencia',
    'about.experienceDesc': 'Ingeniero en Sistemas Inteligentes con experiencia en aplicaciones web y de escritorio, tanto en frontend como en backend. Especializado en tecnologías como .NET, Angular, PHP, React y Node.js, con enfoque en soluciones escalables y optimización del rendimiento. Hábil para resolver problemas complejos y colaborar eficazmente en equipo para lograr resultados eficientes y orientados al usuario.',
    
    // Education
    'education.title': 'Formación',
    'education.subtitle': 'Mi camino académico y certificaciones profesionales',
    'education.certifications': 'Certificaciones',
    
    // Experience  
    'experience.title': 'Experiencia',
    'experience.titleHighlight': 'Laboral',
    'experience.subtitle': 'Mi trayectoria profesional en el desarrollo web',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Explora algunos de mis trabajos',
    'projects.viewDetails': 'Ver Detalles',
    
    // Footer
    'footer.madeWith': 'Hecho con',
    'footer.andCode': 'y código',
  },
  en: {
    // Hero
    'hero.badge': 'Full Stack Software Engineer',
    'hero.greeting': 'Hi, I am',
    'hero.name': 'Eduardo Cordova',
    'hero.subtitle': 'Intelligent Systems Engineer, specialized in Web Development.',
    'hero.cv': 'My Resume',
    
    // About
    'about.title': 'About',
    'about.titleHighlight': 'me',
    'about.description': 'Passionate about technology and web development, I specialize in turning ideas into elegant and functional digital solutions.',
    'about.frontend': 'Frontend Development',
    'about.frontendDesc': 'React, TypeScript and modern frameworks to create interactive and responsive interfaces.',
    'about.backend': 'Backend Development',
    'about.backendDesc': 'Knowledge in Node.js, .NET/C#, PHP (Laravel), Specialized in building efficient APIs and backend systems.',
    'about.ai': 'AI Application',
    'about.aiDesc': 'Passionate about applying AI in the development cycle, using tools like ChatGPT, GitHub Copilot and Lovable.',
    'about.music': 'DJ / Music Production',
    'about.musicDesc': 'I dream of becoming a DJ/Music Producer, beyond my professional life, music is my passion.',
    'about.experienceTitle': 'My experience',
    'about.experienceDesc': 'Intelligent Systems Engineer with experience in web and desktop applications, both frontend and backend. Specialized in technologies such as .NET, Angular, PHP, React and Node.js, with a focus on scalable solutions and performance optimization. Skilled at solving complex problems and collaborating effectively in teams to achieve efficient and user-oriented results.',
    
    // Education
    'education.title': 'Education',
    'education.subtitle': 'My academic path and professional certifications',
    'education.certifications': 'Certifications',
    
    // Experience
    'experience.title': 'Work',
    'experience.titleHighlight': 'Experience',
    'experience.subtitle': 'My professional journey in web development',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Explore some of my work',
    'projects.viewDetails': 'View Details',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.andCode': 'and code',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
