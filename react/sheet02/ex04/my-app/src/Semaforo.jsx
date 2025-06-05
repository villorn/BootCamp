import { useState } from "react";

function Semaforo() {
  const colores = ["red", "yellow", "green"];
  const [indice, setIndice] = useState(0);

  const siguienteColor = () => {
    setIndice((indice + 1) % colores.length);
  };

  const estiloLuz = (color) => ({
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "12px auto",
    background: color,
    opacity: colores[indice] === color ? 1 : 0.3,
    border: "2px solid #333"
  });

  return (
    <div style={{ width: "80px", margin: "40px auto", padding: "16px", background: "#222", borderRadius: "16px", textAlign: "center" }}>
      <div style={estiloLuz("red")}></div>
      <div style={estiloLuz("yellow")}></div>
      <div style={estiloLuz("green")}></div>
      <button onClick={siguienteColor} style={{ marginTop: "16px" }}>Siguiente</button>
    </div>
  );
}

export default Semaforo;