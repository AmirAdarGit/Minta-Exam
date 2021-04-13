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
    count: 0,
  },
  extraReducers: {
    [showMoreVideos.pending]: (state) => {
      state.status = LOADING;
    },

    [showMoreVideos.fulfilled]: (state, { payload }) => {
      payload.videos.map((video) => {
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
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 6;
    },
  },
});
export const { increment } = videoGallerySlice.actions;

export default videoGallerySlice.reducer;
