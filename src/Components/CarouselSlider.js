import React from 'react';
import './css/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselSlider = () => {
    return(
        <div className="carousel">
            <Carousel showThumbs={false} autoPlay={true} showStatus={false} swipeable={true}>
                <div>
                    <h3 className="legend">TNA helps</h3>
                    <img className="c-img" src="nurses.jpg" />
                </div>
                <div>
                    <h3 className="legend">TNA helps</h3>
                    <img className="c-img" src="nurses.jpg" />
                </div>
                <div>
                    <h3 className="legend">TNA helps</h3>
                    <img className="c-img" src="nurses.jpg" />
                </div>
            </Carousel>
            
        </div>
    )
}

export default CarouselSlider;