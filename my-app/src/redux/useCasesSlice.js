import  { initThunk }   from '../actions/init-thunk'
import { createSlice } from '@reduxjs/toolkit'
import  useCaseObj  from '../models/useCaseObj'






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
        
        const response = [];
        for (var i = 0; i < payload.length; i++) {
          response.push(new useCaseObj(payload[i].name, payload[i].slug, payload[i].campaignId))
        }
        console.log(response);
        
        state.useCases = response;
        state.selectedUseCase = response[0].name;
        state.status = 'success' 
      },
      [initThunk.rejected]: (state) => {
        state.status = 'failed' 
      }
    }
  })
  
  export default useCasesSlice.reducer