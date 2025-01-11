import React from 'react';
import './experience.css';

const experiences = [
  {
    title: 'G2X Committee',
    company: 'Multimedia Nusantara University',
    description: 'became a committee member of G2X(Game Development Clube game expo) and was in charge of the preparation for the seminar.',
    duration: 'July 2024 - Oct 2024',
  },
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>My Experiences</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <h3>{experience.title}</h3>
            <span>{experience.company}</span>
            <p>{experience.description}</p>
            <span>{experience.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
