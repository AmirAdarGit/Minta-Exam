import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { INIT } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { clickOnUseCase } from "../actions/clickOnUsCase.thunk";

export const init = createAsyncThunk(`${INIT}/init`, async () => {
  const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN;
  axios.defaults.headers.common["Authorization"] = authToken;

  const { data: useCases } = await axios.get(
    "https://run.mocky.io/v3/c087effa-9307-414d-955d-417bf606760f"
  );

  var currentUrl = window.location.href;
  var slug = currentUrl.split("mints/")[1];

  if (!slug) {
    return { useCases: useCases, videos: [] };
  }

  const selectedUseCaseByCampignId = useCases.find(
    (useCase) => useCase.slug === slug
  );

  var videos = [];
  try {
    var { data } = await axios.get(
      `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${selectedUseCaseByCampignId.campaignId}&offset=0&limit=6&applicationSource=web`
    );

    videos.push(...data.docs);
  } catch (err) {
    console.log(
      "failed fetching videos for campaignId: ",
      selectedUseCaseByCampignId
    );
  }

  return { useCases, videos };
});
