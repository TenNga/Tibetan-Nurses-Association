import React from 'react';
import './css/SingleMember.css';

const SingleMember = (props) => {
    return(
        <div className="single-member">
            <img src={props.memberInfo.img} />
            <h4>{props.memberInfo.name}</h4>
            <h6>{props.memberInfo.position}</h6>
        </div>
    )
}

export default SingleMember;