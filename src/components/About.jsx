import React from 'react'
import ProfileCard from './ProfileCard'

export default function About(){
  return (
    <section>
      <h2 className="section-title text-3xl font-semibold text-white">About Us</h2>
      <p className="mt-3 text-gray-300 max-w-2xl leading-relaxed">MN Dev Studio is a boutique freelance software agency built by two developers who balance polished frontend craftsmanship with robust backend engineering. We partner with startups and growth teams to launch modern, production-ready digital products that scale securely and look sharp.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard name="Mihretu Petros" role="Frontend Specialist" image="/images/mihretu-petros-profile.png" bio="Designs refined, responsive interfaces with React and Tailwind CSS, focusing on usability, performance, and visual consistency across screens." />
        <ProfileCard name="Nathan Derara" role="Backend Specialist" image="/images/nathan-derara-profile.png" bio="Develops scalable APIs and backend systems with Node.js, Python, PHP and database stacks, prioritizing security, maintainability, and strong operational reliability." />
      </div>
    </section>
  )
}
