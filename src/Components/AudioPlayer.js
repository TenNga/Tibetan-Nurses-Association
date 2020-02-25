import React from 'react';
import './css/AudioPlayer.css';

const AudioPlayer = () => {
    return(
        <div className="audio-player">
            <p className="player-header">Latest Health Talk</p>
            <audio controls>
                <source src="audioTest.mp3" type="audio/mpeg" />
            </audio>
        </div>
        
    )
}
export default AudioPlayer;