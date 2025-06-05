import { useState } from 'react';
import ListaProductos from './ListaProductos';
import Carrito from './Carrito';

const productos = [
  { id: 1, nombre: "Poké Ball", precio: 200 },
  { id: 2, nombre: "Poción", precio: 300 },
  { id: 3, nombre: "Antídoto", precio: 100 }
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const añadirAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (indice) => {
    setCarrito(carrito.filter((_, idx) => idx !== indice));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <ListaProductos productos={productos} onAdd={añadirAlCarrito} />
      <Carrito items={carrito} onRemove={eliminarDelCarrito} />
    </div>
  );
}

export default App;