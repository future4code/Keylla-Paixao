import React from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  useState = {
    // lista de pokemons que está sendo guardada no estado
    pokeList: [],
    // nome do pokemon guardado no estado, assim que o usuário
    // escolhe um nome no dropdown
    pokeName: ""
  };

  // método que roda após a montagem do componente
  const componentDidMount = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
      setState({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const changePokeName = event => {
    setState({ pokeName: event.target.value });
  };


    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {useState.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {useState.pokeName && <PokeCard pokemon={useState.pokeName} />}
      </div>
    );
  }

export default App;
