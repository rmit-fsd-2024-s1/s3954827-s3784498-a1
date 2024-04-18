import React, { useEffect } from 'react';
import placeholderImage from '../images/placeholder.png';
import logo from '../images/soilLogo3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap'; // Import Bootstrap carousel functionality
import './carousel.css'; // Import the CSS file



const CarouselComponent = () => {
    useEffect(() => {
      // Initialize the carousel
      const carouselElement = document.getElementById('carouselExampleAutoplaying');
      const carousel = new Carousel(carouselElement, {
        interval: 7000, // Set interval to 5000 milliseconds (5 seconds)
        ride: 'carousel' // Start carousel autoplay
      });
  
      return () => {
        // Clean up the carousel when component unmounts
        carousel.dispose();
      };
    }, []);
  
    return (
      <div className='carousel-main'>
        <div id="carouselExampleAutoplaying" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={placeholderImage} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={logo} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={placeholderImage} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default CarouselComponent;
  