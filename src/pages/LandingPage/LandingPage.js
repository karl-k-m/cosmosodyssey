import React from 'react';
import "./LandingPage.css";
import {NavLink} from "react-router-dom";
import SpaceshipInteriorImage from "../../assets/images/spaceship_interior.webp"
import SpaceshipImage from "../../assets/images/spaceship.webp";
import SolarSystemImage from "../../assets/images/solar.webp";

function InfoBox({ title, paragraph, imageSrc, altText, isRightAligned }) {
    const infoBoxClass = isRightAligned ? "info_box right_aligned" : "info_box";
    return (
        <div className={infoBoxClass}>
            <div className="info_box_text">
                <h2 className="info_box_title">{title}</h2>
                {paragraph ? <p className="info_box_paragraph">{paragraph}</p> : null}
                {isRightAligned ? <ul className="destination_list">{paragraph}</ul> : null}
            </div>
            <img className="info_box_image" src={imageSrc} alt={altText} />
        </div>
    );
}

function LandingPage() {
    return (
        <div className="landing_page_wrapper">
            <div className="company_info_wrapper">
                <div className="company_info_container">
                    <h1 className="company_name">Cosmos Odyssey</h1>
                    <p className="company_info_text">
                        Embark on a journey through the stars with Cosmos Odyssey, your gateway
                        to the galaxy's most renowned space travel companies.<br /><br />
                        Experience the wonder of space travel with ease and confidence, knowing you
                        have access to the best the universe has to offer, all in one place. With
                        Cosmos Odyssey, the sky is not the limit – it's just the beginning.
                    </p>
                    <NavLink className="reserve_button" to="/reserve">Reserve Your Flight</NavLink>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;