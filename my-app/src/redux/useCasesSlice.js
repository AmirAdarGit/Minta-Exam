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
      useCases: [],
      status: null,
      selectedCampareId: ''
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