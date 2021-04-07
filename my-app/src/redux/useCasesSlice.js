import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios' 

export const getUseCases  = createAsyncThunk(
  'useCase/getUseCases',
  async () => {
    return axios.get('https://run.mocky.io/v3/c087effa-9307-414d-955d-417bf606760f')
      .then((res) => res.json())
  }
) 

export const useCasesSlice = createSlice({
    name: 'useCases',
    initialState: {
      useCases: [{
        "_id": "5e80a67fa39b65001fafd0f4",
        "name": "New in",
        "slug": "new-in",
        "behavior": "NEW_ARRIVAL",
        "description": "Stunning product video ads, automatically created based on products you uploaded to your store in the past 30 days. We've placed your product images in pre-built, proven templates so you can increase sales without any effort.",
        "isEnabled": true,
        "createdAt": "2020-03-29T13:45:35.402Z",
        "updatedAt": "2020-07-14T07:07:07.260Z",
        "__v": 0,
        "order": 0,
        "campaignId": "606d6c938e429b001ed11bb6"
      },
      {
        "_id": "5e80a6d9a39b65001fafd0f5",
        "name": "Best seller",
        "slug": "best-sellers",
        "behavior": "BEST_SELLERS",
        "description": "Smashing product video ads, automatically created based on your most sold products in the past 30 days. We've placed your product images in pre-built, proven templates so you can increase sales without any effort. ",
        "isEnabled": true,
        "createdAt": "2020-03-29T13:47:05.392Z",
        "updatedAt": "2020-07-23T14:49:09.878Z",
        "__v": 0,
        "order": 2,
        "campaignId": "606d6c558e429b001ed11bb5"
      }],
      status: null,
      selectedUseCase: ''
    },
    extraReducers: {
      [getUseCases.pending]: (state) => {
        state.status = 'loading' 
      },
      [getUseCases.fulfilled]: (state, { payload }) => {
        state.useCases = payload
        state.status = 'success' 
      },
      [getUseCases.rejected]: (state) => {
        state.status = 'failed' 
      }
    }
  })
  
  
  export default useCasesSlice.reducer