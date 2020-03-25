import React from 'react';
import CarouselSlider from '../Components/CarouselSlider';
import WelcomeNote from '../Components/WelcomeNote';
import AudioPlayer from '../Components/AudioPlayer';
import WhatWeDo from './WhatWeDo';

class Home extends React.Component {

    
    state = {
            scrollY: ""
        }

        componentDidMount() {
            window.addEventListener('scroll',()=> this.setState({scrollY: window.scrollY}))
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
                    {this.state.scrollY >= 100? <AudioPlayer /> : null }
                    {this.state.scrollY >= 1000? <WhatWeDo /> : null }
                    
                </>
        )
    }
}

export default Home;