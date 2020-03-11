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
            <div></div>
            <div></div>
            <div></div> 
        </div>
        
        <ul className="menu-ls">
            <Link to={"/"} ><li onClick={burgerOnClickHandler}>Home</li> </Link>
            <Link to={"/about"} ><li onClick={burgerOnClickHandler}>About Us</li> </Link>
            <Link to={"/resources"} ><li onClick={burgerOnClickHandler}>Resources</li> </Link>
            <Link to={"/events"} ><li onClick={burgerOnClickHandler}>Events</li> </Link>
            <Link to={"/educational"} ><li onClick={burgerOnClickHandler}>Educational</li> </Link>
            <Link to={"/member"} ><li onClick={burgerOnClickHandler}>Member</li> </Link>
            <Link to={"/contact"} ><li onClick={burgerOnClickHandler}>Contact</li> </Link>
        </ul>

        </>
        
    )
}
export default menu;