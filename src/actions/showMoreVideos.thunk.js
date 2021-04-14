import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SHOW_MORE_VIDEOS } from "./actions";

const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN;

axios.defaults.headers.common["Authorization"] = authToken;

export const showMoreVideos = createAsyncThunk(
  `${SHOW_MORE_VIDEOS}/showMoreVideos`,

  async (_, getState) => {
    const state = getState.getState();
    const { selectedCampaignId } = state.useCases;
    const { count } = state.videoGallery;
    const { data } = await axios.get(
      `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${selectedCampaignId}&offset=${count}&limit=6&applicationSource=web`
    );

    console.log("6 more videos: ", data);
    return {
      videos: data.docs,
      count: count + 6,
    };
  }
);
