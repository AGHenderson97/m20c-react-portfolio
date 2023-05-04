import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css';

const projectsData = [
  // Adding project details here
  {
    title: 'Project 1',
    imageUrl: 'https://via.placeholder.com/150',
    deployedUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/user/project1',
  },
  // More projects...
];

const Portfolio = () => {
  return (
    <section id="my-work">
      <h2>My Work</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
