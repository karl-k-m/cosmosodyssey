import React from 'react';
import "./LandingPage.css";
import {NavLink} from "react-router-dom";
import SpaceshipInteriorImage from "../../assets/images/spaceship_interior.webp"
import SpaceshipImage from "../../assets/images/spaceship.webp";

function LandingPage() {
    return (
        <div className="landing_page_wrapper">
            <div className="company_info_wrapper">
                <div className="company_info_container">
                    <div className="company_info_title">
                        <h1 className="company_name">Cosmos Odyssey</h1>
                    </div>
                    <p className="company_info_text">Embark on a journey through the stars with Cosmos Odyssey, your gateway
                        to the galaxy's most renowned space travel companies.<br /><br />Experience the wonder of space travel with ease
                        and confidence, knowing you have access to the best the universe has to offer, all in one place. With
                        Cosmos Odyssey, the sky is not the limit – it's just the beginning.</p>

                    <NavLink className="reserve_button" to="/reserve">Reserve Your Flight</NavLink>
                </div>
            </div>
            <div className="bottom_boxes_wrapper">
                <div className="info_bottom_image_bottom">
                    <div className="info_bottom_image_bottom_text">
                        <h2 className="info_bottom_image_bottom_title">Destinations</h2>
                        <p className="info_bottom_image_bottom_paragraph">With Cosmos Odyssey, you can travel to all major
                            spaceports in the solar system! From the research stations of Mercury or the floating cities
                            of Venus, all the way to the tourist hotspots of Neptune, we deliver to everywhere!</p>
                    </div>
                    <img className="info_bottom_image_bottom_image" src={SpaceshipInteriorImage} alt="spaceship interior" />
                </div>
                <div className="info_bottom_image_bottom">
                    <div className="info_bottom_image_bottom_text">
                        <h2 className="info_bottom_image_bottom_title">Companies</h2>
                        <p className="info_bottom_image_bottom_paragraph">Our selection of top-of-the-line travel companies
                            ranges from economy options all the way to luxury! For a trip of any nature and to anywhere, you can count on one
                            of these to fulfill any of your needs!</p>
                    </div>
                    <img className="info_bottom_image_bottom_image" src={SpaceshipImage} alt="spaceship interior" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;