function SearchBar({ filtro, setFiltro }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Filtra pokemons por nombre..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;