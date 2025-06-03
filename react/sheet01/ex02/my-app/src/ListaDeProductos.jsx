import Producto from './Producto';

function ListaDeProductos({productos}) {
  return (
    <div>
      {productos.map((prod, idx) =>(
        <Producto
          key={idx}
          nombre={prod.nombre}
          precio={prod.precio}
          descripcion={prod.descripcion}
        />
      ))}
    </div>
  );
}

export default ListaDeProductos;