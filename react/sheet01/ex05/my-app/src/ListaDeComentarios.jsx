import Comentario from './Comentario';

function ListaDeComentarios() {
  return (
    <div>
      <Comentario
        autor="Ash Ketchum"
        fecha="2025-06-04"
        contenido="¡Me encantan los Pokémon eléctricos!"
      />
      <Comentario
        autor="Misty Waterflower"
        fecha="2025-06-03"
        contenido="Los Pokémon de agua son los mejores."
      />
      <Comentario
        autor="Brock Harrison"
        fecha="2025-06-02"
        contenido="¡No olvides llevar pociones en tu viaje!"
      />
    </div>
  );
}

export default ListaDeComentarios;