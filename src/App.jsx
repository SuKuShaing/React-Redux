import { useEffect, useState } from "react";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";

import "./App.css";
import { getPokemons } from "./api/index.js";

function App() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons();
			setPokemons(pokemonsRes);
		};

		fetchPokemons();
	}, []); // cuando se monta el componente, se ejecuta la función fetchPokemons

	return (
		<div className="App">
			<Col span={4} offset={10}>
				<img src={logo} alt="Pokedux" />
			</Col>
			<Col span={8} offset={8}>
				<Searcher />
			</Col>
			<PokemonList pokemons={pokemons} />
		</div>
	);
}

export default App;
