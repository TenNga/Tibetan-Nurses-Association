import React from 'react';
import './css/WelcomeNote.css';

const WelcomeNote = (props) => {
    return(
        <div className="welcome-container">
            <p className="welcome-header">{props.data.header}</p>
            <p className="welcome-para">{props.data.para}</p>
            <button>{props.data.linkContent}</button>
        </div>
    )
}

export default WelcomeNote;