import { useCounter } from "./CounterContext";

function MostrarContador() {
  const { count } = useCounter();
  return <h2>Contador global: {count}</h2>;
}

export default MostrarContador;