export const sectionLinks = [
  {path: '/', sectionId: 'home', label: 'Home'},
  {path: '/about', sectionId: 'about', label: 'About'},
  {path: '/techstack', sectionId: 'techstack', label: 'Tech Stack'},
  {path: '/projects', sectionId: 'projects', label: 'Projects'},
  {path: '/services', sectionId: 'services', label: 'Services'},
  {path: '/testimonials', sectionId: 'testimonials', label: 'Testimonials'},
  {path: '/contact', sectionId: 'contact', label: 'Contact'}
]

export function navigateToSection(event, link){
  event.preventDefault()

  const section = document.getElementById(link.sectionId)
  if (section) {
    section.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  window.history.pushState(null, '', link.path)
}
