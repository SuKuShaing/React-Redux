import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

/*
El reducer es una función que recibe el estado actual y una acción, y devuelve el nuevo estado.

Si recibe la acción SET_POKEMONS, actualiza el array de pokemons.
Si no, devuelve el estado sin cambios.
*/

// Este es el estado, y el estado inicial
const initialState = fromJS({
	loading: false,
});

export const uiReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SET_LOADING:
			// return {
			// 	...state,
			// 	loading: actions.payload,
			// };
			return state.setIn(["loading"], actions.payload); // se utiliza el método de immutable.js para actualizar el estado
		default:
			return state;
	}
};
