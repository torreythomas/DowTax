import React from 'react';
import './App.css';
import 'tachyons';
import logo from './Images/mike.jpeg'

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
        <h2 className="landing-page-header-text-two">  Need a plan to get the most out of your taxes?<br/> We've got you <i className="covered">covered</i>. </h2>
        <a className="landing-page-consultation-button" href="mailto:info@dow.tax"> Request A Consultation</a>
        </div>
      </div>
      </div>

              {/*  Separater Div renderings */}

              <div className="separater-div"> </div>


              {/*  About Section Page renderings */}


      <div id="About">
          <div className="about-description-container-one">
            <div className="about-logo-container">
             
        </div>
        <div className="about-description-container-one-sub-container">
          <h1 className="about-description-header-one">
             Navigating through taxes can be <i>challenging.</i>
          </h1>
          <p className="about-description-main-text-one">
          Navigating through the financial realm of taxes, investments, job advancements, and job loss can be a challenge. Understanding how these challenges affect your daily, monthly, and yearly financial goals can get overwhelming. </p>
        </div>
        </div>

             {/*  Separater Div renderings */}

             <div className="separater-div"> </div>


        <div className="about-description-container-two">
            <div className="about-pic-container">
             <img src={logo}></img>
        </div>
        <div className="about-description-container-one-sub-container-two">
          <h1 className="about-description-header-one">
             We work for <i>YOU.</i>
          </h1>
          <p className="about-description-main-text-one">
             M. Doweary & Associates, LLC is a business advisor supporting small business owners, executive teams, and boards both in day-to-day operations and in preparing for future business growth and opportunity. Our client relationships are our priority as we deliver service that exceeds client expectations.
          </p>
        </div>
        </div>
    </div>

    
     {/*  Separater Div renderings */}

              <div className="separater-div"> </div>











    </div>
  
  );
}

export default App;
