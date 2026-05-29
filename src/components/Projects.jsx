import React, {useMemo, useState} from 'react'
import ProjectCard from './ProjectCard'

const items = [
  {
    title: 'Map-Based Licensing System',
    category: 'BSD Engineering GIS licensing platform',
    type: 'Web app',
    year: '2026',
    status: 'Built for BSD Engineering',
    desc: 'A map-based licensing system developed for BSD Engineering to manage property boundaries, visualize licensing coverage, and filter approved, pending, and unlicensed areas from a single GIS-style dashboard.',
    short: 'A GIS licensing dashboard for BSD Engineering with property overlays, boundary tracing, and license status filters.',
    tech: ['GIS Dashboard', 'Map Overlays', 'License Workflow', 'Property Boundaries', 'Status Filters'],
    platforms: ['Satellite map workspace', 'Property boundary tracing', 'License status controls', 'Submissions workflow'],
    impact: ['Clear license coverage visibility', 'Faster property review workflow'],
    image: '/images/bsd-map-licensing-preview.svg',
    imageAlt: 'BSD Engineering map-based licensing system dashboard preview',
    repo: 'https://github.com/natiD1/map'
  },
  {
    title: 'Lakun',
    category: 'Hyperlocal delivery platform',
    type: 'Web and Mobile App',
    year: '2026',
    status: 'Live Demo',
    desc: 'Lakun is a hyperlocal delivery platform for apartment residents where nearby shops compete by submitting prices. The system calculates the final price including delivery, while admins control fulfillment from order review through assignment.',
    short: 'Resident ordering, vendor bidding, pricing logic, and fulfillment controls in one delivery workflow.',
    tech: ['Web App', 'Mobile App', 'Admin Dashboard', 'Vendor Bidding', 'Delivery Pricing'],
    platforms: ['Resident mobile app', 'Admin web dashboard', 'Vendor price submissions', 'Fulfillment workflow'],
    impact: ['Multi-role ordering flow', 'Automated delivery pricing'],
    image: '/images/lakun-logo.svg',
    imageAlt: 'Lakun logo',
    imageFit: 'contain',
    demo: 'https://bsdeng.com/lakun/'
  },
  {
    title: 'ParkEzih',
    category: 'Parking space finder app',
    type: 'Mobile app',
    year: '2026',
    status: 'Live Demo',
    desc: 'ParkEzih helps drivers quickly discover available parking spaces nearby, compare options, and navigate to a convenient spot with less uncertainty during busy city trips.',
    short: 'A location-first parking discovery experience for faster decisions during busy city trips.',
    tech: ['Mobile App', 'Location Search', 'Parking Discovery', 'Maps', 'Availability'],
    platforms: ['Nearby parking search', 'Map-based discovery', 'Space availability view', 'Driver navigation flow'],
    impact: ['Map-led discovery', 'Driver-first search flow'],
    image: '/images/parkezih-logo.svg',
    imageAlt: 'ParkEzih logo',
    imageFit: 'contain',
    demo: 'https://bsdeng.com/park%20ezih/index.php'
  },
  {
    title: 'Novaria Limo',
    category: 'Dallas luxury transport service',
    type: 'Service website',
    year: '2026',
    status: 'Live site',
    desc: 'Novaria Limo is a premium transport service website for Dallas, TX, built to present chauffeur services, airport transfers, event rides, and fast booking paths for customers across the DFW area.',
    short: 'A polished service website with route-focused content and fast quote paths for DFW riders.',
    tech: ['Service Website', 'Booking Flow', 'Responsive Design', 'Lead Capture', 'Vercel'],
    platforms: ['Luxury chauffeur services', 'DFW airport transfers', 'Event transportation', 'Instant quote flow'],
    impact: ['Fast booking entry points', 'Responsive service pages'],
    image: '/images/novaria-limo-logo.svg',
    imageAlt: 'Novaria Limo logo',
    imageFit: 'contain',
    demo: 'https://novaria-sigma.vercel.app/'
  },
  {
    title: 'Temaribet',
    category: 'SaaS school management system',
    type: 'SaaS platform',
    status: 'Repository',
    desc: 'Temaribet is a SaaS school management system designed to centralize academic and administrative workflows for schools, from student records to staff operations and management oversight.',
    short: 'A SaaS school management system for organizing school operations, student records, staff workflows, and admin oversight.',
    tech: ['SaaS', 'School Management', 'Admin Dashboard', 'Student Records', 'Role-based Access'],
    platforms: ['School admin workspace', 'Student record management', 'Staff workflow support', 'Operational reporting'],
    impact: ['Centralized school operations', 'Role-aware management flow'],
    image: '/images/temaribet-logo.svg',
    imageAlt: 'Temaribet School Management System logo',
    imageFit: 'contain',
    repo: 'https://github.com/natiD1/School_Management'
  },
  {
    title: 'AutoCAD Structural Automation',
    category: 'Structural drafting automation',
    type: 'Automation tool',
    status: 'Repository',
    desc: 'AutoCAD Structural Automation is a technical automation project built to streamline repetitive structural drafting workflows and improve consistency across AutoCAD-based engineering tasks.',
    short: 'An AutoCAD automation tool for speeding up repetitive structural drafting workflows and improving drawing consistency.',
    tech: ['AutoCAD', 'Structural Automation', 'Drafting Workflow', 'Engineering Tools', 'Productivity'],
    platforms: ['Structural drafting automation', 'AutoCAD workflow support', 'Repeated task reduction', 'Engineering documentation flow'],
    impact: ['Faster drafting workflows', 'More consistent structural output'],
    image: '/images/autocad-structural-logo.svg',
    imageAlt: 'AutoCAD Structural Automation logo',
    imageFit: 'contain',
    repo: 'https://github.com/natiD1/Autocad_Structural_Automation'
  },
  {
    title: 'Stair Automation',
    category: 'Civil engineering automation tool',
    type: 'Automation tool',
    status: 'Repository',
    desc: 'Stair Automation is a civil engineering tool developed to automate stair-related design or drafting workflows, helping reduce repetitive manual work and improve technical consistency.',
    short: 'A civil engineering automation tool for streamlining stair design or drafting workflows and reducing repetitive manual work.',
    tech: ['Civil Engineering', 'Stair Automation', 'Drafting Workflow', 'Engineering Tools', 'Productivity'],
    platforms: ['Stair workflow automation', 'Civil engineering support', 'Repeated task reduction', 'Technical drawing consistency'],
    impact: ['Faster stair workflows', 'Reduced manual drafting effort'],
    image: '/images/stair-automation-logo.svg',
    imageAlt: 'Stair Automation logo',
    imageFit: 'contain',
    repo: 'https://github.com/natiD1/Stair_Automation'
  },
  {
    title: 'Abro Collective',
    category: 'DC artist collective retail experience',
    type: 'Service website',
    year: '2026',
    status: 'Live site',
    desc: 'Abro Collective is a Union Station shop created by six DC-based artists, makers, and curators offering one-of-a-kind gifts, artwork, handmade jewelry, vintage clothing, therapeutic body products, candles, streetwear, and handmade goods sourced from Ghana, Ethiopia, Uzbekistan, and more.',
    short: 'A warm retail website for a DC artist collective selling handmade gifts, fashion, body products, candles, artwork, and global accessories.',
    tech: ['Service Website', 'Retail Showcase', 'Brand Story', 'Responsive Design', 'Local Business'],
    platforms: ['Artist collective story', 'Retail product range', 'Local business profile', 'Contact-focused navigation'],
    impact: ['Clear collective positioning', 'Shop-ready brand presence'],
    image: '/images/abro-collective.png',
    imageAlt: 'Abro Collective logo',
    imageFit: 'contain',
    demo: 'https://abrocollective.com'
  },
  {
    title: 'Kelem Arts',
    category: 'Handmade African products ecommerce',
    type: 'Ecommerce',
    year: '2026',
    status: 'Live store',
    desc: 'Kelem Arts is a Black, women-owned ecommerce platform sharing the vivid colors, patterns, and design of handmade African products. Each item is carefully selected for its beauty and for the unique story it carries.',
    short: 'A refined ecommerce store for handmade African products, colorful apparel, curated collections, and story-rich product discovery.',
    tech: ['Ecommerce', 'Product Collections', 'Responsive Design', 'Retail UX', 'Brand Story'],
    platforms: ['Shop collection pages', 'Product filtering and sorting', 'Currency and region controls', 'Brand and location content'],
    impact: ['Story-led product discovery', 'Clean collection shopping flow'],
    image: '/images/kelem-arts-logo.png',
    imageAlt: 'Kelem Arts logo',
    imageFit: 'contain',
    demo: 'https://kelemshop.com'
  }
]

const filters = ['All', ...Array.from(new Set(items.map(item => item.type)))]

const projectStats = [
  {value: `40+`, label: 'Delivered projects'},
  {value: 'Web + mobile', label: 'Product coverage'},
  {value: 'Live', label: 'Launch-ready work'}
]

export default function Projects(){
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return items
    return items.filter(item => item.type === activeFilter)
  }, [activeFilter])

  return (
    <section>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-brand-4 font-semibold">Delivered work</p>
          <h2 className="section-title mt-3 text-3xl font-semibold text-white">Project Library</h2>
          <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
            A growing collection of product work built for real workflows across websites, mobile apps, dashboards, booking flows, and backend systems.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:min-w-[24rem]" aria-label="Project delivery summary">
          {projectStats.map(stat => (
            <div key={stat.label} className="rounded-lg border border-brand-4/20 bg-white/10 px-3 py-4 text-center backdrop-blur-sm">
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filters.map(filter => {
          const isActive = filter === activeFilter
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`min-h-10 rounded-lg border px-4 text-sm font-semibold transition ${
                isActive
                  ? 'border-brand-4 bg-brand-4 text-dark-bg'
                  : 'border-brand-4/25 bg-white/10 text-gray-100 hover:border-brand-4/60 hover:bg-white/15'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {visibleProjects.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map(project => (
            <ProjectCard key={project.title} project={project} variant="compact" />
          ))}
        </div>
      )}
    </section>
  )
}
