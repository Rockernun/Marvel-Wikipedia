import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Character from "../components/Character";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState([]);
    const {id} = useParams(); 
    const getCharacter = async () => {
        const json = await (await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`))
        .json();
        console.log(json);
        setCharacter(json.data.results);
        setLoading(false);
    };
    useEffect(() => {
        getCharacter();
    }, []);
    return (
        <div>
            <h1>Show the Character's Details...</h1>
            {loading ? 
        (<strong>Loading...</strong> 
        ) : (
          <div>
            {character.map((item) => 
              <Character 
              key={item.id}
              id={item.id}  
              thumbnail={`${item.thumbnail.path}.${item.thumbnail.extension}`} 
              name={item.name}
              />
            )}
        </div>
        )}
        </div>
    );
}

export default Detail;