import React from 'react';
import './css/WelcomeNote.css';
import gsap from "gsap";

import { Link } from 'react-router-dom';

class WelcomeNote extends React.Component{

    componentDidMount(){
        gsap.from(".text-container", {opacity: 0,  duration: 1, y: -50})
        gsap.from("#welcome-img", {opacity: 0, duration: 1, delay: .8, y: 30})
    }

    
    render(){
        return(
            <div className="welcome-container">
                <div className="sub-container">
                    <div className="text-container">
                        <p className="welcome-header">{this.props.data.header}</p>
                        <p className="welcome-para">{this.props.data.para}</p>
                        {this.props.source === "about"? <a href="TNA_december_10th.docx" download><button>TNA BY LAWS</button></a> : <Link to={"/about"}> <button>Learn More</button> </Link>    }
                        {/* <Link to={"/about"}> <button>Learn More</button> </Link>     */}
                    </div>
                    {this.props.source === "about"? null : <img id="welcome-img" src="home_aboutTNA.jpg" /> }
                    
                </div>
            
            </div>
        )
    }
}

export default WelcomeNote;