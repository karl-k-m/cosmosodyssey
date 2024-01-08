import "./CreateReservationPage.css"
import { useLocation } from 'react-router-dom';
import RouteInfoComponent from "../../components/RouteInfoComponent/RouteInfoComponent";
import React, {useState} from "react";
import ReservationFlightInfoComponent
    from "../../components/ReservationFlightInfoComponent/ReservationFlightInfoComponent";

function CreateReservationPage() {
    const [passengerFirstName, setPassengerFirstName] = useState('');
    const [passengerLastName, setPassengerLastName] = useState('');
    const handleFirstNameChange = (event) => {
        setPassengerFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setPassengerLastName(event.target.value);
    };

    function generateReservationID() {
        const getRandomLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        const getRandomDigit = () => Math.floor(Math.random() * 10);

        let letters = getRandomLetter() + getRandomLetter() + getRandomLetter();
        let digits = '' + getRandomDigit() + getRandomDigit() + getRandomDigit() + getRandomDigit();
        return letters + '-' + digits;
    }

    function validateForm(event) {
        event.preventDefault();
        if (passengerFirstName === '' || passengerLastName === '') {
            alert("Please enter your name.");
            return;
        }

        createReservation();
    }

    const location = useLocation();
    const {reservationData} = location.state || {};

    function createReservation() {
        const apiURL = process.env.REACT_APP_BACKEND_API_URL;

        fetch(apiURL + '/api/TravelReservation', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'reservationID': generateReservationID(),
                'passengerFirstName': passengerFirstName,
                'passengerLastName': passengerLastName,
                'distance': reservationData.routeDistance,
                'duration': reservationData.routeDurationDays,
                'price': reservationData.routeCost,
                'validityCounter': 0
            })
        }).then(response => {
                if (response.status === 200) {
                    //TODO: Redirect to reservation success page
                    alert("Reservation created successfully!");
                } else {
                    alert("Error creating reservation.");
                }
            }
        ).catch(error => {
            console.error('Error creating reservation:', error);
        });

        //TODO: Add ReservationFlight entries
    }

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
                <form className={"CreateReservationPage_form"} onClick={validateForm}>
                    <h1>Passenger Details</h1>
                    <div className={"CreateReservationPage_form_item"}>
                        <label htmlFor="firstName"></label><br />
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={passengerFirstName}
                            onChange={handleFirstNameChange}
                        /><br /><br />
                    </div>
                    <div className={"CreateReservationPage_form_item"}>
                        <label htmlFor="lastName"></label><br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={passengerLastName}
                            onChange={handleLastNameChange}
                        /><br /><br />
                    </div>
                    <input type="submit" value="Submit"/>
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