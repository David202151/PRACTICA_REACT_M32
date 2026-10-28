import {useParams} from 'react-router-dom'; 
import useFetch from '../Hooks/useFetch';
import Song from '../Song';
import { DetailContainer, Message, ErrorBox, HomeLink } from './styles';
const SongDetail = () => {
    
    const { id } = useParams();
    const url = `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`;
    console.log(url); 
    const { data, isLoading, error } = useFetch(url);
    console.log('data', data); 
    const album = data?.album?.[0]; 
    console.log('album', album);
    if (isLoading) return <Message>Cargando...</Message>;
    if (error) return (
        <ErrorBox $error>
        <p>Hubo un problema al cargar los datos</p>
        </ErrorBox>
    );
    if (!album) return <Message>No se encontroinformacion del album.</Message>;
    return(
        <DetailContainer>
            <Song
                detail
                key={album.idAlbum}
                id={album.idAlbum}
                title={album.strAlbum}
                artist={album.strArtist}
                year={album.intYearReleased}
            />
            <HomeLink to="/">Volver al home</HomeLink>
        </DetailContainer>
    ); 
    
}; 

export default SongDetail; 


