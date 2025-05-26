import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
	pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
	"data/fetchPokemonsWithDetails",
	async (_, { dispatch }) => {
		// dispatch loader
		dispatch(setLoading(true));

		// fetch
		const pokemonsRes = await getPokemons();
		const pokemonDetails = await Promise.all(
			pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
		);
		dispatch(setPokemons(pokemonDetails));

		// dispatch loader
		dispatch(setLoading(false));
	}
);

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setPokemons: (state, action) => {
			state.pokemons = action.payload;
		},
		setFavorites: (state, action) => {
			const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
				return pokemon.id === action.payload.id;
			});

			if (currentPokemonIndex >= 0) {
				const isFavorite = state.pokemons[currentPokemonIndex].favorite;

				state.pokemons[currentPokemonIndex].favorite = !isFavorite;
			}
		},
	},
});

export const { setPokemons, setFavorites } = dataSlice.actions;
console.log("🚀 ~ dataSlice:", dataSlice);

export default dataSlice.reducer;
