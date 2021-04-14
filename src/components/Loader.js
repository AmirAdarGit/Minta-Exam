import React from "react";
import "./loader.css";
import { CircularProgress } from "@material-ui/core";
function Loader() {
  return (
    <div className="loader">
      <CircularProgress />
    </div>
  );
}

export default Loader;
