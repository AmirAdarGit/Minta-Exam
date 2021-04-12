import React from "react";
import { Button } from "@material-ui/core";
import "../style/showMoreBtn.css";
function ShowMoreBtn() {
  const showMoreVideos = () => {
    console.log("here");
  };
  return (
    <footer className="show-more-btn">
      <Button onClick={showMoreVideos}>Show more</Button>
    </footer>
  );
}

export default ShowMoreBtn;
