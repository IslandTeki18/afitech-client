import React from "react";
import "./CheckOurWorkSection.scss";
import PropTypes from "prop-types";

export const CheckOurWorkSection = (props) => {
  return (
    <section id={props.id} className="py-5 bg-dark">
      <div className="container">
        <div className="row align-items-center text-white">
          <div className="col-lg-7 text-center text-lg-left mb-4">
            <h2>Check out our work!</h2>
            <p className="text-small mb-0">
              Our goal is to build fast applications, whether for the web or for
              mobile phones. We strive to build solid, fast, and reliable
              applications that make sense for your budget.
            </p>
          </div>
          <div className="col-lg-5 text-center text-lg-right">
            <button className="btn btn-primary">View Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

CheckOurWorkSection.defaultProps = {
  id: "CheckOurWorkSection",
};

CheckOurWorkSection.propTypes = {
  id: PropTypes.string,
};
