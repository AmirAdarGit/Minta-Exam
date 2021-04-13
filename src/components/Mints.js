import React from "react";
import UseCases from "../components/use-cases/UseCases.component";
import { Provider } from "react-redux";
import VideoGallery from "../components/video-galley/VideoGallery.component";
import store from "../redux/store";
import "../style/mints.css";
function Mints() {
  return (
    <div className="full-height">
      <Provider store={store}>
        <div className="full-height">
          <UseCases />
          <VideoGallery />
        </div>
      </Provider>
    </div>
  );
}

export default Mints;
