function Fila({ datos }) {
  return (
    <tr>
      {datos.map((dato, idx) => (
        <td key={idx}>{dato}</td>
      ))}
    </tr>
  );
}

export default Fila;