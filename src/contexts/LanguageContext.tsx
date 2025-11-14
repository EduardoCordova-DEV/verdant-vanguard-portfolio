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
    'hero.whatsapp': 'Contactar por WhatsApp',
    
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
    'education.degree': 'Ingeniería en Sistemas Inteligentes',
    'education.institution': 'Universidad Autónoma de San Luis Potosí / UASLP',
    'education.period': '2018 - 2023',
    'education.description': 'Formación integral en Ciencias de la Computación e Inteligencia Artificial',
    
    // Experience  
    'experience.title': 'Experiencia',
    'experience.titleHighlight': 'Laboral',
    'experience.subtitle': 'Mi trayectoria profesional en el desarrollo web',
    'experience.position': 'Desarrollador de Software',
    'experience.company': 'Bentho Automation',
    'experience.location': 'San Luis Potosí, México',
    'experience.period': '2022 - 2024',
    'experience.description': 'Desarrollo e implementación de aplicaciones web y de escritorio a medida, optimizando procesos internos y ofreciendo soluciones tecnológicas eficientes para empresas privadas.',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Explora algunos de mis trabajos',
    'projects.viewDetails': 'Ver Detalles',
    
    // Project GM Trazabilidad
    'project.gm.title': 'GM Trazabilidad',
    'project.gm.description': 'Aplicacion Web para la trazabilidad de la linea de producción.',
    'project.gm.longDescription': 'Aplicación web para el escaneo de piezas en una línea de producción para la industria automotriz, garantizando precisión y eficiencia en el proceso de fabricación. Se implemento un sistema de seguridad para el inicio de sesión mediante hardware de detección de huellas dactilares, mejorando la autenticación y el control de acceso. Optimización del flujo de trabajo en la línea de producción integrando tecnologías de escaneo avanzadas. Colaboré con equipos multidisciplinarios para asegurar una integración fluida de hardware/software y una experiencia de usuario segura.',
    'project.gm.feature1': 'Sistema de autenticación y autorización por medio de datos biométricos',
    'project.gm.feature2': 'Recepción de entradas por medio de escanerés',
    'project.gm.feature3': 'Panel de administración completo',
    'project.gm.feature4': 'Gestión de línea de producción en tiempo real',
    'project.gm.challenge1': 'Implementación del hardware de datos biometrícos.',
    'project.gm.challenge2': 'Implementación del hardware para el escaneo de producto.',
    
    // Project Hospital
    'project.hospital.title': 'Dashboard Profesional',
    'project.hospital.description': 'Dashboard administrativo para hospital privado.',
    'project.hospital.longDescription': 'Se desarrollo una aplicación web integral para la gestión de un hospital privado, incorporando módulos esenciales para la operación médica y administrativa. Entre sus principales funcionalidades se incluyen: • Registro y gestión de pacientes y médicos, facilitando el control tanto de información personal como de datos profesionales. • Administración de inventarios médicos para asegurar la disponibilidad y trazabilidad de suministros y recursos. • Gestión de expedientes clínicos con acceso seguro a historiales médicos y documentación relacionada. • Generación de reportes y visualización de datos para apoyar la toma de decisiones estratégicas. • Gestión de pagos, facturación y control de caja con seguimiento preciso de las transacciones financieras. • Manejo de historiales administrativos y médicos, permitiendo una atención continua y optimizada al paciente.',
    'project.hospital.feature1': 'Gestión de pacientes y médicos',
    'project.hospital.feature2': 'Control de inventarios y suministros médicos',
    'project.hospital.feature3': 'Expedientes clínicos y acceso seguro a historial',
    'project.hospital.feature4': 'Generación de reportes e indicadores clave',
    'project.hospital.feature5': 'Gestión de pagos, facturas y caja',
    'project.hospital.feature6': 'Trazabilidad de historiales administrativos y médicos',
    'project.hospital.challenge1': 'Estructuración de la base de datos relacional.',
    
    // Project Bentho
    'project.bentho.title': 'BenthoCotizador',
    'project.bentho.description': 'Aplicación Web de generación de cotizaciones automaticas para Bentho Automation.',
    'project.bentho.longDescription': 'Desarrollé una aplicación web interna para la generación automática de cotizaciones especializadas para clientes, optimizando el flujo comercial y la atención al cliente. La solución permitió agilizar el proceso de elaboración de cotizaciones, reducir significativamente los tiempos de respuesta y mejorar la experiencia del usuario final.',
    'project.bentho.feature1': 'Generación automática de cotizaciones personalizadas',
    'project.bentho.feature2': 'Disminución del tiempo de respuesta al cliente',
    'project.bentho.feature3': 'Interfaz intuitiva y fácil de usar',
    'project.bentho.feature4': 'Integración con sistemas internos y bases de datos',
    'project.bentho.feature5': 'Mejora en la eficiencia del proceso de ventas',
    'project.bentho.feature6': 'Incremento en la satisfacción del cliente',
    'project.bentho.challenge1': 'Optimización en la consulta de lista de productos +100,000',
    
    // Project Detail
    'projectDetail.back': 'Volver',
    'projectDetail.descriptionTitle': 'Descripción del Proyecto',
    'projectDetail.featuresTitle': 'Características Principales',
    'projectDetail.challengesTitle': 'Desafíos Técnicos',
    'projectDetail.galleryTitle': 'Galería de Imágenes',
    'projectDetail.technologiesTitle': 'Tecnologías',
    'projectDetail.yearLabel': 'Año:',
    'projectDetail.teamLabel': 'Equipo:',
    'projectDetail.linksTitle': 'Enlaces',
    'projectDetail.viewDemo': 'Ver Demo',
    'projectDetail.viewCode': 'Ver Código',
    'projectDetail.notFound': 'Proyecto no encontrado',
    'projectDetail.backToHome': 'Volver al inicio',
    'projectDetail.clickToEnlarge': 'Click para ampliar',
    
    // Footer
    'footer.madeWith': 'Hecho con',
    'footer.andCode': 'y código',
    
    // Team
    'team.developer': 'Desarrollador',
    'team.developers': 'Desarrolladores',
  },
  en: {
    // Hero
    'hero.badge': 'Full Stack Software Engineer',
    'hero.greeting': 'Hi, I am',
    'hero.name': 'Eduardo Cordova',
    'hero.subtitle': 'Intelligent Systems Engineer, specialized in Web Development.',
    'hero.cv': 'My Resume',
    'hero.whatsapp': 'Contact via WhatsApp',
    
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
    'education.degree': 'Intelligent Systems Engineering',
    'education.institution': 'Autonomous University of San Luis Potosí / UASLP',
    'education.period': '2018 - 2023',
    'education.description': 'Comprehensive training in Computer Science and Artificial Intelligence',
    
    // Experience
    'experience.title': 'Work',
    'experience.titleHighlight': 'Experience',
    'experience.subtitle': 'My professional journey in web development',
    'experience.position': 'Software Developer',
    'experience.company': 'Bentho Automation',
    'experience.location': 'San Luis Potosí, México',
    'experience.period': '2022 - 2024',
    'experience.description': 'Development and implementation of custom web and desktop applications, optimizing internal processes and offering efficient technological solutions for private companies.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Explore some of my work',
    'projects.viewDetails': 'View Details',
    
    // Project GM Trazabilidad
    'project.gm.title': 'GM Traceability',
    'project.gm.description': 'Web application for production line traceability.',
    'project.gm.longDescription': 'Web application for scanning parts on a production line for the automotive industry, ensuring precision and efficiency in the manufacturing process. A security system was implemented for login through fingerprint detection hardware, improving authentication and access control. Optimization of production line workflow by integrating advanced scanning technologies. Collaborated with multidisciplinary teams to ensure smooth hardware/software integration and secure user experience.',
    'project.gm.feature1': 'Authentication and authorization system through biometric data',
    'project.gm.feature2': 'Input reception through scanners',
    'project.gm.feature3': 'Complete administration panel',
    'project.gm.feature4': 'Real-time production line management',
    'project.gm.challenge1': 'Implementation of biometric data hardware.',
    'project.gm.challenge2': 'Implementation of product scanning hardware.',
    
    // Project Hospital
    'project.hospital.title': 'Professional Dashboard',
    'project.hospital.description': 'Administrative dashboard for private hospital.',
    'project.hospital.longDescription': 'A comprehensive web application was developed for managing a private hospital, incorporating essential modules for medical and administrative operations. Its main functionalities include: • Registration and management of patients and doctors, facilitating control of both personal information and professional data. • Medical inventory administration to ensure availability and traceability of supplies and resources. • Clinical records management with secure access to medical histories and related documentation. • Report generation and data visualization to support strategic decision-making. • Payment, billing, and cash management with precise tracking of financial transactions. • Administrative and medical history management, enabling continuous and optimized patient care.',
    'project.hospital.feature1': 'Patient and doctor management',
    'project.hospital.feature2': 'Medical inventory and supplies control',
    'project.hospital.feature3': 'Clinical records and secure history access',
    'project.hospital.feature4': 'Report generation and key indicators',
    'project.hospital.feature5': 'Payment, invoice, and cash management',
    'project.hospital.feature6': 'Administrative and medical history traceability',
    'project.hospital.challenge1': 'Relational database structuring.',
    
    // Project Bentho
    'project.bentho.title': 'BenthoCotizador',
    'project.bentho.description': 'Web application for automatic quote generation for Bentho Automation.',
    'project.bentho.longDescription': 'I developed an internal web application for automatic generation of specialized quotes for clients, optimizing the commercial flow and customer service. The solution made it possible to streamline the quote preparation process, significantly reduce response times, and improve the end-user experience.',
    'project.bentho.feature1': 'Automatic generation of personalized quotes',
    'project.bentho.feature2': 'Reduced customer response time',
    'project.bentho.feature3': 'Intuitive and user-friendly interface',
    'project.bentho.feature4': 'Integration with internal systems and databases',
    'project.bentho.feature5': 'Improved sales process efficiency',
    'project.bentho.feature6': 'Increased customer satisfaction',
    'project.bentho.challenge1': 'Optimization of product list query +100,000',
    
    // Project Detail
    'projectDetail.back': 'Back',
    'projectDetail.descriptionTitle': 'Project Description',
    'projectDetail.featuresTitle': 'Main Features',
    'projectDetail.challengesTitle': 'Technical Challenges',
    'projectDetail.galleryTitle': 'Image Gallery',
    'projectDetail.technologiesTitle': 'Technologies',
    'projectDetail.yearLabel': 'Year:',
    'projectDetail.teamLabel': 'Team:',
    'projectDetail.linksTitle': 'Links',
    'projectDetail.viewDemo': 'View Demo',
    'projectDetail.viewCode': 'View Code',
    'projectDetail.notFound': 'Project not found',
    'projectDetail.backToHome': 'Back to home',
    'projectDetail.clickToEnlarge': 'Click to enlarge',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.andCode': 'and code',
    
    // Team
    'team.developer': 'Developer',
    'team.developers': 'Developers',
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
