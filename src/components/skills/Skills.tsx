import React from 'react';
import { Element } from 'react-scroll';

const Skills: React.FC = () => {
  return (
    <Element name="skills" className="section">
      {/* <img src="/technology.png" alt="Your Name" className="section-photo" /> */}
      <div className="section-container">
          <div className="section-content">
            <h2>Proficiency</h2>
            <p>Angular</p>
            <p>NodeJS</p>
          </div>
      </div>
    </Element>
  );
}
export default Skills;
