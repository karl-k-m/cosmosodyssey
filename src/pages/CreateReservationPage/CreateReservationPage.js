import { useLocation } from 'react-router-dom';

function CreateReservationPage() {
    const location = useLocation();
    const {reservationData} = location.state || {};

    return (
        <div className={"CreateReservationPage_wrapper"}>
            <div className={"CreateReservationPage_container"}>
                <h1>Reservation Details</h1>
                <div className={"CreateReservationPage_details"}>
                    <div className={"CreateReservationPage_details_item"}>
                        <h2>Flight IDs</h2>
                        <p>{reservationData.flight_ids.join(", ")}</p>
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
            </div>
        </div>
    )
}

export default CreateReservationPage;