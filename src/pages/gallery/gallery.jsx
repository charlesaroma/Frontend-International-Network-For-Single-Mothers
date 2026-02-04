import React from 'react'

const Gallery = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-dark mb-8">
          Gallery
        </h1>
        <p className="text-lg text-brand-dark mb-12">
          See the impact of our work through photos and stories from the communities we serve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-brand-lilac-200 flex items-center justify-center">
                <span className="text-brand-lilac font-semibold">Image {item}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brand-dark mb-2">Gallery Item {item}</h3>
                <p className="text-brand-dark text-sm">Description of the gallery item and its impact.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery