import React, { useState, useRef } from 'react';
import './App.css';
import Main from './Components/main';
import audioFile from './Components/audio/audio.mp3'; // Import the audio file
import petImage from './Components/Images/furina.png'; // Import the pet image

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // Music state
  const [pets, setPets] = useState([]); // State to hold summoned pets
  const audioRef = useRef(new Audio(audioFile)); // Audio reference
  audioRef.current.volume = 0.8;

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle play state
  };

  const summonPet = () => {
    const background = document.querySelector('.background'); // Get the background element
    const backgroundRect = background.getBoundingClientRect(); // Get its dimensions and position
  
    // Generate a random x position within the .background bounds
    const petLeft = Math.random() * (backgroundRect.width - 50); // Subtract pet width to keep it inside
    const newPet = {
      id: Date.now(),
      left: petLeft, // Relative to the .background
      top: -50, // Start above the top of .background
      delay: `10s`, // Random delay between 2 and 5 seconds
    };
  
    setPets([...pets, newPet]);
  };
  return (
    <div className="background">
      {/* Scrolling Text */}
      <div className="scrolling-text-container">
        <p className="scrolling-text">Welcome To my Portfolio, feel free to stay as long as you like! I hope you enjoy your stay here</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Main />
      </div>

      {/* Music Toggle Button */}
      <button className="music-toggle-btn" onClick={toggleMusic}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      {/* Summon Pet Button */}
      <button className="summon-pet-btn" onClick={summonPet}>
        ?
      </button>

      {/* Render Summoned Pets */}
      {pets.map((pet) => (
  <img
    key={pet.id}
    src={petImage}
    alt="Pet"
    className="pet"
    style={{
      left: `${pet.left}px`,
      top: `${pet.top}px`,
      animationDelay: `0s, ${pet.delay}`, // Apply the random delay
    }}
  />
))}
    </div>
  );
}

export default App;
