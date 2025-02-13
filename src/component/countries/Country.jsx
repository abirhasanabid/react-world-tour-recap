import './country.css'
import PropTypes from 'prop-types';

const Country = ({ country }) => {
    console.log(country);
    const { name, flags } = country;

    return (
        <div className='country'>
            <h3>Country Name : {name.common}</h3>
            <img className={{ width: '0px' }} src={flags.png} alt="" />
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object
};

export default Country;