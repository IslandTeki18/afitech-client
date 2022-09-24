import React from "react";
import { Link } from "react-router-dom";
import { AlertBanner } from "../../../components";
import "./OffcanvasBody.scss";

const OffcanvasBody = (props) => {
  function renderServiceLinks() {
    if (!props.services) return;
    return props.services.map((item) => (
      <li>
        <Link
          className="dropdown-item"
          to={`/service/${item._id}`}
          data-bs-dismiss="offcanvas"
        >
          {item.title}
        </Link>
      </li>
    ));
  }
  return (
    <div
      className="dkOffcanvasBody offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar"
    >
      <div className="offcanvas-header ">
        <h5>Navigation</h5>
        <button className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body bg-dark">
        {props.error && (
          <AlertBanner variant="danger">{props.error}</AlertBanner>
        )}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-link nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/services">
                    All Services
                  </a>
                </li>
                {renderServiceLinks()}
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              Projects
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-link nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Other
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/blogs">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffcanvasBody;
