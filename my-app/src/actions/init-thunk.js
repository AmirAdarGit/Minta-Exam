import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios' 


export const initThunk  = createAsyncThunk(
    'useCases/initThunk',
    async () => {
      const { data }  = await axios.get('https://run.mocky.io/v3/c087effa-9307-414d-955d-417bf606760f');

        return data;
    }
  )  