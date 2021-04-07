import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const videoGallerySlice = createSlice({
    name: 'videoGallery',
    initialState: {
      videos: [],
      status: null,
    },
    
  })
  
  
  export default videoGallerySlice.reducer