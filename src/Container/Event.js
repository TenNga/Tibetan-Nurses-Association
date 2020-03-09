import React from 'react';
import SingleEvent from '../Components/SingleEvent';
import SingleMember from '../Components/SingleMember';

const Event = () => {
    return(
        <div className="event-container">
            <h1>2020 Event Page</h1>
            <h4>Tibetan Nurses Assocation</h4>
            <SingleEvent />
            <SingleEvent />
            <SingleEvent />
            <SingleEvent />
            <SingleEvent />

        </div>
        
    )
}

export default Event;