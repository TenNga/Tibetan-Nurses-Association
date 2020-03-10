import React from 'react';
import EventContainer from './EventContainer';

import './css/Event.css';


const Event = () => {

    const eventData2019 = [
        {
            img: "event/first_aid.png",
            title: "First Aid Station at summer camp",
            duration: "July 18th - July 21st 2019",
            description: "First aid provided by the Tibetan Nurses Association of NJ & NJ in collaboration with the Tibetan language school NY & NJ"
        },
        {
            img: "event/free_community.png",
            title: "Free Community Health Fair",
            duration: "July 2019",
            description: "Tibetan Nurses Association of NY & NJ serving community at Free Community Health Fair with Free health checks, blood pressure checks, blood sugar checks, body mass index, free advisement and counseling and free blood pressure monitor for individual who have high BP."
        },
        {
            img: "event/grand_canyon.png",
            title: "Grand Canyon University",
            duration: "April 23rd 2019",
            description: "TNA NY NJ is collaborating with Grand Canyon University (GCU) to help aspiring Tibetans interested in advancing their careers in nursing. GCU is willing to offer tuition discounts and scholarships to TNA members looking to enroll in GCU’s online programs such as BSN, MSN, RN to BSN, etc."
        },
        {
            img: "event/3year_anniversary.png",
            title: "TNA 3rd Year Anniversary",
            duration: "March 30th 2019",
            description: "Tibetan Nurses Association 3rd anniversary celebration day.The only day that all our hard-working professionals team gather under one roof and celebrate together with our Families."
        }
    ]

    const eventData2017 = [
        {
            img: "event/national_peace.png",
            title: "National Peace March",
            duration: "December 10th 2017",
            description: "Tibetan Nurses Association volunteers during National peace march, some more memories."
        },
        {
            img: "event/kalachakra_health.png",
            title: "Kalachakra Health Camp",
            duration: "December 3rd 2017 - April 16th 2018",
            description: "TNA volunteers, donors & supporters fundraising in Jackson Height during the weekend 12/3-4/16. Good Job guys! Thanks to everyone for all your donations, encouragement, & support!"
        },
        {
            img: "event/machik.jpg",
            title: "Machik weekend",
            duration: "November 10 -12, 2017",
            description: "What a great team spirit and energy from our youth. A very successful event and networking."
        },
        {
            img: "event/team_gathering.png",
            title: "Team Gathering",
            duration: "2016",
            description: "Tibetan Nurses Associations Annual Gathering with broad members."
        },
        {
            img: "event/walden_sakya.jpg",
            title: "Walden Sakya Monlam",
            duration: "September 21st - 24th 2017",
            description: "First aid responders and volunteers. A great team work and wonderful performance by TNA. Saving people's lives by our skillful nurses and supporters."
        },
        {
            img: "event/dalai_lama_cup.png",
            title: "Dalai Lama Cup Tournament",
            duration: "August 12 & 13th 2017",
            description: "TNA first Aid team during a Dalai Lama cup soccer tournament organized by RTYC NY.​"
        },
        {
            img: "event/mothers_day.jpg",
            title: "Mothers Day",
            duration: "May 13th 2017",
            description: "Mother's Day celebration with one and only Ama Jestun Pema la. Blessed!!!! Health teaching done on 7 different health topics: Cardiac health, Breast Cancer, Breast self examination, UTI, Postpartum depression, hepatitis and Basic health assessment. Thanks to all volunteers for this wonderful and great program organized by TWA NY and NJ."
        }
    ]
    return(
        <div className="event-container">
                <EventContainer eventYear={"2019"} eventData={eventData2019} />
                <EventContainer eventYear={"2017"} eventData={eventData2017} />
        </div>
        
    )
}

export default Event;