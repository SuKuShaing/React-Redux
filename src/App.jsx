import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";

import "./App.css";
import { getPokemonDetails, getPokemons } from "./api/index.js";
import { setPokemons  } from "./actions/index.js";

function App() {
	// const [pokemons, setPokemons] = useState([]);

	const pokemons = useSelector((state) => state.pokemons); // accede al estado de redux, en este caso a los pokemons
	const dispatch = useDispatch(); // permite despachar acciones a redux

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons();
			const pokemonDetails = await Promise.all( // Promise.all([]) permite esperar a que todas las promesas que se le envían, se resuelvan
				pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
			);
			dispatch(setPokemons(pokemonDetails)); // despacha la acción setPokemons con los pokemons obtenidos
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