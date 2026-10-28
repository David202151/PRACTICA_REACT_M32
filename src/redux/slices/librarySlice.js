import { createSlice } from "@reduxjs/toolkit";

const  librarySlice = createSlice({
    name: "library", 
    initialState: [],
    reducers: {
        addSong : (state, action) => {
            const alreadySong = state.some(
                song => song.id === action.payload.id
            ); 
            if(alreadySong){
                console.log("La musica ya existe en la biblioteca"); 
            } else{
                state.push(action.payload); 
            }  
        }, 
        removeSong : (state, action) => { 
            return state.filter(song => song.id !== action.payload); 
        }
    }
});

export const { addSong, removeSong } = librarySlice.actions; 
const { reducer: songsReducer } = librarySlice; 
export default songsReducer; 
