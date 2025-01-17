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