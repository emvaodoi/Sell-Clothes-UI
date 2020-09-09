import React from "react";
import "./Modal.css";
import { Button } from "@material-ui/core";
function Modal(props) {
  return (
    <div className="modalAlert">
      <div className="modal__top">{props.title}</div>
      <div className="modal__body">{props.children}</div>
      <div className="modal__bottom">
        <Button
          variant="outlined"
          color="primary"
          className="mr-1"
        >
          Cập nhập
        </Button>
        <Button
          onClick={() => props.isClose()}
          variant="outlined"
          color="primary"
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default Modal;
