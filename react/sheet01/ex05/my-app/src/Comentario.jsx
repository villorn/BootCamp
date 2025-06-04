function Comentario({ autor, fecha, contenido }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "12px",
      margin: "12px 0",
      background: "#fafafa"
    }}>
      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{autor}</div>
      <div style={{ fontSize: "0.9em", color: "#888", marginBottom: "8px" }}>{fecha}</div>
      <div>{contenido}</div>
    </div>
  );
}

export default Comentario;