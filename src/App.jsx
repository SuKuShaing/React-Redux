import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";

import "./App.css";
import { getPokemons } from "./api/index.js";
import { setPokemons as setPokemonsActions } from "./actions/index.js";

function App({ pokemons, setPokemons }) {
	// const [pokemons, setPokemons] = useState([]);

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

// Redux
// Estados
const mapStateToProps = (state) => ({  // es qué parte del estado global quieres usar como props (pokemons).
	pokemons: state.pokemons, // que parte del estado global quieres usar como props
});

// Acciones que son como los manejadores de estados
const mapDispatchToProps = (dispatch) => ({  // es qué acciones puedes disparar desde el componente (setPokemons).
	setPokemons: (payload) => dispatch(setPokemonsActions(payload)),
});

export default connect(  // conecta react con redux
	mapStateToProps,
	mapDispatchToProps
)(App);