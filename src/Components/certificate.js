import React from 'react';
import './certificate.css';
import Certificate1 from './Images/certificate1.jpg'
import Certificate2 from './Images/certificate2.jpg'

const certificates = [
  {
    image: Certificate1,
  },
  {
    image: Certificate2,
  },
];

const Certificate = () => {
  return (
    <div className="certificate-section">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img src={certificate.image} alt={`Certificate ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
