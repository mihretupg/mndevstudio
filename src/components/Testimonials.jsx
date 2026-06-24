import React, {useEffect, useState} from 'react'

const testimonials = [
  {
    quote: 'Mihretu helped turn our rough product idea into a polished MVP faster than we expected. The communication was clear, and the final app felt ready for real users.',
    name: 'Wintan Teferi',
    role: 'CEO and Co-founder, Kelem Arts',
    location: 'Washington, DC, USA'
  },
  {
    quote: 'Mihretu understood both the design and technical side of the project. Our new website is faster, cleaner, and much easier for customers to use.',
    name: 'Tensae Mekonen',
    role: 'Co-founder, Abro Collective',
    location: 'Washington, DC, USA'
  },
  {
    quote: 'Mihretu helped us connect the frontend experience, technical requirements, and delivery workflow. It felt like working with a focused in-house product partner.',
    name: 'Tsegaye T',
    role: 'CEO, Express Brands',
    location: 'Brooklyn, New York, USA'
  },
  {
    quote: 'Mihretu helped us present Novaria Limo with a premium website that matches our service quality and gives customers a clear path to request a ride.',
    name: 'David Mirkano',
    role: 'Founder, Novaria Limo',
    location: 'Dallas, TX, USA'
  }
]

export default function Testimonials(){
  const [activeIndex, setActiveIndex] = useState(0)
  const totalTestimonials = testimonials.length

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % totalTestimonials)
    }, 5500)

    return () => window.clearInterval(interval)
  }, [totalTestimonials])

  const goToPrevious = () => {
    setActiveIndex(current => (current - 1 + totalTestimonials) % totalTestimonials)
  }

  const goToNext = () => {
    setActiveIndex(current => (current + 1) % totalTestimonials)
  }

  return (
    <section aria-labelledby="testimonials-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-brand-4 font-semibold">Client feedback</p>
          <h2 id="testimonials-heading" className="section-title mt-3 text-3xl font-semibold text-white">Testimonials</h2>
        </div>
        <p className="max-w-xl text-gray-300 leading-relaxed">Simple, focused partnerships with teams building websites, MVPs, dashboards, ecommerce experiences, and coordinated IT projects.</p>
      </div>

      <div className="mt-8">
        <div className="relative overflow-hidden rounded-lg border border-brand-4/20 bg-white/10 p-4 shadow-lg backdrop-blur-sm md:p-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-4/80 to-transparent" aria-hidden="true"></div>
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{transform: `translateX(-${activeIndex * 100}%)`}}
              aria-live="polite"
            >
              {testimonials.map(testimonial => (
                <article key={testimonial.name} className="w-full shrink-0 px-1">
                  <div className="relative min-h-[19rem] overflow-hidden rounded-lg border border-white/10 bg-dark-bg/35 p-6 md:p-8">
                    <div className="absolute right-6 top-4 text-7xl font-bold leading-none text-brand-4/15" aria-hidden="true">&quot;</div>
                    <div className="mb-6 flex gap-1 text-brand-4" aria-label="5 star rating">
                      {Array.from({length: 5}).map((_, starIndex) => (
                        <span key={starIndex} aria-hidden="true">&#9733;</span>
                      ))}
                    </div>
                    <p className="relative max-w-4xl text-lg leading-relaxed text-gray-100 md:text-xl">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-4 text-sm font-bold text-dark-bg shadow-[0_0_20px_rgba(204,255,0,0.18)]">
                          {testimonial.name.split(' ').map(part => part[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                          <p className="mt-1 text-xs font-medium text-brand-4/90">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-400">
                        {activeIndex + 1} / {totalTestimonials}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="grid h-10 w-10 place-items-center rounded-full border border-brand-4/30 bg-white/10 text-lg font-semibold text-brand-4 transition hover:border-brand-4 hover:bg-brand-4 hover:text-dark-bg"
                aria-label="Show previous testimonial"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="grid h-10 w-10 place-items-center rounded-full border border-brand-4/30 bg-white/10 text-lg font-semibold text-brand-4 transition hover:border-brand-4 hover:bg-brand-4 hover:text-dark-bg"
                aria-label="Show next testimonial"
              >
                &rarr;
              </button>
            </div>

            <div className="flex gap-2" aria-label="Choose testimonial">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition ${isActive ? 'w-8 bg-brand-4' : 'w-2.5 bg-white/25 hover:bg-white/50'}`}
                    aria-label={`Show ${testimonial.name} testimonial`}
                    aria-current={isActive ? 'true' : undefined}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
