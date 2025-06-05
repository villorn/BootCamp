function Producto({ producto, onAdd }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      {producto.nombre} - {producto.precio}€
      <button style={{ marginLeft: "12px" }} onClick={() => onAdd(producto)}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default Producto;