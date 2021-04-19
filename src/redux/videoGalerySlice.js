import { createSlice } from "@reduxjs/toolkit";
import { clickOnShowMore } from "../actions/clickOnShowMore.thunk";
import { clickOnUseCase } from "../actions/clickOnUsCase.thunk";

import { init } from "../actions/init.thunk";
import { LOADING } from "../consts";

export const videoGallerySlice = createSlice({
  name: "videoGallery",
  initialState: {
    videos: [],
    status: null,
    count: 6,
    shouldShowShowMoreButton: false,
  },
  extraReducers: {
    [clickOnShowMore.pending]: (state) => {
      state.status = LOADING;
    },

    [clickOnShowMore.fulfilled]: (state, { payload }) => {
      payload.videos.map((video) => {
        state.videos.push({
          previewImageUrl: video.videos[0].previewImages[0].links.url,
          videoUrl: video.videos[0].url,
        });
      });
      state.count = payload.count;
      state.shouldShowShowMoreButton = payload.totalDocs > state.count;
      state.status = "success";
    },

    [clickOnShowMore.rejected]: (state) => {
      state.status = "failed";
    },

    [clickOnUseCase.pending]: (state) => {
      state.status = LOADING;
    },

    [clickOnUseCase.fulfilled]: (state, { payload }) => {
      const videos = payload.videos.map((video) => {
        return {
          previewImageUrl: video.videos[0].previewImages[0].links.url,
          videoUrl: video.videos[0].url,
        };
      });
      state.shouldShowShowMoreButton = payload.totalDocs > state.count;
      state.count = payload.count;
      state.videos = videos;
      state.status = "success";
    },

    [clickOnUseCase.rejected]: (state) => {
      state.status = "failed";
    },

    [init.fulfilled]: (state, { payload }) => {
      if (payload.videos.length == 0) {
        return;
      }
      const videos = payload.videos.map((video) => {
        return {
          previewImageUrl: video.videos[0].previewImages[0].links.url,
          videoUrl: video.videos[0].url,
        };
      });

      state.shouldShowShowMoreButton = payload.totalDocs > state.count;
      state.videos = videos;
      state.status = "success";
    },
  },
  reducers: {},
});
export const { increment } = videoGallerySlice.actions;

export default videoGallerySlice.reducer;
