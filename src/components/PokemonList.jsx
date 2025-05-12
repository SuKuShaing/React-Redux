import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons = Array(10).fill("") }) => {
	console.log("🚀 ~ PokemonList ~ pokemons:", pokemons);

	const extractNumberFromUrl = (url) => {
		const regex = /\/pokemon\/(\d+)\//;
		const match = url?.match(regex);
		return match ? match[1] : "1"; // Devuelve "1" si no hay coincidencia
	};

	return (
		<div className="pokemon-list">
			{pokemons.map((pokemon, index) => {
				const numeroPokemon = extractNumberFromUrl(pokemon.url);
				return (
					<PokemonCard
						key={pokemon.name || index} // Usa index como fallback si name no está definido
						name={pokemon.name || `Pokemon ${index + 1}`}
						number={numeroPokemon}
					/>
				);
			})}
		</div>
	);
};

export default PokemonList;
