import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`

      setScrollProgress(Number(scroll))
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Home', action: () => scrollToSection('hero') },
    { name: 'Serviços', action: () => scrollToSection('services') },
    { name: 'Por que nós', action: () => scrollToSection('why-us') },
    { name: 'Depoimentos', action: () => scrollToSection('testimonials') },
    { name: 'Contato', action: () => scrollToSection('contact') },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4',
      )}
    >
      <div
        className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-primary tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl">
            C
          </div>
          <span
            className={cn(
              'transition-colors',
              isScrolled ? 'text-secondary' : 'text-secondary lg:text-white',
            )}
          >
            Climatech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className={cn(
                'text-sm font-medium hover:text-primary transition-colors',
                isScrolled
                  ? 'text-secondary'
                  : 'text-white/90 hover:text-white',
              )}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={() => scrollToSection('contact')}
            className={cn(
              'font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105',
              isScrolled
                ? 'bg-primary text-white'
                : 'bg-accent text-white hover:bg-accent/90',
            )}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={
                  isScrolled ? 'text-secondary' : 'text-secondary lg:text-white'
                }
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl">
                  C
                </div>
                Climatech
              </SheetTitle>
              <SheetDescription className="text-left mb-6">
                Navegue pelos nossos serviços e entre em contato.
              </SheetDescription>
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-lg font-medium text-left py-2 border-b border-border hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full bg-accent hover:bg-accent/90"
                >
                  Solicitar Orçamento
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
