import { configureStore } from '@reduxjs/toolkit'
import  useCasesSlice  from './useCasesSlice'
import  videoGallerySlice  from './videoGalerySlice'
import  { INIT, CLICK_ON_USE_CASE }  from "../actions/actions"

export default configureStore({
  reducer: {
    INIT: useCasesSlice,
    CLICK_ON_USE_CASE: videoGallerySlice,

  },
})