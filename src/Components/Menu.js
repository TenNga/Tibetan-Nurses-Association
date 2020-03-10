import React from 'react';
import './css/Menu.css';

const menu = () => {

    const burongOnClickHandler=()=>{
        //I can make this class component and use state to toggle clicks
        if(!document.querySelector(".menu-ls").style.display)
            document.querySelector(".menu-ls").style.display = "block";
        else
        document.querySelector(".menu-ls").style.display = "";
    }

    return(
        <>
        <div className="burger" onClick={burongOnClickHandler}>
            <div></div>
            <div></div>
            <div></div> 
        </div>
        
        <ul className="menu-ls">
            <li>Home</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>Events</li>
            <li>Educational</li>
            <li>Member</li>
            <li>Contact</li>
        </ul>

        </>
        
    )
}
export default menu;