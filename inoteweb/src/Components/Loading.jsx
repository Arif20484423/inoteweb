import React from "react";
import spinner from "./spinner.gif";
import "./styles.css";
const Loading = () => {
  return (
    <div className="loaderContainer">
      <img src={spinner} alt="Loader" width={40} />
    </div>
  );
};

export default Loading;
