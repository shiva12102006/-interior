'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const services = [
  'Flat Interior Design',
  'Modular Kitchen',
  'Living Room',
  'Bedroom Interior',
  'Office Interior',
  'Custom Furniture',
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-onyx text-ivory relative overflow-hidden">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Gold accent bg */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-display text-3xl font-light tracking-wider text-ivory">Balaji</span>
              <span className="font-display text-xs tracking-[0.35em] uppercase text-gold">Design</span>
            </Link>
            <p className="text-mist text-sm leading-relaxed mb-6 font-light">
              Crafting timeless interiors that blend luxury with livability. Every space tells a story.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-smoke/40 flex items-center justify-center text-mist hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-6 font-body font-medium">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-mist text-sm hover:text-ivory transition-colors duration-300 font-light flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-smoke group-hover:bg-gold transition-colors duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-6 font-body font-medium">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-mist text-sm hover:text-ivory transition-colors duration-300 font-light flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-6 font-body font-medium">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-mist text-sm font-light leading-relaxed">
                  123 Design Avenue, Sector 18<br />Noida, UP 201301
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:+919876543210" className="text-mist text-sm font-light hover:text-ivory transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-gold shrink-0" />
                <a href="mailto:hello@balajidesign.in" className="text-mist text-sm font-light hover:text-ivory transition-colors">
                  hello@balajidesign.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-smoke/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-smoke text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Balaji Design Studio. All rights reserved.
          </p>
          <p className="text-smoke text-xs font-light">
            Crafted with passion for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  )
}
