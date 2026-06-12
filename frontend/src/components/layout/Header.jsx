import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          World Cup 2026
        </Link>

        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Trận đấu
          </Link>
          <Link to="/standings" className="hover:underline">
            Bảng xếp hạng
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
