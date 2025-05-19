import axios from "axios";

export const getPokemons = () => {
	return axios
		.get("https://pokeapi.co/api/v2/pokemon?limit=151")
		.then((response) => {
            return response.data.results
        })
		.catch((error) => {
			console.error("Error fetching pokemons:", error);
		});
};


export const getPokemonDetails = (pokemon) => {
	return axios.get(pokemon.url)
		.then(res => res.data)
		.catch((err) => console.log(err));
}