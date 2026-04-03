'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
          alt="Interior Design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-onyx/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-xs tracking-[0.4em] uppercase font-body font-medium mb-4"
        >
          Start Your Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-display text-4xl md:text-6xl text-ivory mb-6"
        >
          Ready to Transform
          <br />
          <span className="italic font-light text-gold-light">Your Space?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-ivory/65 text-base font-light max-w-xl mx-auto mb-10 font-body"
        >
          Book a free consultation today. Our designers will visit your space and present 
          a tailored design concept — absolutely free.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contact" className="btn-gold text-sm">
            Get Free Consultation
            <ArrowRight size={15} />
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 text-ivory border border-ivory/40 px-8 py-3.5 text-sm font-body font-medium tracking-widest uppercase hover:bg-ivory hover:text-charcoal transition-all duration-300"
          >
            <Phone size={15} />
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
