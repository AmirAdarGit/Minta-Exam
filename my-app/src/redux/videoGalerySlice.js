import { createSlice } from '@reduxjs/toolkit'
import { clickOnUseCase } from '../actions/clickOnUsCase.thunk'

export const videoGallerySlice = createSlice({
    name: 'videoGallery',
    initialState: {
      videos: [],
      status: null,
    },    
    extraReducers: {
      [clickOnUseCase.pending]: (state) => {
        state.status = 'loading' 
      },
      [clickOnUseCase.fulfilled]: (state, { payload }) => {
        const videos = payload.videos.map(video => {
          return { 
            previewImageUrl: video.videos[0].previewImages[0].links.url,
            videoUrl: video.videos[0].url
          }
        })
        state.videos = videos;
        state.status = 'success' 
      },
      [clickOnUseCase.rejected]: (state) => {
        state.status = 'failed' 
      }
    }
  })
  
  export default videoGallerySlice.reducer