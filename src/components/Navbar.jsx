import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ]

  // Close menu on outside click (desktop UX)
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && 
          !e.target.closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* NAV BAR */}
        <div className="flex items-center justify-between h-28">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="INSM Logo"
              className="w-24 h-24 rounded-full object-contain"
            />

            <div className="hidden sm:block">
              <h1 className="font-primary font-bold text-body-large uppercase leading-tight">
                <span className="text-brand-lilac">
                  INTERNATIONAL NETWORK <br/> FOR SINGLE MOTHERS
                </span>
                <br />
                <span className="text-brand-lilac-700">
                  UGANDA CHAPTER
                </span>
              </h1>
            </div>

            <div className="sm:hidden">
              <h1 className="font-bold text-sm uppercase leading-tight">
                <span className="text-brand-lilac">INSM</span>
                <br />
                <span className="text-brand-lilac-700">UGANDA</span>
              </h1>
            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* DESKTOP CTA */}
            <button
              className="
                hidden lg:inline-flex
                items-center justify-center
                bg-brand-lilac hover:bg-brand-lilac-700
                text-white font-semibold
                px-8 py-3
                rounded-full
                transition-colors
                cursor-pointer
              "
              style={{ minWidth: '224px', height: '54px' }}
            >
              SEED A COOPERATIVE
            </button>

            {/* BURGER */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark hover:text-brand-teal focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* RESPONSIVE MENU PANEL */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="
              absolute
              top-full
              right-0
              w-full lg:w-105
              bg-white
              shadow-xl
              border-t lg:border
              border-brand-cream-200
              z-50
            "
          >
            <div className="px-6 py-6 space-y-6">

              {navigationLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block
                    text-brand-dark
                    font-medium
                    text-lg
                    hover:text-brand-teal
                    transition-colors
                  "
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile only CTA button */}
              <button
                className="
                  lg:hidden
                  w-full
                  bg-brand-lilac hover:bg-brand-lilac-700
                  text-white font-semibold
                  py-4 rounded-full
                  transition-colors
                "
              >
                SEED A COOPERATIVE
              </button>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
