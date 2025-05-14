import { SET_POKEMONS } from "../actions/types";

/*
El reducer es una función que recibe el estado actual y una acción, y devuelve el nuevo estado.

Si recibe la acción SET_POKEMONS, actualiza el array de pokemons.
Si no, devuelve el estado sin cambios.
*/ 

// Este es el estado, y el estado inicial
const initialState = {
    pokemons: [],
};

export const pokemonsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: actions.payload,
            };
        default:
            return state;
    }
};