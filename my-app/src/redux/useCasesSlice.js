// import  { initThunk }  from '../actions/init-thunk'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios' 

export const initThunk  = createAsyncThunk(
  'useCases/initThunk',
  async () => {
    const { data }  = await axios.get('https://run.mocky.io/v3/c087effa-9307-414d-955d-417bf606760f');
    console.log("here");
    console.log(data);
      return data;
  }
)  

export const useCasesSlice = createSlice({
    name: 'useCases',
    initialState: {
      useCases: [],
      status: null,
      selectedUseCase: ''
    },

    extraReducers: {
      [initThunk.pending]: (state) => {
        state.status = 'loading' 
      },
      [initThunk.fulfilled]: (state, { payload }) => {
        state.useCases = payload
        state.status = 'success' 
      },
      [initThunk.rejected]: (state) => {
        state.status = 'failed' 
      }
    }
  })
  
  export default useCasesSlice.reducer