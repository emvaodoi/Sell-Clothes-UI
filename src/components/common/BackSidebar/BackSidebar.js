import React from "react";
function BackSidebar() {
  return (
    <div className="nav-item d-xl-none ml-2 pd-2">
      <div
        className="pr-3 sidenav-toggler sidenav-toggler-dark active"
        data-action="sidenav-pin"
        data-target="#sidenav-main"
      >
        <div className="sidenav-toggler-inner" style={{ marginTop: "-16px" }}>
          <i
            className="ni ni-bold-left text-default"
            style={{
              display: "block",
              position: "relative",
              top: "52px",
              fontSize: "20px",
              marginLeft: "15px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BackSidebar;
