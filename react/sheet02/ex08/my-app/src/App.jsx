import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    if (oscuro) {
      document.body.classList.add('tema-oscuro');
      document.body.classList.remove('tema-claro');
    } else {
      document.body.classList.add('tema-claro');
      document.body.classList.remove('tema-oscuro');
    }
  }, [oscuro]);

  return (
    <div>
      <button onClick={() => setOscuro(!oscuro)}>
        Cambiar a tema {oscuro ? 'claro' : 'oscuro'}
      </button>
      <h1>{oscuro ? 'Tema Oscuro' : 'Tema Claro'}</h1>
      <p>¡Haz clic en el botón para alternar el tema!</p>
    </div>
  );
}

export default App