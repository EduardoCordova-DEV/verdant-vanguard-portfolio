import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Eduardo Cordova & Loveable</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" />{' '}
              y código
            </span>
          </div>

          {/* Right side - Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/EduardoCordova-DEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardocordova-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:eduardocordova.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
