import { useState, useEffect } from "react";
import FormIntento from "./FormIntento";

function AdivinaNumero() {
  const [numero, setNumero] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [mensaje, setMensaje] = useState("");
  const [ganado, setGanado] = useState(false);

  const comprobar = (intento) => {
    const num = parseInt(intento, 10);
    if (isNaN(num)) {
      setMensaje("Introduce un número válido.");
      return;
    }
    if (num === numero) {
      setMensaje("¡Correcto! Has adivinado el número.");
      setGanado(true);
    } else if (num < numero) {
      setMensaje("Demasiado bajo.");
    } else {
      setMensaje("Demasiado alto.");
    }
  };

  useEffect(() => {
    if (ganado) {
      const timer = setTimeout(() => {
        setNumero(Math.floor(Math.random() * 100) + 1);
        setMensaje("¡Nuevo número generado! Intenta adivinarlo.");
        setGanado(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [ganado]);

  return (
    <div style={{ maxWidth: "350px", margin: "40px auto", padding: "24px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "center" }}>
      <h2>Juego de Adivinanza</h2>
      <FormIntento onIntentar={comprobar} disabled={ganado} />
      <div style={{ marginTop: "16px", minHeight: "24px" }}>{mensaje}</div>
    </div>
  );
}

export default AdivinaNumero;