import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
  return (
    <div className="pokemon-list">
      {pokemons.map(poke => (
        <PokemonCard key={poke.id} poke={poke} />
      ))}
    </div>
  );
}

export default PokemonList;