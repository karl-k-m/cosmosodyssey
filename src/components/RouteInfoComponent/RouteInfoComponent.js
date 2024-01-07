import "./RouteInfoComponent.css";
import { useNavigate } from 'react-router-dom';

function RouteInfoComponent({routeInfo}) {

    // Find total duration of route (diff between first and last stop)
    const originDepartureTime = new Date(routeInfo[0].departureTime);
    const destinationArrivalTime = new Date(routeInfo[routeInfo.length - 1].arrivalTime);

    var routeDurationMilliseconds = destinationArrivalTime - originDepartureTime;
    var routeDurationDays = Math.floor(routeDurationMilliseconds / (1000 * 60 * 60 * 24));

    // Find total distance of route (sum of all distances between stops)
    var routeDistance = 0;
    for (var i = 0; i < routeInfo.length; i++) {
        routeDistance += routeInfo[i].distance;
    }

    // Find total cost of route (sum of all costs between stops)
    var routeCost = 0;
    for (var i = 0; i < routeInfo.length; i++) {
        routeCost += routeInfo[i]['price'];
    }
    routeCost = Math.round(routeCost * 100) / 100;

    // Find which planets are visited
    var visitedPlanets = [];
    for (var i = 0; i < routeInfo.length; i++) {
        if (!visitedPlanets.includes(routeInfo[i]['origin'])) {
            visitedPlanets.push(routeInfo[i]['origin']);
        }
        if (!visitedPlanets.includes(routeInfo[i]['destination'])) {
            visitedPlanets.push(routeInfo[i]['destination']);
        }
    }

    // Find which companies are used
    var usedCompanies = [];
    for (var i = 0; i < routeInfo.length; i++) {
        if (!usedCompanies.includes(routeInfo[i]['companyName'])) {
            usedCompanies.push(routeInfo[i]['companyName']);
        }
    }

    const navigate = useNavigate();
    const handleReserveClick = () => {
        const reservationData = {
            routeInfo,
            routeCost,
            usedCompanies,
            visitedPlanets,
            routeDistance,
            routeDurationDays
        };

        navigate('/create-reservation', { state: { reservationData } });
    };

    return (
        <div className="route_info_container">
            <div className="route_info_body">
                <div className="route_info_body_item">
                    <h2>Departure time</h2>
                    <p>{originDepartureTime.toLocaleString()}</p>
                </div>
                <div className="route_info_body_item">
                    <h2>Arrival time</h2>
                    <p>{destinationArrivalTime.toLocaleString()}</p>
                </div>
                <div className="route_info_body_item">
                    <h2>Duration</h2>
                    <p>{routeDurationDays} days</p>
                </div>
                <div className="route_info_body_item">
                    <h2>Distance</h2>
                    <p>{routeDistance} km</p>
                </div>
                <div className="route_info_body_item">
                    <h2>Cost</h2>
                    <p>${routeCost}</p>
                </div>
                <div className="route_info_body_item">
                    <h2>Route</h2>
                    <p>{visitedPlanets.join(' → ')}</p>
                </div>
                <div className="route_info_body_item">
                    <h2>Companies Used</h2>
                    <p>{usedCompanies.join(', ')}</p>
                </div>
                <button className="reserve_button" onClick={handleReserveClick}>Reserve</button>
            </div>
        </div>
    );
}

export default RouteInfoComponent;