export async function fetchPokemons(limit = 50) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();
  return data.results;
}

export async function fetchPokemonDetail(input) {
  let url = input;
  if (!input.startsWith("http")) {
    url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  }
  const res = await fetch(url);
  const detalle = await res.json();
  const resEspecie = await fetch(detalle.species.url);
  const especie = await resEspecie.json();
  let evolucionaDe = null;
  if (especie.evolves_from_species) {
    evolucionaDe = especie.evolves_from_species.name;
  }
  detalle.evolucionaDe = evolucionaDe;
  return detalle;
}