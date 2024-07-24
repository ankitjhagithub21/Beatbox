import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    currSrc:""
  },
  reducers: {
    
    setCurrSrc: (state, action) => {
      state.currSrc = action.payload
    },
  },
})


export const { setCurrSrc } = appSlice.actions

export default appSlice.reducer