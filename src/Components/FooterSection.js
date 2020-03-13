import React from 'react';
import uniqid from 'uniqid';

import './css/FooterSection.css';

const FooterSection = (props) => {
    const handleSubHeader = () => {
        return props.sectionData.subHeader.map(subHeader => <h4  key={uniqid()}>{subHeader}</h4>)
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