'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ChefHat, Sofa, BedDouble, Building2, Hammer, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Flat Interior Design',
    shortDesc: 'Complete transformation of apartments and flats — from bare walls to a beautiful home.',
    longDesc: 'We handle every aspect of your flat\'s interior — space planning, false ceilings, modular furniture, flooring, lighting design, and décor. Our process begins with understanding your lifestyle, then crafting a space that feels uniquely yours.',
    features: ['Space planning & 3D visualization', 'False ceiling & lighting design', 'Modular wardrobes & storage', 'Flooring selection & installation', 'Full project management'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=80',
    tag: 'Most Popular',
  },
  {
    icon: ChefHat,
    title: 'Modular Kitchen Design',
    shortDesc: 'Smart kitchens with premium hardware, durable finishes, and optimized workflow.',
    longDesc: 'A modular kitchen from Balaji Design is a masterclass in functionality and elegance. We use HETTICH/HAFELE fittings, BWP-grade plywood, and premium laminates or acrylics to craft kitchens that last decades and age beautifully.',
    features: ['Custom layout planning', 'Premium German hardware (HETTICH)', 'Quartz / granite countertops', 'Under-cabinet lighting', 'Appliance integration'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    tag: null,
  },
  {
    icon: Sofa,
    title: 'Living Room Interior',
    shortDesc: 'Stunning living spaces that leave a lasting impression on every guest.',
    longDesc: 'The living room is where your home\'s personality shines. We design inviting, elegant living spaces with bespoke sofas, wall treatments, TV units, ambient lighting and curated decor accessories that tell your story.',
    features: ['Feature wall designs', 'Custom TV unit & media console', 'Sofa & seating selection', 'Ambient lighting design', 'Decorative accessories curation'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    tag: null,
  },
  {
    icon: BedDouble,
    title: 'Bedroom Interior',
    shortDesc: 'Serene retreats designed for deep rest, comfort, and personal expression.',
    longDesc: 'We design bedrooms that feel like a personal sanctuary — from the perfect wardrobe with seamless shutters to the ambient lighting that sets the mood. Every element is considered to maximize comfort and aesthetic coherence.',
    features: ['Wardrobe design & optimization', 'Headboard & bed design', 'False ceiling with cove lighting', 'Flooring & curtain selection', 'Children\'s & master bedroom specialists'],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    tag: null,
  },
  {
    icon: Building2,
    title: 'Office Interior Design',
    shortDesc: 'Corporate spaces that inspire productivity and reflect your brand identity.',
    longDesc: 'A well-designed office is a strategic asset. We create workspaces that balance openness and privacy, incorporate your brand identity, and inspire the people who work there. From cabins to boardrooms to collaborative zones.',
    features: ['Workstation & cabin design', 'Conference room interiors', 'Reception & lobby design', 'Acoustic solutions', 'Branding & signage integration'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tag: 'Commercial',
  },
  {
    icon: Hammer,
    title: 'Custom Furniture',
    shortDesc: 'One-of-a-kind furniture pieces crafted to your exact specifications.',
    longDesc: 'When off-the-shelf won\'t do, our custom furniture workshop delivers. From a statement dining table to built-in bookshelves to a unique console — every piece is designed to fit your space perfectly and built to last a lifetime.',
    features: ['Dining & center tables', 'Bookshelves & display units', 'Beds & storage ottomans', 'Solid wood & veneered options', 'In-house workshop, quick turnaround'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    tag: null,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1600&q=80"
            alt="Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-onyx/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-14 w-full">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-body mb-3">What We Do</p>
          <h1 className="heading-display text-4xl md:text-6xl text-ivory">Our Services</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-ivory border-b border-bone">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-smoke text-base font-light leading-relaxed">
            From complete home transformations to single room makeovers, our services cover the 
            full spectrum of interior design. Each project is handled with the same level of 
            dedication and attention to craft.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-ivory">
        {services.map((s, i) => {
          const Icon = s.icon
          const isEven = i % 2 === 0
          return (
            <div key={s.title} className={`${isEven ? 'bg-ivory' : 'bg-bone'}`}>
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={isEven ? '' : 'lg:order-2'}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gold flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                    {s.tag && (
                      <span className="text-xs tracking-widest uppercase text-gold font-body font-medium border border-gold px-3 py-1">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h2 className="heading-display text-3xl md:text-4xl text-charcoal mb-4">{s.title}</h2>
                  <div className="gold-line mb-5" />
                  <p className="text-smoke text-sm leading-relaxed font-light mb-6">{s.longDesc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check size={14} className="text-gold shrink-0" />
                        <span className="text-smoke text-sm font-light">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-gold text-xs">
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative h-80 md:h-[450px] overflow-hidden group img-zoom ${isEven ? '' : 'lg:order-1'}`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
