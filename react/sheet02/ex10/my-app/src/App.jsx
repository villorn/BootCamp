import { useState } from 'react';

const elementos = [
  { id: 1, nombre: "El Señor de los Anillos" },
  { id: 2, nombre: "Harry Potter" },
  { id: 3, nombre: "Star Wars" },
  { id: 4, nombre: "Matrix" }
];

function Lista({ items, onFavorito }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} style={{ marginBottom: "8px" }}>
          {item.nombre}
          {onFavorito && (
            <button style={{ marginLeft: "12px" }} onClick={() => onFavorito(item)}>
              Añadir a favoritos
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [favoritos, setFavoritos] = useState([]);

  const añadirAFavoritos = (item) => {
    if (!favoritos.find(fav => fav.id === item.id)) {
      setFavoritos([...favoritos, item]);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>Películas</h2>
      <Lista items={elementos} onFavorito={añadirAFavoritos} />

      <h2>Favoritos</h2>
      <Lista items={favoritos} />
    </div>
  );
}

export default App;