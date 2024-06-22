import PropTypes from "prop-types";

function Characters({ thumbnail, name }) {
    return (
        <div>
            <img src={thumbnail} 
            alt={name} 
            />
            <h3>{name}</h3>
            <hr />
        </div>
    );
}

Characters.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired 
}

export default Characters;