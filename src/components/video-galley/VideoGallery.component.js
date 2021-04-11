import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../Image";
import { clickOnUseCase } from "../../actions/clickOnUsCase.thunk";
import { useState, useEffect } from "react";
import { fatchGalleryByCampainIdThunk } from "../../actions/clickOnUsCase.thunk";
import ColloredLine from "../ColoredLine";
import "./videoGallery.css";

function VideoGallery(props) {
  const videos = useSelector((state) => state.videoGallery.videos);
  const title = useSelector((state) => state.useCases.selectedUseCase);

  return (
    <div className="video-gallery">
      {/* <div className="upper-line" />
      <div className="title">{title ? `# ${title}` : ""}</div>
      <div className="lower-line" /> */}
      <div className="container">
        {videos.map((video, index) => (
          <div key={index} className="item">
            <Image image={video.previewImageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
