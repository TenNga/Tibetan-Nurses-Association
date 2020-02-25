import React from 'react';
import Menu from '../Components/Menu';
import './css/NavContainer.css';

const NavContainer = () => {
return(
    <div className="nav-container">
        <div className="logo">
             <img src="logo.png" />
        </div>
        <div className="menu">
            <Menu />
        </div>
    </div>
)
}
export default NavContainer;