import React from 'react';
import './css/WelcomeNote.css';

import { Link } from 'react-router-dom';

const WelcomeNote = (props) => {
    return(
        <div className="welcome-container">
            <div className="sub-container">
                <div className="text-container">
                    <p className="welcome-header">{props.data.header}</p>
                    <p className="welcome-para">{props.data.para}</p>
                    <Link to={"/about"}> <button>Learn More</button> </Link>    
                </div>
                {props.source === "about"? null : <img src="home_aboutTNA.jpg" /> }
                
            </div>
           
        </div>
    )
}

export default WelcomeNote;