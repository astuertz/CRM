import { createSlice } from '@reduxjs/toolkit'

export const reduxstyleSlice = createSlice({
  name: 'style',
  initialState: {
    darkMode: false,
  },
  reducers: {
    initDarkMode: state => {
      state.darkMode = true
    },
    terminateDarkMode: state => {
      state.darkMode = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { initDarkMode, terminateDarkMode } = reduxstyleSlice.actions;

export default reduxstyleSlice.reducer;