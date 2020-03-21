import React from 'react';
import uniqid from 'uniqid';

import './css/AboutUs.css';

import AboutTNA from '../Components/WelcomeNote';
import SingleMember from '../Components/SingleMember';

const AboutUs = () => {
    const aboutData = {
        header: "TIBETAN NURSE ASSOCIATION USA",
        para: "Tibetan Nurses Association (TNA) is a non-profitable organization founded by nurses from Bellevue Hospital in New York USA on April 2nd, 2016. The organization's primary goal is to unite all Tibetan Nurses and Nursing Students as a professional body under one umbrella at a national level. The purpose of this organization is to help nurses who graduated from India, Nepal, and America to get the Credentials Evaluation Service, Licensing in different States and find jobs. TNA will also serve the Tibetan communities in the United States through different health-related awareness programs. TNA also prioritize to help not only Nurses in America but also the people in Tibet, Nepal, and India through different educational projects and health-related programs as well.",
        linkContent: "TNA BY LAWS",
        link: ""}

    const memberInfo = [
        {img: "Pema_Dorjee.jpg", name: "Pema Dorjee", position: "President"},
        {img: "tenTsering.jpg", name: "Tenzin Tsering", position: "(Vice President)"},
        {img: "Nyima_Tsamchoe.jpg", name: "Nyima Tsamchoe", position: "(Vice President)"},
        {img: "Tenzin_Wangmo.jpg", name: "Tenzin Wangmo", position: "(General Scretary)"},
        {img: "Ninila_cr5g2h.jpg", name: "Ninila Rotta", position: "(Gen. Pro. Coordinator)"},
        {img: "Chemi_Dolkar_py3opn.jpg", name: "Chemi Dolkar", position: "(Gen. Pro. Coordinator"},
        {img: "Chime_Aboomtsang.jpg", name: "Chime Aboomtsang", position: "(Social Media Coordinator)"},
        {img: "Tenzin_Tsundue.jpg", name: "Tenzin Tsundue", position: "(Accountant)"},
        {img: "Passang_Dolma.jpg", name: "Passang Dolma", position: "(Pub. Relation Officer)"},
        {img: "Tenzin_Youtso.jpg", name: "Tenzin Youtso", position: "(Resourse Outreach Coordinator)"},
        {img: "Kundhen.jpg", name: "Kundhen", position: "Nursing Edu. Outreach Coordinator"},]

    const handleMemberInfo = () => {
        return memberInfo.map(member => <SingleMember memberInfo={member}  key={uniqid()}/>)
    }
    return(
        <div className="about-container">
            <div className="history">
                <AboutTNA data={aboutData} source={"about"} />
            </div>
            <div className="board-member">
                <h2 id="header">board members</h2>
                <h4 id="sub-header">nynj2019</h4>
                <div className="member-container">
                    {handleMemberInfo()}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;