import React from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import './Hero.css'

const Hero = () => {
  return (
    <div>
    <Container fluid="true" className="hero-section">
    <div className="heroBackground justify-content-center">
    <div className="heroOverlay justify-content-center">
    <img src="https://res.cloudinary.com/kayilan/image/upload/c_scale,h_1500/v1619533293/Official_Logo_-_no_background_2_wqsh2c.png" alt="logo" id="logo"/>
    </div>
    </div>
          
      </Container>
    </div>
    
  );
};

export default Hero;
