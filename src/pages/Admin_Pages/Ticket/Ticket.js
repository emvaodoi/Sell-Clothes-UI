import { Button } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import Footer from "../../../components/admin/Footer/Footer";
import Header from "../../../components/admin/Header/Header";
import Sidebar from "../../../components/admin/SideBar/Sidebar";
import Table from "../../../components/common/Table/Table";
import "./Ticket.css";
import TicketItem from "./TiketItem/TicketItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addTicketItem,
  deleteTicketItem,
  updateAll,
  getAllTicketItems,
} from "../../../redux/actions/ticket";

function Ticket() {
  const ticketItemsState = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  const [isSort, setIsSort] = useState(false);
  const [findItem, setFindItem] = useState("");
  const searchRef = useRef(null);
  const [data, setData] = useState([]);
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          productId: "NAM01",
          productName: "Áo em vào đời",
          productCost: 999,
          productCount: 1,
          productTotal: 999 * 1,
          inventory: 10,
          imgUrl: "https://www.balenciaga.com/66/12/12447355qa_12_a_d.jpg",
        },
        {
          productId: "NAM02",
          productName: "Quần đùi một ống",
          productCost: 999,
          productCount: 1,
          productTotal: 999 * 1,
          inventory: 99,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/2143/3217/products/500_3f527d72-404b-4db7-a96c-471d1f97256e.png?v=1595523310",
        },
        {
          productId: "NAM03",
          productName: "Áo nam xanh lá cây",
          productCost: 999,
          productCount: 1,
          productTotal: 999 * 1,
          inventory: 12,
          imgUrl:
            "https://brumano.b-cdn.net/wp-content/uploads/2018/12/Royal-Blue-Casual-Check-Shirt-1-min.jpg",
        },
        {
          productId: "NAM04",
          productName: "Áo em yêu đời",
          productCost: 999,
          productCount: 1,
          productTotal: 999 * 1,
          inventory: 1,
          imgUrl: "https://dotilo.com/image/catalog/coupon/aotron/den.jpg",
        },
      ];
      setData(data);
      setListItem(ticketItemsState.listItem);
    };

    fetchData();
  }, []);

  const addItem = (x) => {
    const action = addTicketItem(x);
    dispatch(action);
    dispatch(updateAll());
    setFindItem("");
  };

  const deleteItem = (x) => {
    const action = deleteTicketItem(x);
    dispatch(action);
    dispatch(updateAll());
    setFindItem("");
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setFindItem(value);

    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }

    searchRef.current = setTimeout(() => {
      // console.log(value);
    }, 300);
  };

  const SubmitTicketForm = async (e) => {
    e.preventDefault();
    swal("Đã tạo thành công ", {
      icon: "success",
    });
  };

  const handleAccept = async () => {
    swal("Đã xác nhận đơn thành công ", {
      icon: "success",
    });
  };

  const handleDelete = async () => {
    swal({
      title: "Bạn có chắc sẽ xóa ?",
      text: "Bản ghi sẽ bị xóa và không khôi phục lại được !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      buttons: {
        cancel: "Hủy",
        confirm: { text: "Đồng ý", className: "sweet-primary" },
      },
    }).then((willDelete) => {
      if (willDelete) {
        swal("Đã xóa thành công ", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Sidebar />
      <div className="main-content" id="panel">
        <Header />
        {/* {isLoad ? <Loading /> : <div></div>} */}

        <div className="header bg-primary pb-6">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-5">
                  <h6 className="h2 text-white d-inline-block mb-0">Ticket</h6>
                </div>
                <div className="col-lg-6 col-7 text-right">
                  <a
                    onClick={() => setIsSort(true)}
                    className="btn btn-sm btn-neutral"
                  >
                    Thêm
                  </a>
                  <a
                    onClick={() => setIsSort(false)}
                    className="btn btn-sm btn-neutral"
                  >
                    {/* <i className="ni ni-ungroup text-blue" /> */}
                    DS đơn nhập
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="container-fluid mt--6">
          <div
            className="row"
            style={{
              transition: "0.5s",
            }}
          >
            {!isSort ? (
              <div className={`col-12 ${isSort ? "order-2" : "order-1"} `}>
                <div className="row ">
                  <div className="col">
                    <div className="card">
                      {/* Card header */}
                      <div className="card-header border-0">
                        <h3 className="mb-0">Tickets</h3>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-8 pr-1">
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">
                                Tìm kiếm đơn nhập
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Nhập đơn hàng cần tìm"
                              />
                            </div>
                          </div>
                          <div className="col-4 ml-0 pl-0">
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect1">
                                Lựa chọn
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                autoFocus="1"
                              >
                                <option value="1">Mã + Tên đơn hàng</option>
                                <option>Nhà cung cấp</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Light table */}
                      <div className="table-responsive dataTable">
                        <table
                          id="tableExamples"
                          className="table align-items-center table-flush"
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className="sort" data-sort="name">
                                Mã đơn nhập
                              </th>
                              <th
                                scope="col"
                                className="sort"
                                data-sort="status"
                              >
                                Trạng thái
                              </th>
                              <th scope="col">Nhà cung cấp</th>
                              <th scope="col">Date</th>
                              <th scope="col">Cần trả NCC</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody className="list">
                            <TicketItem
                              handleAccept={handleAccept}
                              handleDelete={handleDelete}
                              ticketId="137UWAUX6ES"
                              creator="Trung Hiếu"
                              producer="Công ty một thành viên ABC"
                              date="12:20:00 29/08/2020"
                              totalItems="30"
                              typeItems="3"
                              totalCosts="300.000"
                              payment="300.000"
                              status={0}
                              description=""
                            />
                            <TicketItem
                              handleAccept={handleAccept}
                              handleDelete={handleDelete}
                              ticketId="42FSWAUX6ES"
                              creator="Trung Hiếu"
                              producer="Công ty một thành viên ABC"
                              date="12:20:00 29/08/2020"
                              totalItems="30"
                              typeItems="3"
                              totalCosts="300.000"
                              payment="300.000"
                              status={1}
                              description=""
                            />
                            <TicketItem
                              handleAccept={handleAccept}
                              handleDelete={handleDelete}
                              ticketId="237UWAUX6ES"
                              creator="Trung Hiếu"
                              producer="Công ty một thành viên ABC"
                              date="12:20:00 29/08/2020"
                              totalItems="30"
                              typeItems="3"
                              totalCosts="300.000"
                              payment="300.000"
                              status={2}
                              description="Không"
                            />
                          </tbody>
                        </table>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer py-4">
                        <nav aria-label="...">
                          <ul className="pagination justify-content-end mb-0">
                            <li className="page-item disabled">
                              <a className="page-link" tabIndex={-1}>
                                <i className="fas fa-angle-left" />
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link">1</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link">
                                <i className="fas fa-angle-right" />
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dark table */}
              </div>
            ) : (
              <div className={`col-12 ${isSort ? "order-2" : "order-1"} `}>
                <div className="row">
                  <div className="col">
                    <div className="card">
                      {/* Card header */}

                      <div className="card-body">
                        <form>
                          <h6 className="heading-small text-muted mb-4">
                            Tạo đơn nhập
                          </h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-sm-12 col-lg-6">
                                <div className="form-group">
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-username"
                                  >
                                    Tài khoản tạo
                                  </label>
                                  <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Username"
                                    defaultValue="Admin fake"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div className="col-sm-12 col-lg-6">
                                <div className="form-group">
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-last-name"
                                  >
                                    Mã đơn nhập
                                  </label>
                                  <input
                                    type="text"
                                    id="input-last-name"
                                    className="form-control"
                                    placeholder="Last name"
                                    defaultValue="31AC5A51"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-4" />
                          {/* Address */}
                          <h6 className="heading-small text-muted mb-4">
                            Chi tiết đơn nhập
                          </h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group position-relative">
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlInput1 font-weight-bold"
                                  >
                                    Tìm kiếm sản phẩm
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Nhập sản phẩm cần tìm"
                                    onChange={(e) => handleSearch(e)}
                                    value={findItem}
                                  />
                                  <div
                                    className={`position-absolute w-100 mt-1 listProduct ${
                                      findItem && "border border-light"
                                    } `}
                                    style={{ zIndex: 999 }}
                                  >
                                    {findItem !== "" &&
                                      data.map((e, i) => {
                                        return (
                                          <div className="productItem" key={i}>
                                            <div className="productLeft">
                                              <div className="productImage">
                                                <img src={e.imgUrl} alt="" />
                                              </div>
                                              <div className="productDetail">
                                                <div className="product__top">
                                                  {e.productName}
                                                </div>
                                                <div className="product__body">
                                                  <div>
                                                    Mã sp: {e.productId}
                                                  </div>
                                                  <div>
                                                    Giá: {e.productCost}
                                                  </div>
                                                </div>
                                                <div className="product__bottom">
                                                  Trong kho: {e.inventory}
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="productRight"
                                              onClick={() => addItem(e)}
                                            >
                                              +
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                {/* Table */}
                                <Table
                                  listItem={listItem}
                                  deleteItem={deleteItem}
                                />
                              </div>
                            </div>
                            {ticketItemsState.listItem.length === 0 && (
                              <div className="inputExcel">
                                <div>
                                  <label
                                    className="inputExcel__label"
                                    htmlFor="upload-photo"
                                  >
                                    <span>
                                      Nhập đơn bằng Excel{" "}
                                      <i className="ni ni-active-40"></i>
                                    </span>
                                  </label>
                                  <input
                                    type="file"
                                    name="photo"
                                    id="upload-photo"
                                  />
                                </div>
                              </div>
                            )}
                            {ticketItemsState.listItem.length !== 0 && (
                              <div className="row mt-3 mt-1">
                                <div className="col-6 col-md-3 mt-1">
                                  <h4>Số lượng sản phẩm:</h4>
                                  {ticketItemsState.totalCount}
                                </div>
                                <div className="col-6 col-md-3 mt-1">
                                  <h4>Tiền cần trả:</h4>
                                  {ticketItemsState.totalCost}
                                </div>
                                <div className="col-6 col-md-3 mt-1">
                                  <h4>Nhà cung cấp:</h4>
                                  <select className="form-control form-control-sm">
                                    <option>Công ty cổ phần ABC</option>
                                    <option>Công ty Phương Anh</option>
                                  </select>
                                </div>
                                <div className="col-6 col-md-3 mt-1">
                                  <h4>Trạng thái đơn:</h4>
                                  <select className="form-control form-control-sm">
                                    <option>Thanh toán</option>
                                    <option>Chưa thanh toán</option>
                                  </select>
                                </div>
                                <div className="col-12 mt-4">
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                      <span className="bg-primary text-white p-2">
                                        Tiền trả nhà cung cấp
                                      </span>
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                      placeholder="Nhập số tiền thanh toán"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          <hr className="my-4" />
                          {/* Description */}
                          <h6 className="heading-small text-muted mb-4">
                            Ghi chú
                          </h6>
                          <div className="pl-lg-4">
                            <div className="form-group">
                              <textarea
                                rows={4}
                                className="form-control"
                                placeholder="Ghi thông tin quan trọng tại đây 😍"
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="secondary"
                              onClick={() => setIsSort(false)}
                              className="mr-2"
                            >
                              Hủy
                            </Button>
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={(e) => SubmitTicketForm(e)}
                            >
                              Tạo mới
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dark table */}
              </div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
