import { useState, useEffect } from "react";
 
function App() {
  const [loading, setLoading] = useState(true);  //  로딩 state 
  const [character, setCharacter] = useState([]);  //  item들을 끌어내서 component로 사용하기 위해 빈 배열로 character 설정
  useEffect(() => {
    fetch("https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023")
    .then(response => response.json())
    .then(json => setCharacter(json.data.results));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>Show the Characters!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {character.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
