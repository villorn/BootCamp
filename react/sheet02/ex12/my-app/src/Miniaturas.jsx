function Miniaturas({ imagenes, onSeleccionar }) {
  return (
    <div style={{ display: "flex", gap: "16px", justifyContent: "center", margin: "24px 0" }}>
      {imagenes.map(img => (
        <img
          key={img.id}
          src={img.url}
          alt={img.alt}
          style={{ width: "60px", height: "60px", cursor: "pointer", border: "2px solid #ccc", borderRadius: "8px" }}
          onClick={() => onSeleccionar(img)}
        />
      ))}
    </div>
  );
}

export default Miniaturas;