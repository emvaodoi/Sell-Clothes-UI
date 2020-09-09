import React, { useState } from "react";
import "./TicketItem.css";
import Modal from "../../../../components/common/Modal/Modal";
import Backdrop from "../../../../components/common/backdrop/Backdrop";

function TicketItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const isClose = () => {
    setIsOpen(false);
  };

  const ticketStatus = (x) => {
    if (x === 0) {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-warning" />
          <span className="status">Chưa thanh toán</span>
        </span>
      );
    } else if (x === 1) {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-success" />
          <span className="status">Đã thanh toán</span>
        </span>
      );
    } else {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-danger" />
          <span className="status">Hủy đơn</span>
        </span>
      );
    }
  };

  const ticketStatusText = (x) => {
    if (x === 0) {
      return <span className="status">Chưa thanh toán</span>;
    } else if (x === 1) {
      return <span className="status">Đã thanh toán</span>;
    } else {
      return <span className="status">Hủy đơn</span>;
    }
  };

  const renderButton = (x) => {
    if (x === 1) {
      return (
        <div className="col-lg-6 col-5 text-center">
          <a
            href="#"
            onClick={() => setIsOpen(true)}
            className="btn btn-sm btn-primary"
          >
            Chi tiết
          </a>
          <a
            href="#"
            className="btn btn-sm btn-danger"
            onClick={() => props.handleDelete()}
          >
            Hủy đơn
          </a>
        </div>
      );
    } else if (x === 0) {
      return (
        <div className="col-lg-6 col-5 text-center">
          <a
            href="#"
            className="btn btn-sm btn-success"
            onClick={() => props.handleAccept()}
          >
            Xác nhận
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(true)}
            className="btn btn-sm btn-primary"
          >
            Chi tiết
          </a>
        </div>
      );
    } else {
      return (
        <div className="col-lg-6 col-5 text-center">
          <a
            href="#"
            onClick={() => setIsOpen(true)}
            className="btn btn-sm btn-primary"
          >
            Chi tiết
          </a>
        </div>
      );
    }
  };

  return (
    <tr className="ticketItem">
      <th scope="row">
        <div className="media align-items-center">
          <div className="media-body">
            <span className="name mb-0 text-sm">{props.ticketId}</span>
          </div>
        </div>
      </th>
      <td>{ticketStatus(props.status)}</td>
      <td>{props.producer}</td>
      <td>{props.date}</td>
      <td>{props.totalCosts}</td>
      <td>{renderButton(props.status)}</td>
      <td>
        {isOpen && (
          <Modal title="Chi tiết đơn nhập" isClose={isClose}>
            <div className="tiketDetail">
              <div className="row ">
                <div className="col">
                  <div className="card h-75">
                    <div className="table-responsive mt-0">
                      <table className="table align-items-center table-flush">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th scope="col" className="sort" data-sort="name">
                              Mã hàng
                            </th>
                            <th scope="col">Tên hàng</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Giá nhập</th>
                            <th scope="col">Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody className="list">
                          <tr>
                            <th scope="row">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <span className="name mb-0 text-sm">
                                    237UWAUX6ES
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td>
                              <span className="badge badge-dot">
                                <span className="status">
                                  Áo em không đồi quà
                                </span>
                              </span>
                            </td>
                            <td>11</td>
                            <td>200.000</td>
                            <td>200.000</td>
                            <td>
                              300.000
                              <i className="ni ni-check-bold pl-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <span className="name mb-0 text-sm">
                                    237UWAUX6ES
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td>
                              <span className="badge badge-dot">
                                <span className="status">
                                  Áo em không đồi quà
                                </span>
                              </span>
                            </td>
                            <td>11</td>
                            <td>200.000</td>
                            <td>200.000</td>
                            <td>
                              300.000
                              <i className="ni ni-check-bold pl-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <span className="name mb-0 text-sm">
                                    237UWAUX6ES
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td>
                              <span className="badge badge-dot">
                                <span className="status">
                                  Áo em không đồi quà
                                </span>
                              </span>
                            </td>
                            <td>11</td>
                            <td>200.000</td>
                            <td>200.000</td>
                            <td>
                              300.000
                              <i className="ni ni-check-bold pl-1"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dark table */}
            </div>
            <div className="row mt--5">
              <div className="mb-1 col-6">
                <strong className="text-dark">Mã đơn : </strong>
                {props.ticketId}
              </div>
              <div className="mb-1 col-sm-12 col-md-6 col-lg-6">
                <strong className="text-dark">Người tạo : </strong>
                {props.creator}
              </div>
              <div className="mb-1 col-6">
                <strong className="text-dark">Thời gian tạo : </strong>
                {props.date}
              </div>
              <div className="mb-1 col-sm-12 col-md-6 col-lg-6">
                <strong className="text-dark">Nhà cung cấp : </strong>
                {props.producer}
              </div>
              <div className="mb-1 col-6">
                <strong className="text-dark">Tổng số : </strong>
                {props.totalItems}
              </div>
              <div className="mb-1 col-sm-12 col-md-6 col-lg-6">
                <strong className="text-dark">Số mặt hàng : </strong>
                {props.typeItems}
              </div>
              <div className="mb-1 col-6">
                <strong className="text-dark">Tổng tiền hàng : </strong>
                {props.totalCosts} VNĐ
              </div>
              <div className="mb-1 col-sm-12 col-md-6 col-lg-6">
                <strong className="text-dark">Cần trả NCC : </strong>
                {props.payment} VNĐ
              </div>
              <div className="mb-1 col-sm-12 col-md-6 col-lg-6">
                <strong className="text-dark">Còn nợ NCC : </strong>
                {props.totalCosts - props.payment} VNĐ
              </div>
              <div className="mb-1 col-6">
                <strong className="text-dark">Trạng thái : </strong>
                {ticketStatusText(props.status)}
              </div>
              <div className="mb-1 col-sm-12 col-md-6 col-lg-6">
                <strong className="text-dark">Ghi chú : </strong>
                {props.description}
              </div>
            </div>
          </Modal>
        )}
        {isOpen && <Backdrop isClose={isClose} />}
      </td>
    </tr>
  );
}

export default TicketItem;
