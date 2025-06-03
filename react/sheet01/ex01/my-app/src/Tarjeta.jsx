import './Tarjeta.css';

function Tarjeta({ nombre, apellido, ocupacion, imagenURL }) {
  return (
    <div className="tarjeta">
      <img className="tarjeta__imagen" src={imagenURL} alt={`${nombre} ${apellido}`} />
      <div className="tarjeta__contenido">
        <h2 className="tarjeta__nombre">{nombre} {apellido}</h2>
        <p className="tarjeta__ocupacion">{ocupacion}</p>
      </div>
    </div>
  );
}

export default Tarjeta;