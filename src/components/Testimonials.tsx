import { testimonials } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            O que nossos clientes dizem
          </h3>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-none shadow-sm bg-white">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-6 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 flex-grow">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-secondary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
