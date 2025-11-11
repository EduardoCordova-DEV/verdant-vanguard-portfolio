import { Moon, Sun, Languages } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="fixed top-0 right-0 z-50 p-4">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="card-glow"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          <Languages className="w-4 h-4" />
          <span className="sr-only">
            {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="card-glow"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>
      </div>
    </header>
  )
}

export default Header
