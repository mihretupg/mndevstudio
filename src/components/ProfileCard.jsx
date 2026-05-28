import React from 'react'

export default function ProfileCard({name, role, bio, image}){
  return (
    <div className="p-6 rounded-xl bg-transparent border border-brand-4/20 backdrop-blur-sm card-shadow badtz-fade-slide hover:border-brand-4/40 transition">
      <div className="flex items-center gap-4">
        {image ? (
          <div className="relative w-28 h-28 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-4 via-brand-4/25 to-white/20 p-[2px] shadow-[0_0_28px_rgba(204,255,0,0.18)]">
            <span className="absolute -inset-2 rounded-full border border-dashed border-brand-4/35 rotate-12" aria-hidden="true"></span>
            <span className="absolute -right-1 top-4 h-3 w-3 rounded-full bg-brand-4 shadow-[0_0_14px_rgba(204,255,0,0.75)]" aria-hidden="true"></span>
            <span className="absolute bottom-2 left-0 h-2 w-2 rounded-full bg-white/80" aria-hidden="true"></span>
            <div className="relative h-full w-full overflow-hidden rounded-full bg-dark-bg/70">
              <img src={image} alt={name} className="h-full w-full object-contain object-bottom scale-110" />
            </div>
          </div>
        ) : (
          <div className="relative w-28 h-28 flex-shrink-0 rounded-full border border-brand-4/60 bg-brand-4/10 flex items-center justify-center font-bold text-brand-4 text-lg shadow-[0_0_28px_rgba(204,255,0,0.18)]">{name[0]}</div>
        )}
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-brand-4">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-gray-300 leading-relaxed">{bio}</p>
    </div>
  )
}
