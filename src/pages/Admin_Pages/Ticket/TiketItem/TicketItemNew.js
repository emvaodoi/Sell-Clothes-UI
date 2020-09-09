import React, { useState } from "react";
import "./TicketItem.css";
import Modal from "../../../../components/common/Modal/Modal";
import Backdrop from "../../../../components/common/backdrop/Backdrop";
import ModalNew from "../../../../components/common/Modal/ModalNew";

function TicketItemNew() {
  const [isOpen, setIsOpen] = useState(false);
  const isClose = () => {
    setIsOpen(false);
  };
  return (
    <tr className="ticketItem">
      <th scope="row">
        <div className="media align-items-center">
          <div className="media-body">
            <span className="name mb-0 text-sm">237UWAUX6ES</span>
          </div>
        </div>
      </th>
      <td>
        <span className="badge badge-dot mr-4">
          <i className="bg-success" />
          <span className="status">active</span>
        </span>
      </td>
      <td>Thông báo kế hoạch dự trù sản phẩm</td>
      <td>
        Đây là đài tiếng nói việt nam, phát thanh từ thủ phủ nước cộng hòa xã
        hội Việt Nam
      </td>
      <td>12:20:00 29/08/2020</td>
      <td>
        <div className="col-lg-6 col-5 text-center">
          <a href="#" className="btn btn-sm btn-success">
            Accept
          </a>
          <a href="#" className="btn btn-sm btn-danger">
            Refuse
          </a>
          <a
            href="#"
            class="btn btn-sm btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            View
          </a>
        </div>
      </td>
      <td>
        <ModalNew >h12h32</ModalNew>
      </td>
    </tr>
  );
}

export default TicketItemNew;
