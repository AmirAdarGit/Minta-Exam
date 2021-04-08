import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import dispatch from "react-redux"
import  axios from 'axios' 


const campaignId = '606d6c938e429b001ed11bb6';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGQ2YWU1MWMwNzQ5ODRhYTdlYjEiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTU4NTc0NTI1OSwiZXhwIjoxNTg1ODMxNjU5fQ.S61K8RkHJ6qwxRjp9m2Pfvttd6hRBOyWRO3TimRkJA4'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export const galleryThunk  = createAsyncThunk(
  'videoGallery/galleryThunk',
  async () => {
    const { data }  = await axios.get(`https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignId}&offset=0&limit=6&applicationSource=web`)
  
    console.log(data);  
    return data;
  }
)


export const videoGallerySlice = createSlice({
    name: 'videoGallery',
    initialState: {
      title: 'New in',
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