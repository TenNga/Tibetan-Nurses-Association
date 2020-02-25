import React from 'react';
import Carousel from '../Components/Carousel';
import WelcomeNote from '../Components/WelcomeNote';
import AudioPlayer from '../Components/AudioPlayer';

const MainContainer = () => {
    return(
        <>
        <Carousel />
        <WelcomeNote />
        <AudioPlayer />
        </>
    )
}

export default MainContainer;