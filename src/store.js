import { configureStore } from '@reduxjs/toolkit'
import userSlice from './assets/features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})
