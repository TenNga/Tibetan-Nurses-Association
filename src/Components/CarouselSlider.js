import React from 'react';
import './css/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link } from 'react-router-dom';

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
                   <Link to={"/events"}><button className="legend">Community Health Fair 2019</button></Link> 
                    <img className="c-img" src="community.jpg" alt="community health fair"/>
                </div>
                <div className="carousel-content">
                    <a href="https://www.youtube.com/channel/UCy80Z1XEWgOTQRBmYpHQ46g" target="_blank"><button className="legend">Our YouTube Channel</button></a>
                    <img className="c-img" src="youtube.jpg" alt="youtube channel"/>
                </div>
                <div className="carousel-content">
                  <Link to="/about"><button className="legend">About TNA</button></Link>  
                    <img className="c-img" src="about.jpg" alt="about tna"/>
                </div>
            </Carousel>
            
        </div>
    )
}

export default CarouselSlider;