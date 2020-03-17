import React from 'react';
import './css/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselSlider = () => {
    return(
        <div className="carousel">
            <Carousel 
                showThumbs={false} 
                autoPlay={true} 
                showStatus={false} 
                swipeable={true}
                infiniteLoop={true}
            >
                <div className="carousel-content">
                    <button className="legend">Community Health Fair 2019</button>
                    <img className="c-img" src="community.jpg" />
                </div>
                <div className="carousel-content">
                    <button className="legend">Our YouTube Channel</button>
                    <img className="c-img" src="youtube.jpg" />
                </div>
                <div className="carousel-content">
                    <button className="legend">About TNA</button>
                    <img className="c-img" src="about.jpg" />
                </div>
            </Carousel>
            
        </div>
    )
}

export default CarouselSlider;