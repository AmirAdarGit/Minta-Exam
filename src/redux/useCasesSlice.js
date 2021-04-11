import { init } from "../actions/init.thunk";
import { createSlice } from "@reduxjs/toolkit";
import { clickOnUseCase } from "../actions/clickOnUsCase.thunk";
import { LOADING } from "../consts";

export const useCasesSlice = createSlice({
  name: "useCases",
  initialState: {
    useCases: [
      // {
      //   name: "",
      //   slug: "",
      //   campaignId: "123",
      // },
    ],
    status: null,
    selectedUseCase: "", //TODO: change to selectedUSeCaseName
    selectedCampaignId: "",
  },
  extraReducers: {
    [clickOnUseCase.fulfilled]: (state, { payload }) => {
      state.selectedCampaignId = payload.campaignId;
      state.selectedUseCase = payload.selectedUseCaseName;
      state.status = "success";
    },
    [clickOnUseCase.pending]: (state) => {
      state.status = LOADING;
    },

    [init.pending]: (state) => {
      state.status = LOADING;
    },
    [init.fulfilled]: (state, { payload }) => {
      if (!payload.useCases) {
        return;
      }

      const useCases = payload.useCases.map((useCase) => {
        return {
          name: useCase.name,
          slug: useCase.slug,
          campaignId: useCase.campaignId,
        };
      });

      state.useCases = useCases;
      state.status = "success";
    },
    [init.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { changeUseCase, changeCampaignId } = useCasesSlice.actions;
export default useCasesSlice.reducer;
