import { configureStore } from "@reduxjs/toolkit";
import useCasesSlice from "./useCasesSlice";
import videoGallerySlice from "./videoGalerySlice";

const store = configureStore({
  reducer: {
    useCases: useCasesSlice,
    videoGallery: videoGallerySlice,
  },
});

export default store;
