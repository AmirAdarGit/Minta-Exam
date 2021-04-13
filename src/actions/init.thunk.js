import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { INIT } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { clickOnUseCase } from "../actions/clickOnUsCase.thunk";

export const init = createAsyncThunk(`${INIT}/init`, async () => {
  // let data = "";
  let selectedUseCaseByCampignId = "";

  const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN;
  axios.defaults.headers.common["Authorization"] = authToken;

  const { data: useCases } = await axios.get(
    "https://run.mocky.io/v3/c087effa-9307-414d-955d-417bf606760f"
  );

  var currentUrl = window.location.href;
  var slug = currentUrl.split("mints/")[1];
  console.log("The slug is: ", slug);
  console.log("The useCases are: ", useCases);

  if (slug != undefined) {
    useCases.map((useCase) => {
      if (useCase.slug === slug) {
        console.log("Slugs campaignId is: ", useCase.campaignId);
        selectedUseCaseByCampignId = useCase.campaignId;
      }
    });
    console.log("the current use case isL: ", selectedUseCaseByCampignId);
    var { data } = await axios.get(
      `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${selectedUseCaseByCampignId}&offset=0&limit=6&applicationSource=web`
    );
    console.log("fatch the videos: ", data);
  } else {
    const data = undefined;
  }

  return { useCases: useCases, videos: data };
});
