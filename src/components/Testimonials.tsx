'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner, Noida',
    quote: 'Balaji Design transformed our 3BHK into an absolute dream. Every corner speaks luxury and thoughtfulness. The attention to detail is unmatched — we couldn\'t be happier.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul & Meena Verma',
    role: 'Villa Owners, Gurugram',
    quote: 'The modular kitchen they designed is the heart of our home now. Functional, beautiful, and perfectly organized. The team was professional and delivered on time.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arjun Kapoor',
    role: 'CEO, Kapoor Enterprises',
    quote: 'Our office now impresses every client who walks in. Balaji Design understood our brand perfectly and translated it into a space that motivates our entire team daily.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sunita Agarwal',
    role: 'Interior Enthusiast, Delhi',
    quote: 'From concept to completion, the process was seamless. They worked within our budget without compromising on quality. The bedroom feels like a five-star resort.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const next = () => {
    setDir(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }
  const prev = () => {
    setDir(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-body font-medium mb-3">Client Stories</p>
        <h2 className="heading-display text-4xl md:text-5xl text-ivory mb-4">
          What Our Clients
          <br />
          <span className="italic font-light text-sand">Say About Us</span>
        </h2>
        <div className="gold-line mx-auto mt-4 mb-14" />

        {/* Slider */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 60 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full px-4"
            >
              <Quote size={36} className="text-gold/30 mx-auto mb-6" />
              <p className="font-display text-xl md:text-2xl text-ivory/90 font-light italic leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body font-medium text-ivory text-sm tracking-wide">
                {testimonials[current].name}
              </p>
              <p className="text-mist text-xs tracking-widest uppercase mt-1 font-body">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 border border-smoke/40 text-mist hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                className={`transition-all duration-300 ${
                  i === current ? 'w-8 h-1 bg-gold' : 'w-2 h-1 bg-smoke/40 hover:bg-smoke'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-smoke/40 text-mist hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
