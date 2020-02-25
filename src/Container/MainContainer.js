import React from 'react';
import Carousel from '../Components/Carousel';
import WelcomeNote from '../Components/WelcomeNote';
import AudioPlayer from '../Components/AudioPlayer';
import WhatWeDo from './WhatWeDo';

const MainContainer = () => {
    return(
        <>
        <Carousel />
        <WelcomeNote />
        <AudioPlayer />
        <WhatWeDo />
        </>
    )
}

export default MainContainer;