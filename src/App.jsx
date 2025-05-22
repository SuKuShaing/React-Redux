import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";

import "./App.css";
import { getPokemonDetails, getPokemons } from "./api/index.js";
import { getPokemonsWithDetails, setLoading, setPokemons } from "./actions/index.js";

function App() {
	// const [pokemons, setPokemons] = useState([]);

	const pokemons = useSelector((state) => state.get('pokemons')).toJS(); // accede al estado de redux, en este caso a los pokemons
	// const loading = useSelector((state) => state.loading);
	const loading = false;
	const dispatch = useDispatch(); // permite despachar acciones a redux

	useEffect(() => {
		const fetchPokemons = async () => {
			dispatch(setLoading(true));
			const pokemonsRes = await getPokemons();
			dispatch(getPokemonsWithDetails(pokemonsRes)); // despacha la acción setPokemons con los pokemons obtenidos
			dispatch(setLoading(false));
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
			{loading ? (
				<Col offset={12}>
					<Spin spinning size="large" />
				</Col>
			) : (
				<PokemonList pokemons={pokemons} />
			)}
		</div>
	);
}

export default App;
