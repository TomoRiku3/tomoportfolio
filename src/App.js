import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import './App.css';

// Register Chart.js components
Chart.register(...registerables);

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
  useEffect(() => {
    // Simulated JSON data
    const jsonData = {
      "labels": ["January", "February", "March", "April", "May", "June"],
      "values": [10, 20, 15, 25, 30, 40]
    };

    // Extract data from JSON
    const labels = jsonData.labels;
    const dataValues = jsonData.values;

    // Create the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar', // You can also use 'line', 'pie', 'doughnut', etc.
      data: {
        labels: labels, // X-axis labels
        datasets: [{
          label: 'Monthly Sales', // Label for the dataset
          data: dataValues, // Data values
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar fill color
          borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
          borderWidth: 1 // Bar border width
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true // Y-axis starts at zero
          }
        }
      }
    });

    // Cleanup function to destroy the chart instance
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Project 1</h1>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
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