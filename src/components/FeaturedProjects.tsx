'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'The Serene Penthouse',
    category: 'Flat Interior',
    location: 'Noida Sector 50',
    image: '/download.avif',
    size: 'large',
  },
  {
    id: 2,
    title: 'Contemporary Kitchen',
    category: 'Modular Kitchen',
    location: 'Greater Noida',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    size: 'small',
  },
  {
    id: 3,
    title: 'Zen Master Suite',
    category: 'Bedroom',
    location: 'Gurugram',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
    size: 'small',
  },
  {
    id: 4,
    title: 'Executive Office',
    category: 'Office Interior',
    location: 'Connaught Place',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    size: 'medium',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-bone">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-body font-medium mb-3">Our Work</p>
            <h2 className="heading-display text-4xl md:text-5xl text-charcoal">
              Featured<br />
              <span className="italic font-light text-smoke">Projects</span>
            </h2>
            <div className="gold-line mt-4" />
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal font-body font-medium border-b border-charcoal pb-1 hover:border-gold hover:text-gold transition-colors duration-300 self-start md:self-end"
          >
            View All Projects <ArrowRight size={12} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden img-zoom cursor-pointer"
          >
            <div className="relative h-72 md:h-96 lg:h-full min-h-[450px]">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-gold text-xs tracking-widest uppercase font-body">{projects[0].category}</span>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mt-2 font-light">{projects[0].title}</h3>
                <p className="text-ivory/60 text-xs mt-1 font-body">{projects[0].location}</p>
                <div className="w-0 h-px bg-gold mt-4 group-hover:w-20 transition-all duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Smaller cards */}
          {projects.slice(1).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="relative h-56 md:h-72">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-gold text-xs tracking-widest uppercase font-body">{p.category}</span>
                  <h3 className="font-display text-xl text-ivory mt-1 font-light">{p.title}</h3>
                  <p className="text-ivory/60 text-xs mt-1 font-body">{p.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
