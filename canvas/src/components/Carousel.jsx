// Carousel.jsx
import { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      url: "/src/assets/carousel1.jpg",
      title: "Healthcare Services",
      description: "Quality healthcare at your fingertips"
    },
    {
      id: 2,
      url: "/src/assets/carousel2.jpg",
      title: "Expert Doctors",
      description: "Connect with experienced healthcare professionals"
    },
    {
      id: 3,
      url: "/src/assets/carousel3.jpg",
      title: "Modern Facilities",
      description: "State-of-the-art medical facilities"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.url} alt={slide.title} />
          <div className="carousel-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <button className="carousel-button next" onClick={nextSlide}>❯</button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;