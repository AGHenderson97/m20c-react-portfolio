import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="resume_url_here" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {/**/}
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        {/* ... */}
      </ul>
    </section>
  );
};

export default Resume;
