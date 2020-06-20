import React from 'react';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
</head>

      <div className="overlay">


                  {/* Navigation Menu */}
      <header className="navigation-header">
        <ul className="navigation-items-container">
        <li className="nav-item"><a href="#Home">Home</a></li>
        <li className="nav-item"><a href="#About">About</a></li>
        <li className="nav-item"><a href="#">Services</a></li>
        <li className="nav-item"><a href="#">Updates</a></li>
        <li className="nav-item"><a href="#">Payment</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
      </header>


                  {/* Landing page renderings */}
      <div id="Home">
        <div className="landing-page-header-text-wrapper">
        <h1 className="landing-page-header-text-one"> Mike Doweary and Associates LLC</h1>
        <h2 className="landing-page-header-text-two">  Success is when preparation meets opportunity.<br/> We've got planning <i className="covered">covered</i>. </h2>
        </div>
      </div>



                  {/*  About Section Page renderings */}


      <div id="About">

      </div>







      </div>
    </div>
  
  );
}

export default App;
