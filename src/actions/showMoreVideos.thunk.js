import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SHOW_MORE_VIDEOS } from "./actions";

const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN;

axios.defaults.headers.common["Authorization"] = authToken;

export const showMoreVideos = createAsyncThunk(
  `${SHOW_MORE_VIDEOS}/showMoreVideos`,
  async (params) => {
    const { data } = await axios.get(
      `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${params.videosCampaignId}&offset=${params.counter}&limit=6&applicationSource=web`
    );

    console.log("6 more videos: ", data);
    return {
      videos: data.docs,
    };
  }
);
