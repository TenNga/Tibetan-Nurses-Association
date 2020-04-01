import React from 'react';
import uniqid from 'uniqid';
import SingleEvent from '../Components/SingleEvent';


import './css/EventContainer.css';
import gsap from 'gsap';

class EventContainer extends React.Component{
    
    //render Event single
    componentDidMount = () => {
        gsap.from(".event-section-container", {opacity: 0, duration: 1, y: -100})
        gsap.to(".event-section-container", {opacity: 1, duration: 1, y: 20})
    }
    render() {

        const renderEvent = () => {
            return this.props.eventData.map(e => <SingleEvent data={e}  key={uniqid()}/>)
        }

        return(
            <div className="event-section-container">
                <h1>{this.props.eventYear} Event</h1>
                <h4>Tibetan Nurses Assocation</h4>
                <div className="all-event-container">
                {renderEvent()}
                </div>
            </div>
        )
    }
}

export default EventContainer;