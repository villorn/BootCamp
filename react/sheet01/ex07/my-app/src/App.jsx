import Tabla from './Tabla';

const columnas = ["Nombre", "Tipo", "Nivel"];
const filas = [
  ["Pikachu", "Eléctrico", 25],
  ["Bulbasaur", "Planta/Veneno", 15],
  ["Charmander", "Fuego", 12],
  ["Squirtle", "Agua", 10]
];

function App() {
  return (
    <div>
      <h1>Tabla de Pokémon</h1>
      <Tabla columnas={columnas} filas={filas} />
    </div>
  );
}

export default App;