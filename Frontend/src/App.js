import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import HeroSection from './Pages/HeroSection';
import About from './Pages/About';
import Services from './Pages/Services';
import FAQ from './Pages/FAQ';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <About />
            <Services />
            <FAQ />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;
