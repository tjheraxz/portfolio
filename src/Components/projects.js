import React from 'react';
import './project.css';
import TerasSedap from './Images/TerasSedap.png'
import List from './Images/Todolist.png'
import FS from'./Images/fruitshooter.png'
import Ish from './Images/isyaratku.png'
import TM from './Images/taskmate.png'

const Project = ({ onOpenModal }) => {
  const projects = [
    {
      id: 1,
      image: TerasSedap,
      title: 'TerasSedap',
      details: 'TerasSedap is a interactive menu that was created to help both owner and customer of this restaurant. how it works is by a customer will scan a QR code which will land them to the menu screen. Once the customer have ordered, it will be send straight to the employees tablet.',
    },
    {
      id: 2,
      image: List,
      title: 'To do list',
      details: "a To do list website application that helps you keep track of tasks that have been completed and those that haven't.",
    },
    {
      id: 3,
      image: FS,
      title: 'Fruit Shooter',
      details: "Fruit Shooter is a game inspired by the well-known Fruit Ninja. Unlike the original, this game offers multiple gun options for players to choose from, instead of using a sword.",
    },
    {
      id: 4,
      image:Ish ,
      title: 'Isyaratku',
      details:"Isyaratku is a UI/UX application designed to help mute and deaf individuals communicate more easily with the rest of society. The app features a tool for translating hand gestures into words and vice versa. It also includes a dictionary that demonstrates how to perform hand gestures for a wide range of words.",
    },
    {
      id: 5,
      image:TM ,
      title: 'Taskmate',
      details:"Taskmate is a mobile application designed as a to-do list. Users can create tasks, set reminders that will be notified through alerts, and track the status of tasks, including completed, unfinished, and overdue tasks.",
    }
  ];

  return (
    <div className="project">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => onOpenModal(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
