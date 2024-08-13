import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation: React.FC<{ showNav: boolean }> = ({ showNav }) => (
  <>
    <div className='top-nav-container'>
      <nav className={`top-nav ${showNav ? 'hide' : ''}`}>
        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
        <Link activeClass="active" to="achievements" spy={true} smooth={true} duration={500}>Achievements</Link>
        <Link activeClass="active" to="recognition" spy={true} smooth={true} duration={500}>Recognition</Link>
        <Link activeClass="active" to="community" spy={true} smooth={true} duration={500}>Community Involvement</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
        <Link activeClass="active" to="learning" spy={true} smooth={true} duration={500}>Learning Journey</Link>
        <Link activeClass="active" to="side-projects" spy={true} smooth={true} duration={500}>Side Projects</Link>
      </nav>
    </div>
    <nav className={`side-nav ${showNav ? 'show' : ''}`}>
      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
      <Link activeClass="active" to="achievements" spy={true} smooth={true} duration={500}>Achievements</Link>
      <Link activeClass="active" to="recognition" spy={true} smooth={true} duration={500}>Recognition</Link>
      <Link activeClass="active" to="community" spy={true} smooth={true} duration={500}>Community Involvement</Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
      <Link activeClass="active" to="learning" spy={true} smooth={true} duration={500}>Learning Journey</Link>
      <Link activeClass="active" to="side-projects" spy={true} smooth={true} duration={500}>Side Projects</Link>
    </nav>
  </>
);

export default Navigation;
