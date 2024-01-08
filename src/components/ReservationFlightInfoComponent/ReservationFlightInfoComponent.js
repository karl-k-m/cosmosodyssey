import "./ReservationFlightInfoComponent.css"

function ReservationFlightInfoComponent(flightInfo) {
    // Find duration of flight from originDepartureTime to destinationArrivalTime
    const originDepartureTime = new Date(flightInfo.flightInfo.departureTime);
    const destinationArrivalTime = new Date(flightInfo.flightInfo.arrivalTime);
    var flightDurationMilliseconds = destinationArrivalTime - originDepartureTime;
    var flightDurationDays = Math.floor(flightDurationMilliseconds / (1000 * 60 * 60 * 24));

    return (
        <div className="flight_info_wrapper">
            <div className="flight_info_item">
                <h2>Flight ID</h2>
                <p>{flightInfo.flightInfo.flightID}</p>
            </div>
            <div className="flight_info_item">
                <h2>Company</h2>
                <p>{flightInfo.flightInfo.companyName}</p>
            </div>
            <div className="flight_info_item">
                <h2>From:</h2>
                <p>{flightInfo.flightInfo.origin}&nbsp;&nbsp;-&nbsp;&nbsp;{originDepartureTime.toLocaleString()}</p>
            </div>
            <div className="flight_info_item">
                <h2>To</h2>
                <p>{flightInfo.flightInfo.destination}&nbsp;&nbsp;-&nbsp;&nbsp;{destinationArrivalTime.toLocaleString()}</p>
            </div>
            <div className="flight_info_item">
                <h2>Distance</h2>
                <p>{flightInfo.flightInfo.distance} km</p>
            </div>
            <div className="flight_info_item">
                <h2>Duration</h2>
                <p>{flightDurationDays} days</p>
            </div>
            <div className="flight_info_item">
                <h2>Price</h2>
                <p>${flightInfo.flightInfo.price}</p>
            </div>
        </div>
    )
}

export default ReservationFlightInfoComponent;