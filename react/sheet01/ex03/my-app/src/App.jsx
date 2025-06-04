import Menu from './Menu';

function App() {
  const enlaces = [
    { texto: "Inicio", url: "/" },
    { texto: "Pokémon", url: "/pokemon" },
    { texto: "Contacto", url: "/contacto" }
  ];

  return (
    <div>
      <Menu enlaces={enlaces} />
    </div>
  );
}

export default App;
