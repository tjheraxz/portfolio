import React from 'react';
import './skill.css'; // Ensure to create and link this stylesheet

const Skill = () => {
  return (
    <div className="skill">
      <h2 id="TESTING">Skills</h2>
      <p>Here are some of my skills:</p>
      <div className="skill-sections">
        {/* Frontend Section */}
        <div className="skill-box">
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>XML</li>
          </ul>
        </div>
        {/* Backend Section */}
        <div className="skill-box">
          <h3>Back-End</h3>
          <ul>
            <li>Java</li>
            <li>Kotlin</li>
            <li>C#</li>
            <li>C</li>
            <li>python</li>
          </ul>
        </div>
        {/* Game Engine Section */}
        <div className="skill-box">
          <h3>Game Engine & creative tools</h3>
          <ul>
            <li>Unity</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Unreal Engine 5</li>
            <li>Blender</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
