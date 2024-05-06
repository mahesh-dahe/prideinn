import React, { useState, useEffect } from 'react';
import './carousel.css'; // Import CSS file for styling
import image1 from 'saibaba.jpeg'; // Import the image file
import image2 from 'pexels-pixabay-358457.jpg';
function App() {
  const [images, setImages] = useState([
    image2, // Set the first image to the imported image variable
    image2,
    image2,
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero">
      {images.map((image, index) => (
        <img
          key={index}
          src={image} // Use the imported image variable directly
          alt={`Image ${index + 1}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? 'dot active' : 'dot'}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default App;
