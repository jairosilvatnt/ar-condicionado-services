import { Hero } from '@/components/Hero'
import { ServicesGrid } from '@/components/ServicesGrid'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { Testimonials } from '@/components/Testimonials'
import { ContactForm } from '@/components/ContactForm'
import { Helmet } from 'react-helmet' // Assuming react-helmet is not available, I will simulate metadata in head using useEffect if needed, but for now just standard rendering.

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
