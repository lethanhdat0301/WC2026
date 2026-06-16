import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 text-gray-700 py-4">
      <div className="container mx-auto px-4 text-center">
        World Cup 2026 © {year}
      </div>
    </footer>
  )
}

export default Footer
