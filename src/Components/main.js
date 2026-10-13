
import React, { useState } from 'react';
import Me from './me';
import Project from './projects';
import Skill from './skills';
import Experience from './experience';
import Certificate from './certificate';
import './main.css';

const MainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (item) => {
    setIsModalOpen(true);
    setSelectedProject(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const slides = [
    <Me />,
    <Project onOpenModal={openModal} />,
    <Skill />,
    <Experience />,
    <Certificate onOpenModal={openModal} />,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-box">
        <button className="nav-button prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-container">
          <div
            className="carousel-slides"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                {slide}
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button next" onClick={nextSlide}>
          &#10095;
        </button>

        {isModalOpen && selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title || 'Certificate'}
                className="modal-image"
              />

              {selectedProject.title && (
                <div className="modal-details">
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.details}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
