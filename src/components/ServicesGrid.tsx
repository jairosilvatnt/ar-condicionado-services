import { services } from '@/lib/data'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            O que fazemos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Soluções completas para seu ar-condicionado
          </h3>
          <p className="text-muted-foreground">
            Trabalhamos com todas as marcas e modelos, garantindo a melhor
            performance para o seu equipamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="group border-none shadow-subtle hover:shadow-elevation transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-lg shadow-md text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-3">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Spacer if needed or extra content */}
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-all"
                  >
                    <Link
                      to={`/servico/${service.id}`}
                      className="flex items-center gap-2 font-semibold text-secondary"
                    >
                      Saiba Mais <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
