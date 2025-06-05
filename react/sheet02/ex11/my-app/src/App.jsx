import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState('');

  const validar = () => {
    const nuevosErrores = {};
    if (!/\S+@\S+\.\S+/.test(email)) {
      nuevosErrores.email = "Introduce un email válido.";
    }
    if (password.length < 6) {
      nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validar();
    setErrores(validacion);
    if (Object.keys(validacion).length === 0) {
      setMensaje("¡Inicio de sesión exitoso!");
    } else {
      setMensaje('');
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "40px auto", padding: "24px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", marginBottom: "4px" }}
          />
          {errores.email && <div style={{ color: "red", fontSize: "0.9em" }}>{errores.email}</div>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", marginBottom: "4px" }}
          />
          {errores.password && <div style={{ color: "red", fontSize: "0.9em" }}>{errores.password}</div>}
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Entrar</button>
      </form>
      {mensaje && <div style={{ color: "green", marginTop: "16px" }}>{mensaje}</div>}
    </div>
  );
}

export default App;