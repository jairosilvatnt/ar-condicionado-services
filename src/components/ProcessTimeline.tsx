import { processSteps } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sky-400 font-bold tracking-wide uppercase text-sm mb-3">
            Processo
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como funciona nosso atendimento
          </h3>
        </div>

        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 transform" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-full border-2 border-sky-400 bg-secondary flex items-center justify-center text-xl font-bold text-sky-400 mb-6 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-secondary',
                    'shadow-[0_0_20px_rgba(56,189,248,0.3)]',
                  )}
                >
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-400 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
