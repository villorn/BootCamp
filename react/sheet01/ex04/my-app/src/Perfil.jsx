function Perfil({ imagenURL, nombre, children }) {
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "8px",
      width: "250px",
      margin: "16px",
      display: "inline-block",
      background: "#fff",
      boxShadow: "2px 2px 8px #eee",
      padding: "16px",
      verticalAlign: "top",
      textAlign: "center"
    }}>
      <img
        src={imagenURL}
        alt={nombre}
        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h2 style={{ margin: "12px 0 8px 0" }}>{nombre}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Perfil;