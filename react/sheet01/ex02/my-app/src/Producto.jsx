function Producto({ nombre, precio, descripcion }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "8px",
        width: "250px",
        margin: "16px",
        display: "inline-block",
        background: "#fff",
        boxShadow: "2px 2px 8px #eee",
        padding: "16px",
        verticalAlign: "top"
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.2em", marginBottom: "8px" }}>{nombre}</div>
      <div style={{ color: "#007b00", fontWeight: "bold", marginBottom: "8px" }}>{precio}€</div>
      <div style={{ color: "#555" }}>{descripcion}</div>
    </div>
  );
}

export default Producto;