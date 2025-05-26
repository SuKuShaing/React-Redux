import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pokemons: [],
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setPokemons: (state, action) => {
			state.pokemons = action.payload;
		},
		setFavotite: (state, action) => {
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

export const { setPokemons, setFavotite } = dataSlice.actions;
console.log("🚀 ~ dataSlice:", dataSlice)

export default dataSlice.reducer;