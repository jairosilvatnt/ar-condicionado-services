import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=modern%20living%20room%20clean%20air&brightness=70"
          alt="Ambiente climatizado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl text-white animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-semibold text-sky-200">
              #1 Especialistas em Climatização
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Conforto térmico e <span className="text-sky-400">ar puro</span>{' '}
            para sua casa ou empresa.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Especialistas em instalação, manutenção e limpeza preventiva de
            ar-condicionado. Atendimento rápido, técnico e certificado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 h-14 shadow-xl hover:translate-y-[-2px] transition-all"
            >
              Agendar Visita Técnica
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold text-lg px-8 h-14 backdrop-blur-sm"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
