import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-ink)] border-b border-white/10 shadow-sm shadow-black/5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="inline-flex items-baseline gap-2">
          <span className="font-[var(--font-display)] text-xl font-semibold uppercase tracking-[0.2em] text-white">
            WORLD CUP
          </span>
          <span className="text-xl font-semibold text-[color:var(--color-gold)]">2026</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Trận đấu
          </Link>
          <Link
            to="/standings"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Bảng xếp hạng
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
