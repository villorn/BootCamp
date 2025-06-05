import { useState, useEffect } from "react";

function ListaPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Lista de Pokémons</h2>
      <ul>
        {pokemons.map((poke, idx) => (
          <li key={idx}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPokemons;