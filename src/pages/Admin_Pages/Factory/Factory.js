import React from "react";
import Sidebar from "../../../components/admin/SideBar/Sidebar";
import Header from "../../../components/admin/Header/Header";
import Footer from "../../../components/admin/Footer/Footer";

function Factory() {
  return (
    <div>
      <Sidebar />
      <div className="main-content" id="panel">
        <Header />
        <div className="header bg-primary pb-6">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-7">
                  <h6 className="h2 text-white d-inline-block mb-0">Factory</h6>
                  <nav
                    aria-label="breadcrumb"
                    className="d-none d-md-inline-block ml-md-4"
                  >
                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="fas fa-home" />
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Maps</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Google maps
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-lg-6 col-5 text-right">
                  <a href="#" className="btn btn-sm btn-neutral">
                    New
                  </a>
                  <a href="#" className="btn btn-sm btn-neutral">
                    Filters
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                {/* Card header */}
                <div className="card-header border-0">
                  <h3 className="mb-0">Hãng sản xuất</h3>
                </div>
                {/* Light table */}
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="sort" data-sort="name">
                          Project
                        </th>
                        <th scope="col" className="sort" data-sort="status">
                          Status
                        </th>
                        <th scope="col">Total</th>
                        <th scope="col" className="sort" data-sort="completion">
                          Sell / All
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody className="list">
                      {/* Start Item */}
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="https://4.bp.blogspot.com/-hNWloSfQzmQ/UnkRCf8YRoI/AAAAAAAAATc/Ajz-HHPO8O0/s1600/logo-converse-giaychinhhang.com.jpg
                                "
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Converse
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success" />
                            <span className="status">active</span>
                          </span>
                        </td>
                        <td>12</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">60%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "60%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="col-lg-6 col-5 text-center">
                            <a href="#" className="btn btn-sm btn-success">
                              Accept
                            </a>
                            <a href="#" className="btn btn-sm btn-secondary">
                              Refuse
                            </a>
                            <a href="#" className="btn btn-sm btn-primary">
                              Improve
                            </a>
                            <a href="#" className="btn btn-sm btn-danger">
                              Banner
                            </a>
                            <a href="#" className="btn btn-sm btn-warning">
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* End Item */}
                    </tbody>
                  </table>
                </div>
                {/* Card footer */}
                <div className="card-footer py-4">
                  <nav aria-label="...">
                    <ul className="pagination justify-content-end mb-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
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

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Factory;
