'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Clock, Users, Star, CheckCircle2 } from 'lucide-react'

const stats = [
  { icon: Award, num: '500+', label: 'Projects Completed' },
  { icon: Clock, num: '12+', label: 'Years of Experience' },
  { icon: Users, num: '450+', label: 'Happy Clients' },
  { icon: Star, num: '98%', label: 'Satisfaction Rate' },
]

const team = [
  {
    name: 'Rajesh Balaji',
    role: 'Principal Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: '15+ years crafting luxury interiors across India.',
  },
  {
    name: 'Priya Nair',
    role: 'Senior Interior Designer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
    bio: 'Specializes in contemporary residential spaces.',
  },
  {
    name: 'Aryan Mehta',
    role: 'Kitchen Design Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Expert in modular kitchens and built-in furniture.',
  },
  {
    name: 'Sneha Gupta',
    role: 'Commercial Design Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Transforms offices into inspiring workplaces.',
  },
]

const reasons = [
  'End-to-end project management from concept to handover',
  'Premium materials sourced from verified global suppliers',
  'On-time delivery with detailed project timelines',
  '3D visualization before execution begins',
  'Dedicated after-sales support for 1 year',
  'Transparent pricing with no hidden costs',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="About Balaji Design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-onyx/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-14 w-full">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-body mb-3">Our Story</p>
          <h1 className="heading-display text-4xl md:text-6xl text-ivory">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-body font-medium mb-4">Our Journey</p>
            <h2 className="heading-display text-3xl md:text-4xl text-charcoal mb-6">
              Born from a Passion for
              <br /><span className="italic font-light text-smoke">Beautiful Living</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-smoke leading-relaxed text-sm mb-5 font-light">
              Founded in 2012 by principal designer Rajesh Balaji, our studio began with a simple 
              belief: that exceptional design should be accessible to every homeowner, not just the 
              privileged few.
            </p>
            <p className="text-smoke leading-relaxed text-sm mb-5 font-light">
              Over 12 years, we've grown from a two-person team to a full-service design studio 
              with specialists in residential interiors, commercial spaces, and bespoke furniture. 
              Every project is approached with fresh eyes and complete dedication.
            </p>
            <p className="text-smoke leading-relaxed text-sm font-light">
              Today, Balaji Design stands as one of the most trusted interior design studios in 
              Delhi-NCR, with a portfolio spanning 500+ completed projects across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[450px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80"
                alt="Our Studio"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-gold p-6 hidden md:block shadow-xl">
              <p className="font-display text-4xl text-white font-light">12+</p>
              <p className="text-white/80 text-xs tracking-widest uppercase font-body mt-1">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-bone">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              label: 'Our Mission',
              heading: 'Design with Purpose',
              text: 'To create spaces that elevate everyday living — environments that are not just visually stunning, but deeply functional and a true reflection of the people who inhabit them. We design for life, not just for looks.',
            },
            {
              label: 'Our Vision',
              heading: 'Redefine Indian Interiors',
              text: 'To set a new benchmark for interior design in India by combining global design sensibilities with the warmth of Indian aesthetics. We envision a world where every home is a sanctuary and every workspace an inspiration.',
            },
          ].map(({ label, heading, text }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-white p-10 border border-sand/50"
            >
              <div className="w-1 h-12 bg-gold mb-6" />
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">{label}</p>
              <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 font-medium">{heading}</h3>
              <p className="text-smoke text-sm leading-relaxed font-light">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 border border-smoke/30 flex items-center justify-center mx-auto mb-4 group-hover:border-gold transition-colors duration-300">
                <Icon size={20} className="text-gold" />
              </div>
              <p className="font-display text-3xl md:text-4xl text-ivory font-light">{num}</p>
              <p className="text-mist text-xs tracking-widest uppercase mt-2 font-body">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80"
              alt="Why Choose Balaji"
              fill
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-body font-medium mb-4">Our Promise</p>
            <h2 className="heading-display text-3xl md:text-4xl text-charcoal mb-6">
              Why Choose
              <br /><span className="italic font-light text-smoke">Balaji Design</span>
            </h2>
            <div className="gold-line mb-8" />
            <ul className="space-y-4">
              {reasons.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={17} className="text-gold mt-0.5 shrink-0" />
                  <p className="text-smoke text-sm font-light leading-relaxed">{r}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bone">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-body font-medium mb-3">The Experts</p>
            <h2 className="heading-display text-4xl md:text-5xl text-charcoal">
              Meet Our <span className="italic font-light text-smoke">Team</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden bg-white"
              >
                <div className="relative h-72 img-zoom">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-ivory/80 text-xs font-light font-body">{member.bio}</p>
                  </div>
                </div>
                <div className="p-5 border-b-2 border-transparent group-hover:border-gold transition-colors duration-300">
                  <h3 className="font-display text-lg text-charcoal font-medium">{member.name}</h3>
                  <p className="text-gold text-xs tracking-widest uppercase font-body mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
