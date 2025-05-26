import { getPokemonDetails } from "../api";
import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
	type: SET_POKEMONS,
	payload,
});

// integración de redux-thunk para retrasar la acción y hacer cosas asíncronas
export const getPokemonsWithDetails =
	(pokemons = []) =>
	async (dispatch) => {
		const pokemonDetails = await Promise.all(  // Promise.all([]) permite esperar a que todas las promesas que se le envían, se resuelvan
			pokemons.map((pokemon) => getPokemonDetails(pokemon))
		);

        dispatch(setPokemons(pokemonDetails));
	};

export const setLoading = (payload) => ({
	type: SET_LOADING,
	payload,
})

export const setFavorites = (payload) => ({
	type: SET_FAVORITES,
	payload,
});