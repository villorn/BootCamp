function TextoFormateado({ texto, negrita, cursiva }) {
  let contenido = texto;

  if (negrita) {
    contenido = <b>{contenido}</b>;
  }
  if (cursiva) {
    contenido = <i>{contenido}</i>;
  }

  return <span>{contenido}</span>;
}

export default TextoFormateado;