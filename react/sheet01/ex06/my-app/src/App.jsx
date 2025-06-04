import Galeria from './Galeria';

const imagenes = [
  { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", alt: "Pikachu" },
  { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", alt: "Bulbasaur" },
  { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", alt: "Charmander" },
  { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", alt: "Squirtle" }
];

function App() {
  return (
    <div>
      <h1>Galería Pokémon</h1>
      <Galeria imagenes={imagenes} />
    </div>
  );
}

export default App;