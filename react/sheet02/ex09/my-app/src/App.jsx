import { useState } from 'react'
import ControlesContador from './ControlesContador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = () => setCount(count + 1)
  const decrementar = () => setCount(count - 1)
  const resetear = () => setCount(0)

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Contador con Componente Hijo</h1>
      <h2>Valor: {count}</h2>
      <ControlesContador
        incrementar={incrementar}
        decrementar={decrementar}
        resetear={resetear}
      />
    </div>
  )
}

export default App