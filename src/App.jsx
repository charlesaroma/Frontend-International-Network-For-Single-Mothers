import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/home/home';
import HomeHero from './pages/home/homeHero';
import WhoWeAre from './pages/about/whoWeAre';
import WhatWeDo from './pages/about/whatWeDo';
import Gallery from './pages/gallery/gallery';
import GalleryHero from './pages/gallery/galleryHero';
import Contact from './pages/contact/contact';
import Donate from './pages/donate/donate';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ForgotPassword from './pages/auth/forgotPassword';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/hero" element={<HomeHero />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/what-we-do" element={<WhatWeDo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/hero" element={<GalleryHero />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
