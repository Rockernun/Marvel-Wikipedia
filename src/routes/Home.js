import { useState, useEffect } from "react";
import Characters from "../components/Characters";

function Home() {
    const [loading, setLoading] = useState(true);  
    const [characters, setCharacters] = useState([]);  
    const getCharacters = async() => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )
    const json = await response.json();
    setCharacters(json.data.results);
    setLoading(false);
  }
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      <h1>Show the Characters!</h1>
      <hr />
      {loading ? 
        (<strong>Loading...</strong> 
        ) : (
          <div>
            {characters.map((item) => 
              <Characters 
              key={item.id}
              id={item.id}  //  id prop을 추가
              thumbnail={`${item.thumbnail.path}.${item.thumbnail.extension}`} 
              name={item.name}
              />
            )}
        </div>
        )}
    </div>
  );
}

export default Home;