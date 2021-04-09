import { createSlice } from '@reduxjs/toolkit'
import { galleryThunk } from '../actions/gallery-thunk'

export const videoGallerySlice = createSlice({
    name: 'CLICK_ON_USE_CASE',
    initialState: {
      title: '',
      previewImages: [],
      status: null,
    },    
    
    extraReducers: {
      [galleryThunk.pending]: (state) => {
        state.status = 'loading' 
      },
      [galleryThunk.fulfilled]: (state, { payload }) => {
        
        // const response = [];
        // for (var i = 0; i < payload.length; i++) {
        //   response.push(new useCaseObj(payload[i].name, payload[i].slug, payload[i].campaignId))
        // }
        
        state.previewImages = payload;
        state.status = 'success' 
      },
      [galleryThunk.rejected]: (state) => {
        state.status = 'failed' 
      }
    }

    
  })
  
  
  export default videoGallerySlice.reducer