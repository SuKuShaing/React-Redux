import { fromJS } from "immutable";
import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "../actions/types";

/*
El reducer es una función que recibe el estado actual y una acción, y devuelve el nuevo estado.

Si recibe la acción SET_POKEMONS, actualiza el array de pokemons.
Si no, devuelve el estado sin cambios.
*/

// Este es el estado, y el estado inicial
const initialState = fromJS({
	pokemons: [],
	loading: false,
});

export const pokemonsReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SET_POKEMONS:
			// return {
			// 	...state,
			// 	pokemons: actions.payload,
			// };
			return state.setIn(["pokemons"], fromJS(actions.payload)); // se utilizan los métodos de immutable.js para actualizar el estado, sí pokemons tuviera un objetos "list" por ejemplo, se accedería así ["pokemons", "list"], se colocan los niveles de profundidad que se necesiten
		// case SET_LOADING:
		// 	return {
		// 		...state,
		// 		loading: actions.payload,
		// 	};
		case SET_FAVORITES:
			const currentPokemonIndex = state.get('pokemons').findIndex(  // Encuentra el índice del pokemon que se quiere modificar
				(pokemon) => pokemon.get('id') === actions.payload.id
			);

            if (currentPokemonIndex < 0) { // Si no se encuentra el pokemon, no se hace nada
                return {
                    state,
                };
            }

            newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;

			// const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite');
			// Esto ⬆ es lo mismo que esto ⬇
			const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']); // Se obtiene el valor booleano actual de favorite

            // return {
            //     ...state,
            //     pokemons: newPokemonsList
            // }
			return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite); // Se actualiza el valor de favorite
		default:
			return state;
	}
};
