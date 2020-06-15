import React from 'react';
import './Navigation.css';
import logo from '../Images/logo_v2-removebg-preview.png'
import 'tachyons';

function Navigation() {
  return (
    <div className="Navigation">
             <ul class="navigation-items-container">
             <span className="logo-container">
        <img className="site-logo-navbar" src={logo} alt="dowtax-logo" />
        </span>
        <li className="nav-item"><a className="nav-item-link b black hover-navy" href="#"> Home </a></li>
        <li className="nav-item"><a className="nav-item-link b black hover-navy" href="#"> About Us     </a></li>
        <li className="nav-item"><a className="nav-item-link b black hover-navy" href="#"> Services </a></li>
        <li className="nav-item"><a className="nav-item-link b black hover-navy" href="#"> Helpful Tips</a></li>
        <li className="nav-item"><a className="nav-item-link b black hover-navy" href="#"> Track Your Refund</a></li>
        <li className="nav-item"><a className="nav-item-link b black hover-navy" href="#"> Contact </a></li>
        <li className="nav-item"><a className=" nav-item-button shadow-5 br2" href="#"> Payment </a></li>
      </ul>
    </div>
  );
}

export default Navigation;
