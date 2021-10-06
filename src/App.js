import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [pokeData, setPokeData] = useState("");

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
                console.log("Hier komt de pokemon")
                setPokeData(result);
                console.log(pokeData);
            }
            catch(e){
                console.error(e);
            }
        }
            fetchData();
        }, []);



  return (
    <div>
        <h1>JigglyPufff</h1>
      Begin hier met de opdracht!
        <p>{pokeData.data.id}</p>
        {/*<img src={jigglyPicture} />*/}
    </div>
  );
}

export default App;
