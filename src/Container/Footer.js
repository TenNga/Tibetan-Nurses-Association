import React from 'react';
import Uniqid from 'uniqid';

import './css/Footer.css';
import FooterSection from '../Components/FooterSection';

const Footer = () => {
    const footerData = [
        {header: "about us", subHeader: ["our mission", "members", "other branches"]},
        {header: "Resources", subHeader: ["educational","opportunities"]},
        {header: "contact us", subHeader: ["(347)-761-6304", "(718)-316-5571", "tibetannurses2016@gmail.com"]},
    ]

    const handleFooterSection = () => {
       return footerData.map(data => <FooterSection sectionData={data}  key={Uniqid()}/> )
    }
    return(
        <div className="footer-container">
            {handleFooterSection()}
        </div>
    )
}

export default Footer;