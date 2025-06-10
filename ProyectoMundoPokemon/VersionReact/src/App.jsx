import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import { fetchPokemons, fetchPokemonDetail } from "./api";

function ListadoPokemons({ filtro }) {
  const [detalles, setDetalles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons().then(async (results) => {
      const detallesArr = [];
      for (const poke of results) {
        try {
          const detalle = await fetchPokemonDetail(poke.url);
          detallesArr.push(detalle);
        } catch (e) {}
      }
      setDetalles(detallesArr);
      setLoading(false);
    });
  }, []);

  const filtrados = detalles.filter(poke =>
    poke.name.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) return <div>Cargando...</div>;

  return <PokemonList pokemons={filtrados} />;
}

function DetallePokemon() {
  const { id } = useParams();
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    fetchPokemonDetail(`https://pokeapi.co/api/v2/pokemon/${id}`).then(setPoke);
  }, [id]);

  if (!poke) return <div>Cargando...</div>;
  return <PokemonDetail poke={poke} />;
}

function AppContent() {
  const [filtro, setFiltro] = useState("");
  const location = useLocation();

  return (
    <>
      <div className="triangle-corner left"></div>
      <div className="triangle-corner right"></div>
      {location.pathname === "/" && (
        <SearchBar filtro={filtro} setFiltro={setFiltro} />
      )}
      <Routes>
        <Route path="/" element={<ListadoPokemons filtro={filtro} />} />
        <Route path="/pokemon/:id" element={<DetallePokemon />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;