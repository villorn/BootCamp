function Boton({ texto, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: "8px", padding: "8px 16px" }}>
      {texto}
    </button>
  );
}

export default Boton;