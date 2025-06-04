import Fila from './Fila';

function Tabla({ columnas, filas }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columnas.map((col, idx) => (
            <th key={idx} style={{ border: "1px solid #ccc", padding: "8px", background: "#f5f5f5" }}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filas.map((fila, idx) => (
          <Fila key={idx} datos={fila} />
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;