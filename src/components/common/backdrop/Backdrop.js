import React from "react";
import "./Backdrop.css";

function backdrop(props) {
  return <div className="backdropTheme" onClick={() => props.isClose()}></div>;
}

export default backdrop;
