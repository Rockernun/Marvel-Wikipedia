import PropTypes from "prop-types";
import { Link } from "react-router-dom";  //  Link 컴포넌트를 사용하기 위해 import.

function Characters({ thumbnail, name, id }) {
    return (
        <div>
            <img src={thumbnail} 
            alt={name} 
            />
            <Link to={`/character/${id}`}>{name}</Link>
            <hr />
        </div>
    );
}

Characters.propTypes = {
    id: PropTypes.number.isRequired,  //  PropTypes에 id도 추가
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired 
}

export default Characters;