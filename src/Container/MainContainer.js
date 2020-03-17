import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/MainContainer.css';

import Home from './Home';
import AboutUs from './AboutUs';
import Event from './Event';
import Educational from './Educational';
import Footer from './Footer';
import AlwaysNav from './AlwaysNav';
import Member from './Member';

const MainContainer = () => {
    return(
        <div className="main-middle-container">
            <Switch>
                <Route path="/about" component={AboutUs} />
                <Route path="/events" component={Event} />
                <Route path="/educational" component={Educational} />
                <Route path="/member" component={Member} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
            <AlwaysNav />
        </div>
    )
}

export default MainContainer;