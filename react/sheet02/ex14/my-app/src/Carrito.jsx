function Carrito({ items, onRemove }) {
  return (
    <div>
      <h2>Carrito</h2>
      {items.length === 0 && <p>El carrito está vacío.</p>}
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.nombre} - {item.precio}€
            <button style={{ marginLeft: "12px" }} onClick={() => onRemove(idx)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;