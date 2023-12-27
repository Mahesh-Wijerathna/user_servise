import { Link } from 'react-router-dom';
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Home_ = () => {
  const carouselImages = [
    'images/image4.jpg',
    'images/image2.jpg',
    'images/image3.jpeg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  

  useEffect(() => {
    const incrementSlide = () => {
      setCurrentSlide((currentSlide + 1) % carouselImages.length);
    };
  
    const interval = setInterval(incrementSlide, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length, currentSlide]);

  

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-list">
            <li><a href="/projects">Services</a></li>
            <li><a href="/branches">About us</a></li>
            <li><a href="/contact">Contact</a></li>
            <div>
              <Link className="btn" to="/login">Login</Link>
              <Link className="btn" to="/register">Register</Link>
            </div>
          </ul>
        </nav>
      </header>

      <div className="carousel">
        
        <Carousel
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          infiniteLoop={true}
          autoPlay={false}
        >
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
              <div className="image-text">
              <h1>Welcome to Healthy Roam</h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      
    </div>
  );
};

export default Home_;
