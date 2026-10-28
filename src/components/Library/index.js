import Song from "../Song";
import { LibrarySection, HomeLink } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/slices/librarySlice';

const Library = () => {
    const librarySongs = useSelector((state) => state.library);
    const dispatch = useDispatch();

    return(
        <article>
            <LibrarySection>
                <h2>Biblioteca Musical</h2>
                {
                    librarySongs.map(song => {
                        return(
                            <div key={song.id}>
                                <Song
                                key={song.id}
                                id={song.id}
                                title={song.title}
                                album={song.album}
                                artist={song.artist}
                                year={song.year}
                                />
                                <button onClick={() => dispatch(removeSong(song.id))}>Eliminar</button>
                            </div>
                        ); 
                    })
                }
            </LibrarySection>
            <HomeLink to="/">Volver al home</HomeLink>
        </article>
    ); 
}; 

export default Library;