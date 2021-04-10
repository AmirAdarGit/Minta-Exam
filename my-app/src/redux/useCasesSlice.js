import  { init }   from '../actions/init.thunk'
import { createSlice } from '@reduxjs/toolkit'


export const useCasesSlice = createSlice({
    name: 'useCases',
    initialState: {
      useCases: [],
      status: null,
      selectedUseCase: '',
      selectedCampaignId: '',
    },
    extraReducers: {
      [init.pending]: (state) => {
        state.status = 'loading' 
      },
      [init.fulfilled]: (state, { payload }) => {
        if (!payload.useCases) {
          return
        }

        const useCases = payload.useCases.map(useCase => {
           return { name: useCase.name, slug: useCase.slug, campaignId: useCase.campaignId } 
        });
        
        state.useCases = useCases;

        if (useCases && useCases.length > 0) {
          state.selectedUseCase = useCases[0].name;
        }

        state.status = 'success' 
      },
      [init.rejected]: (state) => {
        state.status = 'failed' 
      }
    },
    
  })
  
  export const { changeUseCase, changeCampaignId } = useCasesSlice.actions
  export default useCasesSlice.reducer