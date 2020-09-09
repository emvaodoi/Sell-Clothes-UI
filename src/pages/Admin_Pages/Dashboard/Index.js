import React from "react";
import Chart, { Chart_1 } from "../../../components/common/Chart/Chart";
import Sidebar from "../../../components/admin/SideBar/Sidebar";
import Header from "../../../components/admin/Header/Header";
import Footer from "../../../components/admin/Footer/Footer";
import StatList from "./Stats/StatList/StatList";

function Index() {
  return (
    <div>
      <Sidebar />
      {/* Nav */}
      <div className="main-content" id="panel">
        <Header />
        {/* Header */}
        <div className="header bg-primary pb-6">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-center py-4">
                <div className="col-lg-6 col-7">
                  <h6 className="h2 text-white d-inline-block mb-0">
                    Trang chủ
                  </h6>
                </div>
                <div className="col-lg-6 col-5 text-right">
                  {/* <a href="#" className="btn btn-sm btn-neutral">
                    New
                  </a>
                  <a href="#" className="btn btn-sm btn-neutral">
                    Filters
                  </a> */}
                </div>
              </div>
              {/* Card stats */}
              <StatList />
              {/* End Card Stats */}
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col-xl-7">
              <div className="card bg-white">
                <div className="card-header bg-transparent">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="text-dark text-uppercase ls-1 mb-1">
                        Tổng quan
                      </h6>
                      <h5 className="h3 text-primary mb-0">Doanh thu</h5>
                    </div>
                    <div className="col">
                      <ul className="nav nav-pills justify-content-end">
                        <li
                          className="nav-item mr-2 mr-md-0"
                          data-toggle="chart"
                          data-target="#chart-sales-dark"
                          data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}'
                          data-prefix="$"
                          data-suffix="k"
                        >
                          <a
                            href="#"
                            className="nav-link py-2 px-3 active"
                            data-toggle="tab"
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </a>
                        </li>
                        {/* <li
                          className="nav-item"
                          data-toggle="chart"
                          data-target="#chart-sales-dark"
                          data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}'
                          data-prefix="$"
                          data-suffix="k"
                        >
                          <a
                            href="#"
                            className="nav-link py-2 px-3"
                            data-toggle="tab"
                          >
                            <span className="d-none d-md-block">Year</span>
                            <span className="d-md-none">Y</span>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Chart />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="card">
                <div className="card-header bg-transparent">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h5 className="h3 mb-0">Sản phẩm bán chạy</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Chart_1 />
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

export default Index;
