import React from 'react';
import './css/Contact.css';
import {MdPhone, MdEmail} from 'react-icons/md';

const Contact = () => {
    return(
        <div className="contact-container">
            <div className="contact-sub-container">
                <h1>Contact</h1>
                <h2>Have any question?</h2>
                <h2> We'd love to hear from you.</h2>
                <div className="contact-info">
                   <h4><MdPhone /> (347)-761-6304</h4>
                    <h4><MdPhone /> (718)-300-2045</h4>
                    <h4><MdPhone /> (718)-316-5571</h4>
                    <h4><MdPhone /> (718)-360-5069</h4>
                    <h4><MdEmail /> tibetannurses2016@gmail.com</h4>
                </div>
            </div>      
            <div className="social-section">
                <a href="https://www.facebook.com/Tibetan-Nurses-Association-of-NY-NJ-1416808591748167/" target="_blank">
                    <img src="/f_logo_RGB-Hex-Blue_512.png" atl="facebook" />   
                </a>
                <a href="https://www.youtube.com/channel/UCy80Z1XEWgOTQRBmYpHQ46g" target="_blank">
                    <img src="/youtube-logo-png-hd-21.png" atl="youtube" />
                </a>
                <a href="https://www.instagram.com/tna_nynj/?hl=en" target="_blank">
                    <img src="/logo-de-instagram-png-3.png" atl="instagram" />
                </a>
                <a href="mailto:tibetannurses2016@gmail.com" target="_blank">
                    <img src="/logo-gmail-png-google-gmail-logo-icon-icons-download-19.png" atl="gmail" />
                </a>
            </div>
        </div>
    )
}

export default Contact;