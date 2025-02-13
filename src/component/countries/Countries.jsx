import { useEffect } from 'react';
import { useState } from 'react';
import Country from './Country';
import './country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // mark visited country 
    const [visitedCountry, setVisitedCountry] = useState([]);
    // for flag 
    const [flags, setFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);


    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    };

    const handleFlags = country => {
        const newFlags = [...flags, country];
        setFlags(newFlags);
    };

    return (
        <div className="">
            <h2>Countries : {countries.length}</h2>
            <h3>Visited Country length: {visitedCountry.length}</h3>
            <h4>Visited Country Name </h4>
            <ul>
                {
                    visitedCountry.map(visited => <li key={visited.cca2}>{visited?.name?.common}</li>)

                }
                {
                    flags.map((flag,idx) => <img style={{ width: '100px' }} key={idx} src={flag.flags.png}></img>)
                }
            </ul>
            <div className='country-container'>
                {
                    countries.map(country => <Country handleVisitedCountry={handleVisitedCountry}
                        handleFlags={handleFlags} key={country.cca2} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;