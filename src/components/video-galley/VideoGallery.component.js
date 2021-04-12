import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../Image";
import { clickOnUseCase } from "../../actions/clickOnUsCase.thunk";
import { useState, useEffect } from "react";
import { fatchGalleryByCampainIdThunk } from "../../actions/clickOnUsCase.thunk";
import ColloredLine from "../ColoredLine";
import "./videoGallery.css";
import { func } from "prop-types";

function VideoGallery(props) {
  const videos = useSelector((state) => state.videoGallery.videos);
  const title = useSelector((state) => state.useCases.selectedUseCase);

  return (
    <div className="video-gallery">
      {title && <div className="title-video-gallery">#{title}</div>}

      <div className="container">
        {videos.map((video, index) => (
          <div key={index} className="item">
            {console.log(video)}
            <Image image={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
