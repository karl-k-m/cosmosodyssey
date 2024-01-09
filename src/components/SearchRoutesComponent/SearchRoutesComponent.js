import React, {useState} from 'react';
import "./SearchRoutesComponent.css";
import RouteInfoComponent from '../RouteInfoComponent/RouteInfoComponent';

function SearchRoutesComponent() {
    const [fromPlanet, setFromPlanet] = useState('');
    const [toPlanet, setToPlanet] = useState('');
    const [routes, setRouteInfo] = useState([]);
    const [displayLimit, setDisplayLimit] = useState(5);

    const validateForm = (event) => {
        event.preventDefault();

        if (fromPlanet === "" || toPlanet === "") {
            alert("Please select a planet for both Origin and Destination.");
            return;
        }

        if (fromPlanet === toPlanet) {
            alert("From and To locations cannot be the same planet.");
            return;
        }

        searchRoutes();
    };

    const searchRoutes = () => {
        const apiURL = process.env.REACT_APP_BACKEND_API_URL;
        const url = apiURL + `/api/FlightFinder?startLoc=${fromPlanet}&endLoc=${toPlanet}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setRouteInfo(data);
                setDisplayLimit(5);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    function sortRoutesByPrice(routes) {
        routes.forEach(route => {
            var routeCost = 0;

            for (var i = 0; i < route.length; i++) {
                routeCost += route[i]['price'];
            }

            route.totalCost = Math.round(routeCost * 100) / 100;
        });

        routes.sort((a, b) => a.totalCost - b.totalCost);

        return routes;
    }

    function sortRoutesByDuration(routes) {
        routes.forEach(route => {
            const originDepartureTime = new Date(route[0].departureTime);
            const destinationArrivalTime = new Date(route[route.length - 1].arrivalTime);

            var routeDurationMilliseconds = destinationArrivalTime - originDepartureTime;
            var routeDurationDays = Math.floor(routeDurationMilliseconds / (1000 * 60 * 60 * 24));

            route.totalDuration = routeDurationDays;
        });

        routes.sort((a, b) => a.totalDuration - b.totalDuration);

        return routes;
    }

    function sortRoutesByDistance(routes) {
        routes.forEach(route => {
            var routeDistance = 0;
            for (var i = 0; i < route.length; i++) {
                routeDistance += route[i].distance;
            }
            route.totalDistance = routeDistance;
        });

        routes.sort((a, b) => a.totalDistance - b.totalDistance);

        return routes;
    }

    const handleSortByPrice = () => {
        const sortedRoutes = sortRoutesByPrice([...routes]);
        setRouteInfo(sortedRoutes);
    };

    const handleSortByDuration = () => {
        const sortedRoutes = sortRoutesByDuration([...routes]);
        setRouteInfo(sortedRoutes);
    };

    const handleSortByDistance = () => {
        const sortedRoutes = sortRoutesByDistance([...routes]);
        setRouteInfo(sortedRoutes);
    }

    const showMoreRoutes = () => {
        setDisplayLimit(displayLimit + 10);
    }

    return (
        <div className="search_routes_wrapper">
            <div className={routes.length > 0 ? "searchbox_wrapper_with_results" : "searchbox_wrapper"}>
                <h1 className="search_routes_title">Search</h1>
                <form onSubmit={validateForm}>
                    <label htmlFor="from">FROM:</label><br />
                    <select id="from" name="from" value={fromPlanet} onChange={(e) => setFromPlanet(e.target.value)}>
                        <option value="" disabled selected hidden>Select a planet</option>
                        <option value="Mercury">Mercury</option>
                        <option value="Venus">Venus</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Uranus">Uranus</option>
                        <option value="Neptune">Neptune</option>
                    </select><br /><br />

                    <label htmlFor="to">TO:</label><br />
                    <select id="to" name="to" value={toPlanet} onChange={(e) => setToPlanet(e.target.value)}>
                        <option value="" disabled selected hidden>Select a planet</option>
                        <option value="Mercury">Mercury</option>
                        <option value="Venus">Venus</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Uranus">Uranus</option>
                        <option value="Neptune">Neptune</option>
                    </select><br /><br />

                    <input type="submit" value="Search" />
                </form>
                <div className={routes.length > 0 ? "sort_routes_wrapper_with_results" : "sort_routes_wrapper"}>
                    <button className={"sort_button"} onClick={() => handleSortByPrice()}>Price ↓</button>
                    <button className={"sort_button"} onClick={() => handleSortByDuration()}>Duration ↓</button>
                    <button className={"sort_button"} onClick={() => handleSortByDistance()}>Distance ↓</button>
                </div>
            </div>

            <div className="route_info_wrapper">
                {routes.slice(0, displayLimit).map((route, index) => (
                    <RouteInfoComponent key={index} routeInfo={route} />
                )
                )}

                {routes.length > 0 && routes.length > displayLimit &&
                    <div className="show_more_button_container">
                        <button className="show_more_routes_button" onClick={() => showMoreRoutes()}>Show More Routes</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default SearchRoutesComponent;