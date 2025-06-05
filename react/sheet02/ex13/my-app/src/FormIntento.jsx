import { useState } from "react";

function FormIntento({ onIntentar, disabled }) {
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onIntentar(valor);
    setValor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={valor}
        onChange={e => setValor(e.target.value)}
        disabled={disabled}
        placeholder="Adivina el número (1-100)"
        style={{ width: "70%", marginRight: "8px" }}
      />
      <button type="submit" disabled={disabled}>Probar</button>
    </form>
  );
}

export default FormIntento;