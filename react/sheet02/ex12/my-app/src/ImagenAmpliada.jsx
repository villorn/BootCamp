function ImagenAmpliada({ imagen }) {
  return (
    <img
      src={imagen.url}
      alt={imagen.alt}
      style={{ width: "220px", height: "220px", objectFit: "cover", borderRadius: "16px", border: "4px solid #1976d2" }}
    />
  );
}

export default ImagenAmpliada;