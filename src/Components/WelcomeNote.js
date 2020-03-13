import React from 'react';
import './css/WelcomeNote.css';

import { Link } from 'react-router-dom';

const WelcomeNote = (props) => {
    return(
        <div className="welcome-container">
            <p className="welcome-header">{props.data.header}</p>
            <p className="welcome-para">{props.data.para}</p>
           <Link to={"/about"}> <button>Learn More</button> </Link>
        </div>
    )
}

export default WelcomeNote;