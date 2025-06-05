import Producto from './Producto';

function ListaProductos({ productos, onAdd }) {
  return (
    <div>
      <h2>Productos</h2>
      {productos.map(prod => (
        <Producto key={prod.id} producto={prod} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default ListaProductos;