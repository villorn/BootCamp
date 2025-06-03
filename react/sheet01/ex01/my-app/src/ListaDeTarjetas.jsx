import Tarjeta from './Tarjeta';

function ListaDeTarjetas() {
  return (
    <div>
      <Tarjeta
        nombre="Ash"
        apellido="Ketchum"
        ocupacion="Entrenador Pokémon"
        imagenURL="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/62/latest/20150428172738/Ash_Ketchum_%28anime_original%29.png/220px-Ash_Ketchum_%28anime_original%29.png"
      />
      <Tarjeta
        nombre="Misty"
        apellido="Waterflower"
        ocupacion="Líder de Gimnasio"
        imagenURL="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/ab/latest/20230616193702/Misty_en_RfVh.png/267px-Misty_en_RfVh.png"
      />
      <Tarjeta
        nombre="Brock"
        apellido="Harrison"
        ocupacion="Líder de Gimnasio"
        imagenURL="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/7a/latest/20180812021728/Brock_en_HGSS.png/183px-Brock_en_HGSS.png"
      />
    </div>
  );
}

export default ListaDeTarjetas;