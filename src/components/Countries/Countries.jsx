import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const visitedCountriesHandler = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    };

    const visitedFlagsHandler = (flags) => {
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    };

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <div>
                    {visitedCountries.map((country) => (
                        <h4 key={country.cca3}>{country?.name?.common}</h4>
                    ))}
                </div>
            </div>
            <div className="visited-flags">
                <h3>Visited Flags: {visitedFlags.length}</h3>
                {visitedFlags.map((flag, idx) => (
                    <img key={idx} src={flag} alt="" />
                ))}
            </div>
            <div className="country-container">
                {countries.map((country) => {
                    return (
                        <Country
                            key={country.cca3}
                            country={country}
                            visitedFlagsHandler={visitedFlagsHandler}
                            visitedCountriesHandler={visitedCountriesHandler}
                        ></Country>
                    );
                })}
            </div>
        </div>
    );
};

export default Countries;
