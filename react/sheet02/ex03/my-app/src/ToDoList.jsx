import { useState } from "react";

function ToDoList() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  const eliminarTarea = (idx) => {
    setTareas(tareas.filter((_, i) => i !== idx));
  };

  return (
    <div style={{ maxWidth: "350px", margin: "40px auto", padding: "24px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={tarea}
        onChange={e => setTarea(e.target.value)}
        placeholder="Nueva tarea"
        style={{ width: "70%", marginRight: "8px" }}
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul style={{ marginTop: "16px" }}>
        {tareas.map((t, idx) => (
          <li key={idx} style={{ marginBottom: "8px" }}>
            {t}
            <button
              onClick={() => eliminarTarea(idx)}
              style={{ marginLeft: "12px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;