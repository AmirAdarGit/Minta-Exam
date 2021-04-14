import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { clickOnShowMore } from "../../actions/clickOnShowMore.thunk";

import Image from "../Image";
import "./videoGallery.css";

function VideoGallery() {
  const title = useSelector((state) => state.useCases.selectedUseCaseName);
  let videoGallery = useSelector((state) => state.videoGallery);

  useEffect(() => {
    console.log("ok");
    console.log("The videos are: ", videoGallery);
  }, [videoGallery]);

  const dispatch = useDispatch();

  const showMoreBtn = () => {
    dispatch(clickOnShowMore());
  };

  return (
    <div className="video-gallery">
      {title && <div className="title-video-gallery">#{title}</div>}

      <div className="container">
        {videoGallery.videos.map((video, index) => (
          <div key={index} className="item">
            <Image image={video} />
          </div>
        ))}
      </div>
      {videoGallery.shouldShowShowMoreButton && (
        <Button className="show-more-btn" onClick={showMoreBtn}>
          Show more
        </Button>
      )}
    </div>
  );
}

export default VideoGallery;
