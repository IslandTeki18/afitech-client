import React from "react";
import "./WhoWeAreSection.scss";
import PropTypes from "prop-types";

export const WhoWeAreSection = (props) => {
  return (
    <section id={props.id} className="dkWhoWeAreSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 sectionContentWrapper">
            <h2 className="display-4 text-white">Web Development & Design</h2>
            <p className="text-light">
              We offer beautiful custom coded websites that are carefully
              crafted for growth of your business. From switching from an existing
              website to a full make over to building from complete scratch, AFI
              Tech offers it all to you.
            </p>
            <div className="buttonWrapper">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline-primary">
                Check out services
              </button>
            </div>
          </div>
          <div className="col-lg-6 centerImage mobileSpace">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/500x400"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

WhoWeAreSection.defaultProps = {
    id: "WhoWeAreSection"
}

WhoWeAreSection.propTypes = {
  id: PropTypes.string,
};
