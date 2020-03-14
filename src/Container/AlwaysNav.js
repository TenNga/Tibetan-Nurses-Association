import React from 'react';
import { TiHomeOutline, TiCalendarOutline, TiContacts } from "react-icons/ti"
import { Link } from 'react-router-dom';
import './css/AlwaysNav.css';

const AlwaysNav = () => {
    return(
        <div className="always-nav-container">
            <div className="footer-nav">
                <Link to={"/"} ><h4><TiHomeOutline /></h4></Link>
                <Link to={"/events"} ><h4><TiCalendarOutline /></h4></Link>
                <Link to={"/contact"} ><h4><TiContacts /></h4></Link>
            </div>
        </div>
    )
}

export default AlwaysNav;