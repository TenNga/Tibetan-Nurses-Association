import React from 'react';
import './css/AudioPlayer.css';
import gsap from 'gsap';

const AudioPlayer = () => {

    

    return(
        <div className="audio-player">
            <h4 className="player-header">Latest Health Talk</h4>
            <audio controls>
                <source src="audioTest.mp3" type="audio/mpeg" />
            </audio>
        </div>
        
    )
}
export default AudioPlayer;