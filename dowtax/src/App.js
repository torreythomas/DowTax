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
        <li className="nav-item"><a href="#Services">Services</a></li>
        <li className="nav-item"><a href="#Updates">Updates</a></li>
        <li className="nav-item"><a href="#">Resources</a></li>
        <li className="nav-item"><a href="#">Contact & Payment</a></li>
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
          <div className="about-description-container-one shadow-5">
            <div className="about-logo-container ">
             
        </div>
        <div className="about-description-container-one-sub-container">
          <h1 className="about-description-header-one">
             Navigating through taxes can be <i>challenging.</i>
          </h1>
          <p className="about-description-main-text-one">
          Navigating through the financial realm of taxes, investments, job advancements, and job loss can be a challenge. Understanding how these challenges affect your daily, monthly, and yearly financial goals can get overwhelming. </p>
        </div>
        </div>

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



          {/* Services renderings */}

<div id="Services">


                 {/* Navigation Menu */}
                 <header className="navigation-header-2">
        <ul className="navigation-items-container">
        <li className="nav-item"><a href="#Home">Home</a></li>
        <li className="nav-item"><a href="#About">About</a></li>
        <li className="nav-item"><a href="#Services">Services</a></li>
        <li className="nav-item"><a href="#">Updates</a></li>
        <li className="nav-item"><a href="#">Resources</a></li>
        <li className="nav-item"><a href="#">Contact & Payment</a></li>
        </ul>
      </header>

      <h1 className="our-services-design"> Our services are designed to keep you ready</h1>

<div className="service-rendering-container grow">
  <div className="service-rendering-text-container">
        <h2> Accounting and Bookkeeping</h2>
    <p> We make sure you'll always be up to speed.</p>
    <a className="landing-page-consultation-button" href="mailto:info@dow.tax"> Request A Consultation</a>

  </div>
  <div className="service-rendering-image-container-1">
  </div>
</div>
<div className="service-rendering-container grow">
  <div className="service-rendering-text-container">
    <h2> Business and Financial Consulting </h2>
    <p> We want your business to reach it's full potential.</p>
    <a className="landing-page-consultation-button" href="mailto:info@dow.tax"> Request A Consultation</a>

  </div>
  <div className="service-rendering-image-container-2">
  </div>
</div>
<div className="service-rendering-container grow">
  <div className="service-rendering-text-container">
    <h2> Government and Nonprofit </h2>
    <p> We offer consultation to government and nonprofit entities.</p>
        <a className="landing-page-consultation-button" href="mailto:info@dow.tax"> Request A Consultation</a>
  </div>
  <div className="service-rendering-image-container-3">
  </div>
</div>
<div className="service-rendering-container grow">
  <div className="service-rendering-text-container">
    <h2> Tax Preparation & Planning </h2>
    <p> Looking for a solid plan? We can do that for you.</p>
        <a className="landing-page-consultation-button" href="mailto:info@dow.tax"> Request A Consultation</a>
  </div>
  <div className="service-rendering-image-container-4">
  </div>
</div>
</div>


  {/*  Separater Div renderings */}

  <div className="separater-div"> </div>
          {/*  Updates Renderings */}



<div id="Updates">

<div className="updates-container">
  <h1 className="grow shadow-5 dib updates-container-header"> We value keeping you <i className="covered"> updated</i> </h1>
  <div className="update-container-1 grow shadow-5 dib">
    <h1 className="update-header"> <u>COVID-19 Update </u></h1>
    <p>  In response to the COVID-19 pandemic, M. Doweary & Associates, LLC is following the CDC and Pennsylvania Health Department Guidelines on social distancing to limit the spread and exposure of coronavirus. M. Doweary & Associates, LLC community office will therefore be closed to the public during this unprecedented time. </p>
    <p> All other avenues of normal taxpayer communication and public information access remain open, including online, via telephone and by mail. If you have questions or need local tax assistance, please contact Micheal Doweary via email through the Contact Us page or call our Taxpayer Service team at 717-885-0098. Thank you.</p>
  </div>
 {/*  Separater Div renderings */}

 {/* <div className="separater-div-2"> </div> */}


  <div className="update-container-2 grow shadow-5 dib">
    <h1 className="update-header"><u>TAX DEADLINE EXTENDED</u> </h1>
    <p> The filing deadline for tax returns has been extended from April 15 to July 15, 2020. The IRS urges taxpayers who are owed a refund to file as quickly as possible.

July 15, 2020— The Department of Revenue today announced the deadline for taxpayers to file their 2019 Pennsylvania personal income tax returns is extended to July 15, 2020. </p>
<p>This means taxpayers will have an additional 90 days to file from the original deadline of April 15</p>
  </div>
</div>



{/* Resources Rendering */}





</div>





    </div>
  
  );
}

export default App;
