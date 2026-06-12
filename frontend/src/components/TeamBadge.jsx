import React from 'react'

function TeamBadge({ team, size = 'md' }) {
  if (!team) {
    return null
  }

  const badgeSize = size === 'sm' ? 16 : 20
  const initials = team.name
    ? team.name
        .trim()
        .split(' ')
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join('')
    : ''

  return (
    <div className="flex min-w-0 items-center gap-3">
      {team.flag_url ? (
        <img
          src={team.flag_url}
          alt={team.name}
          className="h-5 w-5 rounded-sm ring-1 ring-black/10 object-cover"
          width={badgeSize}
          height={badgeSize}
        />
      ) : (
        <div
          className="flex h-5 w-5 items-center justify-center rounded-sm bg-slate-200 text-slate-700 ring-1 ring-black/10 text-xs font-semibold"
        >
          {initials}
        </div>
      )}
      <span className="min-w-0 truncate font-[var(--font-display)] text-sm font-semibold text-slate-900">
        {team.name}
      </span>
    </div>
  )
}

export default TeamBadge
