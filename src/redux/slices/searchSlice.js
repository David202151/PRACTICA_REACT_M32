import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (term) => {
    const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(term)}`); 
    const albums =  response.data.album ?? []; 
    const results = albums.map((album) => ({
        id: album.idAlbum,
        title: album.strAlbum,
        album: album.strAlbum, 
        artist: album.strArtist,
        year: album.intYearReleased
    }));
    return results; 
  }
);

const searchSlice = createSlice({
name: 'search',
  initialState: {
    loading: false, 
    error: '', 
    term: '', 
    results: []
  },
  reducers: {
    resetResults: (state) => {
        state.loading = false;  
        state.error = ''; 
        state.term = ''; 
        state.results = []; 
     },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending,   (state, action) => { 
        state.loading = true; 
        state.term = action.meta.arg; 
        state.error = '';
    })
      .addCase(fetchSongs.fulfilled, (state, action) => { 
        state.results = action.payload;
        state.loading = false; 
    })
      .addCase(fetchSongs.rejected,  (state, action) => { 
        state.error = 'Ha ocurrido un error al tratar de extraer la informacion'; 
        state.loading = false; 
       });
  },
}); 

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;