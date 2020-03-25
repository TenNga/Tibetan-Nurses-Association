import React from 'react';
import CarouselSlider from '../Components/CarouselSlider';
import WelcomeNote from '../Components/WelcomeNote';
import AudioPlayer from '../Components/AudioPlayer';
import WhatWeDo from './WhatWeDo';

import './css/Home.css';

class Home extends React.Component {

    
    state = {
            scrollY: ""
        }

        componentDidMount = () =>{
            window.addEventListener('scroll',()=> this.setState({scrollY: window.scrollY}))
        }
        audioDisplay = () => {
            const audioPlayer = document.querySelector('.audio-player');
            audioPlayer.style.opacity = "1";
            audioPlayer.style.transition = "opacity .8s ease-in-out"
        }
        WhatWeDoDisplay = () => {
            const WhatWeDo = document.querySelector('.what-we-do');
            WhatWeDo.style.opacity = "1";
            WhatWeDo.style.transition = "opacity .8s ease-in-out"
        }


    render(){
        console.log("Y Position: ", this.state.scrollY)
        const homeWelcomeData = {
                    header: "Welcome To Tibetan Nurses Assocation",
                    para: "Tibetan health care workers across New York and New Jersey including: Physicians, Nurse Practitioners, Registered Nurses and other healthcare members formally established Tibetan Nurses Association (TNA) on April 2nd, 2016, as a registered non-profit organization to serve the Tibetan Community.",
                    link: ""}
        
        return(
                <>
                    <CarouselSlider />
                    <WelcomeNote data={homeWelcomeData}/>
                    <AudioPlayer class="audio-player" /> 
                    <WhatWeDo class="what-we-do"/> 
                    {parseInt(this.state.scrollY) >= 50? this.audioDisplay(): null}
                    
                    {this.state.scrollY >= 408? this.WhatWeDoDisplay(): null }
                    
                </>
        )
    }
}

export default Home;