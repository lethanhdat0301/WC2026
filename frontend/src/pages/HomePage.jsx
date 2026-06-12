import React from 'react'
import { mockMatches } from '../mock/data'
import MatchCard from '../components/MatchCard'

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Lịch thi đấu &amp; Kết quả</h1>

      <div className="flex flex-col gap-3">
        {mockMatches.map((match) => (
          <MatchCard match={match} key={match.id} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
