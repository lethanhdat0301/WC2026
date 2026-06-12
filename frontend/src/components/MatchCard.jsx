import React from 'react'
import { Link } from 'react-router-dom'
import TeamBadge from './TeamBadge'

function MatchCard({ match }) {
  if (!match) {
    return null
  }

  const { status, home_score, away_score, kickoff, stage, stadium } = match
  const isLive = status === 'live'
  const isFinished = status === 'finished'

  const kickoffText = new Date(kickoff).toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
  })

  return (
    <Link
      to={`/match/${match.id}`}
      className="block rounded-xl bg-white p-4 shadow-sm transition shadow-gray-200 hover:shadow-md hover:bg-gray-50"
    >
      <div className="text-sm text-gray-500 mb-3">
        <div>{stage}</div>
        <div>{stadium}</div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <TeamBadge team={match.home_team} />
        </div>

        <div className="flex-1 text-center">
          {(isFinished || isLive) && (
            <div className="text-2xl font-bold text-gray-900">
              {home_score} - {away_score}
            </div>
          )}
          {!isFinished && !isLive && (
            <div className="text-lg font-semibold text-gray-900">{kickoffText}</div>
          )}
          {isLive && <div className="mt-2 text-sm font-semibold text-red-600">🔴 LIVE</div>}
        </div>

        <div className="flex-1 text-right">
          <TeamBadge team={match.away_team} />
        </div>
      </div>
    </Link>
  )
}

export default MatchCard
