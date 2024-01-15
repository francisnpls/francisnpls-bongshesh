import React from 'react';
import Header from '../layouts/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home