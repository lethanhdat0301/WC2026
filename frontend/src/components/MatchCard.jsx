import React from 'react'
import { Link } from 'react-router-dom'
import TeamBadge from './TeamBadge'

function getStatusBadge(status) {
  switch (status) {
    case 'scheduled':
      return {
        label: 'Sắp diễn ra',
        borderColor: 'border-slate-300',
        badgeClass: 'bg-slate-100 text-slate-700',
      }
    case 'live':
      return {
        label: 'ĐANG ĐÁ',
        borderColor: 'border-[color:var(--color-live)]',
        badgeClass: 'bg-[color:var(--color-live)]/10 text-[color:var(--color-live)]',
      }
    case 'finished':
      return {
        label: 'Đã kết thúc',
        borderColor: 'border-[color:var(--color-pitch)]',
        badgeClass: 'bg-[color:var(--color-pitch)]/10 text-[color:var(--color-pitch)]',
      }
    default:
      return {
        label: '',
        borderColor: 'border-slate-300',
        badgeClass: 'bg-slate-100 text-slate-700',
      }
  }
}

function MatchCard({ match }) {
  if (!match) {
    return null
  }

  const { status, home_score, away_score, kickoff, stage, stadium } = match
  const isLive = status === 'live'
  const isFinished = status === 'finished'
  const badge = getStatusBadge(status)

  const kickoffDate = new Date(kickoff)
  const kickoffTime = kickoffDate.toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  })
  const kickoffDay = kickoffDate.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
  })

  return (
    <Link
      to={`/match/${match.id}`}
      className={`group block overflow-hidden rounded-xl border-l-4 ${badge.borderColor} bg-white border border-slate-200 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{stage}</div>
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${badge.badgeClass}`}>
          {isLive && <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--color-live)] animate-pulse" />}
          {badge.label}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex justify-end md:justify-end">
          <TeamBadge team={match.home_team} />
        </div>

        <div className="text-center">
          {(isFinished || isLive) ? (
            <div className="font-[var(--font-display)] text-4xl font-black text-[color:var(--color-ink)]">
              {home_score} : {away_score}
            </div>
          ) : (
            <div>
              <div className="text-lg font-semibold text-slate-600">{kickoffTime}</div>
              <div className="mt-1 text-sm text-slate-400">{kickoffDay}</div>
            </div>
          )}
        </div>

        <div className="flex justify-start md:justify-start">
          <TeamBadge team={match.away_team} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
        <span>📍</span>
        <span>{stadium}</span>
      </div>
    </Link>
  )
}

export default MatchCard
