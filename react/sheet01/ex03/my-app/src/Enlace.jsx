function Enlace({ texto, url, className }) {
  return (
    <a href={url} className={className}>
      {texto}
    </a>
  );
}

export default Enlace;