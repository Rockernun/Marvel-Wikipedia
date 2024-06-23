import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState([]);
    const {id} = useParams();  //  useParams hook으로 id 받아오기
    const getCharacters = async () => {
        const json = await (await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`))
        .json();
        setCharacter(json.data.results);
        setLoading(false);
    };
    useEffect(() => {
        getCharacters();
    }, []);
    return (
        <div>
            <h1>Show the Character's Details...</h1>
            {loading ? (<h1>Loading...</h1>
        ) : (
            <div>
                {character.map((item) => 
                    <Detail 
                    
                    />
                )}
            </div>
        )}
        </div>
    );
}

export default Detail;