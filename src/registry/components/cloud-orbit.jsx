import React from 'react'

function OrbitRing({ size, animation, className }) {
  return (
    <div
      className={`absolute inset-0 m-auto rounded-full border border-white/10 ${className}`}
      style={{ width: size, height: size, animation }}
    />
  )
}

export function OrbitingImage({ name, role, skills, position }) {
  return (
    <div className={`absolute ${position} w-44 sm:w-52 p-4 rounded-3xl bg-white/85 text-slate-900 shadow-2xl shadow-slate-900/10 backdrop-blur-lg border border-slate-200/60 transform transition duration-500 hover:-translate-y-1`}> 
      <div className="text-sm uppercase tracking-[0.25em] text-brand-4">{role}</div>
      <h3 className="mt-2 text-xl font-semibold text-slate-950">{name}</h3>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{skills}</p>
    </div>
  )
}

export function CloudOrbit({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-md h-[420px]">
      <OrbitRing size="420px" animation="spin 34s linear infinite" className="opacity-10" />
      <OrbitRing size="320px" animation="spinReverse 22s linear infinite" className="opacity-15" className="" />
      <OrbitRing size="220px" animation="spin 18s linear infinite" className="opacity-20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-brand-4/10 ring-2 ring-brand-4/20 backdrop-blur-lg text-center px-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-brand-3">Studio</p>
            <h2 className="mt-2 text-2xl font-bold text-brand-3">MN Dev</h2>
            <p className="mt-1 text-sm text-slate-700">Frontend + Backend</p>
          </div>
        </div>
      </div>

      {children}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
}
