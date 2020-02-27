import React from 'react';
import './css/WhatWeDoSection.css';

const WhatWeDoSection = (props) => {
    return(
        <div className="section">
            <h2>{props.sectionData.header}</h2>
            <img src={props.sectionData.img} />
            <h4>{props.sectionData.subHeader}</h4>
            <p>{props.sectionData.text}</p>
            <a href={props.sectionData.link}>Learn More</a>
        </div>
    )
}

export default WhatWeDoSection;