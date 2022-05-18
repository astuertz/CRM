import { configureStore } from '@reduxjs/toolkit'
import reduxstyleSlice from '../features/reduxstyle/reduxstyleSlice';

export const store = configureStore({
  reducer: {
      style: reduxstyleSlice,
  },
})