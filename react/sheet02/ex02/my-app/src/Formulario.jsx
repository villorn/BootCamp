import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(`Nombre: ${nombre} | Email: ${email} | Contraseña: ${password}`);
  };

  return (
    <div style={{ maxWidth: "350px", margin: "40px auto", padding: "24px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Formulario Controlado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            style={{ width: "100%", marginBottom: "8px" }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", marginBottom: "8px" }}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", marginBottom: "8px" }}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && (
        <div style={{ marginTop: "16px", background: "#f5f5f5", padding: "8px", borderRadius: "6px" }}>
          {mensaje}
        </div>
      )}
    </div>
  );
}

export default Formulario;