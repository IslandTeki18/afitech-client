import React from "react";
import "./MinimalHeroSectionTwo.scss";
import PropTypes from "prop-types";

function MinimalHeroSectionTwo(props) {
  return (
    <section
      className={`dkMinimalHeroSection ${props.className}`}
      id={props.id}
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-white letter-spacing-1 display-4 text-uppercase">
              {props.topHeader}
              <br />
              {props.bottomHeader}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

MinimalHeroSectionTwo.defaultProps = {
  topHeader: "Page Name.",
  bottomHeader: "Motto Goes Here.",
};

MinimalHeroSectionTwo.propTypes = {
  bgImage: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  topHeader: PropTypes.string,
  bottomHeader: PropTypes.string,
};

export default MinimalHeroSectionTwo;
