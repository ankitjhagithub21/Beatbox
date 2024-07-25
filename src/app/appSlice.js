import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    currSong:null,
    searchTerm:"latest",
    songs:null
   
  },
  reducers: {
    
    setCurrSong: (state, action) => {
      state.currSong = action.payload
    },
   
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setSongs: (state, action) => {
      state.songs = action.payload
    },
   
  },
})


export const { setCurrSong,setSearchTerm,setSongs } = appSlice.actions

export default appSlice.reducer