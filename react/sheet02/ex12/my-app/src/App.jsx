import Galeria from './Galeria';

const imagenes = [
  { id: 1, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", alt: "Pikachu" },
  { id: 2, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", alt: "Bulbasaur" },
  { id: 3, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", alt: "Charmander" },
  { id: 4, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", alt: "Squirtle" }
];

function App() {
  return <Galeria imagenes={imagenes} />;
}

export default App;