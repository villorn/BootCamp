function Imagen({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "200px",
        height: "200px",
        objectFit: "cover",
        margin: "8px",
        borderRadius: "8px",
        boxShadow: "2px 2px 8px #eee"
      }}
    />
  );
}

export default Imagen;