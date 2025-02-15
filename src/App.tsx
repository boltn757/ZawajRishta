import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedMembers from './components/FeaturedMembers';
import TrustAndSafety from './components/TrustAndSafety';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

// Import i18n configuration
import './i18n/config';

const HomePage = () => (
  <>
    <Hero />
    <QuickSearch />
    <WhyChooseUs />
    <FeaturedMembers />
    <TrustAndSafety />
  </>
);

function App() {
  return (
    <Router>
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="backdrop-blur-sm">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;