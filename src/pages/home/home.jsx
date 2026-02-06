import React from 'react'
import HomeHero from './homeHero'
import HomeBanner from './homeBanner'
import HomeCards from './homeCards'
import HomeCarousel from './homeCarousel'

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <HomeHero />
      <HomeBanner />
      <HomeCards />
      <HomeCarousel />
    </div>
  )
}

export default Home