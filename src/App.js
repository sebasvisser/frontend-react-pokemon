import React from 'react';
import './App.css';
import axios from 'axios';




function App() {

    async function getPokemon(event){
        try {
            const pokemonName = event;
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            console.log("Hier komt de pokemon")
            console.log(result);
        }
        catch (error){
            console.error(error);
        }
    }

    const jiggly = getPokemon("jigglypuff");
    const jigglyPicture = jiggly.data.sprites.front_shiny;
    console.log("Sprite komt hier:");
    console.log(jigglyPicture);
  return (
    <div>
        <h1>JigglyPufff</h1>
      Begin hier met de opdracht!
        {/*<img src={jigglyPicture} />*/}
    </div>
  );
}

export default App;
