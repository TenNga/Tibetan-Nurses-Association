import React from 'react';
import Uniqid from 'uniqid';

import './css/Footer.css';
import FooterSection from '../Components/FooterSection';

const Footer = () => {
    const footerData = [
        {header: "about us", subHeader: [{text: "our mission", link: "about"}, {text: "members", link: "member"}, {text: "other branches", link: "https://www.facebook.com/tna.mn.1"}]},
        {header: "Resources", subHeader: [{text: "educational", link: "educational"},{text: "opportunities", link: ""}]},
        {header: "contact us", subHeader: [{text: "(347)-761-6304", link: ""}, {text: "(718)-316-5571", link: ""}, {text: "tibetannurses2016@gmail.com", link: ""}]},
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