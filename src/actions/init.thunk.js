import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INIT } from "./actions";

export const init = createAsyncThunk(`${INIT}/init`, async () => {
  const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN;
  axios.defaults.headers.common["Authorization"] = authToken;

  const { data: useCases } = await axios.get(
    "https://run.mocky.io/v3/c087effa-9307-414d-955d-417bf606760f"
  );

  let currentUrl = window.location.href;
  let slug = currentUrl.split("mints/")[1];
  if (!slug) {
    return { useCases: useCases, videos: [] };
  }

  const selectedUseCaseByCampignId = useCases.find(
    (useCase) => useCase.slug === slug
  );
  if (!selectedUseCaseByCampignId) {
    return { useCases, videos: [], selectedUseCaseName: "", totalDocs: [] };
  }

  const selectedUseCaseName = selectedUseCaseByCampignId.name;
  try {
    let { data } = await axios.get(
      `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${selectedUseCaseByCampignId.campaignId}&offset=0&limit=6&applicationSource=web`
    );
    const totalDocs = data.totalDocs;
    const videos = data.docs;

    return { useCases, videos, selectedUseCaseName, totalDocs };
  } catch (err) {
    return { useCases, videos: [], selectedUseCaseName, totalDocs: [] };
  }
});
