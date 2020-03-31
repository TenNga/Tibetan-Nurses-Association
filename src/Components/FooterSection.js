import React from 'react';
import uniqid from 'uniqid';
import {Link } from 'react-router-dom';

import './css/FooterSection.css';

const FooterSection = (props) => {

    const handleOnClick = () => {
        window.scrollTo(0, 0);
    }
    const handleSubHeader = () => {
        return props.sectionData.subHeader.map(subHeader => <Link to={"/"+subHeader.link} ><h4 onClick={handleOnClick} key={uniqid()}>{subHeader.text}</h4></Link>)
    }
    return(
        <div className="footer-section">
            <h1>{props.sectionData.header}</h1>
            <div className="footer-subsection">
               {handleSubHeader()}
            </div>
        </div>
    )
}

export default FooterSection;