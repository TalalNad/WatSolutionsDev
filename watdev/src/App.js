import React from 'react';
import Navbar from './components/layout/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './sections/Hero';
import Services from './sections/Services';
import CaseStudies from './sections/CaseStudies';
import TechStack from './sections/TechStack';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Services />
        <CaseStudies />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;