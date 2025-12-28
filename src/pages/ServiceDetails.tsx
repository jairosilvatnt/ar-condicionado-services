import { useParams, Link } from 'react-router-dom'
import { services } from '@/lib/data'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useEffect } from 'react'

const ServiceDetails = () => {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-secondary mb-4">
          Serviço não encontrado
        </h1>
        <Button asChild>
          <Link to="/">Voltar para Home</Link>
        </Button>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="pl-0 hover:pl-2 transition-all"
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Home
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Icon className="w-4 h-4" />
              {service.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-secondary font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Profissionais qualificados</span>
              </div>
              <div className="flex items-center gap-3 text-secondary font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Equipamentos de última geração</span>
              </div>
              <div className="flex items-center gap-3 text-secondary font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Garantia de serviço</span>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="/#contact">Solicitar Orçamento Agora</a>
            </Button>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
