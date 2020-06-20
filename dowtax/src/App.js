import React from 'react';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <div className="overlay">
      <header className="navigation-header">
        <ul className="navigation-items-container">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Services</a></li>
        <li className="nav-item"><a href="#">Updates</a></li>
        <li className="nav-item"><a href="#">Payment</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
      </header>
      </div>
    </div>
  
  );
}

export default App;
