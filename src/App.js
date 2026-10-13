
import React, { useState, useRef } from 'react';
import './App.css';
import Main from './Components/main';
import audioFile from './Components/audio/audio.mp3';
import summonSoundFile from './Components/audio/Jaja~.ogg';
import petImage from './Components/Images/furina.png';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pets, setPets] = useState([]);
  const audioRef = useRef(new Audio(audioFile));

  audioRef.current.volume = 0.8;

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const summonPet = () => {
    // Play summon sound
    const summonSound = new Audio(summonSoundFile);
    summonSound.play();

    // Get the visible screen dimensions
    const screenWidth = window.innerWidth;

    // Pet dimensions (adjust if your image is larger)
    const petWidth = 50;

    // Calculate a random horizontal position within the screen
    const maxLeft = Math.max(0, screenWidth - petWidth);
    const petLeft = Math.random() * maxLeft;

    // Create the new pet
    const newPet = {
      id: Date.now(),
      left: petLeft,
      top: -50,
      delay: '10s',
    };

    setPets((previousPets) => [...previousPets, newPet]);
  };

  return (
    <div className="background">
      {/* Scrolling Text */}
      <div className="scrolling-text-container">
        <p className="scrolling-text">
          Welcome To my Portfolio, feel free to stay as long as you like! I hope you enjoy your stay here
        </p>
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
            animationDelay: `0s, ${pet.delay}`,
          }}
        />
      ))}
    </div>
  );
}

export default App;

