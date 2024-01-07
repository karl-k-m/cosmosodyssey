import "./CreateReservationPage.css"
import { useLocation } from 'react-router-dom';
import RouteInfoComponent from "../../components/RouteInfoComponent/RouteInfoComponent";
import React from "react";
import ReservationFlightInfoComponent
    from "../../components/ReservationFlightInfoComponent/ReservationFlightInfoComponent";

function CreateReservationPage() {
    const location = useLocation();
    const {reservationData} = location.state || {};

    // Find all flight ids in route
    var flight_ids = [];
    for (var i = 0; i < reservationData.routeInfo.length; i++) {
        flight_ids.push(reservationData.routeInfo[i]['flightID']);
    }

    return (
        <div className={"CreateReservationPage_wrapper"}>
            <div className={"reservation_details_container"}>
                <h1>Reservation Details</h1>
                <div className={"CreateReservationPage_details"}>
                    {/* Kind of a weird solution but it works ¯\_(ツ)_/¯ */}
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Flight IDs</h2>
                        <p>
                            {flight_ids.map((id, index) => (
                                <React.Fragment key={id}>
                                    {id}{index !== flight_ids.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Price</h2>
                        <p>${reservationData.routeCost}</p>
                    </div>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Companies</h2>
                        <p>{reservationData.usedCompanies.join(", ")}</p>
                    </div>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Planets</h2>
                        <p>{reservationData.visitedPlanets.join(", ")}</p>
                    </div>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Distance</h2>
                        <p>{reservationData.routeDistance} km</p>
                    </div>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Time</h2>
                        <p>{reservationData.routeDurationDays} days</p>
                    </div>
                </div>
                <form className={"CreateReservationPage_form"}>
                    <h1>Passenger Details</h1>
                    <div className={"CreateReservationPage_form_item"}>
                        <label htmlFor="name"></label><br />
                        <input type="text" id="name" name="name" placeholder="First Name" /><br /><br />
                    </div>
                    <div className={"CreateReservationPage_form_item"}>
                        <label htmlFor="email"></label><br />
                        <input type="email" id="email" name="email" placeholder={"Last Name"}></input><br /><br />
                    </div>
                </form>
            </div>
            <div className="flights_info_container">
                {reservationData.routeInfo.map((flight, index) => (
                        <ReservationFlightInfoComponent key={index} flightInfo={flight} />
                    )
                )}
            </div>
        </div>
    )
}

export default CreateReservationPage;