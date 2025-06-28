import React from 'react';

function App() {
  const dreamProjects = [
    {
      name: 'AI Health Assistant',
      description: 'An AI-powered tool that helps users track and manage their health metrics.',
    },
    {
      name: 'Virtual Travel Experience',
      description: 'A VR platform that allows people to explore different parts of the world from home.',
    },
    {
      name: 'Smart Farming System',
      description: 'An IoT-based application for improving crop monitoring and yield prediction.',
    },
  ];

  return (
    <div className="ns-wrapper">
      {dreamProjects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
