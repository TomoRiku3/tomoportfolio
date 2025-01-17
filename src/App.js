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
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
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
        <Link to="/project1" className="scroll-item">Project #1 soon...</Link>
        <Link to="/project2" className="scroll-item">Project #2 soon...</Link>
        <Link to="/project3" className="scroll-item">Project #3 soon...</Link>
        <Link to="/project4" className="scroll-item">Project #4 soon...</Link>
        <Link to="/project5" className="scroll-item">Project #5 soon...</Link>
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

function Project1() {
  return <h1>Project 1</h1>;
}

function Project2() {
  return <h1>Project 2</h1>;
}

function Project3() {
  return <h1>Project 3</h1>;
}

function Project4() {
  return <h1>Project 4</h1>;
}

function Project5() {
  return <h1>Project 5</h1>;
}

export default App;