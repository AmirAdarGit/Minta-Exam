import { configureStore } from '@reduxjs/toolkit'
import  useCasesSlice  from './useCasesSlice'
import  videoGallerySlice  from './videoGalerySlice'

export default configureStore({
  reducer: {
    useCases: useCasesSlice,
    videoGalery: videoGallerySlice,

  },
})