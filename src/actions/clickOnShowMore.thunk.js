import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CLICK_ON_SHOW_MORE } from "./actions";

const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN;

axios.defaults.headers.common["Authorization"] = authToken;

export const clickOnShowMore = createAsyncThunk(
  `${CLICK_ON_SHOW_MORE}/clickOnShowMore`,

  async (_, getState) => {
    const state = getState.getState();
    const { selectedCampaignId } = state.useCases;
    const { count } = state.videoGallery;
    const { data } = await axios.get(
      `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${selectedCampaignId}&offset=${count}&limit=6&applicationSource=web`
    );
    const totalDocs = data.totalDocs;

    console.log("6 more videos: ", data);
    return {
      videos: data.docs,
      count: count + 6,
      totalDocs: totalDocs,
    };
  }
);
