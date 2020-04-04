import React from 'react';
import './css/AudioPlayer.css';

const AudioPlayer = () => {

    return(
        <div className="audio-player">
            <h4 className="player-header">Latest Health Talk</h4>
            <div className="control-container">
               <div className="control">
                    <img src="covid19_talk.png" />
                    <audio controls>
                        
                        <source src="Covid19_ a public health discussion by Tibetan Nurses Association_znh-mI0P-VQ.mp3" type="audio/mpeg" />
                    </audio>
                </div> 
            </div>
            
        </div>
        
    )
}
export default AudioPlayer;