import React from "react";
import "./Loader.scss"
import spinner from "../../assets/spinner.gif";

const Loader = () => {
  return (
    <div>
      <div className="spinner">
        <img src={spinner} alt="" />
        <div className="spinner_layer"></div>
      </div>
    </div>
  );
};

export default Loader;
