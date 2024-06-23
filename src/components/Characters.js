import PropTypes from "prop-types";
import { Link } from "react-router-dom";  //  Link 컴포넌트를 사용하기 위해 import.
import styles from "./Characters.module.css";

function Characters({ thumbnail, name, id }) {
    return (
        <div className={styles.characters}>
            <img src={thumbnail} 
            alt={name}
            className={styles.characters_img} 
            />
            <h2 className={styles.characters__name}>
                <Link to={`/character/${id}`}>{name}</Link>
            </h2>
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