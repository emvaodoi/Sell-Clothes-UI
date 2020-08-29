import React from "react";
import { Link } from "react-router-dom";
import BackSidebar from "../../common/BackSidebar/BackSidebar";

function Sidebar() {
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <BackSidebar />
      <div className="scrollbar-inner">
        {/* Brand */}
        <div className="sidenav-header  align-items-center">
          {/* href="javascript:void(0)" của thẻ navbar-brand */}
          <Link className="navbar-brand" to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/admin/img/brand/blue.png"}
              className="navbar-brand-img"
              alt="..."
            />
          </Link>
        </div>
        <div className="navbar-inner">
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* Nav items */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <i className="ni ni-tv-2 text-primary" />
                  <span className="nav-link-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">
                  <i className="ni ni-square-pin text-primary" />
                  <span className="nav-link-text">Map</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i className="ni ni-single-02 text-yellow" />
                  <span className="nav-link-text">Profile</span>
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-3" />
            {/* Heading */}
            <h6 className="navbar-heading p-0 text-muted">
              <span className="docs-normal">Actions</span>
            </h6>
            {/* Navigation */}
            <ul className="navbar-nav mb-md-3">
              <li className="nav-item">
                <Link className="nav-link" to="/factory">
                  <i className="ni ni-delivery-fast text-blue" />
                  <span className="nav-link-text">Ticket</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/factory">
                  <i className="ni ni-building text-default" />
                  <span className="nav-link-text">Factory</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/factory">
                  <i className="ni ni-archive-2 text-danger" />
                  <span className="nav-link-text">Product</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/factory">
                  <i className="ni ni-basket text-green" />
                  <span className="nav-link-text">Order</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/factory">
                  <i className="ni ni-circle-08 text-pink" />
                  <span className="nav-link-text">User</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/factory">
                  <i className="ni ni-bell-55 text-purple" />
                  <span className="nav-link-text">Notify</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/factory">
                  <i className="ni ni-collection text-blue" />
                  <span className="nav-link-text">Notes</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active active-pro"
                  href="https://www.facebook.com/trunghieuITS/"
                >
                  <i className="ni ni-send text-dark" />
                  <span className="nav-link-text">Contact with DEV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
