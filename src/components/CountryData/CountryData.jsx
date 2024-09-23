const CountryData = ({
    country,
    visitedCountriesHandler,
    visitedFlagsHandler,
}) => {
    return (
        <div>
            <p>
                <small>{country.name.common}</small>
            </p>
        </div>
    );
};

export default CountryData;
