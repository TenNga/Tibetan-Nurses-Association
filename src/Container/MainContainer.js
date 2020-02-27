import React from 'react';
import CarouselSlider from '../Components/CarouselSlider';
import WelcomeNote from '../Components/WelcomeNote';
import AudioPlayer from '../Components/AudioPlayer';
import WhatWeDo from './WhatWeDo';

const MainContainer = () => {
    return(
        <>
        <CarouselSlider />
        <WelcomeNote />
        <AudioPlayer />
        <WhatWeDo />
        </>
    )
}

export default MainContainer;