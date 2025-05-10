import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons = Array(10).fill('') }) => {
    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={index}/>
            ))}
        </div>
    )
}

export default PokemonList;