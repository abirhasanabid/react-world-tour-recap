import { useState } from 'react';
import './country.css'
import PropTypes from 'prop-types';

const Country = ({ country, handleVisitedCountry, handleFlags }) => {
    const { name, flags } = country;

    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Country Name : {name.common}</h3>
            <img className='country-flag' src={flags.png} alt="" />

            <button onClick={() => {
                handleVisitedCountry(country)
                handleFlags(country)
            }}>Mark Visited</button>
            <br />

            <button onClick={handleVisited}>{visited ? 'visited' : 'visit'}</button>
            {visited ? <p style={{ color: 'green' }}>I have visited this country</p> : <p style={{color:'red'}}>I will visited one day inshaallah</p>}
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object,
    handleVisitedCountry: PropTypes.func,
    handleFlags: PropTypes.func
};

export default Country;