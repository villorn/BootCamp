import Boton from './Boton';

function ListaDeBotones() {
  return (
    <div>
      <Boton texto="Saludar" onClick={() => console.log("¡Hola!")} />
      <Boton texto="Despedir" onClick={() => console.log("¡Adiós!")} />
      <Boton texto="Pokémon" onClick={() => console.log("¡Atrápalos ya!")} />
    </div>
  );
}

export default ListaDeBotones;