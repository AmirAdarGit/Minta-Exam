import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CLICK_ON_USE_CASE } from "./actions";

console.log(process.env.REACT_APP_MINTA_AUTH_TOKEN);
const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN;

axios.defaults.headers.common["Authorization"] = authToken;

export const clickOnUseCase = createAsyncThunk(
  `${CLICK_ON_USE_CASE}/clickOnUseCase`,
  async (useCase) => {
    const { data } = await axios.get(
      `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${useCase.campaignId}&offset=0&limit=6&applicationSource=web`
    );

    window.history.replaceState({}, "", `/minta/${useCase.slug}`);

    return {
      videos: data.docs,
      selectedUseCaseName: useCase.name,
      campaignId: useCase.campaignId,
    };
  }
);
