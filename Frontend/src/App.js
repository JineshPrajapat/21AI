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
import Research from './Pages/Research';
import Courses from './Pages/Courses';
import BlogDetails from './Component/BlogDetails';
import BlogTags from './Component/BlogTags';
import CourseDetails from './Component/CourseDetails';

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
        <Route path="/Blog/:blogTitle" element={<BlogDetails/>}/>
        <Route path="/Blog/tag/:tagName" element={<BlogTags/>}/>
        <Route path='/Research/*' element={<Research/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Courses/:courseTitle' element={<CourseDetails/>}/>

      </Routes>
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;
