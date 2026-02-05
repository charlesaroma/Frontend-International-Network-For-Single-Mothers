import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const menuRef = useRef(null)

  const menuCategories = [
    {
      title: 'Who we are',
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
      items: [
        { name: 'Donate', path: '/donate' },
        { name: 'Volunteer', path: '/volunteer' },
        { name: 'Partner', path: '/partner' },
        { name: 'Contact', path: '/contact' },
      ]
    }
  ]

  // Close menu on outside click
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

  // Lock body scroll when menu is open
  // Lock body scroll when menu is open and handle scrollbar shift
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    // Cleanup function to ensure state is reset if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [isMenuOpen])

  const toggleCategory = (title) => {
    setExpandedCategory(expandedCategory === title ? null : title)
  }

  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <nav className={`sticky top-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white/30 backdrop-blur-lg backdrop-saturate-150 shadow-sm border-white/20' : 'bg-white shadow-sm border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">

        {/* NAV BAR HEADER */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4 z-50 relative">
            <div className="relative w-28 h-20 shrink-0">
              <img
                src="/logo.png"
                alt="INSM Logo"
                className="absolute top-0 left-0 w-28 h-28 rounded-full object-contain max-w-none shadow-sm bg-white"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="font-primary font-bold text-body uppercase leading-tight">
                <span className="text-brand-lilac">
                  INTERNATIONAL NETWORK <br/> FOR SINGLE MOTHERS
                </span>
                <br />
                <span className="text-brand-lilac-700">
                  UGANDA CHAPTER
                </span>
              </h1>
            </div>
             {/* Mobile Logo Text */}
             <div className="sm:hidden">
                <h1 className="font-bold text-sm uppercase leading-tight">
                  <span className="text-brand-lilac">INSM</span>
                  <br />
                  <span className="text-brand-lilac-700">UGANDA</span>
                </h1>
              </div>
          </Link>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-6 z-50 relative">

            {/* CTA BUTTON */}
            <button
              className="
                hidden md:inline-flex
                items-center justify-center
                bg-brand-lilac hover:bg-brand-lilac-700
                text-white text-body font-semibold
                px-8 py-3
                rounded-full
                transition-colors
                cursor-pointer
                uppercase tracking-wide
              "
              style={{ minWidth: '200px', height: '54px' }}
            >
              SEED A COOPERATIVE
            </button>

            {/* TOGGLE BUTTON (BURGER / CLOSE) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-lilac-700 hover:text-brand-lilac-900 focus:outline-none cursor-pointer p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </div>
    </nav>

     {/* MENU OVERLAY */}
     {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white z-40 pt-32 overflow-y-auto"
          ref={menuRef}
        >
          {/* Header Separation Line */}
          <div className="absolute top-28 left-0 w-full border-b border-gray-100"></div>

          <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
            <div className="flex flex-col">
              {menuCategories.map((category, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0">
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full flex items-center justify-between py-6 group hover:bg-gray-50 transition-colors px-4 rounded-lg"
                  >
                    <span className="text-2xl md:text-3xl text-brand-dark font-normal">
                      {category.title}
                    </span>
                    <svg 
                      className={`w-6 h-6 text-brand-dark transition-transform duration-300 ${expandedCategory === category.title ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* EXPANDED CONTENT */}
                  <div 
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${expandedCategory === category.title ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}
                    `}
                  >
                     <div className="px-4 space-y-3 pt-2">
                      {category.items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-brand-dark-400 hover:text-brand-lilac pl-4 border-l-2 border-transparent hover:border-brand-lilac transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
