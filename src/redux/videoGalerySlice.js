import { createSlice } from "@reduxjs/toolkit";
import { showMoreVideos } from "../actions/showMoreVideos.thunk";
import { clickOnUseCase } from "../actions/clickOnUsCase.thunk";

import { init } from "../actions/init.thunk";
import { LOADING } from "../consts";

export const videoGallerySlice = createSlice({
  name: "videoGallery",
  initialState: {
    videos: [],
    status: null,
  },
  extraReducers: {
    [showMoreVideos.pending]: (state) => {
      state.status = LOADING;
    },

    [showMoreVideos.fulfilled]: (state, { payload }) => {
      console.log("the payload is", payload);
      const videos = payload.videos.map((video) => {
        console.log("prevImage:", video.videos[0].previewImages[0].links.url);
        console.log("videoUrl", video.videos[0].url);
        state.videos.push({
          previewImageUrl: video.videos[0].previewImages[0].links.url,
          videoUrl: video.videos[0].url,
        });
      });
      state.status = "success";
    },

    [showMoreVideos.rejected]: (state) => {
      state.status = "failed";
    },

    [clickOnUseCase.pending]: (state) => {
      state.status = LOADING;
    },

    [clickOnUseCase.fulfilled]: (state, { payload }) => {
      console.log("catchhhh", payload);
      const videos = payload.videos.map((video) => {
        return {
          previewImageUrl: video.videos[0].previewImages[0].links.url,
          videoUrl: video.videos[0].url,
        };
      });
      state.videos = videos;
      state.status = "success";
    },
    [clickOnUseCase.rejected]: (state) => {
      state.status = "failed";
    },

    [init.fulfilled]: (state, { payload }) => {
      if (payload.videos === undefined) {
        return;
      }
      const previoseVideos = payload.videos.docs.map((video) => {
        return {
          previewImageUrl: video.videos[0].previewImages[0].links.url,
          videoUrl: video.videos[0].url,
        };
      });
      state.videos = previoseVideos;
      state.status = "success";
    },
  },
});

export default videoGallerySlice.reducer;
