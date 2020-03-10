import React from 'react';
import './css/SingleEvent.css';
 
const SingleEvent = ({data}) => {
    console.log("Single Data: ", data)
    return(
        
        <div className="single-event-container">
            <img src={data.img} />
            <h3>{data.title}</h3>
            <p id="duration">{data.duration}</p>
            <p id="description">{data.description}</p>
        </div>
    )
}

export default SingleEvent;