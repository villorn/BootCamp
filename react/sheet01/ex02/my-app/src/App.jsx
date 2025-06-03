import ListaDeProductos from './ListaDeProductos'
import './App.css' 

const productos = [
  {nombre: "Patatas sabor campesinas", precio: 1, descripcion: "con extra de patateina"},
  {nombre: "Piña", precio: 5, descripcion: "no viene del fondo del mar"},
  {nombre: "Barrita de proteinas", precio: 3, descripcion: "las favoritas de Alexander"}
]

function App() {
  return (
    <div>
      <h1>
        <ListaDeProductos productos={productos}/>
      </h1>
    </div>
  )
}
export default App
