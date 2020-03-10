import React from 'react';
import SingleEvent from '../Components/SingleEvent';

import './css/EventContainer.css';

const EventContainer = ({eventYear,eventData}) => {

    const renderEvent = () => {
        return eventData.map(e => <SingleEvent data={e} />)
    }

    return(
        <div className="event-section-container">
            <h1>{eventYear} Event Page</h1>
            <h4>Tibetan Nurses Assocation</h4>
            <div className="all-event-container">
               {renderEvent()}
            </div>
        </div>
    )
}

export default EventContainer;