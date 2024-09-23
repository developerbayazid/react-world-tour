import { useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import './Country.css';

const Country = ({ country, visitedCountriesHandler, visitedFlagsHandler }) => {
    const [visited, setVisited] = useState(false);
    const { name, flags, population, area, cca3 } = country;
    const handleVisit = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h2 style={{ color: visited && 'red' }}>{name?.common}</h2>
            <img src={flags?.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <h5>
                <small>Code: {cca3}</small>
            </h5>
            <button onClick={() => visitedCountriesHandler(country)}>
                Mark Visited
            </button>
            <br />
            <button onClick={() => visitedFlagsHandler(flags?.png)}>
                Add Flag
            </button>
            <br />
            <button onClick={handleVisit}>
                {visited ? 'Visited' : 'Going'}
            </button>
            <h4>
                {visited ? 'I have visited this country.' : 'I want to visit.'}
            </h4>
            <CountryDetail
                country={country}
                visitedCountriesHandler={visitedCountriesHandler}
                visitedFlagsHandler={visitedFlagsHandler}
            ></CountryDetail>
        </div>
    );
};

export default Country;
