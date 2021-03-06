import React from "react";
import Sidebar from "../../../components/admin/SideBar/Sidebar";
import Header from "../../../components/admin/Header/Header";
import Footer from "../../../components/admin/Footer/Footer";

function Map() {
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
                  <h6 className="h2 text-white d-inline-block mb-0">
                    Google maps
                  </h6>
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
        {/* Page content */}
        <div className="container-fluid mt--6">
          <div className="row">
            <div className="col">
              <div className="card border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29093.41742636902!2d105.9455768764976!3d20.248885109018733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abeeb946c63d%3A0xe8c960fed1085855!2sTam%20Coc%20Tours!5e0!3m2!1svi!2s!4v1598688508548!5m2!1svi!2s"
                  width="100%"
                  height="600px"
                  frameBorder={0}
                  style={{ borderRadius: "5px" }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
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

export default Map;
