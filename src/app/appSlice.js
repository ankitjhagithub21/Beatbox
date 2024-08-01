import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    currSong:null,
    searchTerm:"latest",
    songs:null,
    songIndex:0,
    isOpen:false,
    pageNumber:1
   
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
    setSongIndex:(state,action)=>{
      state.songIndex = action.payload
    },
    setIsOpen:(state,action)=>{
      state.isOpen = action.payload
    },
    setPageNumber:(state,action)=>{
      state.pageNumber = action.payload
    }
   
  },
})


export const { setCurrSong,setSearchTerm,setSongs,setSongIndex,setIsOpen,setPageNumber } = appSlice.actions

export default appSlice.reducer