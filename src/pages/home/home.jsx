import React from 'react'
import HomeHero from './homeHero'
import HomeBanner from './homeBanner'
import HomeCards from './homeCards'

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <HomeHero />
      <HomeBanner />
      <HomeCards />
    </div>
  )
}

export default Home