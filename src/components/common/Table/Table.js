import "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Table.css";
import {
  updateTicketItemCount,
  updateAll,
} from "../../../redux/actions/ticket";

export default function MaterialTableDemo(props) {
  const TicketItemState = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  const handleChangeCount = (i, obj) => {
    const action = updateTicketItemCount(i, obj);
    dispatch(action);
    dispatch(updateAll());
  };

  return (
    <div className="table-responsive dataTable">
      <table
        id="tableExamples"
        className="table align-items-center table-flush"
      >
        <thead className="thead-light">
          <tr>
            <th scope="col" className="sort" data-sort="name">
              Ảnh sản phẩm
            </th>
            <th scope="col" className="sort" data-sort="name">
              Mã sản phẩm
            </th>
            <th scope="col" className="sort" data-sort="status">
              Tên sản phẩm
            </th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá nhập</th>
            <th scope="col">Tổng tiền</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="list">
          {props.listItem.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="col" className="sort" data-sort="name">
                  <img
                    src={e.imgUrl}
                    style={{ width: 70, height: 70 }}
                    alt=""
                  />
                </th>
                <th scope="col" className="sort" data-sort="name">
                  {e.productId}
                </th>
                <th scope="col" className="sort" data-sort="status">
                  {e.productName}
                </th>
                <th scope="col">
                  <input
                    type="number"
                    min="1"
                    max="99999"
                    className="inputCount"
                    value={e.productCount}
                    required
                    onChange={(x) =>
                      handleChangeCount(i, {
                        ...e,
                        productCount: +x.target.value,
                        productTotal: e.productCost * x.target.value,
                      })
                    }
                  />
                </th>
                <th scope="col">{e.productCost}</th>
                <th scope="col">{e.productTotal}</th>
                <th scope="col">
                  <a
                    className="btn btn-sm btn-danger text-white"
                    onClick={() => props.deleteItem(i)}
                  >
                    Xóa
                  </a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
