import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          AFI TECHNOLOGIES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/projects"
              >
                Projects
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/blogs"
              >
                Blog
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
