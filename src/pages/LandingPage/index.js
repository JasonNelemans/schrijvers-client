import React from "react";
import logo from "../../images/logo-white.png";
import './landingpage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-image">
        <div className="img"></div>
        <div className="hero-text">
          <span>Schrijvers</span>
          <p>For all aspiring writers</p>
          <button>Join us</button> <br/>
          <img alt="" src={logo} width="100" height="100" />
        </div>
      </div>
    </div>
  );
}
