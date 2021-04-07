import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios' 

export const getUseCases  = createAsyncThunk(
  'useCase/getUseCases',
  async () => {
    return axios.get('https://run.mocky.io/v3/c087effa-9307-414d-955d-417bf606760f')
      .then((res) => res.json())
  }
) 

const useCasesSlice = createSlice({
    name: 'useCases',
    initialState: {
      list: [],
      status: null
    },
    extraReducers: {
      [getUseCases.pending]: (state) => {
        state.status = 'loading' 
      },
      [getUseCases.fulfilled]: (state, { payload }) => {
        state.list = payload
        state.status = 'success' 
      },
      [getUseCases.rejected]: (state) => {
        state.status = 'failed' 
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { getUseCases } = useCasesSlice.actions
  
  export default useCasesSlice.reducer