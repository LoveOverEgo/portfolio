import React, { useState, useEffect } from 'react';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Recognition from './components/recognition/Recognition';
import Contact from './components/contact/Contact';
import Achievements from './components/achievements/Achievements';
import SideProjects from './components/side-projects/SideProjects';
import Community from './components/community/Community';
import Learning from './components/learning/Learning';
import Navigation from './components/navigation/Navigation';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navigation showNav={showNav} />
      <Home />
      <main>
        <Skills />
        <Achievements />
        <Recognition />
        <Community />
        <Contact />
        <Learning />
        <SideProjects />
      </main>
    </div>
  );
};

export default App;
