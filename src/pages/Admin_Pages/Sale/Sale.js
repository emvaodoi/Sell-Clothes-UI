import React from "react";
import Sidebar from "../../../components/admin/SideBar/Sidebar";
import Header from "../../../components/admin/Header/Header";
import Footer from "../../../components/admin/Footer/Footer";

function Sale() {
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
                  <h6 className="h2 text-white d-inline-block mb-0">Sale</h6>
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
                  <h3 className="mb-0">User</h3>
                </div>
                <div className="pl-4 pr-4">
                  23
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

export default Sale;
