import { features } from '@/lib/data'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Por que nos escolher
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Qualidade que você sente no ar
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
