import Perfil from './Perfil';

function App() {
  return (
    <div>
      <h1>Perfiles</h1>
      <Perfil
        imagenURL="https://randomuser.me/api/portraits/men/1.jpg"
        nombre="Ash Ketchum"
      >
        <p>Entrenador Pokémon de Pueblo Paleta. Sueña con ser un Maestro Pokémon.</p>
      </Perfil>
      <Perfil
        imagenURL="https://randomuser.me/api/portraits/women/2.jpg"
        nombre="Misty Waterflower"
      >
        <p>Líder de gimnasio de Ciudad Celeste y experta en Pokémon de agua.</p>
      </Perfil>
      <Perfil
        imagenURL="https://randomuser.me/api/portraits/men/3.jpg"
        nombre="Brock Harrison"
      >
        <p>Líder de gimnasio de Ciudad Plateada y especialista en Pokémon de roca.</p>
      </Perfil>
    </div>
  );
}

export default App;