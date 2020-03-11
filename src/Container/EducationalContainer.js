import React from 'react';
import SingleEduVideo from '../Components/SingleEduVideo';
import './css/EducationalContainer.css';

const EducationalContainer = () => {
    const videoData = [
        {
            title: "episode 3 manstruation",
            videoId: "UaI9v0Gyf0w"
         },
         {
            title: "episode 4 Mutrition and reading food labels",
            videoId: "yGSLLJ-j-yo"
         },
         {
            title: "episode 5 Gastritis",
            videoId: "elRuL_iToog"
         },
         {
            title: "episode 6 Pursuing Education in Nursing & Beyond ",
            videoId: "YxEyoxZ4Gpw"
         },
         {
            title: "episode 7 TNA Health Survey Report",
            videoId: "erabaqOvuQE"
         },
         {
            title: "episode 8 Lets Talk Mental Health",
            videoId: "7bDM1RFMwXA"
         },
         {
            title: "episode 9 Hepatitis B",
            videoId: "nym-shCGKho"
         },
         {
            title: "episode 10 importance of dental health",
            videoId: "bLXEtgqstBA"
         },
         {
            title: "episode 11 Women's Health (HPV & Cervical cancer)",
            videoId: "01QIPeFt3PM"
         },
]

    const renderVideo = () => {
        return videoData.map(d => <SingleEduVideo data = {d} />)
    }
    return(
        <div className="video-container">
           {renderVideo()}
        </div>
       
    )
}

export default EducationalContainer;