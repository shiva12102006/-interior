'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ChefHat, Sofa, BedDouble, Building2, Hammer, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Flat Interior Design',
    desc: 'Complete flat transformations with thoughtful space planning, premium finishes, and personalized aesthetics.',
  },
  {
    icon: ChefHat,
    title: 'Modular Kitchen',
    desc: 'Smart, stylish kitchens with German hardware, quartz countertops, and optimized storage solutions.',
  },
  {
    icon: Sofa,
    title: 'Living Room',
    desc: 'Curated living spaces that balance comfort and elegance — your home\'s first impression, perfected.',
  },
  {
    icon: BedDouble,
    title: 'Bedroom Interior',
    desc: 'Serene, restorative bedrooms with custom wardrobes, ambient lighting, and luxurious finishes.',
  },
  {
    icon: Building2,
    title: 'Office Interior',
    desc: 'Productive, inspiring workspaces that reflect your brand and elevate your team\'s performance.',
  },
  {
    icon: Hammer,
    title: 'Custom Furniture',
    desc: 'Bespoke furniture crafted to your exact vision — unique pieces that define your space.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-body font-medium mb-3">What We Offer</p>
            <h2 className="heading-display text-4xl md:text-5xl text-charcoal">
              Our Design<br />
              <span className="italic font-light text-smoke">Services</span>
            </h2>
            <div className="gold-line mt-4" />
          </div>
          <p className="text-smoke max-w-sm text-sm leading-relaxed font-light">
            From conceptual design to final execution, we handle every detail with 
            precision and artistry.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative bg-white border border-bone p-8 card-hover cursor-pointer"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 bg-bone flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-400">
                <Icon size={22} className="text-smoke group-hover:text-white transition-colors duration-400" />
              </div>
              <h3 className="font-display text-xl font-medium text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                {title}
              </h3>
              <p className="text-smoke text-sm leading-relaxed font-light mb-5">{desc}</p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold font-body font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              >
                Explore <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
