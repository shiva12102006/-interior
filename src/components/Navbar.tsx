'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-sand/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-display text-2xl font-light tracking-wider transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-ivory'
              }`}
            >
              Balaji
            </span>
            <span
              className={`font-display text-xs tracking-[0.35em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-gold' : 'text-gold-light'
              }`}
            >
              Design
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? scrolled ? 'text-gold' : 'text-gold-light'
                    : scrolled ? 'text-charcoal hover:text-gold' : 'text-ivory/90 hover:text-ivory'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-xs tracking-[0.2em] uppercase font-medium px-6 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? 'border-gold text-gold hover:bg-gold hover:text-white'
                  : 'border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal'
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-ivory'}`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-onyx flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-4xl font-light transition-colors duration-300 ${
                    pathname === link.href ? 'text-gold' : 'text-ivory hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <p className="text-smoke text-xs tracking-widest uppercase">Balaji Design Studio</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
