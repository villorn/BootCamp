import TextoFormateado from './TextoFormateado';

function App() {
  return (
    <div>
      <TextoFormateado texto="Solo texto" />
      <TextoFormateado texto="Negrita" negrita />
      <TextoFormateado texto="Cursiva" cursiva />
      <TextoFormateado texto="Negrita y cursiva" negrita cursiva />
    </div>
  );
}

export default App;