import React from 'react';
import './css/WelcomeNote.css';

const WelcomeNote = () => {
    return(
        <div className="welcome-container">
            <p className="welcome-header">Welcome To Tibetan Nurses Assocation</p>
            <p className="welcome-para">Tibetan health care workers across New York and New Jersey including: Physicians, Nurse Practitioners, Registered Nurses and other healthcare members formally established Tibetan Nurses Association (TNA) on April 2nd, 2016, as a registered non-profit organization to serve the Tibetan Community.</p>
            <button>Learn More</button>
        </div>
    )
}

export default WelcomeNote;