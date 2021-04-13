import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Image from "../Image";
import "./videoGallery.css";
import ShowMoreBtn from "../ShowMoreBtn";

function VideoGallery() {
  const title = useSelector((state) => state.useCases.selectedUseCaseName);
  let videos = useSelector((state) => state.videoGallery.videos);

  useEffect(() => {
    console.log("ok");
    console.log("The videos are: ", videos);
  }, [videos]);

  return (
    <div className="video-gallery">
      {title && <div className="title-video-gallery">#{title}</div>}

      <div className="container">
        {videos.map((video, index) => (
          <div key={index} className="item">
            <Image image={video} />
          </div>
        ))}
      </div>
      {title && <ShowMoreBtn />}
    </div>
  );
}

export default VideoGallery;
