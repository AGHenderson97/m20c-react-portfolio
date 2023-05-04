import React from 'react';
import './Project.css';

const Project = ({ title, image, appUrl, repoUrl }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={appUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`${title} screenshot`} />
      </a>
      <p>
        <a href={appUrl} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </a>
      </p>
      <p>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

export default Project;
