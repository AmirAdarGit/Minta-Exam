import React from "react";
import { useDispatch, useSelector, useEffect } from "react-redux";
import Image from "../Image";
import "./videoGallery.css";
import ShowMoreBtn from "../ShowMoreBtn";

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
        {title && <ShowMoreBtn />}
      </div>
    </div>
  );
}

export default VideoGallery;
