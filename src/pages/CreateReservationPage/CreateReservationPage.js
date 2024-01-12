import "./CreateReservationPage.css"
import { useLocation } from 'react-router-dom';
import React, {useState} from "react";
import ReservationFlightInfoComponent
    from "../../components/ReservationFlightInfoComponent/ReservationFlightInfoComponent";

function CreateReservationPage() {
    var [passengerFirstName, setPassengerFirstName] = useState('');
    var [passengerLastName, setPassengerLastName] = useState('');
    const handleFirstNameChange = (event) => {
        setPassengerFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setPassengerLastName(event.target.value);
    };

    // Generate a random reservation ID in the format CCC-NNNN (C = letter, N = digit)
    function generateReservationID() {
        const getRandomLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        const getRandomDigit = () => Math.floor(Math.random() * 10);

        let letters = getRandomLetter() + getRandomLetter() + getRandomLetter();
        let digits = '' + getRandomDigit() + getRandomDigit() + getRandomDigit() + getRandomDigit();
        return letters + '-' + digits;
    }

    function validateForm(event) {
        event.preventDefault();
        if (reservationData.routeInfo[0]['validUntil'] < new Date()) {
            alert("This route is no longer valid.");
            return;
        }

        if (passengerFirstName === '' || passengerLastName === '') {
            alert("Please enter your name.");
            return;
        }

        if (passengerFirstName.length > 50 || passengerLastName.length > 50) {
            alert("Name must be less than 50 characters.");
            return;
        }

        if (passengerFirstName.length < 2 || passengerLastName.length < 2) {
            alert("Name must be at least 2 characters.");
            return;
        }

        // Allow only letters, spaces, and hyphens
        if (!/^[a-zA-Z -]+$/.test(passengerFirstName) || !/^[a-zA-Z -]+$/.test(passengerLastName)) {
            alert("Name must contain only letters, spaces, and hyphens.");
            return;
        }

        createReservation();
    }

    const location = useLocation();
    const {reservationData} = location.state || {};

    function createReservation() {
        const apiURL = process.env.REACT_APP_BACKEND_API_URL;

        const reservationID = generateReservationID();

        passengerFirstName = passengerFirstName.trim();
        passengerLastName = passengerLastName.trim();

        passengerFirstName = passengerFirstName.toUpperCase();
        passengerLastName = passengerLastName.toUpperCase();


        fetch(apiURL + '/api/TravelReservation', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'reservationID': reservationID,
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

        for (var i = 0; i < reservationData.routeInfo.length; i++) {
            fetch(apiURL + '/api/ReservationFlight', {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'ReservationID': reservationID,
                    'FlightID': reservationData.routeInfo[i]['flightID']
                })
            }).then(response => {
                if (response.status === 200) {
                    console.log("ReservationFlight created successfully!");
                } else {
                    alert("Error creating ReservationFlight.");
                }
            }
            ).catch(error => {
                console.error('Error creating ReservationFlight:', error);
            });
        }
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
                        <p>{reservationData.visitedPlanets.join(" → ")}</p>
                    </div>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Distance</h2>
                        <p>{reservationData.routeDistance} km</p>
                    </div>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Duration (including layovers)</h2>
                        <p>{reservationData.routeDurationDays} days</p>
                    </div>
                </div>
                <form className={"CreateReservationPage_form"} onSubmit={validateForm}>
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