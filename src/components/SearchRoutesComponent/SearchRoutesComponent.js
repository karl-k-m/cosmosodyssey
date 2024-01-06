import React, { useState } from 'react';

function SearchRoutesComponent() {
    const [fromPlanet, setFromPlanet] = useState('');
    const [toPlanet, setToPlanet] = useState('');

    const validateForm = (event) => {
        event.preventDefault();
        if (fromPlanet === toPlanet) {
            alert("From and To locations cannot be the same planet.");
            return;
        }

        searchRoutes();
    };

    const searchRoutes = () => {
        const url = `http://localhost:5170/api/FlightFinder?startLoc=${fromPlanet}&endLoc=${toPlanet}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Handle the data from the API here
                console.log(data);
            })
            .catch(error => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className="search_routes_wrapper">
            <h1 className="search_routes_title">Search for Routes</h1>
            <form onSubmit={validateForm}>
                <label htmlFor="from">From:</label><br />
                <select id="from" name="from" value={fromPlanet} onChange={(e) => setFromPlanet(e.target.value)}>
                    <option value="">Select a planet</option>
                    <option value="Mercury">Mercury</option>
                    <option value="Venus">Venus</option>
                    <option value="Earth">Earth</option>
                    <option value="Mars">Mars</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturn">Saturn</option>
                    <option value="Uranus">Uranus</option>
                    <option value="Neptune">Neptune</option>
                </select><br /><br />

                <label htmlFor="to">To:</label><br />
                <select id="to" name="to" value={toPlanet} onChange={(e) => setToPlanet(e.target.value)}>
                    <option value="">Select a planet</option>
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
        </div>
    );
}

export default SearchRoutesComponent;