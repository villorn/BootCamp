import { useCounter } from "./CounterContext";

function ControlesContador() {
  const { incrementar, resetear } = useCounter();
  return (
    <div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={resetear} style={{ marginLeft: "10px" }}>Resetear</button>
    </div>
  );
}

export default ControlesContador;