import React from "react";
import Button from 'react-bootstrap/Button';
import logo from "../../images/logo-white.png";
import './landingpage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-image">
        <div className="img"></div>
        <div className="hero-text">
          <p>Voor en door...</p>
          <span className='schrijvers'>Schrijvers</span> <br/>
          <Button variant="success">Sluit je aan</Button> <br/>
          <img alt="" src={logo} width="100" height="100" />
        </div>
      </div>
    </div>
  );
}
