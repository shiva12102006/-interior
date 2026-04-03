import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  )
}
