function ControlesContador({ incrementar, decrementar, resetear }) {
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <button onClick={resetear} style={{ margin: "0 10px" }}>Reset</button>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default ControlesContador;