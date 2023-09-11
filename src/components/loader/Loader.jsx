import React from "react";
import "./Loader.scss"
import spinner from "../../assets/spinner.gif";
import {ColorRing} from "react-loader-spinner"

const Loader = () => {
  return (
    <div>
      <div className="spinner">
        <div className="img">
          <ColorRing/>
        </div>
        <div className="spinner_layer"></div>
      </div>
    </div>
  );
};

export default Loader;
