import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "../actions/types";

/*
El reducer es una función que recibe el estado actual y una acción, y devuelve el nuevo estado.

Si recibe la acción SET_POKEMONS, actualiza el array de pokemons.
Si no, devuelve el estado sin cambios.
*/

// Este es el estado, y el estado inicial
const initialState = {
	pokemons: [],
	loading: false,
};

export const pokemonsReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SET_POKEMONS:
			return {
				...state,
				pokemons: actions.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: actions.payload,
			};
		case SET_FAVORITES:
			const newPokemonsList = [...state.pokemons]; // Copia el array de pokemons
			const currentPokemonIndex = newPokemonsList.findIndex(  // Encuentra el índice del pokemon que se quiere modificar
				(pokemon) => pokemon.id === actions.payload.id
			);

            if (currentPokemonIndex < 0) { // Si no se encuentra el pokemon, no se hace nada
                return {
                    state,
                };
            }

            newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;
            return {
                ...state,
                pokemons: newPokemonsList
            }
		default:
			return state;
	}
};
