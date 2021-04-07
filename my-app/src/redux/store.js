import { configureStore } from '@reduxjs/toolkit'
import { useCasesSlice } from './useCasesSlice'
import { videoGalerySlice } from './videoGalerySlice'

export default configureStore({
  reducer: {
    useCases: useCasesSlice,
    videoGalery: videoGalerySlice,

  },
})