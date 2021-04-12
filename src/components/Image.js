import React from "react";
import "../style/gallery.css";
import VideoPlayer from "react-video-js-player";
function Image(props) {
  return (
    <div className="gallery">
      {console.log(props)}
      <VideoPlayer
        src={props.image.videoUrl}
        poster={props.image.previewImageUrl}
        width={226}
        height={282}
        // type="video/mp4"
      />
    </div>
  );
}

export default Image;
