import React from 'react'
import HomeHero from './homeHero'
import HomeBanner from './homeBanner'

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <HomeHero />
      <HomeBanner />
    </div>
  )
}

export default Home