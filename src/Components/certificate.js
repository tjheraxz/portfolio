
import React from 'react';
import './certificate.css';

import Certificate1 from './Images/certificate1.jpg';
import Certificate2 from './Images/certificate2.jpg';
import Certificate3 from './Images/certificate3.jpg';
import Certificate4 from './Images/certificate4.jpeg';

const Certificate = ({ onOpenModal }) => {
  const certificates = [
    {
      id: 1,
      image: Certificate1,
    },
    {
      id: 2,
      image: Certificate2,
    },
    {
      id: 3,
      image: Certificate3,
    },
    {
      id: 4,
      image: Certificate4,
    },
  ];

  return (
    <div className="certificate-section">
      <h1>Certificates</h1>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="certificate-card"
            onClick={() => onOpenModal(certificate)}
          >
            <img
              src={certificate.image}
              alt={`Certificate ${certificate.id}`}
              className="certificate-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;