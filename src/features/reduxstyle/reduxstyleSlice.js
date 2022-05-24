import { createSlice } from '@reduxjs/toolkit'

export const reduxstyleSlice = createSlice({
  name: 'style',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode
  },
}
})

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = reduxstyleSlice.actions;

export default reduxstyleSlice.reducer;