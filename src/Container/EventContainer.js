import React from 'react';
import uniqid from 'uniqid';
import SingleEvent from '../Components/SingleEvent';


import './css/EventContainer.css';

const EventContainer = ({eventYear,eventData}) => {
    
    //render Event single

    const renderEvent = () => {
        return eventData.map(e => <SingleEvent data={e}  key={uniqid()}/>)
    }

    return(
        <div className="event-section-container">
            <h1>{eventYear} Event</h1>
            <h4>Tibetan Nurses Assocation</h4>
            <div className="all-event-container">
               {renderEvent()}
            </div>
        </div>
    )
}

export default EventContainer;