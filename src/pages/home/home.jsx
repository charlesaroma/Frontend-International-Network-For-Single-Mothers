import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-dark mb-8">
          Welcome to INSM Uganda
        </h1>
        <p className="text-lg text-brand-dark mb-8">
          International Network for Single Mothers Uganda Chapter empowers mothers to become an economic force in Uganda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-lilac mb-4">Our Mission</h3>
            <p className="text-brand-dark">Empowering single mothers through economic opportunities and community support.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-lilac mb-4">Our Vision</h3>
            <p className="text-brand-dark">A Uganda where every single mother has economic dignity and opportunity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-lilac mb-4">Get Involved</h3>
            <p className="text-brand-dark">Join us in making a difference in the lives of single mothers across Uganda.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home