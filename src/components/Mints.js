import React from "react";
import UseCases from "../components/use-cases/UseCases.component";
import { Provider } from "react-redux";
import VideoGallery from "../components/video-galley/VideoGallery.component";
import store from "../redux/store";
import "./mints.css";
function Mints() {
  return (
    <div className="full-height">
      <Provider store={store}>
        <div className="use-cases-and-video-gallery">
          <UseCases />
          <VideoGallery />
        </div>
      </Provider>
    </div>
  );
}

export default Mints;
