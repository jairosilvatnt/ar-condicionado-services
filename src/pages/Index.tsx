import { Hero } from '@/components/Hero'
import { ServicesGrid } from '@/components/ServicesGrid'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { Testimonials } from '@/components/Testimonials'
import { ContactForm } from '@/components/ContactForm'

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

export default Index
