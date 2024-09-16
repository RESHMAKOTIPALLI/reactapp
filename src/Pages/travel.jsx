import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './CarouselSection.css'; // Ensure you create and import this CSS file for additional styling

// Import images for the carousel
import TravelImg1 from '../Assets/travel1.jpg';
import TravelImg2 from '../Assets/travel2.jpg';
import TravelImg3 from '../Assets/travel3.jpg';

function CarouselSection() {
  return (
    <div className="carousel-section">
      <h1>Explore Our Travel Destinations</h1>
      <Carousel 
        autoPlay
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        emulateTouch
      >
        <div>
          <img src={TravelImg1} alt="Travel Destination 1" />
          <p className="legend">Amazing Beach</p>
        </div>
        <div>
          <img src={TravelImg2} alt="Travel Destination 2" />
          <p className="legend">Breathtaking Mountains</p>
        </div>
        <div>
          <img src={TravelImg3} alt="Travel Destination 3" />
          <p className="legend">City Adventures</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSection;
