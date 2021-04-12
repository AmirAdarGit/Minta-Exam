import React from "react";
import UseCases from "../components/use-cases/UseCases.component";
import { Provider } from "react-redux";
import VideoGallery from "../components/video-galley/VideoGallery.component";
import store from "../redux/store";

function Mints() {
  return (
    <div>
      <Provider store={store}>
        <div className="mints">
          <UseCases />
          <VideoGallery />
        </div>
      </Provider>
    </div>
  );
}

export default Mints;
