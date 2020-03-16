import React from 'react';
import {Link } from 'react-router-dom';
import './css/Menu.css';

const menu = () => {

    const burgerOnClickHandler=()=>{
        //I can make this class component and use state to toggle clicks
        if(!document.querySelector(".menu-ls").style.display)
            document.querySelector(".menu-ls").style.display = "block";
        else
        document.querySelector(".menu-ls").style.display = "";
    }

    return(
        <>
        <div className="burger" onClick={burgerOnClickHandler}>
            <div className="cross-one"></div>
            <div className="cross-middle"></div>
            <div className="cross-two"></div> 
        </div>
        
        <ul className="menu-ls">
            <Link to={"/"} ><li>Home</li> </Link>
            <Link to={"/about"} ><li>About Us</li> </Link>
            <Link to={"/resources"} ><li>Resources</li> </Link>
            <Link to={"/events"} ><li>Events</li> </Link>
            <Link to={"/educational"} ><li>Educational</li> </Link>
            <Link to={"/member"} ><li>Member</li> </Link>
            <Link to={"/contact"} ><li>Contact</li> </Link>
        </ul>

        </>
        
    )
}
export default menu;