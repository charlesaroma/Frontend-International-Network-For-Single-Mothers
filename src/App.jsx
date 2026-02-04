

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutHero from './pages/about/aboutHero';
import GalleryHero from './pages/gallery/galleryHero';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/about" element={<AboutHero />} />
            <Route path="/gallery" element={<GalleryHero />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
