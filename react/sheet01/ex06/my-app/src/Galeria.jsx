import Imagen from './Imagen';

function Galeria({ imagenes }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {imagenes.map((img, idx) => (
        <Imagen key={idx} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
}

export default Galeria;