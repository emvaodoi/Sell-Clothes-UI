import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <img
        src={process.env.PUBLIC_URL + "/assets/admin/img/icons/loadding.gif"}
        alt=""
      />
    </div>
  );
}

export default Loading;
