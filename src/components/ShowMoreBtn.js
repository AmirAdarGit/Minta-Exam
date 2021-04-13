import React, { useState, useEffect } from "react";

import { Button } from "@material-ui/core";
import "../style/showMoreBtn.css";
import { useDispatch, useSelector } from "react-redux";
import { showMoreVideos } from "../actions/showMoreVideos.thunk";

function ShowMoreBtn() {
  const [counter, setCounter] = useState(6);

  const videosCampaignId = useSelector(
    (state) => state.useCases.selectedCampaignId
  );

  const dispatch = useDispatch();

  const showMoreBtn = () => {
    setCounter(counter + 6);
    dispatch(
      showMoreVideos({ videosCampaignId: videosCampaignId, counter: counter })
    );
  };
  return (
    <footer className="show-more-btn">
      <Button onClick={showMoreBtn}>Show more</Button>
    </footer>
  );
}

export default ShowMoreBtn;
