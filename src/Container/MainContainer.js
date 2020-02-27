import React from 'react';
import CarouselSlider from '../Components/CarouselSlider';
import WelcomeNote from '../Components/WelcomeNote';
import AudioPlayer from '../Components/AudioPlayer';
import WhatWeDo from './WhatWeDo';
import Footer from './Footer';

const MainContainer = () => {
    return(
        <>
        <CarouselSlider />
        <WelcomeNote />
        <AudioPlayer />
        <WhatWeDo />
        <Footer />
        </>
    )
}

export default MainContainer;