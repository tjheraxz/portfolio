import React, { useState, useEffect } from 'react';
import "./me.css";
import Profile from './Images/poig.png'; // The initial profile image
import hehe from './Images/absolutepeakness.png'; // The second image

const Me = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  // Change image visibility after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondImage(true); // Show the second image
    }, 30000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="about-me-container">
      <div
        className={`about-me-photo ${showSecondImage ? "show-second-image" : ""}`}
      >
        <img
          src={Profile}
          alt="Profile"
          className="photo"
        />
        <img
          src={hehe}
          alt="Second Image"
          className="photo photo-second"
        />
      </div>
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          Hello! I'm Nicolas Temawan, a Graduate of Informatics at Multimedia Nusantara. 
          I have experience in front-end development using HTML, CSS, JavaScript, and React, 
          as well as back-end development with Java, C, and Kotlin. My expertise extends to mobile development, 
          particularly in building Android applications using Kotlin and XML. I also have expirience in designing UI/UX 
          for both mobile and also web. Additionally, I also have a background in game development, having created engaging projects using Unity & Unreal Engine 5.
        </p>
      </div>
    </div>
  );
};

export default Me;
