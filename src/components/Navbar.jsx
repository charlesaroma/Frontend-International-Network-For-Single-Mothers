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

  const menuCategories = [
    {
      title: 'Who we are',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      items: [
        { name: 'About Us', path: '/about' },
        { name: 'Who We Are', path: '/about/who-we-are' },
        { name: 'What We Do', path: '/about/what-we-do' },
        { name: 'Our Team', path: '/team' },
        { name: 'Our Story', path: '/story' },
      ]
    },
    {
      title: 'What we do',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        { name: 'Programs', path: '/programs' },
        { name: 'Initiatives', path: '/initiatives' },
        { name: 'Impact', path: '/impact' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'News', path: '/news' },
      ]
    },
    {
      title: 'How to help',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      items: [
        { name: 'Donate', path: '/donate' },
        { name: 'Volunteer', path: '/volunteer' },
        { name: 'Partner', path: '/partner' },
        { name: 'Contact', path: '/contact' },
      ]
    }
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

        {/* FULL-SCREEN MENU OVERLAY */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="
              fixed inset-0 top-28 bg-white
              lg:flex lg:items-center lg:justify-center
              overflow-y-auto
              z-40
            "
          >
            <div className="w-full max-w-4xl px-6 py-12">
              
              {/* Mobile: Simple links */}
              <div className="lg:hidden space-y-4">
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
                      py-3
                      hover:text-brand-teal
                      transition-colors
                    "
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile CTA button */}
                <button
                  className="
                    w-full
                    bg-brand-lilac hover:bg-brand-lilac-700
                    text-white font-semibold
                    py-4 rounded-full
                    transition-colors
                    mt-6
                  "
                >
                  SEED A COOPERATIVE
                </button>
              </div>

              {/* Desktop: Categorized navigation */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-12">
                {menuCategories.map((category, index) => (
                  <div key={index} className="space-y-6">
                    <div className="flex items-center gap-3 text-brand-dark font-semibold text-xl">
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="
                            block
                            text-brand-dark
                            font-medium
                            text-lg
                            py-2
                            hover:text-brand-teal
                            transition-colors
                          "
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
