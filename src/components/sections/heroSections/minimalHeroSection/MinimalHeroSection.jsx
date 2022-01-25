import React from "react";
import "./MinimalHeroSection.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MinimalHeroSection(props) {
  return (
    <section
      className={`dkMinimalHeroSection ${props.className}`}
      id={props.id}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h6 className="text-uppercase text-muted letter-spacing-1">
              {props.smallTitle}
            </h6>
            <h1 className="text-uppercase display-4 pb-4 letter-spacing-1">
              {props.largeTitle}
            </h1>
            <div className="d-flex justify-content-center gap-5">
              <Link
                to="/about"
                className="btn btn-outline-primary text-uppercase"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline-primary text-uppercase"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

MinimalHeroSection.defaultProps = {
  smallTitle: "Sample small text",
  largeTitle: "I am Large Text",
};

MinimalHeroSection.propTypes = {
  smallTitle: PropTypes.string,
  largeTitle: PropTypes.string,
  id: PropTypes.string,
  classname: PropTypes.string,
};

export default MinimalHeroSection;
