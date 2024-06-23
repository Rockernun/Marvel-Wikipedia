import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Character({ thumbnail, name, id, apiKey }) {
    return (
        <div key={id}>
        <img src={thumbnail} alt={name} />
        <h3>{name}</h3>
        <Link to={`http://gateway.marvel.com/v1/public/characters/${id}`}>Character's Details</Link>
    </div>
    );
}

Character.propTypes = {
    id: PropTypes.number.isRequired,  
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired 
}

export default Character;