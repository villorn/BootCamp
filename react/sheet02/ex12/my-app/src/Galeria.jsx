import { useState } from 'react';
import Miniaturas from './Miniaturas';
import ImagenAmpliada from './ImagenAmpliada';

function Galeria({ imagenes }) {
  const [seleccionada, setSeleccionada] = useState(imagenes[0]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Galería de Imágenes Pokémon</h1>
      <ImagenAmpliada imagen={seleccionada} />
      <Miniaturas imagenes={imagenes} onSeleccionar={setSeleccionada} />
    </div>
  );
}

export default Galeria;