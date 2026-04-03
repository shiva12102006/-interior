import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-onyx/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-14 w-full">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-body mb-3">Reach Out</p>
          <h1 className="heading-display text-4xl md:text-6xl text-ivory">Contact Us</h1>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Info col */}
          <div className="lg:col-span-2">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-body font-medium mb-4">Let's Connect</p>
            <h2 className="heading-display text-3xl md:text-4xl text-charcoal mb-5">
              Start Your<br /><span className="italic font-light text-smoke">Design Journey</span>
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-smoke text-sm leading-relaxed font-light mb-10">
              Ready to transform your space? Reach out for a free consultation. 
              Our team will get back to you within 24 hours.
            </p>

            <ul className="space-y-6 mb-10">
              {[
                { Icon: MapPin, title: 'Visit Us', val: '123 Design Avenue, Sector 18\nNoida, UP 201301' },
                { Icon: Phone, title: 'Call Us', val: '+91 98765 43210\n+91 98765 43211' },
                { Icon: Mail, title: 'Email Us', val: 'hello@balajidesign.in\nprojects@balajidesign.in' },
                { Icon: Clock, title: 'Working Hours', val: 'Mon–Sat: 10am – 7pm\nSunday: By Appointment' },
              ].map(({ Icon, title, val }) => (
                <li key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-bone flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-charcoal text-xs tracking-widest uppercase font-body font-medium mb-1">{title}</p>
                    <p className="text-smoke text-sm font-light leading-relaxed whitespace-pre-line">{val}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <p className="text-charcoal text-xs tracking-widest uppercase font-body font-medium mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-bone flex items-center justify-center text-smoke hover:border-gold hover:text-gold transition-colors duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form col */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 border border-bone">
            <h3 className="font-display text-2xl text-charcoal mb-2">Send Us a Message</h3>
            <p className="text-smoke text-sm font-light mb-8">
              Fill in the form and we'll reach out to schedule your free consultation.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-bone">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3910!3d28.5700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzEyLjAiTiA3N8KwMjMnMjcuNiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Balaji Design Location"
        />
      </section>
    </>
  )
}
