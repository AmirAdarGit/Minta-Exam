import { configureStore } from '@reduxjs/toolkit'
import { useCasesSlice } from './useCasesSlice'

export default configureStore({
  reducer: {
    useCases: useCasesSlice,
  },
})