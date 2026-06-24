import React from 'react'
import ProfileCard from './ProfileCard'

export default function About(){
  return (
    <section>
      <h2 className="section-title text-3xl font-semibold text-white">Mihretu</h2>
      <p className="mt-3 text-gray-300 max-w-3xl leading-relaxed">An IT Project Coordinator and Frontend Developer with experience supporting software development, website projects, ecommerce work, and cross-functional technical teams. His work combines responsive React and Tailwind CSS development with Agile/Scrum coordination, sprint planning, backlog support, documentation, reporting, and clear communication between clients and technical teams.</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-stretch">
        <ProfileCard name="Mihretu Petros" role="IT Project Coordinator & Frontend Developer" image="/images/mihretu-petros-profile.png" bio="Builds responsive web applications with React and Tailwind CSS, develops reusable UI components, implements design updates, and coordinates project requirements, timelines, deliverables, stakeholder communication, documentation, and reporting." />
        <div className="rounded-xl border border-brand-4/20 bg-white/10 p-6 backdrop-blur-sm card-shadow">
          <h3 className="text-xl font-semibold text-white">I work on</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ['Frontend Development', 'Builds responsive web applications with React and Tailwind CSS, reusable components, interactive interfaces, and design updates aligned with business and user requirements.'],
              ['IT Project Coordination', 'Coordinates requirements, timelines, deliverables, client communication, technical team updates, documentation, reporting, handoffs, and timely delivery.'],
              ['Agile / Scrum Support', 'Supports sprint planning, backlog management, task organization, blocker tracking, and software development lifecycle visibility.'],
              ['Stakeholder Collaboration', 'Keeps clients, product owners, and technical teams aligned through clear communication, progress updates, and practical delivery follow-through.'],
              ['Responsive UI Quality', 'Reviews layouts across mobile, tablet, and desktop screens for usability, consistency, accessibility, and stable visual behavior.'],
              ['Delivery Documentation', 'Maintains project notes, reports, requirements, and handoff details so teams can understand decisions and next steps.']
            ].map(([title, copy]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-dark-bg/35 p-4">
                <h4 className="font-semibold text-brand-4">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
