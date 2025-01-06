import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

function Projects() {
  return (
    <div className="App-content">
      <h1>Tomo's Portfolio</h1>
    </div>
  );
}

function Resume() {
  return (
    <div className="App-content">
      <h1>Resume</h1>
      <p>Here you can add your resume content.</p>
    </div>
  );
}

export default App;