import React from "react";
import "../style/gallery.css";
import VideoPlayer from "react-video-js-player";
import { ReactVideo } from "reactjs-media";

function Image(props) {
  return (
    <div className="gallery">
      <ReactVideo
        src={props.image.videoUrl}
        poster={props.image.previewImageUrl}
        fluid={false}
        width={226}
        height={282}
      />
    </div>
  );
}

export default Image;
