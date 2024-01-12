import './TravelCompaniesPage.css';

function TravelCompaniesPage() {
    const companies = [
        {
            name: 'SpaceX',
            description: 'As one of the pioneering giants in space transport, SpaceX has earned a reputation for reliability that is unmatched. Their decades of experience have made them a go-to choice for travelers seeking confidence in their cosmic journeys. With a fleet of advanced rockets and a history of successful missions, SpaceX offers not just a trip to space but a testament to human ingenuity and resilience.'
        },
        {
            name: 'Galaxy Empress',
            description: 'Stepping into the arena more recently, Galaxy Empress has quickly distinguished itself with high-quality service that transforms space travel into an art form. Their attention to detail and dedication to passenger comfort make every journey an unforgettable experience. With a focus on creating a personalized and luxurious space adventure, Galaxy Empress is the epitome of sophistication among the stars.'
        },
        {
            name: 'Travel Nova',
            description: 'Known for their impressively large transport vessels, Travel Nova offers a unique experience in space travel. Their ships, akin to floating cosmic cities, provide an array of amenities and activities that ensure travelers are never bored. The spacious design and advanced facilities make Travel Nova a favorite for those who wish to explore the stars in grand style.'
        },
        {
            name: 'Space Voyager',
            description: 'An established name in the industry, Space Voyager is celebrated for its punctuality. Their time-honored commitment to schedule accuracy makes them a reliable choice for travelers with time-sensitive needs. With a fleet of well-maintained ships and experienced crew, Space Voyager stands as a paragon of efficiency in the space travel sector.'
        },
        {
            name: 'Spacelux',
            description: 'Spacelux redefines luxury in the cosmos. Known for their opulent voyages, they cater to those who seek an extraordinary experience. Each journey is a masterpiece of comfort and extravagance, offering amenities that rival the finest earthbound resorts. For the traveler who desires indulgence in every aspect of their space journey, Spacelux is the unparalleled choice.'
        },
        {
            name: 'Explore Dynamite',
            description: 'With a focus on affordability, Explore Dynamite has made space travel accessible to a wider audience. Their competitive pricing does not compromise on safety or essential comforts, making them a popular choice for budget-conscious explorers. Explore Dynamite proves that the wonders of space are not just for the affluent but for everyone with a dream to soar among the stars.\n'
        },
        {
            name: 'Spacegenix',
            description: 'As a newcomer in the industry, Spacegenix is quickly gaining attention with its high-tech ships. Their cutting-edge technology and innovative design cater to the modern traveler who seeks a futuristic experience. Spacegenix is for those who want to be at the forefront of space exploration, enjoying the latest advancements in interstellar travel.\n'
        },
        {
            name: 'Space Odyssey',
            description: 'Known for its fast transport capabilities, Space Odyssey offers expedited journeys across the cosmos. Their focus on speed, without sacrificing safety or comfort, makes them a favorite for travelers eager to maximize their time among the stars. Space Odyssey is the epitome of swift and efficient space travel.\n'
        },
        {
            name: 'Space Piper',
            description: 'Renowned as an all-around solid company, Space Piper provides a balanced space travel experience. Combining reliability, quality service, and reasonable pricing, they cater to a wide range of travelers. Space Piper is the choice for those who seek a dependable and enjoyable journey without any specific frills or focuses.\n'
        },
        {
            name: 'Explore Origin',
            description: 'As one of the oldest companies in the sector, Explore Origin is synonymous with reliability. Their long history in space travel is a testament to their expertise and steadfastness. For travelers who appreciate a company with a rich legacy and a proven track record, Explore Origin offers not just a journey, but a part of space exploration history.\n'
        },

    ];

    return (
        <div className={"companies_wrapper"}>
            {companies.map((company, index) => (
                <div className={"companies_container"}>
                    <div className={"company_entry"} key={index}>
                        <h2>{company.name}</h2>
                        <p>{company.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TravelCompaniesPage;