'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)'}}>
            M
          </div>
          <span className="font-bold text-slate-900 text-base">Métis Flow</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solution" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Solution</a>
          <a href="#offres" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Offres</a>
          <a href="#demo" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Démo</a>
          <a href="#faq" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#offres" className="btn-secondary text-xs px-4 py-2">Voir les offres</a>
          <a href="#demo" className="btn-primary text-xs px-4 py-2">Voir la démo →</a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600">
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
          <a href="#solution" onClick={() => setOpen(false)} className="text-sm text-slate-700 py-2">Solution</a>
          <a href="#offres" onClick={() => setOpen(false)} className="text-sm text-slate-700 py-2">Offres</a>
          <a href="#demo" onClick={() => setOpen(false)} className="text-sm text-slate-700 py-2">Démo</a>
          <a href="#faq" onClick={() => setOpen(false)} className="text-sm text-slate-700 py-2">FAQ</a>
          <a href="#demo" className="btn-primary justify-center mt-2">Voir la démo →</a>
        </div>
      )}
    </nav>
  )
}
