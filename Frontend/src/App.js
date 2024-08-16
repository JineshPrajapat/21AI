import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import HeroSection from './Pages/Home/HeroSection';
import About from './Pages/Home/About';
import Services from './Pages/Home/Services';
import FAQ from './Pages/Home/FAQ';
import Testimonials from './Pages/Home/Testimonials';
import Contact from './Pages/Home/Contact';
import Blog from './Pages/Blog';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import Research from './Pages/Research';
import Courses from './Pages/Courses';
import BlogDetails from './Component/BlogDetails';
import BlogTags from './Component/BlogTags';
import CourseDetails from './Component/CourseDetails';
import ResearchDetails from './Component/ResearchDetails';
import NewsLetter from './Pages/NewsLetter';
import NotFound from './Component/NotFound';

function App() {

  return (
    <div className="App dark:bg-gray-900">
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
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:blogTitle" element={<BlogDetails />} />
        <Route path="/Blog/tag/:tagName" element={<BlogTags />} />
        <Route path='/Researches/*' element={<Research />} />
        <Route path='/Research/:researchTitle/:postTitle' element={<ResearchDetails />} />
        <Route path='/Courses/*' element={<Courses />} />
        <Route path='/Course/:courseTitle/:postTitle' element={<CourseDetails />} />
        <Route path='/Newsletter' element={<NewsLetter />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
