import CountryData from '../CountryData/CountryData';

const CountryDetail = (props) => {
    // const { country,visitedCountriesHandler,visitedFlagsHandler} = props;
    return (
        <div>
            {/* <CountryData
                country={country}
                visitedCountriesHandler={visitedCountriesHandler}
                visitedFlagsHandler={visitedFlagsHandler}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;
