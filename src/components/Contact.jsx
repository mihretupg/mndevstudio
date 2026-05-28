import React, {useState} from 'react'

function WhatsAppIcon({className = ''}){
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 3.25a8.55 8.55 0 0 0-7.33 12.95l-1 3.55 3.67-.96A8.55 8.55 0 1 0 12 3.25Zm0 15.54a6.98 6.98 0 0 1-3.56-.98l-.25-.15-2.18.57.59-2.1-.17-.27A6.97 6.97 0 1 1 12 18.79Zm3.82-5.23c-.21-.1-1.25-.62-1.44-.69-.19-.07-.33-.1-.47.1-.14.21-.54.69-.66.83-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.67-1.03-.62-.55-1.04-1.23-1.16-1.44-.12-.21-.01-.32.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36-.05-.1-.47-1.13-.64-1.55-.17-.4-.34-.35-.47-.36h-.4c-.14 0-.36.05-.55.26-.19.21-.73.71-.73 1.74s.75 2.02.85 2.16c.1.14 1.47 2.25 3.56 3.15.5.22.89.35 1.19.45.5.16.95.14 1.31.08.4-.06 1.25-.51 1.42-1 .18-.49.18-.91.12-1-.05-.09-.19-.14-.4-.24Z"
      />
    </svg>
  )
}

const contactDetails = [
  {label: 'Email', value: 'hello@mndevstudio.com', href: 'mailto:mihretupg@gmail.com'},
  {label: 'Phone', value: '+251941268503 | +251933040155', href: 'tel:+251941268503'},
  {
    label: 'WhatsApp',
    value: 'Chat with us ',
    href: 'https://wa.me/251941268503',
    external: true,
    icon: WhatsAppIcon
  },
  {label: 'Response time', value: 'We usually respond within 30 minutes'}
]

const serviceOptions = [
  'Startup MVP',
  'Business Website',
  'Custom Software',
  'UI/UX Design',
  'Backend API',
  'E-Commerce',
  'Maintenance & Support'
]

export default function Contact(){
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: Connect this project request form to the backend or email delivery service.
    alert('Thanks! Your project request has been received.')
  }

  const fieldClasses = 'mt-2 w-full rounded-xl bg-white/10 border border-brand-4/25 px-4 py-3 text-white placeholder-gray-400 shadow-inner outline-none transition focus:border-brand-4 focus:ring-2 focus:ring-brand-4/30'

  return (
    <section aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-brand-4 font-semibold">Start a project</p>
          <h2 id="contact-heading" className="section-title mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">Let&rsquo;s Build Your Next Software Project</h2>
          <p className="mt-5 text-gray-300 leading-relaxed max-w-2xl">Have a project idea, startup MVP, business website, or custom software need? Send us a message and we&rsquo;ll get back to you within 24 hours.</p>

          <div className="mt-8 rounded-3xl panel-light border border-brand-4/20 p-6 shadow-lg backdrop-blur-sm">
            <div className="grid gap-5">
              {contactDetails.map(item => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-sm font-semibold text-brand-4">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      aria-label={item.external ? `Message MN Dev Studio on ${item.label}` : undefined}
                      className="inline-flex items-center gap-2 text-white hover:text-brand-4 transition focus:outline-none focus:ring-2 focus:ring-brand-4 rounded-sm"
                    >
                      {item.icon ? <item.icon className="h-5 w-5 text-[#25D366]" /> : null}
                      <span>{item.value}</span>
                    </a>
                  ) : (
                    <span className="text-gray-200">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="#booking" className="btn btn-primary w-full sm:w-auto px-6 py-3 rounded-full text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">Book a Free Consultation</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white/10 border border-brand-4/20 p-5 sm:p-6 md:p-8 shadow-lg backdrop-blur-sm" aria-label="Project request form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="text-sm font-medium text-white">
              Full Name <span className="text-brand-4" aria-hidden="true">*</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={fieldClasses}
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </label>

            <label className="text-sm font-medium text-white">
              Email Address <span className="text-brand-4" aria-hidden="true">*</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={fieldClasses}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="text-sm font-medium text-white">
              Company / Business Name
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className={fieldClasses}
                placeholder="Company name"
                autoComplete="organization"
              />
            </label>

            <label className="text-sm font-medium text-white">
              Service Needed <span className="text-brand-4" aria-hidden="true">*</span>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={fieldClasses}
                required
              >
                <option className="text-dark-bg" value="">Select a service</option>
                {serviceOptions.map(service => (
                  <option className="text-dark-bg" key={service} value={service}>{service}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-white md:col-span-2">
              Project Details / Message <span className="text-brand-4" aria-hidden="true">*</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`${fieldClasses} min-h-40 resize-y`}
                placeholder="Tell us what you want to build, your timeline, and any important goals."
                required
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary mt-6 w-full px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
            Send Project Request
          </button>
        </form>
      </div>
    </section>
  )
}
