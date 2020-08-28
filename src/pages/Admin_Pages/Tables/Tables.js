import React from "react";
import Sidebar from "../../../components/admin/SideBar/Sidebar";
import Header from "../../../components/admin/Header/Header";
import Footer from "../../../components/admin/Footer/Footer";

function Tables() {
  return (
    <div>
      <Sidebar />
      <div className="main-content" id="panel">
        <Header />
        {/* Header */}
        <div className="header bg-primary pb-6">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-7">
                  <h6 className="h2 text-white d-inline-block mb-0">Tables</h6>
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
                        <a href="#">Tables</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Tables
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
        {/* Page content */}
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card">
                {/* Card header */}
                <div className="card-header border-0">
                  <h3 className="mb-0">Light table</h3>
                </div>
                {/* Light table */}
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="sort" data-sort="name">
                          Project
                        </th>
                        <th scope="col" className="sort" data-sort="budget">
                          Budget
                        </th>
                        <th scope="col" className="sort" data-sort="status">
                          Status
                        </th>
                        <th scope="col">Users</th>
                        <th scope="col" className="sort" data-sort="completion">
                          Completion
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody className="list">
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/bootstrap.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Argon Design System
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$2500 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning" />
                            <span className="status">pending</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
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
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/angular.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Angular Now UI Kit PRO
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$1800 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/sketch.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Black Dashboard
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$3150 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-danger" />
                            <span className="status">delayed</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">72%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  aria-valuenow={72}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "72%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/react.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                React Material Dashboard
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$4400 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-info" />
                            <span className="status">on schedule</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">90%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  aria-valuenow={90}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/vue.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Vue Paper UI Kit PRO
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$2200 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
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
                          2 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
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
          <div className="row">
            <div className="col">
              <div className="card bg-default shadow">
                <div className="card-header bg-transparent border-0">
                  <h3 className="text-white mb-0">Dark table</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-dark table-flush">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col" className="sort" data-sort="name">
                          Project
                        </th>
                        <th scope="col" className="sort" data-sort="budget">
                          Budget
                        </th>
                        <th scope="col" className="sort" data-sort="status">
                          Status
                        </th>
                        <th scope="col">Users</th>
                        <th scope="col" className="sort" data-sort="completion">
                          Completion
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody className="list">
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/bootstrap.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Argon Design System
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$2500 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning" />
                            <span className="status">pending</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
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
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/angular.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Angular Now UI Kit PRO
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$1800 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/sketch.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Black Dashboard
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$3150 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-danger" />
                            <span className="status">delayed</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">72%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  aria-valuenow={72}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "72%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/react.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                React Material Dashboard
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$4400 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-info" />
                            <span className="status">on schedule</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">90%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  aria-valuenow={90}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/vue.jpg"
                              />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                Vue Paper UI Kit PRO
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">$2200 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-1.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-2.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-3.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/theme/team-4.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              className="btn btn-sm btn-icon-only text-light"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Tables;
