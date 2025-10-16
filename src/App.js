import React, { useState } from 'react';
import Navbar from './pages/Navbar';
import HeroSection from './pages/HeroSection';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
//import Contact from './pages/Contact';
import Footer from './pages/Footer';
import HiddenResume from './components/HiddenResume';
import profileImg from './assets/profile.png';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';
// import { SplashCursor } from './components/ui/splash-cursor';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  // Scroll animation hooks for each section
  const [heroRef, heroVisible] = useScrollAnimation(0.3);
  const [aboutRef, aboutVisible] = useScrollAnimation(0.2);
  const [educationRef, educationVisible] = useScrollAnimation(0.2);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.2);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.2);
  const [contactRef, contactVisible] = useScrollAnimation(0.2);
  const [footerRef, footerVisible] = useScrollAnimation(0.1);

  return (
    <div className={`relative z-10 App${darkMode ? ' dark-mode' : ''}`}>
      {/* <SplashCursor /> */}
      <Navbar onToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />
      <main>
        <div 
          ref={heroRef} 
          className={`scroll-section ${heroVisible ? 'animate-in' : ''}`}
        >
          <HeroSection />
        </div>
        <div 
          ref={aboutRef} 
          className={`scroll-section ${aboutVisible ? 'animate-in' : ''}`}
        >
          <AboutMe />
        </div>
        <div 
          ref={educationRef} 
          className={`scroll-section ${educationVisible ? 'animate-in' : ''}`}
        >
          <Education />
        </div>
        <div 
          ref={skillsRef} 
          className={`scroll-section ${skillsVisible ? 'animate-in' : ''}`}
        >
          <Skills />
        </div>
        <div 
          ref={projectsRef} 
          className={`scroll-section ${projectsVisible ? 'animate-in' : ''}`}
        >
          <Projects />
        </div>
        {/* <div 
          ref={contactRef} 
          className={`scroll-section ${contactVisible ? 'animate-in' : ''}`}
        >
          <Contact />
        </div> */}
      </main>
      <div 
        ref={footerRef} 
        className={`scroll-section ${footerVisible ? 'animate-in' : ''}`}
      >
        <Footer />
      </div>
      {/* Hidden resume for PDF generation */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0, width: 0, height: 0, overflow: 'hidden' }}>
        <HiddenResume profileImage={profileImg} />
      </div>
    </div>
  );
}

export default App; 