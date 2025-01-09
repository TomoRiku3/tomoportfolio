import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navbar">
          <li><Link to="/">Project</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

function Project() {
  return (
    <div>
      <h1>Tomo's Portfolio</h1>
      <div className="scroll-container">
        <div className="scroll-item">Project #1 soon...</div>
        <div className="scroll-item">Project #2 soon...</div>
        <div className="scroll-item">Project #3 soon...</div>
        <div className="scroll-item">Project #4 soon...</div>
        <div className="scroll-item">Project #5 soon...</div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>This is the resume page.</p>
    </div>
  );
}

export default App;