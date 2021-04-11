import React from "react";
import "../style/gallery.css";

function Image(props) {
  return (
    <div className="gallery">
      <img src={props.image} width={226} height={228} />
    </div>
  );
}

export default Image;
