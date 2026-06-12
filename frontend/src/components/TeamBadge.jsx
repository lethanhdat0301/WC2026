import React from 'react'

function TeamBadge({ team, size = 'md' }) {
  if (!team) {
    return null
  }

  const badgeSize = size === 'sm' ? 20 : 24
  const initials = team.name
    ? team.name
        .trim()
        .split(' ')
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join('')
    : ''

  return (
    <div className="flex items-center gap-2">
      {team.flag_url ? (
        <img
          src={team.flag_url}
          alt={team.name}
          className="rounded-md object-cover"
          width={badgeSize}
          height={badgeSize}
        />
      ) : (
        <div
          className="rounded-md bg-gray-200 text-gray-700 flex items-center justify-center font-semibold"
          style={{ width: badgeSize, height: badgeSize }}
        >
          {initials}
        </div>
      )}
      <span>{team.name}</span>
    </div>
  )
}

export default TeamBadge
