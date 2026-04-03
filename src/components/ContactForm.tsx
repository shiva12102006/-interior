'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-20"
      >
        <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-gold" />
        </div>
        <h3 className="font-display text-2xl text-charcoal mb-3">Thank You!</h3>
        <p className="text-smoke text-sm font-light max-w-sm">
          We've received your enquiry and will reach out within 24 hours to schedule your free consultation.
        </p>
      </motion.div>
    )
  }

  const fieldClass = (name: string) =>
    `w-full border-b py-3 bg-transparent text-charcoal text-sm font-body font-light outline-none transition-colors duration-300 placeholder:text-mist ${
      focused === name ? 'border-gold' : 'border-sand'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            className={fieldClass('name')}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            className={fieldClass('email')}
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            value={form.phone}
            onChange={handleChange}
            onFocus={() => setFocused('phone')}
            onBlur={() => setFocused(null)}
            className={fieldClass('phone')}
          />
        </div>
        <div>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            onFocus={() => setFocused('service')}
            onBlur={() => setFocused(null)}
            className={`${fieldClass('service')} cursor-pointer`}
          >
            <option value="">Service Interested In</option>
            <option value="flat">Flat Interior Design</option>
            <option value="kitchen">Modular Kitchen</option>
            <option value="living">Living Room Interior</option>
            <option value="bedroom">Bedroom Interior</option>
            <option value="office">Office Interior</option>
            <option value="furniture">Custom Furniture</option>
          </select>
        </div>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Tell us about your project — space size, budget, timeline..."
          rows={5}
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          className={`${fieldClass('message')} resize-none`}
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-gold w-full md:w-auto justify-center md:justify-start"
      >
        Send Enquiry
        <Send size={14} />
      </motion.button>
    </form>
  )
}
