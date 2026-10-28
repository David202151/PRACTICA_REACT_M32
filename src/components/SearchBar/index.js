import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, resetResults } from "../../redux/slices/searchSlice";
import { Form, Input } from "./styles";

const SearchBar = () => {
    const [query, setQuery] = useState(''); 
    const dispatch = useDispatch(); 
    const loading = useSelector((state) => state.search.loading);  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            dispatch(resetResults());
            return;
        }
        dispatch(fetchSongs(query.trim()));
    };
    return(
        <Form onSubmit={handleSubmit}>
        <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
        </button>
        </Form>
    );     
}

export default SearchBar; 
