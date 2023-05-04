import React from 'react';
import Project from './Project';

const projectsData = [
  {
    title: 'WeatherWear: Clothing recommendations based on the weather',
    imageUrl: 'https://i.postimg.cc/4yRZCQNB/Screenshot-2023-04-17-at-6-24-42-AM.png',
    deployedUrl: 'https://zellyb.github.io/Weather-Wear/',
    githubUrl: '',
  },
  {
    title: 'Magical Breadsticks: An AI generated Comic book generator with user data server functionality.',
    imageUrl: 'https://i.postimg.cc/QtkYtQJ6/Screenshot-2023-04-17-at-6-27-02-AM.png',
    deployedUrl: 'https://magical-breadsticks.herokuapp.com/',
    githubUrl: '',
  },
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
