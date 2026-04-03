'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, ArrowUpRight } from 'lucide-react'

const categories = ['All', 'Kitchen', 'Living Room', 'Bedroom', 'Office', 'Flat Interior']

const projects = [
  {
    id: 1,
    title: 'The Whitfield Residence',
    category: 'Flat Interior',
    location: 'Noida Sector 50',
    area: '2400 sq ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=80',
    desc: 'A complete 3BHK transformation featuring bespoke woodwork, imported tiles, and a warm neutral palette.',
  },
  {
    id: 2,
    title: 'The Heritage Kitchen',
    category: 'Kitchen',
    location: 'Greater Noida',
    area: '320 sq ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    desc: 'L-shaped modular kitchen with Hettich fittings, quartz countertops and a built-in dining nook.',
  },
  {
    id: 3,
    title: 'Zen Master Suite',
    category: 'Bedroom',
    location: 'Gurugram',
    area: '420 sq ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    desc: 'A serene master bedroom with Japanese-inspired minimalism and a walk-in wardrobe.',
  },
  {
    id: 4,
    title: 'Vertex Corporate Office',
    category: 'Office',
    location: 'Connaught Place',
    area: '4500 sq ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    desc: 'A 50-seat office with collaborative zones, private cabins, and a sleek reception area.',
  },
  {
    id: 5,
    title: 'The Grand Living',
    category: 'Living Room',
    location: 'Delhi NCR',
    area: '850 sq ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    desc: 'An expansive living room featuring custom sofa sets, a dramatic feature wall, and Italian marble flooring.',
  },
  {
    id: 6,
    title: 'Sunrise Penthouse',
    category: 'Flat Interior',
    location: 'Sector 18, Noida',
    area: '3800 sq ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    desc: 'Luxury 4BHK penthouse with rooftop terrace, private bar, and panoramic city views.',
  },
  {
    id: 7,
    title: 'Nordic Bedroom',
    category: 'Bedroom',
    location: 'Faridabad',
    area: '280 sq ft',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    desc: 'Scandinavian-inspired bedroom for a young professional — minimal, bright, and functional.',
  },
  {
    id: 8,
    title: 'Chef\'s Island Kitchen',
    category: 'Kitchen',
    location: 'South Delhi',
    area: '410 sq ft',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',
    desc: 'Professional-grade kitchen with island worktop, wine rack, and butler\'s pantry.',
  },
  {
    id: 9,
    title: 'Velvet Lounge Office',
    category: 'Office',
    location: 'Gurgaon',
    area: '2200 sq ft',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&q=80',
    desc: 'Boutique agency office with velvet accents, plants, and an Instagram-worthy pantry.',
  },
]

type Project = typeof projects[0]

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const [modal, setModal] = useState<Project | null>(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80"
            alt="Projects"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-onyx/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-14 w-full">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-body mb-3">Portfolio</p>
          <h1 className="heading-display text-4xl md:text-6xl text-ivory">Our Projects</h1>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-ivory py-10 px-6 md:px-12 border-b border-bone sticky top-20 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 items-center">
          <span className="text-smoke text-xs tracking-widest uppercase font-body mr-2">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs tracking-widest uppercase px-4 py-2 font-body font-medium transition-all duration-300 border ${
                active === cat
                  ? 'bg-gold text-white border-gold'
                  : 'border-bone text-smoke hover:border-gold hover:text-gold bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-smoke text-xs font-body">{filtered.length} projects</span>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden cursor-pointer bg-white"
                  onClick={() => setModal(p)}
                >
                  <div className="relative h-64 md:h-72 img-zoom">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <p className="text-ivory/80 text-xs font-light font-body line-clamp-2">{p.desc}</p>
                    </div>
                  </div>
                  <div className="p-5 border-b-2 border-transparent group-hover:border-gold transition-colors duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gold text-xs tracking-widest uppercase font-body">{p.category}</span>
                      <span className="text-mist text-xs font-body">{p.year}</span>
                    </div>
                    <h3 className="font-display text-lg text-charcoal font-medium">{p.title}</h3>
                    <p className="flex items-center gap-1 text-smoke text-xs mt-1.5 font-body">
                      <MapPin size={11} /> {p.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-onyx/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative bg-ivory max-w-3xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-charcoal text-ivory flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <X size={16} />
              </button>
              <div className="relative h-64 md:h-80">
                <Image src={modal.image} alt={modal.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <span className="text-gold text-xs tracking-widest uppercase font-body">{modal.category}</span>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal mt-2 mb-4">{modal.title}</h3>
                <p className="text-smoke text-sm leading-relaxed font-light mb-6">{modal.desc}</p>
                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-bone">
                  {[
                    { label: 'Location', val: modal.location },
                    { label: 'Area', val: modal.area },
                    { label: 'Year', val: modal.year },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <p className="text-mist text-xs uppercase tracking-widest font-body">{label}</p>
                      <p className="text-charcoal text-sm font-medium mt-1 font-body">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
