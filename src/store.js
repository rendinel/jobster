import { configureStore } from '@reduxjs/toolkit'
import userSlice from './assets/features/user/userSlice'
import jobSlice from './assets/features/job/jobSlice'
import allJobsSlice from './assets/features/allJobs/allJobsSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
})
