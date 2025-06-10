import { Link } from "react-router-dom";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function PokemonCard({ poke }) {
  const tipos = poke.types.map(t => (
    <span className="type" key={t.type.name}>{t.type.name}</span>
  ));

  return (
    <Link to={`/pokemon/${poke.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="pokemon-card">
        <img src={poke.sprites.front_default} alt={poke.name} />
        <h3>{capitalize(poke.name)}</h3>
        <div className="types">{tipos}</div>
        <div className="evolution">ID: {poke.id}</div>
        {poke.evolucionaDe && (
          <div className="evolution">
            Evoluciona de: {capitalize(poke.evolucionaDe)}
          </div>
        )}
      </div>
    </Link>
  );
}
export default PokemonCard;