'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=90"
          alt="Luxury Interior"
          fill
          priority
          className="object-cover"
          onLoad={() => setLoaded(true)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/85 via-onyx/55 to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-onyx/40 to-transparent" />
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: loaded ? '120px' : 0 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
        className="absolute left-16 top-1/2 -translate-y-1/2 w-px bg-gold/60 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-6 font-body font-medium"
          >
            Luxury Interior Design Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.05] mb-6"
          >
            Transforming Spaces
            <br />
            <span className="font-display text-5xl md:text-6xl lg:text-7xl font-extralight italic text-gold-light">
              Into Beautiful
            </span>
            <br />
            Living
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-ivory/70 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg font-body"
          >
            At Balaji Design, we craft interiors that reflect your personality — 
            blending luxury with function, elegance with comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-gold">
              Get Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link href="/projects" className="btn-outline border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal">
              View Projects
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex gap-10 mt-16 pt-8 border-t border-ivory/15"
          >
            {[
              { num: '500+', label: 'Projects Done' },
              { num: '12+', label: 'Years Experience' },
              { num: '98%', label: 'Client Satisfaction' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-2xl md:text-3xl font-light text-gold">{num}</p>
                <p className="text-ivory/60 text-xs tracking-widest uppercase font-body mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/50"
      >
        <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
