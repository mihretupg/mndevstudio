import React from 'react'

export default function ProjectCard({project, variant = 'compact'}){
  const image = project.image || '/images/lakun.png'
  const imageAlt = project.imageAlt || `${project.title} project preview`
  const isLogoImage = project.imageFit === 'contain'
  const titleId = `title-${project.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`
  const tech = project.tech || []
  const platforms = project.platforms || []
  const impact = project.impact || []

  if (variant === 'featured') {
    return (
      <article className="relative overflow-hidden rounded-lg border border-brand-4/20 bg-white/10 p-5 shadow-lg backdrop-blur-sm badtz-pop transition hover:border-brand-4/45 md:p-7" role="article" aria-labelledby={titleId}>
        <div className={`relative grid grid-cols-1 gap-7 ${isLogoImage ? '' : 'lg:grid-cols-[1fr_0.86fr] lg:items-center'}`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-md border border-brand-4/30 bg-brand-4/15 px-2.5 py-1 text-brand-4">{project.type}</span>
              {project.status && <span className="rounded-md border border-white/10 bg-dark-bg/45 px-2.5 py-1 text-gray-200">{project.status}</span>}
              {project.year && <span className="rounded-md border border-white/10 bg-dark-bg/45 px-2.5 py-1 text-gray-200">{project.year}</span>}
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.25em] text-brand-4 font-semibold">{project.category}</p>
            <h3 id={titleId} className="mt-3 text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed">{project.desc}</p>

            {impact.length > 0 && (
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {impact.map(item => (
                  <div key={item} className="rounded-lg border border-white/10 bg-dark-bg/45 px-4 py-3 text-sm font-semibold text-gray-100">
                    {item}
                  </div>
                ))}
              </div>
            )}

            {platforms.length > 0 && (
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {platforms.slice(0, 4).map(platform => (
                  <div key={platform} className="flex min-h-11 items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-gray-100">
                    <span className="mr-2 text-brand-4" aria-hidden="true">&bull;</span>{platform}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map(t=> <span key={t} className="text-xs text-brand-4 bg-brand-4/15 px-3 py-1.5 rounded-full">{t}</span>)}
            </div>

            {(project.demo || project.repo) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="btn btn-primary min-h-10 px-4 py-2 text-sm font-semibold">
                    Live Demo
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`} className="btn btn-secondary min-h-10 px-4 py-2 text-sm font-semibold">
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>

          {!isLogoImage && (
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/95 p-2 shadow-2xl">
              <div className="flex aspect-[4/3] items-center justify-center rounded-md">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full rounded-md object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          )}
        </div>
      </article>
    )
  }

  return (
    <article className="group relative isolate flex min-h-[19rem] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045))] p-5 backdrop-blur-sm card-shadow badtz-pop transition duration-200 hover:-translate-y-1 hover:border-brand-4/45 hover:bg-white/15" role="article" aria-labelledby={titleId}>
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-4 via-white/70 to-transparent opacity-70" aria-hidden="true" />
      <span className="absolute -right-16 -top-20 h-36 w-36 rounded-full bg-brand-4/10 blur-3xl transition group-hover:bg-brand-4/16" aria-hidden="true" />
      <div>
        {project.image && (
          <div className="relative mb-5 flex min-h-[5.75rem] flex-col items-start justify-between gap-3 rounded-lg border border-white/10 bg-dark-bg/35 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
            {isLogoImage ? (
              <img
                src={image}
                alt={imageAlt}
                className="max-h-16 max-w-full rounded-md bg-white px-3 py-2 object-contain shadow-[0_10px_24px_rgba(0,0,0,0.16)] sm:max-w-[10.5rem]"
                loading="lazy"
              />
            ) : (
              <img
                src={image}
                alt={imageAlt}
                className="h-16 w-28 rounded-md bg-white object-cover"
                loading="lazy"
              />
            )}
            <div className="flex shrink-0 flex-col items-start gap-2 text-left text-xs font-semibold sm:items-end sm:text-right">
              {project.status && <span className="rounded-md border border-brand-4/25 bg-brand-4/10 px-2 py-1 text-brand-4">{project.status}</span>}
            </div>
          </div>
        )}
        <p className="text-xs uppercase tracking-[0.18em] text-brand-4 font-semibold">{project.type || project.category}</p>
        <h3 id={titleId} className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">{project.short || project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.slice(0, 4).map(t=> <span key={t} className="rounded-md border border-brand-4/30 bg-brand-4/15 px-2 py-1 text-xs text-brand-4">{t}</span>)}
        </div>
      </div>
      {(project.demo || project.repo) && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="btn btn-primary min-h-10 px-3 py-2 text-sm font-semibold">Live Demo</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`} className="btn btn-secondary min-h-10 px-3 py-2 text-sm font-semibold">GitHub</a>}
        </div>
      )}
    </article>
  )
}
