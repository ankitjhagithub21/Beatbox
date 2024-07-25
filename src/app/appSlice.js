import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    currSong:null,
    searchTerm:"latest",
   
  },
  reducers: {
    
    setCurrSong: (state, action) => {
      state.currSong = action.payload
    },
   
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
   
  },
})


export const { setCurrSong,setSearchTerm } = appSlice.actions

export default appSlice.reducer