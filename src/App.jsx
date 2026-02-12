import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
// Pages
import Home from './pages/home/home';
import HomeHero from './pages/home/homeHero';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ForgotPassword from './pages/auth/forgotPassword';
import Dashboard from './pages/dashboard/dashboard';

// New Sitemap Pages
import OurStory from './pages/who-we-are/OurStory';
import OurTeam from './pages/who-we-are/OurTeam';
import TheRoadmap from './pages/who-we-are/TheRoadmap';
import Programs from './pages/what-we-do/Programs';
import Gallery from './pages/what-we-do/Gallery';
import Blog from './pages/what-we-do/Blog';
import SeedACooperative from './pages/seed-a-cooperative/seedACooperative';
import HowToHelp from './pages/how-to-help/howToHelp';
import ContactUs from './pages/how-to-help/ContactUs';
import PrivacyPolicyTermsOfUse from './pages/privacy-policy/privacyPolicy-TermsOfUse';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/hero" element={<HomeHero />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* New Sitemap Routes */}
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/the-roadmap" element={<TheRoadmap />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/seed-a-cooperative" element={<SeedACooperative />} />
            <Route path="/how-to-help" element={<HowToHelp />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyTermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
