import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const videoGallerySlice = createSlice({
    name: 'videoGallery',
    initialState: {
      videoGallery: [],
      status: null,
    },
    
  })
  
  
  export default videoGallerySlice.reducer