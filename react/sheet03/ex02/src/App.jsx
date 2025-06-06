import { CounterProvider } from "./CounterContext";
import MostrarContador from "./MostrarContador";
import ControlesContador from "./ControlesContador";

function App() {
  return (
    <CounterProvider>
      <MostrarContador />
      <ControlesContador />
    </CounterProvider>
  );
}

export default App;