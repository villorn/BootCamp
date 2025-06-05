import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "40px" }}>
      <h2>Contador: {valor}</h2>
      <button onClick={() => setValor(valor - 1)}>-</button>
      <button onClick={() => setValor(0)} style={{ margin: "0 10px" }}>Reset</button>
      <button onClick={() => setValor(valor + 1)}>+</button>
    </div>
  );
}

export default Contador;