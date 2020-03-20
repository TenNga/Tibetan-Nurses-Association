import React from 'react';
import uniqid from 'uniqid';

import './css/WhatWeDo.css';

import WhatToDoSection from '../Components/WhatWeDoSection';

const WhatWeDo = () => {
    const sectionData = [
        {img: "sectionImg.jpg", 
        header: "Community Health Fair", 
        subHeader: "July 2019", 
        text: "Free health checks, blood pressure checks, blood sugar checks, body mass index, free advisement and counseling and free blood pressure monitor for individual who have high BP.", 
        link: "https://www.tibetannurses.org/"},
        
        {img: "grandConyon.jpg", 
        header: "Grand Canyon University​", 
        subHeader: "April 23rd, 2019", 
        text: "TNA NY NJ is collaborating with Grand Canyon University (GCU) to help aspiring Tibetans interested in advancing their careers in nursing. GCU is willing to offer tuition discounts and scholarships to TNA members looking to enroll in GCU’s online programs such as BSN, MSN, RN to BSN, etc.", 
        link: "https://www.tibetannurses.org/"},
        
        {img: "sharpaGonpa.jpg", 
        header: "Sherpa Gonpa 2017", 
        subHeader: "Dec 15th 2017", 
        text: "TNA team actively in action at Sherpa Gonpa providing health awareness and teaching to the Himalayan community. End of year wrap up event.", 
        link: "https://www.tibetannurses.org/"}
    ]
    const handleSection = () =>{
        return sectionData.map(data => <WhatToDoSection sectionData = {data}  key={uniqid()}/>)
    }
    return(
        <div className="what-we-do">
            <h1 className="header">What We Do</h1>
            <div className="what-we-do-container">
                {handleSection()}
            </div>
        </div>
    )
}
export default WhatWeDo;