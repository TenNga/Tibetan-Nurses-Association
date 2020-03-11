import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import Event from './Event';
import Educational from './Educational';
import Footer from './Footer';

const MainContainer = () => {
    return(
        <>
        <Switch>
            <Route path="/about" component={AboutUs} />
            <Route path="/events" component={Event} />
            <Route path="/educational" component={Educational} />
            <Route path="/" component={Home} />
        </Switch>
        {/* <Home /> */}
        {/* <AboutUs /> */}
        {/* <Event /> */}
        {/* <Educational /> */}
        <Footer />
        </>
    )
}

export default MainContainer;