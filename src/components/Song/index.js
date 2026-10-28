import { Card, Title, TitleLink, Info } from "./styles";

const Song =({id, title, album, artist, year, onAdd, detail}) => {
  return (
    <Card $detail={detail}>
        <Title><TitleLink to={`/song/${id}`}>{title}</TitleLink></Title>
        <Info>Artista: {artist}</Info>
        <Info>Año: {year}</Info>
        <Info>Álbum: {album}</Info>
        {
           onAdd && <button onClick={() => onAdd({ id, title, artist, album, year })}>
                      Agregar a mi biblioteca
                    </button>
        }
    </Card>
  );
}

export default Song;