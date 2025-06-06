import { useState, useEffect } from "react";
import CronometroControles from "./CronometroControles";

function Cronometro() {
  const [tiempo, setTiempo] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false);

  useEffect(() => {
    let intervalo;
    if (enMarcha) {
      intervalo = setInterval(() => setTiempo(t => t + 1), 1000);
    }
    return () => clearInterval(intervalo);
  }, [enMarcha]);

  const handleStart = () => setEnMarcha(true);
  const handleStop = () => setEnMarcha(false);
  const handleReset = () => {
    setEnMarcha(false);
    setTiempo(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Cronómetro</h2>
      <div style={{ fontSize: "2em", margin: "16px 0" }}>{tiempo} s</div>
      <CronometroControles
        enMarcha={enMarcha}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
}

export default Cronometro;