import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./showMoreBtn.css";
import { useDispatch, useSelector } from "react-redux";
import { showMoreVideos } from "../actions/showMoreVideos.thunk";
import { increment } from "../redux/videoGalerySlice";

function ShowMoreBtn() {
  const dispatch = useDispatch();

  const showMoreBtn = () => {
    dispatch(showMoreVideos());
  };

  return (
    <div className="show-more-btn">
      <Button onClick={showMoreBtn}>Show more</Button>
    </div>
  );
}

export default ShowMoreBtn;
