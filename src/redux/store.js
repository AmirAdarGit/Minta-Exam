import { configureStore } from "@reduxjs/toolkit";
import useCasesSlice from "./useCasesSlice";
import videoGallerySlice from "./videoGalerySlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const middlewares = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    useCases: useCasesSlice,
    videoGallery: videoGallerySlice,
  },
  // middlewares: {
  //   loadFromLocalStorage: loadFromLocalStorage,
  // },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

const loadFromLocalStorage = () => {
  try {
    if (localStorage[serializedData] === undefined) return undefined;
    const serializedData = localStorage.getItem("state");

    return JSON.stringify(serializedData);
  } catch (err) {
    console.log(err);
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem("state", serializedData);
  } catch (err) {
    console.log(err);
  }
};

export default store;
