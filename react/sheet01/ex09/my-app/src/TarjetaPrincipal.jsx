function TarjetaPrincipal({ titulo, subtitulo, children }) {
  return (
    <div style={{
      border: "2px solid #1976d2",
      borderRadius: "10px",
      padding: "24px",
      margin: "24px auto",
      maxWidth: "400px",
      background: "#f5faff",
      boxShadow: "2px 2px 8px #e3e3e3"
    }}>
      <h2 style={{ margin: "0 0 8px 0", color: "#1976d2" }}>{titulo}</h2>
      <h4 style={{ margin: "0 0 16px 0", color: "#555" }}>{subtitulo}</h4>
      <div>
        {children}
      </div>
    </div>
  );
}

export default TarjetaPrincipal;