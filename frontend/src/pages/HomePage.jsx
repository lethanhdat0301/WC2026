import React from 'react'
import { mockMatches } from '../mock/data'
import MatchCard from '../components/MatchCard'

function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="font-[var(--font-display)] text-5xl font-black tracking-tight text-[color:var(--color-ink)]">
          Lịch thi đấu &amp; Kết quả
        </h1>
      </header>

      <div className="mb-8 flex flex-wrap gap-3">
        <button className="rounded-full border border-slate-200 bg-[color:var(--color-ink)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900">
          Tất cả
        </button>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          Sắp diễn ra
        </button>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          Đang diễn
        </button>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          Kết thúc
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockMatches.map((match) => (
          <article key={match.id}>
            <div className="mb-2 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
              <span>{match.stage}</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <MatchCard match={match} />
          </article>
        ))}
      </div>
    </div>
  )
}

export default HomePage
