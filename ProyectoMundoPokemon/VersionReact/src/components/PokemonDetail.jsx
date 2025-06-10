import { useNavigate } from "react-router-dom";

function PokemonDetail({ poke }) {
  const navigate = useNavigate();
  const tipos = poke.types.map(t => (
    <span className="type" key={t.type.name}>{t.type.name}</span>
  ));

  return (
    <div className="pokemon-detail-full">
      <div className="pokemon-detail-card">
        <button onClick={() => navigate("/")} className="volver-btn">
          Volver al listado
        </button>
        <img src={poke.sprites.front_default} alt={poke.name} />
        <h2>{poke.name}</h2>
        <div className="types">{tipos}</div>
        <div className="evolution">ID: {poke.id}</div>
        {poke.evolucionaDe && (
          <div className="evolution">
            Evoluciona de: {poke.evolucionaDe}
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail;